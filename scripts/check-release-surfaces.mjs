import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const pkg = JSON.parse(readFileSync(join(root, "package.json"), "utf8"));
const bareVersion = pkg.version;
const releaseVersion = `v${bareVersion}`;
const releaseDate = "2026-08-13";
const expectedDigest = "49c167a437ec7c0e486412dd62c54af4abdf94eda1ebc18d263a027d105cecd9";
const expectedPredecessor = "c284bd39a891c1a828b532523bd548507570819c32e307d79b8043f06d2d3360";
const expectedMatrix = "53cf9d6862b2396e2fe7864f8607c00c4e3b6e31b082ab5c5c8dff088fcb52c1";
const expectedCompatibility = ">=119.0.0 <120.0.0";
const upstreamCandidate = "dbf016285c048476c03e629c0430a9b175162683";
const standalonePredecessor = "f34aab02da8487da9f02303eac77ba0d6a71d8f8";

const releaseSuffixes = [
  ".md",
  "-product-truth.md",
  "-checklist.md",
  "-process.md",
  "-regression-lessons.md",
  "-commit-history.md",
  "-compatibility-matrix.md",
  "-planning.md",
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
  ["README.md", upstreamCandidate],
  ["AGENTS.md", `Release law: \`${releaseVersion}\``],
  ["RELEASE_NOTES.md", `## ${releaseVersion}`],
  ["RELEASE_NOTES.md", upstreamCandidate],
  ["RELEASE_NOTES.md", "receiver activation completes local Settlement"],
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
  ["apps/offline-record-seal.html", `${bareVersion}-baseline-v1`],
  ["apps/offline-sports-card-verifier.html", releaseVersion],
  ["apps/offline-sports-card-verifier.html", `${bareVersion}-official-release-v1`],
  ["apps/offline-settlement.html", releaseVersion],
  ["apps/offline-settlement.html", "already-settled Note evidence"],
  ["apps/offline-settlement.html", "Optional later ledger publication coordinates discovery only"],
  ["site/sw.js", `RECEIZ_RELEASE_VERSION = "${bareVersion}"`],
  [`docs/releases/${releaseVersion}.md`, "Irreversible Offline Custody"],
  [`docs/releases/${releaseVersion}.md`, "Standalone repository boundary"],
  [`docs/releases/${releaseVersion}-product-truth.md`, expectedPredecessor],
  [`docs/releases/${releaseVersion}-product-truth.md`, "equal whole-value qualified held-bound Note genesis"],
  [`docs/releases/${releaseVersion}-checklist.md`, "Standalone repository evidence"],
  [`docs/releases/${releaseVersion}-process.md`, upstreamCandidate],
  [`docs/releases/${releaseVersion}-process.md`, standalonePredecessor],
  [`docs/releases/${releaseVersion}-process.md`, "Standalone qualification boundary"],
  [`docs/releases/${releaseVersion}-regression-lessons.md`, "Settlement"],
  [`docs/releases/${releaseVersion}-commit-history.md`, upstreamCandidate],
  [`docs/releases/${releaseVersion}-commit-history.md`, "Standalone archive baseline"],
  [`docs/releases/${releaseVersion}-compatibility-matrix.md`, expectedCompatibility],
  [`docs/releases/${releaseVersion}-compatibility-matrix.md`, expectedMatrix],
  [`docs/releases/${releaseVersion}-planning.md`, "### Task 15:"],
  [`docs/releases/${releaseVersion}-planning.md`, "first admission only, then append forever"]
];

const errors = [];

if (bareVersion !== "119.0.0") {
  errors.push(`package.json version is ${bareVersion}, expected 119.0.0`);
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
  if (!Array.isArray(registry.laws) || registry.laws.length !== 85) errors.push("Registry must contain 85 laws");
  if (digest !== expectedDigest) errors.push("Registry digest record mismatch");
}

if (errors.length > 0) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(`Release surfaces aligned to ${releaseVersion}.`);
