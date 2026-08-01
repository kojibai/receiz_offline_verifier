import { readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const pkg = JSON.parse(readFileSync(join(root, "package.json"), "utf8"));
const bareVersion = pkg.version;
const releaseVersion = `v${bareVersion}`;
const releaseDate = "2026-08-01";
const expectedDigest = "c284bd39a891c1a828b532523bd548507570819c32e307d79b8043f06d2d3360";
const expectedPredecessor = "598ee0fa4dc31b8394fdd2b7b8fe713c8ee8c4b33e6ecdd92101a1a93d8787a8";
const expectedMatrix = "153b2472830567ec3b445c2c1b4102e4c036ed4c45cc374d40d0079096a40f54";
const expectedCompatibility = ">=118.0.0 <119.0.0";
const upstreamReleaseCommit = "05e9ddc051cbfacb255fcc1e25d38a6be6c59407";

const releaseSuffixes = [
  ".md",
  "-product-truth.md",
  "-checklist.md",
  "-process.md",
  "-regression-lessons.md",
  "-commit-history.md",
  "-compatibility-matrix.md",
  "-full-arc.md",
  "-lineage.md",
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
  "docs/releases/v119.0.0-planning.md",
  "releases/v119.0.0-planning.md",
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
  ["README.md", `docs/releases/${releaseVersion}-full-arc.md`],
  ["README.md", expectedDigest],
  ["README.md", expectedMatrix],
  ["README.md", expectedCompatibility],
  ["README.md", "docs/releases/v119.0.0-planning.md"],
  ["AGENTS.md", `Release law: \`${releaseVersion}\``],
  ["RELEASE_NOTES.md", `## ${releaseVersion}`],
  ["RELEASE_NOTES.md", `docs/releases/${releaseVersion}-compatibility-matrix.md`],
  ["RELEASE_NOTES.md", upstreamReleaseCommit],
  ["CHANGELOG.md", `## [${releaseVersion}] - ${releaseDate}`],
  ["docs/README.md", `Receiz \`${releaseVersion}\``],
  ["docs/README.md", `releases/${releaseVersion}.md`],
  ["docs/README.md", "releases/v119.0.0-planning.md"],
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
  ["site/sw.js", `RECEIZ_RELEASE_VERSION = "${bareVersion}"`],
  [`docs/releases/${releaseVersion}.md`, expectedDigest],
  [`docs/releases/${releaseVersion}.md`, expectedMatrix],
  [`docs/releases/${releaseVersion}.md`, upstreamReleaseCommit],
  [`docs/releases/${releaseVersion}.md`, "Standalone repository boundary"],
  [`docs/releases/${releaseVersion}-product-truth.md`, "Packed-package qualification"],
  [`docs/releases/${releaseVersion}-checklist.md`, "Standalone repository evidence"],
  [`docs/releases/${releaseVersion}-process.md`, "3219ed110de0b0bee217955d5cf41d1676ce5b7f"],
  [`docs/releases/${releaseVersion}-process.md`, "Standalone qualification boundary"],
  [`docs/releases/${releaseVersion}-regression-lessons.md`, "A transaction image must carry transaction truth"],
  [`docs/releases/${releaseVersion}-commit-history.md`, "Commit count: 452"],
  [`docs/releases/${releaseVersion}-commit-history.md`, "Standalone archive baseline"],
  [`docs/releases/${releaseVersion}-compatibility-matrix.md`, expectedCompatibility],
  [`docs/releases/${releaseVersion}-full-arc.md`, "## v118"],
  [`docs/releases/${releaseVersion}-lineage.md`, upstreamReleaseCommit],
  [`docs/releases/${releaseVersion}-planning.md`, "complete, unchanged 15-task orchestration scope"],
  ["docs/releases/v119.0.0-planning.md", "### Task 15:"],
  ["docs/releases/v119.0.0-planning.md", "first admission only, then append forever"]
];

const errors = [];

if (bareVersion !== "118.0.0") {
  errors.push(`package.json version is ${bareVersion}, expected 118.0.0`);
}

for (const file of requiredFiles) {
  try {
    statSync(join(root, file));
  } catch {
    errors.push(`Missing required release file: ${file}`);
  }
}

for (const [file, expected] of currentReleasePointers) {
  const body = readFileSync(join(root, file), "utf8");
  if (!body.includes(expected)) errors.push(`${file} does not include ${JSON.stringify(expected)}`);
}

for (const suffix of releaseSuffixes) {
  const docsPath = join(root, `docs/releases/${releaseVersion}${suffix}`);
  const archivePath = join(root, `releases/${releaseVersion}${suffix}`);
  if (!readFileSync(docsPath).equals(readFileSync(archivePath))) {
    errors.push(`Release archive mirror mismatch for ${releaseVersion}${suffix}`);
  }
}

if (!readFileSync(join(root, "docs/releases/v119.0.0-planning.md")).equals(
  readFileSync(join(root, "releases/v119.0.0-planning.md"))
)) errors.push("Release archive mirror mismatch for v119.0.0-planning.md");

const registry = JSON.parse(
  readFileSync(join(root, `docs/releases/${releaseVersion}-constitution-registry.json`), "utf8")
);
const digest = readFileSync(
  join(root, `docs/releases/${releaseVersion}-constitution-registry.digest`),
  "utf8"
).trim();

if (registry.version !== bareVersion) errors.push("Registry version mismatch");
if (registry.previousRegistryDigest !== expectedPredecessor) errors.push("Registry predecessor mismatch");
if (!Array.isArray(registry.laws) || registry.laws.length !== 80) errors.push("Registry must contain 80 laws");
if (digest !== expectedDigest) errors.push("Registry digest record mismatch");

if (errors.length > 0) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(`Release surfaces aligned to ${releaseVersion}.`);
