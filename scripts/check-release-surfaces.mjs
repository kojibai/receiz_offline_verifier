import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const pkg = JSON.parse(readFileSync(join(root, "package.json"), "utf8"));
const bareVersion = pkg.version;
const releaseVersion = `v${bareVersion}`;
const releaseDate = "2026-08-22";
const expectedDigest = "d02429151b0bcebdaeb89485792e377afc55130f9a25e07982c1c88221314247";
const expectedPredecessor = "945a581d1fc49c2dc18fbe8c129771ef464b8a58b96188bce561e88ae8b6ceeb";
const expectedMatrix = "540d1c1bf39f1b288b257c79a6e020bdcc5e587fc9b7dbf6b7aaa5d082e20ad5";
const expectedCompatibility = ">=124.0.0 <125.0.0";
const upstreamReleaseCommit = "906376897c968afa0de88e4cdfca8ea4c11d58c9";
const upstreamCandidateBoundary = "81e27eaa502085e8fb557ba557932e7111f94cac";
const standalonePredecessor = "3fca25243b36564ba9282b3e5bfe6b1a216a0870";

const releaseSuffixes = [
  ".md",
  "-product-truth.md",
  "-checklist.md",
  "-process.md",
  "-regression-lessons.md",
  "-commit-history.md",
  "-compatibility-matrix.md",
  "-conformance.md",
  "-migration.md",
  "-deployment.md",
  "-evidence-status.md",
  "-governance.md",
  "-integration.md",
  "-runbook.md",
  "-security.md",
  "-constitution-registry.json",
  "-constitution-registry.digest"
];

const requiredFiles = [
  "README.md",
  "AGENTS.md",
  "RELEASE_NOTES.md",
  "CHANGELOG.md",
  "docs/README.md",
  "docs/FORMAT.md",
  "docs/governance/README.md",
  "docs/receiz-reasoning-kernel.md",
  "docs/scale-reasoning-invariants.md",
  "docs/truthful-speed-invariants.md",
  "site/index.html",
  "apps/offline-verifier.html",
  "apps/offline-record-seal.html",
  "apps/offline-sports-card-verifier.html",
  "apps/offline-settlement.html",
  "site/sw.js",
  ...releaseSuffixes.flatMap((suffix) => [
    `docs/releases/${releaseVersion}${suffix}`,
    `releases/${releaseVersion}${suffix}`
  ])
];

