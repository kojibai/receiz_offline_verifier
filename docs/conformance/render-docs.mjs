import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const RECEIZ_BASE_URL = "https://receiz.com";
const POWERED_BY_URL = `${RECEIZ_BASE_URL}/powered-by`;
const POWERED_BY_BADGE_URL = `${RECEIZ_BASE_URL}/powered-by-receiz.svg`;
const SNAPSHOTS_DIR = path.join(__dirname, "snapshots");
const OUTPUT_README = path.join(__dirname, "README.md");
const OUTPUT_INDEX = path.join(__dirname, "index.json");

const SUITES = [
  {
    slug: "identity",
    shortName: "Identity",
    name: "Identity Conformance Suite",
    description:
      "Runtime and source controls for OIDC authorization, token exchange, introspection, revocation, and Connect scope-enforcement contracts.",
    suitePath: "/identity/conformance",
    apiPath: "/api/identity/conformance",
    familyOrder: ["I", "C", "O"],
    familyLabels: {
      I: "OIDC authorization, token, userinfo, introspection, revocation, and JWKS contracts.",
      C: "Connect endpoint auth gates, scope gates, CORS, payload limits, and proxy binding.",
      O: "Operational integrity and cross-surface runtime coverage."
    }
  },
  {
    slug: "issuance",
    shortName: "Issuance",
    name: "Issuance Conformance Suite",
    description:
      "Runtime and source controls for WireProof issuance, AssetSeal custody issuance, and signer enrollment/signing contract integrity.",
    suitePath: "/issuance/conformance",
    apiPath: "/api/issuance/conformance",
    familyOrder: ["W", "A", "S", "O"],
    familyLabels: {
      W: "WireProof issuance, webhook auth, key lifecycle, rate limiting, and mint contracts.",
      A: "AssetSeal minting, custody chain continuity, visibility, and append semantics.",
      S: "Signer v1/v4 sign and enroll trust contracts.",
      O: "Operational controls that span issuance surfaces."
    }
  },
  {
    slug: "verification",
    shortName: "Verification",
    name: "Verification Conformance Suite",
    description:
      "Runtime and source controls for verification contracts, trusted signature policy, artifact validation, and deterministic verdict behavior.",
    suitePath: "/verify/conformance",
    apiPath: "/api/verification/conformance",
    familyOrder: ["V", "D", "T", "G", "O"],
    familyLabels: {
      V: "Verify route payload validation, deterministic code generation, and legacy compatibility.",
      D: "Document verify upload gates, file limits, and trusted root-key resolution.",
      T: "Trusted signature v4 policy, key pinning, payload-hash, and certificate-window checks.",
      G: "Artifact trust gates for real Groth16 proofs and anchor coherence.",
      O: "Operational controls shared across verify surfaces."
    }
  },
  {
    slug: "settlement",
    shortName: "Settlement",
    name: "Settlement Conformance Suite",
    description:
      "Runtime and source controls for deterministic settlement behavior, replay fields, conversion rules, and ledger continuity contracts.",
    suitePath: "/economy/conformance",
    apiPath: "/api/economy/conformance",
    familyOrder: ["R", "V", "S", "T", "L"],
    familyLabels: {
      R: "Wallet summary and settlement record semantics.",
      V: "Pulse-derived valuation and reference-rate determinism.",
      S: "Settlement integrity, note minting, and claim gating.",
      T: "Transfer posting, amount validation, nonce, and replay continuity.",
      L: "Ledger continuity across private and public ledger surfaces."
    }
  },
  {
    slug: "interoperability",
    shortName: "Interoperability",
    name: "Interoperability Conformance Suite",
    description:
      "Runtime and source controls for external interface contracts across payment embeds, note-claim embeds, scheduler embed flows, and booking policy gates.",
    suitePath: "/interoperability/conformance",
    apiPath: "/api/interoperability/conformance",
    familyOrder: ["X", "O"],
    familyLabels: {
      X: "External embed checkout, note-claim, scheduler, booking, and settings contracts.",
      O: "Operational linkage between builder surfaces and live API contracts."
    }
  },
  {
    slug: "world",
    shortName: "World",
    name: "World Conformance Suite",
    description:
      "Runtime and source controls for Receiz World and Public Twin contracts across public routes, disclosure/provenance, promotion gates, and canonical pipeline guarantees.",
    suitePath: "/world/conformance",
    apiPath: "/api/world/conformance",
    familyOrder: ["W"],
    familyLabels: {
      W: "World public-surface, public twin runtime, provenance, policy, promotion, and publisher-session guardrails."
    }
  }
];

