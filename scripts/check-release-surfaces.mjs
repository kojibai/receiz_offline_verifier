import { readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const pkg = JSON.parse(readFileSync(join(root, "package.json"), "utf8"));
const bareVersion = pkg.version;
const releaseVersion = `v${bareVersion}`;
const releaseDate = "2026-07-19";

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
  `docs/releases/${releaseVersion}.md`,
  `docs/releases/${releaseVersion}-product-truth.md`,
  `docs/releases/${releaseVersion}-checklist.md`,
  `docs/releases/${releaseVersion}-process.md`,
  `docs/releases/${releaseVersion}-regression-lessons.md`,
  `docs/releases/${releaseVersion}-performance-findings.md`,
  `docs/releases/${releaseVersion}-invariant-register.md`,
  `docs/releases/${releaseVersion}-commit-history.md`,
  "site/index.html",
  "apps/offline-verifier.html",
  "apps/offline-record-seal.html",
  "apps/offline-sports-card-verifier.html",
  "apps/offline-settlement.html",
  "site/sw.js"
];

const versionedFiles = [
  "README.md",
  "AGENTS.md",
  "RELEASE_NOTES.md",
  "CHANGELOG.md",
  "docs/README.md",
  "docs/FORMAT.md",
  "docs/governance/README.md",
  "docs/literal-product-law.md",
  "docs/experience-first-engineering.md",
  "docs/truthful-speed-invariants.md",
  "docs/deterministic-surfaces.md",
  "docs/scale-reasoning-invariants.md",
  "docs/verified-history-first-principles.md",
  "docs/offline-verified-register.md",
  "docs/pbi-recovery-receiz-id-binding.md",
  "docs/value-loop-invariants.md",
  "site/index.html",
  "apps/offline-verifier.html",
  "apps/offline-record-seal.html",
  "apps/offline-sports-card-verifier.html",
  "apps/offline-settlement.html",
  "site/sw.js"
];

const currentReleasePointers = [
  ["README.md", `Current release: \`${releaseVersion}\``],
  ["AGENTS.md", `Release law: \`${releaseVersion}\``],
  ["AGENTS.md", "docs/scale-reasoning-invariants.md"],
  ["AGENTS.md", "docs/receiz-reasoning-kernel.md"],
  ["README.md", `docs/releases/${releaseVersion}.md`],
  ["README.md", `docs/releases/${releaseVersion}-product-truth.md`],
  ["README.md", `docs/releases/${releaseVersion}-checklist.md`],
  ["README.md", `docs/releases/${releaseVersion}-process.md`],
  ["README.md", `docs/releases/${releaseVersion}-regression-lessons.md`],
  ["README.md", `docs/releases/${releaseVersion}-performance-findings.md`],
  ["README.md", `docs/releases/${releaseVersion}-invariant-register.md`],
  ["README.md", `docs/releases/${releaseVersion}-commit-history.md`],
  ["RELEASE_NOTES.md", `## ${releaseVersion}`],
  ["RELEASE_NOTES.md", `docs/releases/${releaseVersion}-performance-findings.md`],
  ["RELEASE_NOTES.md", `docs/releases/${releaseVersion}-invariant-register.md`],
  ["RELEASE_NOTES.md", `docs/releases/${releaseVersion}-commit-history.md`],
  ["CHANGELOG.md", `## [${releaseVersion}] - ${releaseDate}`],
  ["docs/README.md", `Receiz \`${releaseVersion}\``],
  ["docs/README.md", `releases/${releaseVersion}.md`],
  ["docs/README.md", `releases/${releaseVersion}-regression-lessons.md`],
  ["docs/README.md", `releases/${releaseVersion}-performance-findings.md`],
  ["docs/README.md", `releases/${releaseVersion}-invariant-register.md`],
  ["docs/README.md", `releases/${releaseVersion}-commit-history.md`],
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
  ["apps/offline-verifier.html", releaseVersion],
  ["apps/offline-record-seal.html", releaseVersion],
  ["apps/offline-sports-card-verifier.html", releaseVersion],
  ["apps/offline-settlement.html", releaseVersion],
  ["site/sw.js", `RECEIZ_RELEASE_VERSION = "${bareVersion}"`],
  [`docs/releases/${releaseVersion}.md`, `release:lock`],
  [`docs/releases/${releaseVersion}.md`, `${releaseVersion}-performance-findings.md`],
  [`docs/releases/${releaseVersion}.md`, `${releaseVersion}-invariant-register.md`],
  [`docs/releases/${releaseVersion}-product-truth.md`, `${releaseVersion}-regression-lessons.md`],
  [`docs/releases/${releaseVersion}-product-truth.md`, `${releaseVersion}-commit-history.md`],
  [`docs/releases/${releaseVersion}-checklist.md`, `${releaseVersion}-regression-lessons.md`],
  [`docs/releases/${releaseVersion}-checklist.md`, `${releaseVersion}-performance-findings.md`],
  [`docs/releases/${releaseVersion}-checklist.md`, `${releaseVersion}-invariant-register.md`],
  [`docs/releases/${releaseVersion}-checklist.md`, `${releaseVersion}-commit-history.md`],
  [`docs/releases/${releaseVersion}-process.md`, `${releaseVersion}-regression-lessons.md`],
  [`docs/releases/${releaseVersion}-process.md`, `${releaseVersion}-performance-findings.md`],
  [`docs/releases/${releaseVersion}-process.md`, `${releaseVersion}-invariant-register.md`],
  [`docs/releases/${releaseVersion}-process.md`, `${releaseVersion}-commit-history.md`],
  [`docs/releases/${releaseVersion}-regression-lessons.md`, "Release-Lock Requirement"],
  [`docs/releases/${releaseVersion}-performance-findings.md`, "Release-Lock Requirement"],
  [`docs/releases/${releaseVersion}-invariant-register.md`, "Release-Lock Requirement"],
  [`docs/releases/${releaseVersion}-commit-history.md`, "Release-Lock Requirement"]
];

const errors = [];

for (const file of requiredFiles) {
  try {
    statSync(join(root, file));
  } catch {
    errors.push(`Missing required release file: ${file}`);
  }
}

for (const [file, expected] of currentReleasePointers) {
  const body = readFileSync(join(root, file), "utf8");
  if (!body.includes(expected)) {
    errors.push(`${file} does not include ${JSON.stringify(expected)}`);
  }
}

for (const file of versionedFiles) {
  const body = readFileSync(join(root, file), "utf8");
  if (body.includes("v78.0.0") && !["README.md", "RELEASE_NOTES.md", "CHANGELOG.md", "docs/README.md"].includes(file)) {
    errors.push(`${file} still contains v78.0.0 outside an archive/history file`);
  }
}

if (errors.length > 0) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(`Release surfaces aligned to ${releaseVersion}.`);