const currentReleasePointers = [
  ["README.md", `Current release: \`${releaseVersion}\``],
  ["README.md", `docs/releases/${releaseVersion}.md`],
  ["README.md", expectedDigest],
  ["README.md", expectedPredecessor],
  ["README.md", expectedMatrix],
  ["README.md", expectedCompatibility],
  ["README.md", upstreamReleaseCommit],
  ["AGENTS.md", `Release law: \`${releaseVersion}\``],
  ["RELEASE_NOTES.md", `## ${releaseVersion}`],
  ["RELEASE_NOTES.md", upstreamReleaseCommit],
  ["RELEASE_NOTES.md", "The sealed proof object remains portable storage and continuity authority"],
  ["CHANGELOG.md", `## [${releaseVersion}] - ${releaseDate}`],
  ["docs/README.md", `Receiz \`${releaseVersion}\``],
  ["docs/README.md", `releases/${releaseVersion}.md`],
  ["docs/FORMAT.md", `for \`${releaseVersion}\``],
  ["docs/governance/README.md", `Receiz \`${releaseVersion}\``],
  ["docs/literal-product-law.md", `carried forward for \`${releaseVersion}\``],
  ["docs/experience-first-engineering.md", `carried forward for \`${releaseVersion}\``],
  ["docs/truthful-speed-invariants.md", `carried forward for \`${releaseVersion}\``],
  ["docs/deterministic-surfaces.md", `carried forward for \`${releaseVersion}\``],
  ["docs/scale-reasoning-invariants.md", `reasoning for \`${releaseVersion}\``],
  ["docs/verified-history-first-principles.md", `carried forward for \`${releaseVersion}\``],
  ["docs/offline-verified-register.md", `carried forward for \`${releaseVersion}\``],
  ["docs/pbi-recovery-receiz-id-binding.md", `carried forward for \`${releaseVersion}\``],
  ["docs/value-loop-invariants.md", `carried forward for \`${releaseVersion}\``],
  ["site/index.html", releaseVersion],
  ["site/index.html", `/sw.js?v=${bareVersion}`],
  ["apps/offline-verifier.html", releaseVersion],
  ["apps/offline-record-seal.html", releaseVersion],
  ["apps/offline-record-seal.html", `${bareVersion}-local-proof-primitives-v1`],
  ["apps/offline-record-seal.html", "ensureLocalProofPrimitives"],
  ["apps/offline-record-seal.html", "void preflight().catch(() => {})"],
  ["apps/offline-sports-card-verifier.html", releaseVersion],
  ["apps/offline-sports-card-verifier.html", `${bareVersion}-official-release-v1`],
  ["apps/offline-settlement.html", releaseVersion],
  ["apps/offline-settlement.html", "already-settled Note evidence"],
  ["apps/offline-settlement.html", "Optional later ledger publication coordinates discovery only"],
  ["site/sw.js", `RECEIZ_RELEASE_VERSION = "${bareVersion}"`],
  [`docs/releases/${releaseVersion}.md`, "Reality Becomes Infrastructure"],
  [`docs/releases/${releaseVersion}.md`, "Standalone repository boundary"],
  [`docs/releases/${releaseVersion}-product-truth.md`, "The sealed proof object is storage and continuity authority"],
  [`docs/releases/${releaseVersion}-product-truth.md`, "Exact authenticated heads authorize accepted progression"],
  [`docs/releases/${releaseVersion}-checklist.md`, "Standalone repository evidence"],
  [`docs/releases/${releaseVersion}-process.md`, upstreamReleaseCommit],
  [`docs/releases/${releaseVersion}-process.md`, standalonePredecessor],
  [`docs/releases/${releaseVersion}-process.md`, "Standalone qualification boundary"],
  [`docs/releases/${releaseVersion}-regression-lessons.md`, "Reality Becomes Infrastructure"],
  [`docs/releases/${releaseVersion}-commit-history.md`, upstreamReleaseCommit],
  [`docs/releases/${releaseVersion}-commit-history.md`, upstreamCandidateBoundary],
  [`docs/releases/${releaseVersion}-commit-history.md`, "Standalone archive boundary"],
  [`docs/releases/${releaseVersion}-compatibility-matrix.md`, expectedCompatibility],
  [`docs/releases/${releaseVersion}-compatibility-matrix.md`, expectedMatrix],
  [`docs/releases/${releaseVersion}-compatibility-matrix.md`, "53-operation matrix"],
  [`docs/releases/${releaseVersion}-conformance.md`, "exact authenticated heads bind progression"],
  [`docs/releases/${releaseVersion}-migration.md`, "Reality Becomes Infrastructure"],
  [`docs/releases/${releaseVersion}-deployment.md`, "Presence is not operational evidence"],
  [`docs/releases/${releaseVersion}-evidence-status.md`, "Standalone archive evidence"],
  [`docs/releases/${releaseVersion}-governance.md`, "Reality Becomes Infrastructure"],
  [`docs/releases/${releaseVersion}-integration.md`, "Reality Becomes Infrastructure"],
  [`docs/releases/${releaseVersion}-runbook.md`, "Reality Becomes Infrastructure"],
  [`docs/releases/${releaseVersion}-security.md`, "exact authenticated head"]
];

const errors = [];

if (bareVersion !== "124.0.0") {
  errors.push(`package.json version is ${bareVersion}, expected 124.0.0`);
}

for (const file of requiredFiles) {
  if (!existsSync(join(root, file))) errors.push(`Missing required release file: ${file}`);
}

for (const [file, expected] of currentReleasePointers) {
  const fullPath = join(root, file);
  if (!existsSync(fullPath)) continue;
  const body = readFileSync(fullPath, "utf8");
  if (!body.includes(expected)) errors.push(`${file} does not include ${JSON.stringify(expected)}`);
}

for (const suffix of releaseSuffixes) {
  const docsPath = join(root, `docs/releases/${releaseVersion}${suffix}`);
  const archivePath = join(root, `releases/${releaseVersion}${suffix}`);
  if (!existsSync(docsPath) || !existsSync(archivePath)) continue;
  if (!readFileSync(docsPath).equals(readFileSync(archivePath))) {
    errors.push(`Release archive mirror mismatch for ${releaseVersion}${suffix}`);
  }
}

const registryPath = join(root, `docs/releases/${releaseVersion}-constitution-registry.json`);
const digestPath = join(root, `docs/releases/${releaseVersion}-constitution-registry.digest`);
if (existsSync(registryPath) && existsSync(digestPath)) {
  const registry = JSON.parse(readFileSync(registryPath, "utf8"));
  const digest = readFileSync(digestPath, "utf8").trim();
  if (registry.version !== bareVersion) errors.push("Registry version mismatch");
  if (registry.previousRegistryDigest !== expectedPredecessor) errors.push("Registry predecessor mismatch");
  if (!Array.isArray(registry.laws) || registry.laws.length !== 124) errors.push("Registry must contain 124 laws");
  if (digest !== expectedDigest) errors.push("Registry digest record mismatch");
}

if (errors.length > 0) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(`Release surfaces aligned to ${releaseVersion}.`);