async function main() {
  const snapshotDateUtc = await getLatestSnapshotDate();
  const suites = await Promise.all(
    SUITES.map(async (meta) => {
      const snapshotPath = path.join(
        SNAPSHOTS_DIR,
        snapshotDateUtc,
        `${meta.slug}.conformance.json`
      );
      const report = JSON.parse(await fs.readFile(snapshotPath, "utf8"));
      return buildSuiteRecord(meta, report, snapshotDateUtc);
    })
  );

  const generatedRange = getGeneratedRange(suites);
  const index = {
    sourcePage: `${RECEIZ_BASE_URL}/conformance`,
    snapshotDateUtc,
    generatedRangeUtc: generatedRange,
    suiteCount: suites.length,
    requirementCount: sum(suites.map((suite) => suite.summary.requirementCount)),
    checkCount: sum(suites.map((suite) => suite.summary.checkCount)),
    allPassing: suites.every((suite) => suite.overallStatus === "pass"),
    suites
  };

  await fs.writeFile(OUTPUT_INDEX, `${JSON.stringify(index, null, 2)}\n`);
  await fs.writeFile(OUTPUT_README, renderLandingPage(index));

  await Promise.all(
    suites.map((suite) =>
      fs.writeFile(path.join(__dirname, suite.docPath), renderSuitePage(index, suite))
    )
  );
}

async function getLatestSnapshotDate() {
  const entries = await fs.readdir(SNAPSHOTS_DIR, { withFileTypes: true });
  const dates = entries
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();

  if (dates.length === 0) {
    throw new Error("No conformance snapshot directories found.");
  }

  return dates.at(-1);
}

function buildSuiteRecord(meta, report, snapshotDateUtc) {
  const reportUrl = absoluteUrl(meta.apiPath);
  const suiteUrl = absoluteUrl(meta.suitePath);
  const historyUrl = absoluteUrl(report.history.historyPath);
  const rollupsUrl = absoluteUrl(`${report.history.historyPath}/rollups`);
  const badgeUrl = absoluteUrl(report.history.badgePath);
  const familySummary = buildFamilySummary(meta, report);
  const checkCategoryCounts = countBy(report.checks, (check) => check.category);

  return {
    slug: meta.slug,
    shortName: meta.shortName,
    name: meta.name,
    description: meta.description,
    suiteUrl,
    reportUrl,
    historyUrl,
    rollupsUrl,
    badgeUrl,
    docPath: `${meta.slug}.md`,
    snapshotPath: path.posix.join(
      "snapshots",
      snapshotDateUtc,
      `${meta.slug}.conformance.json`
    ),
    familyOrder: meta.familyOrder,
    familyLabels: meta.familyLabels,
    familySummary,
    checkCategoryCounts,
    standardId: report.standardId,
    schema: report.schema,
    verificationVersion: report.verificationVersion,
    generatedAt: report.generatedAt,
    overallStatus: report.overallStatus,
    summary: report.summary,
    revision: report.revision,
    requirements: report.requirements,
    checks: report.checks,
    history: {
      schema: report.history.schema,
      snapshotId: report.history.snapshotId,
      recordedAt: report.history.recordedAt,
      historyLength: report.history.historyLength,
      historyPath: report.history.historyPath,
      badgePath: report.history.badgePath,
      attestation: {
        state: report.history.attestation.state,
        schema: report.history.attestation.schema,
        issuerKid: report.history.attestation.issuerKid,
        certId: report.history.attestation.certId
      }
    }
  };
}

