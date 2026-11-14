import { createHash } from "node:crypto";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const pkg = JSON.parse(readFileSync(join(root, "package.json"), "utf8"));
const bareVersion = "129.0.0";
const releaseVersion = `v${bareVersion}`;
const releaseDate = "2026-10-11";
const expectedDigest = "8d0b5b839d02d9efbd4306cc99410595a183705c2670b76d2567eaaaade99065";
const expectedRegistryVersion = "127.0.0";
const upstreamCommittedBase = "e6479d26ce904e894b2456b178373efb7fdf99c7";
const standalonePredecessor = "3833811ff65fe7e14d682b1039394df96a44024a";
const expectedOfflineVerifierDigest = "4b0731e56fed8804abb194cba98bfc80c8cf23d18063c24ce038923f44b63d14";
const expectedOfflineStudioDigest = "9f61ab692fda283307d5d9b2a6f66a44dffa9b28d9ba9879db46852b23e9e5d7";
const sourceReleaseBookManifest = "4ae6e7442a1ad2c88ad08ab18703d8d65cf61050f0084ebc38aefbfd97ce16ef";
const privateReleaseUrl = "https://github.com/kojibai/receiz/releases/tag/v129.0.0";

const releaseSuffixes = [
  ".md", "-checklist.md", "-commit-history.json", "-commit-history.md",
  "-conformance.md", "-integration.md", "-package-candidates.json",
  "-package-publication-evidence.json", "-process.md", "-product-truth.md",
  "-production-sql.json", "-regression-lessons.md",
];

const requiredFiles = [
  "README.md", "AGENTS.md", "RELEASE_NOTES.md", "CHANGELOG.md", "docs/README.md",
  "docs/FORMAT.md", "docs/governance/README.md", "docs/receiz-reasoning-kernel.md",
  "docs/scale-reasoning-invariants.md", "docs/truthful-speed-invariants.md",
  "docs/literal-product-law.md", "docs/experience-first-engineering.md",
  "docs/deterministic-surfaces.md", "docs/verified-history-first-principles.md",
  "docs/offline-verified-register.md", "docs/pbi-recovery-receiz-id-binding.md",
  "docs/value-loop-invariants.md", "site/index.html", "site/sw.js",
  "apps/offline-verifier.html", "apps/offline-record-seal.html",
  "apps/offline-sports-card-verifier.html", "apps/offline-settlement.html",
  "docs/releases/v127.0.0-constitution-registry.json",
  "docs/releases/v127.0.0-constitution-registry.digest",
  ...releaseSuffixes.flatMap((suffix) => [
    `docs/releases/${releaseVersion}${suffix}`,
    `releases/${releaseVersion}${suffix}`,
  ]),
];

