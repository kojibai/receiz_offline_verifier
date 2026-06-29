import { spawnSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const pkg = JSON.parse(readFileSync(join(root, "package.json"), "utf8"));
const expectedBareVersion = pkg.version;
const expectedReleaseVersion = `v${expectedBareVersion}`;
const requestedVersion = process.argv[2];

if (
  requestedVersion &&
  requestedVersion !== expectedBareVersion &&
  requestedVersion !== expectedReleaseVersion
) {
  console.error(
    `Release lock requested ${requestedVersion}, but package.json is ${expectedReleaseVersion}.`
  );
  process.exit(1);
}

const result = spawnSync(
  process.execPath,
  [join(root, "scripts/check-release-surfaces.mjs")],
  { stdio: "inherit" }
);

process.exit(result.status ?? 1);