function buildFamilySummary(meta, report) {
  return meta.familyOrder.map((familyCode) => {
    const requirements = report.requirements.filter(
      (requirement) => requirement.id.split("-")[0] === familyCode
    );
    const mappedChecks = new Set(requirements.flatMap((requirement) => requirement.checkIds));
    return {
      code: familyCode,
      label: meta.familyLabels[familyCode],
      requirementCount: requirements.length,
      mappedCheckCount: mappedChecks.size
    };
  });
}

function renderLandingPage(index) {
  const suiteCardRows = [
    index.suites.slice(0, 3),
    index.suites.slice(3, 6)
  ]
    .map(
      (row) => `<tr>
${row
  .map(
    (suite) => `  <td align="center" valign="top">
    <a href="${suite.docPath}"><img alt="${suite.name} badge" src="${suite.badgeUrl}" height="32" /></a><br/>
    <strong><a href="${suite.docPath}">${suite.shortName}</a></strong><br/>
    <sub><a href="${suite.suiteUrl}">live suite</a> | <a href="${suite.reportUrl}">json</a></sub>
  </td>`
  )
  .join("\n")}
</tr>`
    )
    .join("\n");

  const trustRowOrder = ["verification", "settlement", "identity", "issuance", "interoperability", "world"]
    .map((slug) => index.suites.find((suite) => suite.slug === slug))
    .filter(Boolean);

  const trustRow = `<table>
  <tr>
    <td align="center" valign="middle">
      <a href="${POWERED_BY_URL}"><img alt="Powered by Receiz" src="${POWERED_BY_BADGE_URL}" height="32" /></a>
    </td>
${trustRowOrder
  .map(
    (suite) => `    <td align="center" valign="middle">
      <a href="${suite.suiteUrl}"><img alt="${suite.name} badge" src="${suite.badgeUrl}" height="30" /></a>
    </td>`
  )
  .join("\n")}
  </tr>
</table>`;

  const suiteRows = index.suites
    .map((suite) => {
      const sourceCount = suite.checkCategoryCounts.source ?? 0;
      const runtimeCount = suite.checkCategoryCounts.runtime ?? 0;
      return `| ${suite.shortName} | <a href="${suite.suiteUrl}"><img alt="${suite.name} badge" src="${suite.badgeUrl}" height="28" /></a> | \`${suite.overallStatus}\` | \`${suite.summary.requirementCount}\` | \`${suite.summary.checkCount}\` | \`${sourceCount}\` / \`${runtimeCount}\` | \`${suite.generatedAt}\` | [${path.basename(
        suite.docPath
      )}](${suite.docPath}) | [snapshot](${suite.snapshotPath}) |`;
    })
    .join("\n");

  const focusRows = index.suites
    .map(
      (suite) =>
        `| ${suite.shortName} | ${suite.description} | [deep doc](${suite.docPath}) | [raw snapshot](${suite.snapshotPath}) |`
    )
    .join("\n");

  return `<!-- Generated by docs/conformance/render-docs.mjs -->
# Receiz Conformance Center

This repo-local hub vendors the six live suites from [receiz.com/conformance](${index.sourcePage}) into durable docs that are easy to reference in code review, audits, and product docs.

The badges below stay live. The tables and suite breakdowns on this page are pinned to the imported snapshot set \`${index.snapshotDateUtc}\`, generated between \`${index.generatedRangeUtc.start}\` and \`${index.generatedRangeUtc.end}\`.

## Official Trust Row

${trustRow}

This ordering follows the official [Powered by Receiz](${POWERED_BY_URL}) guidance: brand provenance first, then verification, settlement, identity, issuance, interoperability, and world conformance.

## Suite Navigation

<table>
${suiteCardRows}
</table>

## Live Snapshot Summary

| Scope | Value |
| --- | --- |
| Source page | [receiz.com/conformance](${index.sourcePage}) |
| Snapshot date (UTC) | \`${index.snapshotDateUtc}\` |
| Imported range (UTC) | \`${index.generatedRangeUtc.start}\` to \`${index.generatedRangeUtc.end}\` |
| Suite count | \`${index.suiteCount}\` |
| Requirement count | \`${index.requirementCount}\` |
| Check count | \`${index.checkCount}\` |
| Global result | \`${index.allPassing ? "pass" : "mixed"}\` |

## Suite Results

| Suite | Live badge | Result | Requirements | Checks | Source / Runtime | Generated (UTC) | Local docs | Raw snapshot |
| --- | --- | --- | ---: | ---: | --- | --- | --- | --- |
${suiteRows}

## What Is Tested

| Suite | Coverage | Deep docs | Snapshot |
| --- | --- | --- | --- |
${focusRows}

## Included Files

- [index.json](index.json): machine-readable summary for all six suites, their live endpoints, and the imported snapshot metadata.
- [identity.md](identity.md): full Identity suite coverage, family breakdown, requirement-to-check map, and check inventory.
- [issuance.md](issuance.md): full Issuance suite coverage, family breakdown, requirement-to-check map, and check inventory.
- [verification.md](verification.md): full Verification suite coverage, family breakdown, requirement-to-check map, and check inventory.
- [settlement.md](settlement.md): full Settlement suite coverage, family breakdown, requirement-to-check map, and check inventory.
- [interoperability.md](interoperability.md): full Interoperability suite coverage, family breakdown, requirement-to-check map, and check inventory.
- [world.md](world.md): full World suite coverage, family breakdown, requirement-to-check map, and check inventory.
- [snapshots/${index.snapshotDateUtc}](snapshots/${index.snapshotDateUtc}): exact pretty-printed JSON imported from the live conformance endpoints.

## Notes

- The badge image for each suite is live and served directly from Receiz.
- The written metrics in this repo reflect the imported JSON snapshot above, not a continuously streaming view.
- Each suite page below maps requirements to the underlying checks so a reader can see both what is enforced and how it is evidenced.
`;
}

