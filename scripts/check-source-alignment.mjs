import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import { createHash } from "node:crypto";
const manifest = JSON.parse(readFileSync("source-alignment.json", "utf8"));
assert.match(manifest.upstreamCommit, /^[a-f0-9]{40}$/);
assert.equal(manifest.release, JSON.parse(readFileSync("package.json", "utf8")).version);
assert.equal(manifest.files.length, 4);
for (const entry of manifest.files) {
  for (const path of entry.destinations) {
    assert.equal(createHash("sha256").update(readFileSync(path)).digest("hex"), entry.sha256, `Source drift: ${path}`);
  }
}
const canonical = readFileSync("apps/offline-verifier.html");
assert.deepEqual(readFileSync("site/index.html"), canonical);
assert.deepEqual(readFileSync("site/offline-verifier.html"), canonical);
for (const marker of ["factCurrentOwner", "ownershipHistoryPanel", "pbiAuthorshipHistoryPanel"]) {
  assert.ok(canonical.includes(marker), `Missing provenance surface: ${marker}`);
}
assert.ok(existsSync(".github/workflows/ci.yml"));
assert.ok(existsSync(".github/workflows/pages.yml"));
console.log("Committed source hashes, deployed mirrors, provenance surfaces and workflow placement pass.");

for (const entry of manifest.assets) {
  assert.equal(createHash("sha256").update(readFileSync(entry.destination)).digest("hex"), entry.sha256, `Asset drift: ${entry.destination}`);
}

const suites = ["temporal", "market", "identity", "issuance", "signal-circuit", "game/sports", "verification", "economy", "interoperability", "world"];
for (const file of ["README.md", "docs/conformance/README.md"]) {
  const text = readFileSync(file, "utf8");
  for (const suite of suites) assert.ok(text.includes(`/api/${suite}/conformance/badge`), `${file}: missing ${suite}`);
}
