# Receiz v118 Standalone Release Lock Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Promote only the standalone offline-verifier repository to Receiz v118.0.0, preserve the complete coordinated release archive, qualify the exact local candidate, and create a local release commit and annotated tag without pushing.

**Architecture:** Treat `/Users/bjklock/Kai-Turah/receiz` release commit `05e9ddc05` as read-only upstream evidence. Mirror its canonical v118 release records into both standalone archive trees, retain local `v117.0.0` commit `3219ed1` as the immutable standalone predecessor, advance only standalone labels and release-lock contracts, and keep publication/deployment/signing claims outside the local boundary.

**Tech Stack:** Static HTML, service worker JavaScript, Node.js release-lock scripts, Markdown/JSON release records, pnpm, and Git annotated tags.

## Global Constraints

- Modify only `/Users/bjklock/Kai-Turah/receiz_offline_verifier`.
- Version and ruleset are exactly `118.0.0`; compatibility is exactly `>=118.0.0 <119.0.0`.
- Registry digest is exactly `c284bd39a891c1a828b532523bd548507570819c32e307d79b8043f06d2d3360`.
- Registry predecessor is exactly `598ee0fa4dc31b8394fdd2b7b8fe713c8ee8c4b33e6ecdd92101a1a93d8787a8`.
- Operation matrix digest is exactly `153b2472830567ec3b445c2c1b4102e4c036ed4c45cc374d40d0079096a40f54`.
- Durable proof memory remains first admission only, then append forever.
- V119 planning remains unimplemented and carries no v118 authority or release evidence.
- Do not claim npm publication, remote push, GitHub signing, deployment, production mutation, or production smoke unless independently observed.
- Preserve user-authored release files and edits unless a local release-lock correction is required.

---

### Task 1: Complete the standalone release archive

**Files:**
- Create or modify: `docs/releases/v118.0.0*`, `releases/v118.0.0*`
- Create: `docs/releases/v119.0.0-planning.md`, `releases/v119.0.0-planning.md`

**Interfaces:**
- Consumes: canonical upstream v118 records and exact Git release boundary.
- Produces: byte-identical standalone archive mirrors with explicit upstream/local evidence boundaries.

- [x] Mirror all v118 release, registry, lineage, compatibility, arc, process, checklist, and history records.
- [x] Mirror the v119 planning-only record and retain the v118 historical planning pointer.
- [x] Record upstream release commit `05e9ddc05` and local v117 predecessor `3219ed1` without conflating histories.
- [x] Verify all relative Markdown links resolve.

### Task 2: Promote governed standalone surfaces

**Files:**
- Modify: `package.json`, `AGENTS.md`, `README.md`, `RELEASE_NOTES.md`, `CHANGELOG.md`
- Modify: current doctrine headers, `docs/README.md`, and governance index
- Modify: `apps/*.html`, `site/index.html`, `site/sw.js`
- Modify: `scripts/check-release-surfaces.mjs`

**Interfaces:**
- Consumes: exact v118 identity, registry, matrix, range, and archive paths.
- Produces: one coherent standalone v118 identity and executable release lock.

- [x] Advance standalone labels and cache epochs to `118.0.0` without verifier logic changes.
- [x] Advance current documentation pointers while keeping v117 immutable history.
- [x] Require all current archive records, exact registry identity, matrix digest, v119 deferral, and mirror parity.
- [x] Run `git diff --check`.

### Task 3: Qualify the exact candidate

**Files:**
- Modify: mirrored v118 checklist only to add observed standalone evidence.

**Interfaces:**
- Consumes: exact working tree after archive and surface promotion.
- Produces: locally observed standalone evidence with upstream/external boundaries intact.

- [x] Run `node scripts/check_release_lock.mjs 118.0.0`.
- [x] Run `pnpm lint`, `pnpm build`, and `pnpm release:lock 118.0.0`.
- [x] Verify archive parity, relative links, 80-law registry, matrix/range identity, predecessor tags, and clean formatting.
- [x] Mark only observed standalone checks complete.

### Task 4: Commit and tag locally

**Files:**
- Stage only reviewed standalone v118 release files.

**Interfaces:**
- Produces: one detailed local release commit and annotated `v118.0.0` tag.

- [ ] Audit the staged inventory and confirm no unstaged changes.
- [ ] Rerun every configured standalone gate on the exact staged candidate.
- [ ] Commit with a complete title/body covering primitives, evidence, and non-claims.
- [ ] Create annotated tag `v118.0.0` targeting the release commit.
- [ ] Verify clean tree, tag target, and remote divergence; do not push.
