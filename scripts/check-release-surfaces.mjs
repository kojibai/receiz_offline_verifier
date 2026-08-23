import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const pkg = JSON.parse(readFileSync(join(root, "package.json"), "utf8"));
const bareVersion = pkg.version;
const releaseVersion = `v${bareVersion}`;
const releaseDate = "2026-08-23";
const rulesetVersion = "124.0.0";
const frozenRegistryVersion = "v124.0.0";
const expectedDigest = "d02429151b0bcebdaeb89485792e377afc55130f9a25e07982c1c88221314247";
const expectedPredecessor = "945a581d1fc49c2dc18fbe8c129771ef464b8a58b96188bce561e88ae8b6ceeb";
const expectedMatrix = "540d1c1bf39f1b288b257c79a6e020bdcc5e587fc9b7dbf6b7aaa5d082e20ad5";
const expectedCompatibility = ">=124.0.0 <125.0.0";
const upstreamCandidate = "b4efb56c72780bd9b5013ef466fdea998701b96b";
const upstreamPushedBoundary = "b4efb56c72780bd9b5013ef466fdea998701b96b";
const standalonePredecessor = "35d3a440e2252dd8146e0b7f443824b19c0cf852";

const releaseSuffixes = [".md", "-product-truth.md", "-checklist.md", "-process.md", "-regression-lessons.md", "-commit-history.md", "-migration.md"];

const requiredFiles = [
  "README.md", "AGENTS.md", "RELEASE_NOTES.md", "CHANGELOG.md", "docs/README.md",
  "docs/FORMAT.md", "docs/governance/README.md", "docs/receiz-reasoning-kernel.md",
  "docs/scale-reasoning-invariants.md", "docs/truthful-speed-invariants.md", "site/index.html",
  "apps/offline-verifier.html", "apps/offline-record-seal.html", "apps/offline-sports-card-verifier.html",
  "apps/offline-settlement.html", "site/sw.js",
  `docs/releases/${frozenRegistryVersion}-constitution-registry.json`,
  `docs/releases/${frozenRegistryVersion}-constitution-registry.digest`,
  `docs/releases/${frozenRegistryVersion}-compatibility-matrix.md`,
  ...releaseSuffixes.flatMap((suffix) => [`docs/releases/${releaseVersion}${suffix}`, `releases/${releaseVersion}${suffix}`])
];

const currentReleasePointers = [
  ["README.md", `Current release: \`${releaseVersion}\``],
  ["README.md", `docs/releases/${releaseVersion}.md`],
  ["README.md", expectedDigest], ["README.md", expectedPredecessor], ["README.md", expectedMatrix],
  ["README.md", expectedCompatibility], ["README.md", upstreamCandidate], ["README.md", upstreamPushedBoundary],
  ["AGENTS.md", `Release law: \`${releaseVersion}\``],
  ["RELEASE_NOTES.md", `## ${releaseVersion}`], ["RELEASE_NOTES.md", upstreamCandidate],
  ["RELEASE_NOTES.md", "The sealed proof object remains"],
  ["CHANGELOG.md", `## [${releaseVersion}] - ${releaseDate}`],
  ["docs/README.md", `Receiz \`${releaseVersion}\``], ["docs/README.md", `releases/${releaseVersion}.md`],
  ["docs/FORMAT.md", `for \`${releaseVersion}\``], ["docs/governance/README.md", `Receiz \`${releaseVersion}\``],
  ["docs/literal-product-law.md", `carried forward for \`${releaseVersion}\``],
  ["docs/experience-first-engineering.md", `carried forward for \`${releaseVersion}\``],
  ["docs/truthful-speed-invariants.md", `carried forward for \`${releaseVersion}\``],
  ["docs/deterministic-surfaces.md", `carried forward for \`${releaseVersion}\``],
  ["docs/scale-reasoning-invariants.md", `reasoning for \`${releaseVersion}\``],
  ["docs/verified-history-first-principles.md", `carried forward for \`${releaseVersion}\``],
  ["docs/offline-verified-register.md", `carried forward for \`${releaseVersion}\``],
  ["docs/pbi-recovery-receiz-id-binding.md", `carried forward for \`${releaseVersion}\``],
  ["docs/value-loop-invariants.md", `carried forward for \`${releaseVersion}\``],
  ["docs/receiz-reasoning-kernel.md", `carried forward for \`${releaseVersion}\``],
  ["site/index.html", releaseVersion], ["site/index.html", `/sw.js?v=${bareVersion}`],
  ["apps/offline-verifier.html", releaseVersion], ["apps/offline-record-seal.html", releaseVersion],
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
  [`docs/releases/${releaseVersion}.md`, "Standalone Repository Boundary"],
  [`docs/releases/${releaseVersion}.md`, upstreamCandidate],
  [`docs/releases/${releaseVersion}-product-truth.md`, "Package/application patch identity is `124.0.1`"],
  [`docs/releases/${releaseVersion}-product-truth.md`, "The standalone verifier carries the patch release identity"],
  [`docs/releases/${releaseVersion}-checklist.md`, "Standalone Repository Evidence"],
  [`docs/releases/${releaseVersion}-process.md`, upstreamCandidate],
  [`docs/releases/${releaseVersion}-process.md`, upstreamPushedBoundary],
  [`docs/releases/${releaseVersion}-process.md`, standalonePredecessor],
  [`docs/releases/${releaseVersion}-process.md`, "Standalone Qualification Boundary"],
  [`docs/releases/${releaseVersion}-regression-lessons.md`, "One universal OIDC scope catalog"],
  [`docs/releases/${releaseVersion}-regression-lessons.md`, "Standalone Lock"],
  [`docs/releases/${releaseVersion}-commit-history.md`, upstreamCandidate],
  [`docs/releases/${releaseVersion}-commit-history.md`, upstreamPushedBoundary],
  [`docs/releases/${releaseVersion}-commit-history.md`, standalonePredecessor],
  [`docs/releases/${releaseVersion}-commit-history.md`, "Standalone Archive Boundary"],
  [`docs/releases/${releaseVersion}-migration.md`, "No new database schema migration"],
  [`docs/releases/${frozenRegistryVersion}-compatibility-matrix.md`, expectedCompatibility],
  [`docs/releases/${frozenRegistryVersion}-compatibility-matrix.md`, expectedMatrix]
];

const errors = [];
if (bareVersion !== "124.0.1") errors.push(`package.json version is ${bareVersion}, expected 124.0.1`);

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
  if (!readFileSync(docsPath).equals(readFileSync(archivePath))) errors.push(`Release archive mirror mismatch for ${releaseVersion}${suffix}`);
}

const registryPath = join(root, `docs/releases/${frozenRegistryVersion}-constitution-registry.json`);
const digestPath = join(root, `docs/releases/${frozenRegistryVersion}-constitution-registry.digest`);
if (existsSync(registryPath) && existsSync(digestPath)) {
  const registry = JSON.parse(readFileSync(registryPath, "utf8"));
  const digest = readFileSync(digestPath, "utf8").trim();
  if (registry.version !== rulesetVersion) errors.push("Frozen registry version mismatch");
  if (registry.previousRegistryDigest !== expectedPredecessor) errors.push("Frozen registry predecessor mismatch");
  if (!Array.isArray(registry.laws) || registry.laws.length !== 124) errors.push("Frozen registry must contain 124 laws");
  if (digest !== expectedDigest) errors.push("Frozen registry digest record mismatch");
}

if (errors.length > 0) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(`Release surfaces aligned to ${releaseVersion}; constitutional ruleset remains ${rulesetVersion}.`);
