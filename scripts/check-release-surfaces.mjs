import { createHash } from "node:crypto";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const pkg = JSON.parse(readFileSync(join(root, "package.json"), "utf8"));
const bareVersion = "127.0.0";
const releaseVersion = `v${bareVersion}`;
const releaseDate = "2026-09-23";
const expectedDigest = "8d0b5b839d02d9efbd4306cc99410595a183705c2670b76d2567eaaaade99065";
const expectedPredecessor = "80137c2e6f294050ef36ff75e4daac15c7790b7f04d9a91fab9d1970fa3c0b09";
const upstreamCommittedBase = "8dec07dafa0803b1209b6b4cedde3bca37abaaf4";
const standalonePredecessor = "cf1be7036dbf5b31dd6a1269da4d4247f2cd3c3e";
const expectedOfflineVerifierDigest = "f353850dfc535943878bd775f7e2bafcd39204657b48a7975de9f100d2601261";
const expectedOfflineStudioDigest = "2f39214a9ba7ef5b8127ad26bab08e9eb3747e69401b724bbc3a3efbe5965dad";
const sourceReleaseBookManifest = "efedb94ee110c98181b13981ec55053467233a62cd069a9212913d0e51e834b5";
const sourceEvidenceManifest = "3246aace7b50c24fe6754d4bf08e85f37462a0b28593026e2ddd90b997e1914a";

const releaseSuffixes = [
  ".md", "-checklist.md", "-commit-history.md",
  "-constitution-registry.digest", "-constitution-registry.json",
  "-migration.md", "-package-publication-evidence.json", "-process.md",
  "-product-truth.md", "-regression-lessons.md",
];

const evidenceFiles = [
  "README.md", "browser-offline.json", "browser-offline.png",
  "isolated-profile-database.log",
  "local-subject-mcp.json", "local-subject-runtime.json", "node-offline.json",
  "owner-bound-offline-roundtrip.json", "production-migration.json",
  "profile-cold-source-unavailable.png",
  "profile-healthy-stage-initialization.png", "profile-held-baseline.png",
  "profile-source-outage-first.png", "profile-source-outage-second.png",
  "profile-source-outage.json", "profile-source-outage.md",
  "profile-superseded-media-revocation.png", "registry-successor-local.log",
  "release-freeze.json",
  "temporal-offline-roundtrip.json",
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
  ...evidenceFiles.flatMap((file) => [
    `docs/releases/evidence/${releaseVersion}/${file}`,
    `releases/evidence/${releaseVersion}/${file}`,
  ]),
];

const pointers = [
  ["README.md", `Current release: \`${releaseVersion}\``],
  ["README.md", expectedDigest], ["README.md", expectedPredecessor],
  ["README.md", upstreamCommittedBase], ["README.md", sourceReleaseBookManifest],
  ["README.md", sourceEvidenceManifest],
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
  ["site/index.html", releaseVersion], ["site/index.html", "97.2.0-official-release-v1"],
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
  [`docs/releases/${releaseVersion}.md`, sourceEvidenceManifest],
  [`docs/releases/${releaseVersion}-product-truth.md`, "Standalone Projection"],
  [`docs/releases/${releaseVersion}-product-truth.md`, expectedOfflineVerifierDigest],
  [`docs/releases/${releaseVersion}-product-truth.md`, expectedOfflineStudioDigest],
  [`docs/releases/${releaseVersion}-checklist.md`, "Standalone Repository Evidence"],
  [`docs/releases/${releaseVersion}-process.md`, "Standalone Qualification Boundary"],
  [`docs/releases/${releaseVersion}-process.md`, standalonePredecessor],
  [`docs/releases/${releaseVersion}-commit-history.md`, "Standalone Archive Boundary"],
  [`docs/releases/evidence/${releaseVersion}/README.md`, "v127"],
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

for (const file of evidenceFiles) {
  const docsPath = join(root, `docs/releases/evidence/${releaseVersion}/${file}`);
  const archivePath = join(root, `releases/evidence/${releaseVersion}/${file}`);
  if (existsSync(docsPath) && existsSync(archivePath) && !readFileSync(docsPath).equals(readFileSync(archivePath))) {
    errors.push(`Release evidence mirror mismatch for ${file}`);
  }
  if (file.endsWith(".json") && existsSync(docsPath)) {
    try {
      JSON.parse(readFileSync(docsPath, "utf8"));
    } catch (error) {
      errors.push(`Invalid JSON evidence ${file}: ${error.message}`);
    }
  }
}

const sha256File = (file) => createHash("sha256").update(readFileSync(join(root, file))).digest("hex");
if (sha256File("apps/offline-verifier.html") !== JSON.parse(readFileSync(join(root, "source-alignment.json"), "utf8")).files.find((file) => file.source === "public/offline-verifier.html").sha256) {
  errors.push("Canonical standalone verifier bytes do not match the v127 source digest");
}
if (sha256File("apps/offline-record-seal.html") !== expectedOfflineStudioDigest) {
  errors.push("Offline Studio bytes do not match the v127 source digest");
}

const registryPath = join(root, `docs/releases/${releaseVersion}-constitution-registry.json`);
const digestPath = join(root, `docs/releases/${releaseVersion}-constitution-registry.digest`);
if (existsSync(registryPath) && existsSync(digestPath)) {
  const registry = JSON.parse(readFileSync(registryPath, "utf8"));
  const digest = readFileSync(digestPath, "utf8").trim();
  if (registry.version !== bareVersion) errors.push("V127 registry version mismatch");
  if (registry.previousRegistryDigest !== expectedPredecessor) errors.push("V127 registry predecessor mismatch");
  if (!Array.isArray(registry.laws) || registry.laws.length !== 133) errors.push("V127 registry must contain 133 laws");
  if (digest !== expectedDigest) errors.push("V127 registry digest record mismatch");
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(`Release surfaces aligned to ${releaseVersion}; constitutional registry contains 133 laws.`);
