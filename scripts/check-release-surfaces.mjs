import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const pkg = JSON.parse(readFileSync(join(root, "package.json"), "utf8"));
const bareVersion = pkg.version;
const releaseVersion = `v${bareVersion}`;
const releaseDate = "2026-08-16";
const expectedDigest = "0728651789b26e1d10c1991ec1c06c1ea4a576f0c6520537b250b171f8857073";
const expectedPredecessor = "49c167a437ec7c0e486412dd62c54af4abdf94eda1ebc18d263a027d105cecd9";
const expectedMatrix = "1c779ee5ade4b877ae9c6922ab02ba96fffffeb7580f1cf105a59fbb4424f351";
const expectedCompatibility = ">=120.0.0 <121.0.0";
const upstreamReleaseCommit = "f2fd8003d5603a322376e9465f4b5c70553a44a3";
const standalonePredecessor = "7058530b5264703d1888764de57ba2bb2b71ef89";

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
  ["RELEASE_NOTES.md", "Model speech, intentions, emotions, animation, and audio remain non-authoritative"],
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
  [`docs/releases/${releaseVersion}.md`, "Living Proof Subjects"],
  [`docs/releases/${releaseVersion}.md`, "Standalone repository boundary"],
  [`docs/releases/${releaseVersion}-product-truth.md`, expectedPredecessor],
  [`docs/releases/${releaseVersion}-product-truth.md`, "The enclosing sealed proof object remains the strongest truth"],
  [`docs/releases/${releaseVersion}-checklist.md`, "Standalone repository evidence"],
  [`docs/releases/${releaseVersion}-process.md`, upstreamReleaseCommit],
  [`docs/releases/${releaseVersion}-process.md`, standalonePredecessor],
  [`docs/releases/${releaseVersion}-process.md`, "Standalone qualification boundary"],
  [`docs/releases/${releaseVersion}-regression-lessons.md`, "Model fluency cannot become world authority"],
  [`docs/releases/${releaseVersion}-commit-history.md`, upstreamReleaseCommit],
  [`docs/releases/${releaseVersion}-commit-history.md`, "Standalone archive boundary"],
  [`docs/releases/${releaseVersion}-compatibility-matrix.md`, expectedCompatibility],
  [`docs/releases/${releaseVersion}-compatibility-matrix.md`, expectedMatrix],
  [`docs/releases/${releaseVersion}-conformance.md`, "No model statement becomes an event without typed command admission"],
  [`docs/releases/${releaseVersion}-migration.md`, expectedDigest]
];

const errors = [];

if (bareVersion !== "120.0.0") {
  errors.push(`package.json version is ${bareVersion}, expected 120.0.0`);
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
  if (!Array.isArray(registry.laws) || registry.laws.length !== 97) errors.push("Registry must contain 97 laws");
  if (digest !== expectedDigest) errors.push("Registry digest record mismatch");
}

if (errors.length > 0) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(`Release surfaces aligned to ${releaseVersion}.`);
