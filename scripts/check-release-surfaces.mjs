import { createHash } from "node:crypto";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const pkg = JSON.parse(readFileSync(join(root, "package.json"), "utf8"));
const bareVersion = "126.0.0";
const releaseVersion = `v${bareVersion}`;
const releaseDate = "2026-09-07";
const expectedDigest = "80137c2e6f294050ef36ff75e4daac15c7790b7f04d9a91fab9d1970fa3c0b09";
const expectedPredecessor = "85a24c3a7fe144c8ec03c6b5fae238d1dfda64c1ed3091b24d4264dc3862ff17";
const upstreamCommittedBase = "d69d6bdfa8277a7933d16015346f38ba4aa37420";
const standalonePredecessor = "eb70e44e85c17620668d1c055323838ac188488d";
const expectedOfflineVerifierDigest = "822b558ceeeef3db7b005346f6992580fe01ab378b95d8b64284d6844abf55b8";
const expectedOfflineStudioDigest = "51003369c3e2ff70bc35013b55443c04f878563b05e4509b489cceea89e6f956";
const sourceReleaseBookManifest = "04539f15b59dcd066a020ba171d040cd4941a041247f568d46f340ab02ce0698";

const releaseSuffixes = [
  ".md", "-checklist.md", "-commit-history.md", "-compatibility.md",
  "-constitution-registry.digest", "-constitution-registry.json",
  "-migration.md", "-process.md", "-product-truth.md", "-regression-lessons.md",
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
  ...releaseSuffixes.flatMap((suffix) => [
    `docs/releases/${releaseVersion}${suffix}`,
    `releases/${releaseVersion}${suffix}`,
  ]),
];

const pointers = [
  ["README.md", `Current release: \`${releaseVersion}\``],
  ["README.md", expectedDigest], ["README.md", expectedPredecessor],
  ["README.md", upstreamCommittedBase], ["README.md", sourceReleaseBookManifest],
  ["AGENTS.md", `Release law: \`${releaseVersion}\``],
  ["RELEASE_NOTES.md", `## ${releaseVersion}`], ["RELEASE_NOTES.md", upstreamCommittedBase],
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
  ["site/index.html", releaseVersion], ["site/index.html", `/sw.js?v=${bareVersion}`],
  ["site/sw.js", `RECEIZ_RELEASE_VERSION = "${bareVersion}"`],
  ["apps/offline-verifier.html", releaseVersion],
  ["apps/offline-record-seal.html", releaseVersion],
  ["apps/offline-record-seal.html", `${bareVersion}-local-proof-primitives-v4`],
  ["apps/offline-sports-card-verifier.html", releaseVersion],
  ["apps/offline-sports-card-verifier.html", `${bareVersion}-official-release-v1`],
  ["apps/offline-settlement.html", releaseVersion],
  [`docs/releases/${releaseVersion}.md`, "Standalone Repository Boundary"],
  [`docs/releases/${releaseVersion}.md`, upstreamCommittedBase],
  [`docs/releases/${releaseVersion}.md`, sourceReleaseBookManifest],
  [`docs/releases/${releaseVersion}-product-truth.md`, "Standalone Projection"],
  [`docs/releases/${releaseVersion}-product-truth.md`, expectedOfflineVerifierDigest],
  [`docs/releases/${releaseVersion}-product-truth.md`, expectedOfflineStudioDigest],
  [`docs/releases/${releaseVersion}-checklist.md`, "Standalone Repository Evidence"],
  [`docs/releases/${releaseVersion}-process.md`, "Standalone Qualification Boundary"],
  [`docs/releases/${releaseVersion}-process.md`, standalonePredecessor],
  [`docs/releases/${releaseVersion}-commit-history.md`, "Standalone Archive Boundary"],
  [`docs/releases/${releaseVersion}-compatibility.md`, "Historical proof objects"],
];

const errors = [];
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
}

const sha256File = (file) => createHash("sha256").update(readFileSync(join(root, file))).digest("hex");
if (sha256File("apps/offline-verifier.html") !== expectedOfflineVerifierDigest) {
  errors.push("Canonical standalone verifier bytes do not match the v126 source digest");
}
if (sha256File("apps/offline-record-seal.html") !== expectedOfflineStudioDigest) {
  errors.push("Offline Studio bytes do not match the v126 source digest");
}

const registryPath = join(root, `docs/releases/${releaseVersion}-constitution-registry.json`);
const digestPath = join(root, `docs/releases/${releaseVersion}-constitution-registry.digest`);
if (existsSync(registryPath) && existsSync(digestPath)) {
  const registry = JSON.parse(readFileSync(registryPath, "utf8"));
  const digest = readFileSync(digestPath, "utf8").trim();
  if (registry.version !== bareVersion) errors.push("V126 registry version mismatch");
  if (registry.previousRegistryDigest !== expectedPredecessor) errors.push("V126 registry predecessor mismatch");
  if (!Array.isArray(registry.laws) || registry.laws.length !== 133) errors.push("V126 registry must contain 133 laws");
  if (digest !== expectedDigest) errors.push("V126 registry digest record mismatch");
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(`Release surfaces aligned to ${releaseVersion}; constitutional registry contains 133 laws.`);
