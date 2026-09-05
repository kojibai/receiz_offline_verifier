import { createHash } from "node:crypto";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const pkg = JSON.parse(readFileSync(join(root, "package.json"), "utf8"));
const bareVersion = "125.0.0";
const releaseVersion = `v${bareVersion}`;
const releaseDate = "2026-09-04";
const expectedDigest = "85a24c3a7fe144c8ec03c6b5fae238d1dfda64c1ed3091b24d4264dc3862ff17";
const expectedPredecessor = "d02429151b0bcebdaeb89485792e377afc55130f9a25e07982c1c88221314247";
const expectedMatrix = "17c98e99c3f54b7a18dea9f2466a49ea2ac5da4d1cf0a90c723560184a314a6c";
const expectedTemporal = "4289c365fdd6360b09a22b011557350da6b59b9f0b0dc95e2ed03ad286a83fc0";
const expectedCompatibility = ">=125.0.0 <126.0.0";
const upstreamCommittedBase = "ddca6196ad9f1e845d28dc6796de4d2818c7e4d3";
const standalonePredecessor = "325a38c44361de7550fa7fd406ee387dbc86cecd";
const expectedOfflineVerifierDigest = "7d9f40257d38fb9c72ed8248a9fddcf2602b9365e317f343b64c2530f95e7735";
const expectedOfflineStudioDigest = "2346f79a4ecdd80b25028c34910511000f6dbe28c30f7fd277eace40869afde1";
const sourceReleaseBookManifest = "5ada7131a27892eb1ce86d0f821ed2b1c30223b41909c1d0aacdfa15fc282bfb";

