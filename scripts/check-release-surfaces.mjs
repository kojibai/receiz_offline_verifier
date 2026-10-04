import { createHash } from "node:crypto";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const pkg = JSON.parse(readFileSync(join(root, "package.json"), "utf8"));
const bareVersion = "128.0.0";
const releaseVersion = `v${bareVersion}`;
const releaseDate = "2026-10-03";
const expectedDigest = "8d0b5b839d02d9efbd4306cc99410595a183705c2670b76d2567eaaaade99065";
const expectedRegistryVersion = "127.0.0";
const upstreamCommittedBase = "3090835f1e5a7de57b3b7c526d90b03512c2da70";
const standalonePredecessor = "ff9227ff93ba2510399967a5382341978d95e1ae";
const expectedOfflineVerifierDigest = "7db8cfc339096c80ef4f7b5dc536a0004bba1a514829e6d7d24868be8ece1b60";
const expectedOfflineStudioDigest = "a1da98058c6517275ee574cd52c45631d867300c31e339ca6c9832ad2bc7456e";
const sourceReleaseBookManifest = "f74677ac8a38266eb30a83b1112d11ac8789cae2d10afbc62ac1af528d6b13b2";

const releaseSuffixes = [
  ".md", "-checklist.md", "-commit-history.md", "-compatibility.md",
  "-conformance.md", "-migration.md", "-package-publication-evidence.json",
  "-process.md", "-product-truth.md", "-production-diagnosis.md",
  "-registry-binding.json", "-regression-lessons.md",
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
  ["README.md", expectedDigest],
  ["README.md", upstreamCommittedBase], ["README.md", sourceReleaseBookManifest],
  ["README.md", "https://github.com/kojibai/receiz/releases/tag/v128.0.0"],
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
  ["site/index.html", releaseVersion], ["site/index.html", "127.0.0-jpeg-no-app2-v1"],
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
  [`docs/releases/${releaseVersion}.md`, "https://github.com/kojibai/receiz/releases/tag/v128.0.0"],
  [`docs/releases/${releaseVersion}-product-truth.md`, "Standalone Projection"],
  [`docs/releases/${releaseVersion}-product-truth.md`, expectedOfflineVerifierDigest],
  [`docs/releases/${releaseVersion}-product-truth.md`, expectedOfflineStudioDigest],
  [`docs/releases/${releaseVersion}-checklist.md`, "Standalone Repository Evidence"],
  [`docs/releases/${releaseVersion}-process.md`, "Standalone Qualification Boundary"],
  [`docs/releases/${releaseVersion}-process.md`, standalonePredecessor],
  [`docs/releases/${releaseVersion}-commit-history.md`, "Standalone Archive Boundary"],
  [`docs/releases/${releaseVersion}-registry-binding.json`, expectedDigest],
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
  if (suffix.endsWith(".json") && existsSync(docsPath)) {
    try {
      JSON.parse(readFileSync(docsPath, "utf8"));
    } catch (error) {
      errors.push(`Invalid JSON release record ${releaseVersion}${suffix}: ${error.message}`);
    }
  }
}

const sha256File = (file) => createHash("sha256").update(readFileSync(join(root, file))).digest("hex");
if (sha256File("apps/offline-verifier.html") !== JSON.parse(readFileSync(join(root, "source-alignment.json"), "utf8")).files.find((file) => file.source === "public/offline-verifier.html").sha256) {
  errors.push("Canonical standalone verifier bytes do not match the v128 source digest");
}
if (sha256File("apps/offline-record-seal.html") !== expectedOfflineStudioDigest) {
  errors.push("Offline Studio bytes do not match the v128 source digest");
}

const binding = JSON.parse(readFileSync(join(root, `docs/releases/${releaseVersion}-registry-binding.json`), "utf8"));
if (binding.releaseVersion !== bareVersion) errors.push("V128 registry-binding release mismatch");
if (binding.registryVersion !== expectedRegistryVersion) errors.push("V128 must inherit the v127 registry version");
if (binding.inheritedFromRelease !== expectedRegistryVersion || binding.inheritance !== "byte-identical") errors.push("V128 registry inheritance mismatch");
if (binding.registryDigest !== expectedDigest) errors.push("V128 inherited registry digest mismatch");

const inheritedRegistry = JSON.parse(readFileSync(join(root, "docs/releases/v127.0.0-constitution-registry.json"), "utf8"));
const inheritedDigest = readFileSync(join(root, "docs/releases/v127.0.0-constitution-registry.digest"), "utf8").trim();
if (inheritedRegistry.version !== expectedRegistryVersion) errors.push("Inherited registry file is not v127");
if (!Array.isArray(inheritedRegistry.laws) || inheritedRegistry.laws.length !== 133) errors.push("Inherited v127 registry must contain 133 laws");
if (inheritedDigest !== expectedDigest) errors.push("Inherited v127 registry digest record mismatch");

const publication = JSON.parse(readFileSync(join(root, `docs/releases/${releaseVersion}-package-publication-evidence.json`), "utf8"));
const expectedPackages = ["@receiz/ai-skills", "@receiz/sdk", "@receiz/mcp-server"];
if (publication.releaseVersion !== bareVersion) errors.push("V128 publication evidence release mismatch");
for (const name of expectedPackages) {
  const record = publication.packages?.find((entry) => entry.name === name);
  if (!record || record.version !== bareVersion || record.distTagLatest !== bareVersion) errors.push(`Missing exact v128 publication evidence for ${name}`);
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(`Release surfaces aligned to ${releaseVersion}; inherited v127 constitutional registry contains 133 laws.`);
