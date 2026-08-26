import { createHash } from "node:crypto";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const pkg = JSON.parse(readFileSync(join(root, "package.json"), "utf8"));
const bareVersion = pkg.version;
const releaseVersion = `v${bareVersion}`;
const releaseDate = "2026-08-25";
const rulesetVersion = "124.0.0";
const frozenRegistryVersion = "v124.0.0";
const expectedDigest = "d02429151b0bcebdaeb89485792e377afc55130f9a25e07982c1c88221314247";
const expectedPredecessor = "945a581d1fc49c2dc18fbe8c129771ef464b8a58b96188bce561e88ae8b6ceeb";
const expectedMatrix = "540d1c1bf39f1b288b257c79a6e020bdcc5e587fc9b7dbf6b7aaa5d082e20ad5";
const expectedCompatibility = ">=124.0.0 <125.0.0";
const upstreamCommittedBase = "8cdd19d7e7c8a81610cc03f42606fdf6160c039e";
const standalonePredecessor = "d699451cc61fc80136b45d9d4d6925fdcf7fdb68";
const historicalStandaloneTagCommit = "c365c2fa56a5728ff3368da05b645b3b1adfd108";
const expectedOfflineVerifierDigest = "cc225401704c9717de300d8c5d5b3777f0fe92c602e78a389776aea1f8602cf5";
const expectedOfflineStudioDigest = "0eae566796dc2ff812ccdb102d8c47f5da58456f4c6efcbcdd72d6933efdeb03";
const sourceReleaseBookManifest = "9d9fd5b6fd915651631d29416df6e8826d15bc2170f7f747e37a459f412863fe";

const releaseSuffixes = [
  ".md", "-product-truth.md", "-checklist.md", "-process.md", "-regression-lessons.md",
  "-commit-history.md", "-compatibility-matrix.md", "-conformance.md", "-evidence-status.md",
  "-full-arc.md", "-governance.md", "-migration.md", "-registry-binding.json", "-security.md",
  "-v125-horizon.md",
];

const requiredFiles = [
  "README.md", "AGENTS.md", "RELEASE_NOTES.md", "CHANGELOG.md", "docs/README.md",
  "docs/FORMAT.md", "docs/governance/README.md", "docs/receiz-reasoning-kernel.md",
  "docs/scale-reasoning-invariants.md", "docs/truthful-speed-invariants.md", "site/index.html",
  "apps/offline-verifier.html", "apps/offline-record-seal.html", "apps/offline-sports-card-verifier.html",
  "apps/offline-settlement.html", "site/sw.js",
  `docs/releases/${frozenRegistryVersion}-constitution-registry.json`,
  `docs/releases/${frozenRegistryVersion}-constitution-registry.digest`,
  `docs/releases/${frozenRegistryVersion}-compatibility-matrix.md`,
  ...releaseSuffixes.flatMap((suffix) => [
    `docs/releases/${releaseVersion}${suffix}`,
    `releases/${releaseVersion}${suffix}`,
  ]),
];