function renderSuitePage(index, suite) {
  const checkMap = new Map(suite.checks.map((check) => [check.id, check]));
  const familySections = suite.familyOrder
    .map((familyCode) => renderFamilySection(suite, familyCode, checkMap))
    .filter(Boolean)
    .join("\n\n");

  const inventorySections = ["source", "runtime"]
    .filter((category) => (suite.checkCategoryCounts[category] ?? 0) > 0)
    .map((category) => renderCheckInventorySection(suite, category))
    .join("\n\n");

  return `<!-- Generated by docs/conformance/render-docs.mjs -->
# ${suite.name}

${suite.description}

<table>
  <tr>
    <td align="center" valign="top">
      <a href="${POWERED_BY_URL}"><img alt="Powered by Receiz" src="${POWERED_BY_BADGE_URL}" height="32" /></a><br/>
      <a href="${suite.suiteUrl}"><img alt="${suite.name} badge" src="${suite.badgeUrl}" height="30" /></a>
    </td>
    <td valign="top">
      <strong>Live suite</strong>: <a href="${suite.suiteUrl}">${suite.suiteUrl}</a><br/>
      <strong>Raw JSON</strong>: <a href="${suite.reportUrl}">${suite.reportUrl}</a><br/>
      <strong>History</strong>: <a href="${suite.historyUrl}">${suite.historyUrl}</a><br/>
      <strong>Rollups</strong>: <a href="${suite.rollupsUrl}">${suite.rollupsUrl}</a><br/>
      <strong>Local snapshot</strong>: <a href="${suite.snapshotPath}">${suite.snapshotPath}</a>
    </td>
  </tr>
</table>

The header row follows the official [Powered by Receiz](${POWERED_BY_URL}) badge contract: provenance first, then live conformance. The suite badge above always reflects the current Receiz surface, while the tables and coverage notes below are pinned to the imported snapshot set \`${index.snapshotDateUtc}\`.

## Snapshot Status

| Field | Value |
| --- | --- |
| Standard ID | \`${suite.standardId}\` |
| Schema | \`${suite.schema}\` |
| Runtime version | \`${suite.verificationVersion}\` |
| Overall status | \`${suite.overallStatus}\` |
| Generated at (UTC) | \`${suite.generatedAt}\` |
| History recorded at (UTC) | \`${suite.history.recordedAt}\` |
| Requirement count | \`${suite.summary.requirementCount}\` |
| Check count | \`${suite.summary.checkCount}\` |
| Source checks | \`${suite.checkCategoryCounts.source ?? 0}\` |
| Runtime checks | \`${suite.checkCategoryCounts.runtime ?? 0}\` |
| Source digest count | \`${suite.revision.sourceDigestCount}\` |
| Revision hash | \`${suite.revision.hash}\` |
| Snapshot ID | \`${suite.history.snapshotId}\` |
| History length | \`${suite.history.historyLength}\` |
| Attestation state | \`${suite.history.attestation.state}\` |
| Attestation schema | \`${suite.history.attestation.schema}\` |
| Issuer key ID | \`${suite.history.attestation.issuerKid}\` |
| Certificate ID | \`${suite.history.attestation.certId}\` |

## Requirement Family Coverage

| Family | Focus | Requirements | Unique mapped checks |
| --- | --- | ---: | ---: |
${suite.familySummary
  .map(
    (family) =>
      `| \`${family.code}-*\` | ${family.label} | \`${family.requirementCount}\` | \`${family.mappedCheckCount}\` |`
  )
  .join("\n")}

