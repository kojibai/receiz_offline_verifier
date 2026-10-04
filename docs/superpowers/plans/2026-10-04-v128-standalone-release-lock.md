# Receiz v128 Standalone Release Lock Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Publish a fully qualified standalone `v128.0.0` release from the exact committed public runtime and release records in the main Receiz release commit.

**Architecture:** Treat main commit `3090835f1e5a7de57b3b7c526d90b03512c2da70` as a read-only source. Import the canonical verifier, Offline Studio, and twelve public release records into this repository; layer only standalone archive boundaries on the release records. Advance the standalone runtime and release lock while preserving the byte-identical inherited v127 constitutional registry.

**Tech Stack:** Static HTML/JavaScript, Node.js release checks, Git, Playwright CLI.

**Spec:** `docs/releases/v128.0.0.md` at main commit `3090835f1e5a7de57b3b7c526d90b03512c2da70`

## Global Constraints

- Do not modify main-repository files; only read committed source and verify the existing private GitHub release/tag supplied by the operator.
- Keep this standalone repository verification-only on GitHub: retain the CI check and remove GitHub Pages deployment.
- Release identity is `128.0.0`; constitutional registry identity remains byte-identical v127 digest `8d0b5b839d02d9efbd4306cc99410595a183705c2670b76d2567eaaaade99065`.
- Preserve exact sealed source, identity, ownership, Settlement, temporal authority, and append-only history above application, package, transport, cache, and display state.
- Keep package publication, deployment, physical-PWA confirmation, signed attestation, GitHub release, and remote push claims at their recorded evidence boundaries.
- Durable proof memory remains first admission only, then append forever.

## Review Focus

- A source commit changing during qualification must not silently change the imported boundary; all hashes bind the exact named commit.
- The inherited v127 registry must not be relabeled as a v128 registry.
- Canonical verifier and Studio runtime logic must be imported, not replaced by version-only edits.
- Both release archive trees must remain byte-identical, including JSON records.
- Browser startup may report only the documented local-server favicon or enrollment-endpoint limitation; unexpected runtime errors fail qualification.

---

### Task 1: Import committed v128 public source

**Files:**
- Modify: `apps/offline-verifier.html`
- Modify: `apps/offline-record-seal.html`
- Create: `docs/releases/v128.0.0*`
- Create: `releases/v128.0.0*`

**Interfaces:**
- Consumes: committed main-repository paths at `3090835f1e5a7de57b3b7c526d90b03512c2da70`
- Produces: exact runtime bytes and mirrored twelve-record release archive

- [ ] Confirm `node scripts/check_release_lock.mjs 128.0.0` fails before the version transition.
- [ ] Extract only committed public verifier, Studio, and v128 release records.
- [ ] Append standalone source, risk, and evidence boundaries to the narrative records.
- [ ] Mirror every release record byte-for-byte.

### Task 2: Advance standalone release identity and lock

**Files:**
- Modify: `package.json`, `AGENTS.md`, `source-alignment.json`
- Modify: `README.md`, `RELEASE_NOTES.md`, `CHANGELOG.md`, `docs/README.md`
- Modify: `site/*`, `apps/offline-sports-card-verifier.html`, `apps/offline-settlement.html`
- Modify: release doctrine status files and `scripts/check-release-surfaces.mjs`

**Interfaces:**
- Consumes: Task 1 runtime digests, source-book manifest, and inherited registry binding
- Produces: executable v128 release lock and coordinated visible identity

- [ ] Advance standalone labels, package identity, service-worker epochs, and doctrine pointers to `128.0.0`.
- [ ] Bind the exact main commit, verifier/Studio digests, twelve-record source manifest, publication evidence, and inherited registry identity.
- [ ] Add mirror, JSON, source hash, and no-registry-relabel checks.

### Task 3: Qualify runtime and archive

**Files:**
- Test: `scripts/check-release-surfaces.mjs`
- Test: `scripts/check-source-alignment.mjs`
- Test: browser surfaces under `site/`

**Interfaces:**
- Consumes: Tasks 1–2 release candidate
- Produces: local qualification evidence for commit/tag admission

- [ ] Run lint, build, test, release lock, JavaScript syntax, embedded-script parsing, JSON parsing, mirror parity, digest/manifest checks, and `git diff --check`.
- [ ] Render the verifier and Offline Studio in a real browser; inspect snapshots and console errors.
- [ ] Confirm main source paths remain clean and the exact source commit is still addressable.

### Task 4: Seal local release history

**Files:**
- Modify: Git history only

**Interfaces:**
- Consumes: a fully qualified Task 3 candidate
- Produces: detailed standalone release commit and annotated standalone tag; private release/tag remains external read-only evidence

- [ ] Commit with a complete title/body covering source, archive, preserved primitives, checks, and open boundaries.
- [ ] Create an annotated standalone `v128.0.0` tag and verify the existing private `v128.0.0` release/tag without modifying `/receiz`.
- [ ] Re-run release lock and tests from the committed state; verify clean standalone status and both tag targets.
- [ ] Do not push or create a GitHub release.

### Task 5: Remove GitHub Pages deployment

**Files:**
- Delete: `.github/workflows/pages.yml`
- Modify: `scripts/check-source-alignment.mjs`
- Modify: `docs/DEPLOYMENT.md`, `docs/source-alignment.md`, `CHANGELOG.md`

**Interfaces:**
- Consumes: the qualified v128 standalone release
- Produces: one GitHub CI verification check with no Pages deployment path

- [x] Add a release check that fails while the Pages workflow exists.
- [x] Remove the Pages workflow while retaining `.github/workflows/ci.yml`.
- [x] Update deployment and source-alignment documentation to state the verification-only boundary.
- [x] Re-run the complete v128 release checks, commit the correction, and move only this repository's local annotated `v128.0.0` tag to the final commit.