const releaseSuffixes = [
  ".md", "-achievement-register.md", "-checklist.md", "-codebase-census.json",
  "-commit-history.md", "-compatibility-matrix.md", "-conformance.md",
  "-constitution-registry.digest", "-constitution-registry.json",
  "-database-operation-history.json", "-evidence-status.md", "-full-arc.md",
  "-governance.md", "-integration.md", "-migration.md",
  "-operational-update-2026-09-05.md", "-package-publication-evidence.json",
  "-process.md", "-product-truth.md", "-production-live-evidence.json",
  "-production-schema-evidence.json", "-registry-binding.json",
  "-regression-lessons.md", "-security.md", "-showcase-value-reproduction.md",
  "-sql-compatibility-verification.json",
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

const currentReleasePointers = [
  ["README.md", `Current release: \`${releaseVersion}\``],
  ["README.md", expectedDigest], ["README.md", expectedPredecessor],
  ["README.md", expectedMatrix], ["README.md", expectedTemporal],
  ["README.md", expectedCompatibility], ["README.md", upstreamCommittedBase],
  ["README.md", sourceReleaseBookManifest],
  ["AGENTS.md", `Release law: \`${releaseVersion}\``],
  ["RELEASE_NOTES.md", `## ${releaseVersion}`],
  ["RELEASE_NOTES.md", upstreamCommittedBase],
  ["RELEASE_NOTES.md", "the enclosing sealed proof object"],
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
  ["apps/offline-record-seal.html", `${bareVersion}-local-proof-primitives-v2`],
  ["apps/offline-sports-card-verifier.html", releaseVersion],
  ["apps/offline-sports-card-verifier.html", `${bareVersion}-official-release-v1`],
  ["apps/offline-settlement.html", releaseVersion],
  [`docs/releases/${releaseVersion}.md`, "Reality-Grade Infrastructure"],
  [`docs/releases/${releaseVersion}.md`, "Standalone Repository Boundary"],
  [`docs/releases/${releaseVersion}.md`, upstreamCommittedBase],
  [`docs/releases/${releaseVersion}.md`, sourceReleaseBookManifest],
  [`docs/releases/${releaseVersion}-product-truth.md`, "Standalone Projection"],
  [`docs/releases/${releaseVersion}-product-truth.md`, expectedOfflineVerifierDigest],
  [`docs/releases/${releaseVersion}-product-truth.md`, expectedOfflineStudioDigest],
  [`docs/releases/${releaseVersion}-checklist.md`, "Standalone Repository Evidence"],
  [`docs/releases/${releaseVersion}-process.md`, "Standalone Qualification Boundary"],
  [`docs/releases/${releaseVersion}-process.md`, standalonePredecessor],
  [`docs/releases/${releaseVersion}-evidence-status.md`, "Standalone Evidence"],
  [`docs/releases/${releaseVersion}-commit-history.md`, "Standalone Archive Boundary"],
  [`docs/releases/${releaseVersion}-compatibility-matrix.md`, expectedCompatibility],
  [`docs/releases/${releaseVersion}-conformance.md`, "A v125 implementation conforms"],
];

const errors = [];
if (pkg.version !== bareVersion) errors.push(`package.json version is ${pkg.version}, expected ${bareVersion}`);

for (const file of requiredFiles) {
  if (!existsSync(join(root, file))) errors.push(`Missing required release file: ${file}`);
}

for (const [file, expected] of currentReleasePointers) {
  const fullPath = join(root, file);
  if (!existsSync(fullPath)) continue;
  if (!readFileSync(fullPath, "utf8").includes(expected)) {
    errors.push(`${file} does not include ${JSON.stringify(expected)}`);
  }
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
  errors.push("Canonical standalone verifier bytes do not match the v125 source digest");
}
if (sha256File("apps/offline-record-seal.html") !== expectedOfflineStudioDigest) {
  errors.push("Offline Studio bytes do not match the v125 source digest");
}

const registryPath = join(root, `docs/releases/${releaseVersion}-constitution-registry.json`);
const digestPath = join(root, `docs/releases/${releaseVersion}-constitution-registry.digest`);
if (existsSync(registryPath) && existsSync(digestPath)) {
  const registry = JSON.parse(readFileSync(registryPath, "utf8"));
  const digest = readFileSync(digestPath, "utf8").trim();
  if (registry.version !== bareVersion) errors.push("V125 registry version mismatch");
  if (registry.previousRegistryDigest !== expectedPredecessor) errors.push("V125 registry predecessor mismatch");
  if (!Array.isArray(registry.laws) || registry.laws.length !== 133) errors.push("V125 registry must contain 133 laws");
  if (digest !== expectedDigest) errors.push("V125 registry digest record mismatch");
}

const bindingPath = join(root, `docs/releases/${releaseVersion}-registry-binding.json`);
if (existsSync(bindingPath)) {
  const binding = JSON.parse(readFileSync(bindingPath, "utf8"));
  if (binding.releaseVersion !== bareVersion) errors.push("Release registry binding version mismatch");
  if (binding.compatibilityRange !== expectedCompatibility) errors.push("Release registry binding compatibility mismatch");
  if (binding.constitutionRegistrySha256 !== expectedDigest) errors.push("Release registry binding digest mismatch");
  if (binding.priorConstitutionRegistrySha256 !== expectedPredecessor) errors.push("Release registry predecessor binding mismatch");
  if (binding.operationMatrixSha256 !== expectedMatrix) errors.push("Release operation matrix binding mismatch");
  if (binding.temporalAuthorityConformanceSha256 !== expectedTemporal) errors.push("Release temporal conformance binding mismatch");
  if (binding.packageCoordinates?.sdk !== "@receiz/sdk@125.0.0") errors.push("SDK package binding mismatch");
  if (binding.packageCoordinates?.mcpServer !== "@receiz/mcp-server@125.0.0") errors.push("MCP package binding mismatch");
  if (binding.packageCoordinates?.aiSkills !== "@receiz/ai-skills@125.0.0") errors.push("AI Skills package binding mismatch");
}

if (errors.length > 0) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(`Release surfaces aligned to ${releaseVersion}; constitutional registry contains 133 laws.`);