## Full Requirement Coverage

${familySections}

## Check Inventory

${inventorySections}

## Evidence Anchors

- [${path.basename(suite.snapshotPath)}](${suite.snapshotPath}) contains the full imported report payload.
- \`requirements[]\` maps standards-level requirement IDs to check IDs.
- \`checks[]\` contains the source and runtime assertions and their human-readable descriptions.
- \`revision\` identifies the current conformance revision and the number of hashed source files in scope.
- \`evidence.sourceDigests[]\` in the snapshot lists the referenced live source file digests.
- \`history\` contains the signed snapshot metadata, badge route, and history route for this suite.
`;
}

function renderFamilySection(suite, familyCode, checkMap) {
  const requirements = suite.requirements.filter(
    (requirement) => requirement.id.split("-")[0] === familyCode
  );

  if (requirements.length === 0) {
    return "";
  }

  const requirementBlocks = requirements
    .map((requirement) => {
      const rows = requirement.checkIds
        .map((checkId) => {
          const check = checkMap.get(checkId);
          if (!check) {
            return `| \`${checkId}\` | \`missing\` | \`unknown\` | Check definition missing from imported snapshot. |`;
          }
          return `| \`${check.id}\` | \`${check.category}\` | \`${check.status}\` | ${escapePipes(
            check.description
          )} |`;
        })
        .join("\n");

      return `<details>
<summary><code>${requirement.id}</code> <strong>${requirement.status}</strong> | ${requirement.checkIds.length} mapped checks</summary>

| Check ID | Category | Status | Description |
| --- | --- | --- | --- |
${rows}

</details>`;
    })
    .join("\n\n");

  return `### \`${familyCode}-*\`

${suite.familyLabels[familyCode]}

${requirementBlocks}`;
}

function renderCheckInventorySection(suite, category) {
  const checks = suite.checks
    .filter((check) => check.category === category)
    .sort((a, b) => a.id.localeCompare(b.id));

  const rows = checks
    .map(
      (check) =>
        `| \`${check.id}\` | \`${check.status}\` | ${escapePipes(check.description)} |`
    )
    .join("\n");

  return `<details>
<summary>${capitalize(category)} checks (${checks.length})</summary>

| Check ID | Status | Description |
| --- | --- | --- |
${rows}

</details>`;
}

function getGeneratedRange(suites) {
  const sorted = suites.map((suite) => suite.generatedAt).sort();
  return { start: sorted[0], end: sorted.at(-1) };
}

function absoluteUrl(route) {
  return route.startsWith("http") ? route : `${RECEIZ_BASE_URL}${route}`;
}

function countBy(items, selectKey) {
  const counts = {};
  for (const item of items) {
    const key = selectKey(item);
    counts[key] = (counts[key] ?? 0) + 1;
  }
  return counts;
}

function sum(values) {
  return values.reduce((total, value) => total + value, 0);
}

function capitalize(value) {
  return `${value[0].toUpperCase()}${value.slice(1)}`;
}

function escapePipes(value) {
  return value.replaceAll("|", "\\|");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