const currentReleasePointers = [
  ["README.md", `Current release: \`${releaseVersion}\``],
  ["README.md", `docs/releases/${releaseVersion}.md`],
  ["README.md", expectedDigest], ["README.md", expectedPredecessor], ["README.md", expectedMatrix],
  ["README.md", expectedCompatibility], ["README.md", upstreamCommittedBase],
  ["README.md", sourceReleaseBookManifest],
  ["AGENTS.md", `Release law: \`${releaseVersion}\``],
  ["RELEASE_NOTES.md", `## ${releaseVersion}`], ["RELEASE_NOTES.md", upstreamCommittedBase],
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
  ["apps/offline-verifier.html", releaseVersion], ["apps/offline-verifier.html", "hashReceizFileRange"],
  ["apps/offline-verifier.html", "verifyReceizFile"],
  ["apps/offline-record-seal.html", releaseVersion],
  ["apps/offline-record-seal.html", `${bareVersion}-local-proof-primitives-v1`],
  ["apps/offline-record-seal.html", "ensureLocalProofPrimitives"],
  ["apps/offline-record-seal.html", "void preflight().catch(() => {})"],
  ["apps/offline-record-seal.html", "hashFileRange"],
  ["apps/offline-sports-card-verifier.html", releaseVersion],
  ["apps/offline-sports-card-verifier.html", `${bareVersion}-official-release-v1`],
  ["apps/offline-settlement.html", releaseVersion],
  ["apps/offline-settlement.html", "already-settled Note evidence"],
  ["apps/offline-settlement.html", "Optional later ledger publication coordinates discovery only"],
  ["site/sw.js", `RECEIZ_RELEASE_VERSION = "${bareVersion}"`],
  [`docs/releases/${releaseVersion}.md`, "Reality Becomes Infrastructure"],
  [`docs/releases/${releaseVersion}.md`, "Standalone Repository Boundary"],
  [`docs/releases/${releaseVersion}.md`, upstreamCommittedBase],
  [`docs/releases/${releaseVersion}.md`, sourceReleaseBookManifest],
  [`docs/releases/${releaseVersion}-product-truth.md`, "Package identity is `124.0.3`"],
  [`docs/releases/${releaseVersion}-product-truth.md`, "Standalone Projection"],
  [`docs/releases/${releaseVersion}-product-truth.md`, expectedOfflineVerifierDigest],
  [`docs/releases/${releaseVersion}-product-truth.md`, expectedOfflineStudioDigest],
  [`docs/releases/${releaseVersion}-checklist.md`, "Standalone Repository Evidence"],
  [`docs/releases/${releaseVersion}-checklist.md`, "resource failure remains distinct from invalid-proof verdicts"],
  [`docs/releases/${releaseVersion}-process.md`, upstreamCommittedBase],
  [`docs/releases/${releaseVersion}-process.md`, standalonePredecessor],
  [`docs/releases/${releaseVersion}-process.md`, "Standalone Qualification Boundary"],
  [`docs/releases/${releaseVersion}-regression-lessons.md`, "No resource exception may become an invalid verdict"],
  [`docs/releases/${releaseVersion}-commit-history.md`, upstreamCommittedBase],
  [`docs/releases/${releaseVersion}-commit-history.md`, standalonePredecessor],
  [`docs/releases/${releaseVersion}-commit-history.md`, "Commit count: 50 commits"],
  [`docs/releases/${releaseVersion}-commit-history.md`, "Standalone Archive Boundary"],
  [`docs/releases/${releaseVersion}-compatibility-matrix.md`, expectedCompatibility],
  [`docs/releases/${releaseVersion}-compatibility-matrix.md`, expectedDigest],
  [`docs/releases/${releaseVersion}-conformance.md`, "Exact acceptance boundary"],
  [`docs/releases/${releaseVersion}-evidence-status.md`, "Standalone Evidence"],
  [`docs/releases/${releaseVersion}-evidence-status.md`, upstreamCommittedBase],
  [`docs/releases/${releaseVersion}-full-arc.md`, "Source authority is mechanically enforced"],
  [`docs/releases/${releaseVersion}-governance.md`, "Authority order"],
  [`docs/releases/${releaseVersion}-migration.md`, "No migrations are required"],
  [`docs/releases/${releaseVersion}-security.md`, "Resource and offline boundary"],
  [`docs/releases/${releaseVersion}-v125-horizon.md`, "V124.0.3 does not claim this closure"],
  [`docs/releases/${frozenRegistryVersion}-compatibility-matrix.md`, expectedCompatibility],
  [`docs/releases/${frozenRegistryVersion}-compatibility-matrix.md`, expectedMatrix],
];

const errors = [];
if (bareVersion !== "124.0.3") errors.push(`package.json version is ${bareVersion}, expected 124.0.3`);

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

const sha256File = (file) => createHash("sha256").update(readFileSync(join(root, file))).digest("hex");
if (sha256File("apps/offline-verifier.html") !== expectedOfflineVerifierDigest) {
  errors.push("Canonical standalone verifier bytes do not match the v124.0.3 source digest");
}
if (sha256File("apps/offline-record-seal.html") !== expectedOfflineStudioDigest) {
  errors.push("Offline Studio bytes do not match the v124.0.3 source digest");
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

const bindingPath = join(root, `docs/releases/${releaseVersion}-registry-binding.json`);
if (existsSync(bindingPath)) {
  const binding = JSON.parse(readFileSync(bindingPath, "utf8"));
  if (binding.releaseVersion !== bareVersion) errors.push("Release registry binding version mismatch");
  if (binding.registryVersion !== rulesetVersion) errors.push("Release registry binding ruleset mismatch");
  if (binding.registryDigest !== expectedDigest) errors.push("Release registry binding digest mismatch");
  if (binding.compatibleSdkRange !== expectedCompatibility) errors.push("Release registry binding compatibility mismatch");
  if (binding.inheritance !== "byte-identical") errors.push("Release registry binding must inherit byte-identically");
  if (binding.authority !== false) errors.push("Release registry binding must not claim authority");
  if (binding.strongerTruth !== "sealed-receiz-proof-object") errors.push("Release registry binding stronger truth mismatch");
}

if (historicalStandaloneTagCommit === standalonePredecessor) {
  errors.push("Historical v124.0.2 tag and v124.0.3 standalone predecessor must remain distinct");
}

if (errors.length > 0) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(`Release surfaces aligned to ${releaseVersion}; constitutional ruleset remains ${rulesetVersion}.`);