const pointers = [
  ["README.md", `Current release: \`${releaseVersion}\``],
  ["README.md", expectedDigest],
  ["README.md", upstreamCommittedBase],
  ["README.md", expectedOfflineVerifierDigest],
  ["README.md", expectedOfflineStudioDigest],
  ["README.md", sourceReleaseBookManifest],
  ["README.md", privateReleaseUrl],
  ["AGENTS.md", `Release law: \`${releaseVersion}\``],
  ["RELEASE_NOTES.md", `## ${releaseVersion}`],
  ["RELEASE_NOTES.md", upstreamCommittedBase],
  ["RELEASE_NOTES.md", privateReleaseUrl],
  ["CHANGELOG.md", `## [${releaseVersion}] - ${releaseDate}`],
  ["docs/README.md", `Receiz \`${releaseVersion}\``],
  ["docs/README.md", `releases/${releaseVersion}.md`],
  ["docs/FORMAT.md", `for \`${releaseVersion}\``],
  ["docs/governance/README.md", `Receiz \`${releaseVersion}\``],
  ...[
    "literal-product-law.md", "experience-first-engineering.md", "truthful-speed-invariants.md",
    "deterministic-surfaces.md", "verified-history-first-principles.md", "offline-verified-register.md",
    "pbi-recovery-receiz-id-binding.md", "value-loop-invariants.md", "receiz-reasoning-kernel.md",
  ].map((file) => [`docs/${file}`, `carried forward for \`${releaseVersion}\``]),
  ["docs/scale-reasoning-invariants.md", `reasoning for \`${releaseVersion}\``],
  ["site/index.html", releaseVersion],
  ["site/index.html", "127.0.0-jpeg-no-app2-v1"],
  ["site/sw.js", `RECEIZ_RELEASE_VERSION = "${bareVersion}"`],
  ["apps/offline-verifier.html", releaseVersion],
  ["apps/offline-record-seal.html", releaseVersion],
  ["apps/offline-record-seal.html", `${bareVersion}-local-proof-primitives-v5`],
  ["apps/offline-sports-card-verifier.html", releaseVersion],
  ["apps/offline-sports-card-verifier.html", `${bareVersion}-official-release-v1`],
  ["apps/offline-settlement.html", releaseVersion],
  [`docs/releases/${releaseVersion}.md`, "Standalone Repository Boundary"],
  [`docs/releases/${releaseVersion}.md`, upstreamCommittedBase],
  [`docs/releases/${releaseVersion}.md`, sourceReleaseBookManifest],
  [`docs/releases/${releaseVersion}.md`, privateReleaseUrl],
  [`docs/releases/${releaseVersion}-product-truth.md`, "Standalone Projection"],
  [`docs/releases/${releaseVersion}-product-truth.md`, expectedOfflineVerifierDigest],
  [`docs/releases/${releaseVersion}-product-truth.md`, expectedOfflineStudioDigest],
  [`docs/releases/${releaseVersion}-checklist.md`, "Standalone Repository Evidence"],
  [`docs/releases/${releaseVersion}-process.md`, "Standalone Qualification Boundary"],
  [`docs/releases/${releaseVersion}-process.md`, standalonePredecessor],
  [`docs/releases/${releaseVersion}-commit-history.md`, "Standalone Archive Boundary"],
];

const errors = [];
const sha256Buffer = (value) => createHash("sha256").update(value).digest("hex");
const sha256File = (file) => sha256Buffer(readFileSync(join(root, file)));

if (pkg.version !== bareVersion) errors.push(`package.json version is ${pkg.version}, expected ${bareVersion}`);

for (const file of requiredFiles) {
  if (!existsSync(join(root, file))) errors.push(`Missing required release file: ${file}`);
}

for (const [file, expected] of pointers) {
  const fullPath = join(root, file);
  if (existsSync(fullPath) && !readFileSync(fullPath, "utf8").includes(expected)) {
    errors.push(`${file} does not include ${JSON.stringify(expected)}`);
  }
}

for (const suffix of releaseSuffixes) {
  const docsPath = join(root, `docs/releases/${releaseVersion}${suffix}`);
  const archivePath = join(root, `releases/${releaseVersion}${suffix}`);
  if (existsSync(docsPath) && existsSync(archivePath) && !readFileSync(docsPath).equals(readFileSync(archivePath))) {
    errors.push(`Release archive mirror mismatch for ${releaseVersion}${suffix}`);
  }
  if (suffix.endsWith(".json") && existsSync(docsPath)) {
    try {
      JSON.parse(readFileSync(docsPath, "utf8"));
    } catch (error) {
      errors.push(`Invalid JSON release record ${releaseVersion}${suffix}: ${error.message}`);
    }
  }
}

const alignment = JSON.parse(readFileSync(join(root, "source-alignment.json"), "utf8"));
if (alignment.schema !== "receiz.standalone-source-alignment.v2") errors.push("Source alignment schema is not v2");
if (alignment.release !== bareVersion) errors.push("Source alignment release mismatch");
if (alignment.upstreamCommit !== upstreamCommittedBase || alignment.upstreamState !== "clean") errors.push("Source alignment must bind the clean v129 source commit");
if (!Array.isArray(alignment.files) || alignment.files.length !== 4) errors.push("Source alignment must bind four standalone applications");
if (!Array.isArray(alignment.releaseRecords) || alignment.releaseRecords.length !== releaseSuffixes.length) errors.push("Source alignment must bind all twelve v129 release records");

