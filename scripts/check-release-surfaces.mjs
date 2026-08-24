import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { createHash } from "node:crypto";

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
const upstreamCandidate = "7e7c4297b5ecf95236ace3eb87bb0b97cbc9cd8f";
const upstreamPushedBoundary = "eed426781b6dbb4138e29c9cbcbcf896ec890b11";
const standalonePredecessor = "86bd34c7ebb9c4b1e0db5d5020b9443c085fc275";
const expectedOfflineVerifierDigest = "1737d982c7f5149b68369cea9e55d34c2a81f1321767fb8b52eff3873cb0c4d9";
const expectedOfflineStudioDigest = "3fb9592540e6026cd172d52df7c117417e8f02105a8d13010dcf09fc4df4d723";

const releaseSuffixes = [".md", "-product-truth.md", "-checklist.md", "-process.md", "-regression-lessons.md", "-commit-history.md"];

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
  ["apps/offline-record-seal.html", "onOpenProofUrlClick"],
  ["apps/offline-record-seal.html", 'materialToken.startsWith("rma2:")'],
  ["apps/offline-record-seal.html", 'materialToken.startsWith("rmc1:")'],
  ["apps/offline-record-seal.html", 'slim.nativeRecordSeal ? "rpb2" : "rpb1"'],
  ["apps/offline-verifier.html", 'slim.nativeRecordSeal ? "rpb2" : "rpb1"'],
  ["apps/offline-sports-card-verifier.html", releaseVersion],
  ["apps/offline-sports-card-verifier.html", `${bareVersion}-official-release-v1`],
  ["apps/offline-settlement.html", releaseVersion],
  ["apps/offline-settlement.html", "already-settled Note evidence"],
  ["apps/offline-settlement.html", "Optional later ledger publication coordinates discovery only"],
  ["site/sw.js", `RECEIZ_RELEASE_VERSION = "${bareVersion}"`],
  [`docs/releases/${releaseVersion}.md`, "Reality Becomes Infrastructure"],
  [`docs/releases/${releaseVersion}.md`, "Standalone Repository Boundary"],
  [`docs/releases/${releaseVersion}.md`, upstreamCandidate],
  [`docs/releases/${releaseVersion}-product-truth.md`, "Package identity is `124.0.2`"],
  [`docs/releases/${releaseVersion}-product-truth.md`, "Standalone Projection"],
  [`docs/releases/${releaseVersion}-product-truth.md`, expectedOfflineVerifierDigest],
  [`docs/releases/${releaseVersion}-product-truth.md`, expectedOfflineStudioDigest],
  [`docs/releases/${releaseVersion}-checklist.md`, "Standalone Repository Evidence"],
  [`docs/releases/${releaseVersion}-process.md`, upstreamCandidate],
  [`docs/releases/${releaseVersion}-process.md`, upstreamPushedBoundary],
  [`docs/releases/${releaseVersion}-process.md`, standalonePredecessor],
  [`docs/releases/${releaseVersion}-process.md`, "Standalone Qualification Boundary"],
  [`docs/releases/${releaseVersion}-regression-lessons.md`, "Never require a database or media server"],
  [`docs/releases/${releaseVersion}-regression-lessons.md`, "Standalone Lock"],
  [`docs/releases/${releaseVersion}-commit-history.md`, upstreamCandidate],
  [`docs/releases/${releaseVersion}-commit-history.md`, upstreamPushedBoundary],
  [`docs/releases/${releaseVersion}-commit-history.md`, standalonePredecessor],
  [`docs/releases/${releaseVersion}-commit-history.md`, "Observed commit count: 23 commits"],
  [`docs/releases/${releaseVersion}-commit-history.md`, "Standalone Archive Boundary"],
  [`docs/releases/${frozenRegistryVersion}-compatibility-matrix.md`, expectedCompatibility],
  [`docs/releases/${frozenRegistryVersion}-compatibility-matrix.md`, expectedMatrix]
];

const errors = [];
if (bareVersion !== "124.0.2") errors.push(`package.json version is ${bareVersion}, expected 124.0.2`);

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

const sha256File = (file) => createHash("sha256").update(readFileSync(join(root, file))).digest("hex");
if (sha256File("apps/offline-verifier.html") !== expectedOfflineVerifierDigest) {
  errors.push("Canonical standalone verifier bytes do not match the v124.0.2 source digest");
}
if (sha256File("apps/offline-record-seal.html") !== expectedOfflineStudioDigest) {
  errors.push("Offline Studio bytes do not match the v124.0.2 source digest");
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