for (const entry of [...(alignment.files ?? []), ...(alignment.releaseRecords ?? [])]) {
  if (!/^[a-f0-9]{64}$/.test(entry.sourceSha256 ?? "")) errors.push(`Invalid source digest for ${entry.source}`);
  if (!/^[a-f0-9]{64}$/.test(entry.sha256 ?? "")) errors.push(`Invalid standalone digest for ${entry.source}`);
  for (const destination of entry.destinations ?? []) {
    if (!existsSync(join(root, destination))) errors.push(`Missing aligned destination ${destination}`);
    else if (sha256File(destination) !== entry.sha256) errors.push(`Aligned destination drift: ${destination}`);
  }
}

const computedSourceManifest = sha256Buffer(
  [...(alignment.releaseRecords ?? [])]
    .map((entry) => `${entry.source}\0${entry.sourceSha256}\n`)
    .sort()
    .join(""),
);
if (computedSourceManifest !== sourceReleaseBookManifest) errors.push("V129 source release-book manifest mismatch");
if (sha256File("apps/offline-verifier.html") !== expectedOfflineVerifierDigest) errors.push("Canonical standalone verifier bytes do not match the v129 source digest");
if (sha256File("apps/offline-record-seal.html") !== expectedOfflineStudioDigest) errors.push("Offline Studio bytes do not match the v129 source digest");

const inheritedRegistry = JSON.parse(readFileSync(join(root, "docs/releases/v127.0.0-constitution-registry.json"), "utf8"));
const inheritedDigest = readFileSync(join(root, "docs/releases/v127.0.0-constitution-registry.digest"), "utf8").trim();
if (inheritedRegistry.version !== expectedRegistryVersion) errors.push("Inherited registry file is not v127");
if (!Array.isArray(inheritedRegistry.laws) || inheritedRegistry.laws.length !== 133) errors.push("Inherited v127 registry must contain 133 laws");
if (inheritedDigest !== expectedDigest) errors.push("Inherited v127 registry digest record mismatch");

const candidates = JSON.parse(readFileSync(join(root, `docs/releases/${releaseVersion}-package-candidates.json`), "utf8"));
const publication = JSON.parse(readFileSync(join(root, `docs/releases/${releaseVersion}-package-publication-evidence.json`), "utf8"));
const expectedPackages = ["@receiz/ai-skills", "@receiz/sdk", "@receiz/mcp-server"];
if (candidates.release !== bareVersion || candidates.published !== false) errors.push("V129 candidate evidence must retain its pre-publication boundary");
if (publication.releaseVersion !== bareVersion) errors.push("V129 publication evidence release mismatch");
for (const name of expectedPackages) {
  const candidate = candidates.packages?.find((entry) => entry.name === name);
  const record = publication.packages?.find((entry) => entry.name === name);
  if (!candidate || candidate.version !== bareVersion) errors.push(`Missing exact v129 candidate evidence for ${name}`);
  if (!record || record.version !== bareVersion || record.distTagLatest !== bareVersion || record.candidateBytesMatch !== true) errors.push(`Missing exact v129 publication evidence for ${name}`);
  if (candidate && record && (candidate.sha256 !== record.sha256 || candidate.integrity !== record.integrity || candidate.bytes !== record.archiveBytes)) errors.push(`Candidate/publication byte mismatch for ${name}`);
}

const productionSql = JSON.parse(readFileSync(join(root, `docs/releases/${releaseVersion}-production-sql.json`), "utf8"));
if (productionSql.release !== bareVersion || productionSql.migrationVersion !== "20261011204630" || productionSql.applied !== true) errors.push("V129 production SQL evidence mismatch");
if (productionSql.moneyMoved !== 0) errors.push("V129 production SQL evidence must retain zero money moved");

const history = JSON.parse(readFileSync(join(root, `docs/releases/${releaseVersion}-commit-history.json`), "utf8"));
if (history.release !== bareVersion || history.baselineTag !== "v128.0.0" || history.baselineCommit !== "3090835f1e5a7de57b3b7c526d90b03512c2da70") errors.push("V129 commit-history boundary mismatch");

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(`Release surfaces aligned to ${releaseVersion}; 12 source-bound records and inherited v127 constitutional registry with 133 laws.`);
