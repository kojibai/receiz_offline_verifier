# Receiz v119 Standalone Release Lock Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Promote only the standalone offline-verifier repository to Receiz v119.0.0, preserve the exact Offline Note custody release archive, qualify the local verifier distribution, and create a local release commit and annotated tag without pushing.

**Architecture:** Treat `/Users/bjklock/Kai-Turah/receiz` HEAD `dbf016285` as a read-only, unpushed coordinated candidate rather than published evidence. Mirror its canonical v119 records into both standalone archive trees, retain local `v118.0.0` commit `f34aab0` as the immutable standalone predecessor, advance only standalone identity surfaces and release-lock contracts, and keep server/database/session/global projection beneath exact artifact and custody truth.

**Tech Stack:** Static HTML, service worker JavaScript, Node.js release-lock scripts, Markdown/JSON release records, pnpm, and Git annotated tags.

## Global Constraints

- Modify only `/Users/bjklock/Kai-Turah/receiz_offline_verifier`.
- Version and ruleset are exactly `119.0.0`; compatibility is exactly `>=119.0.0 <120.0.0`.
- Registry digest is exactly `49c167a437ec7c0e486412dd62c54af4abdf94eda1ebc18d263a027d105cecd9`.
- Registry predecessor is exactly `c284bd39a891c1a828b532523bd548507570819c32e307d79b8043f06d2d3360`.
- Operation matrix digest is exactly `53cf9d6862b2396e2fe7864f8607c00c4e3b6e31b082ab5c5c8dff088fcb52c1`.
- Durable proof memory remains first admission only, then append forever.
- Exact verified Reserve subtraction, equal whole-value held-bound Note genesis, one-use exact-head consumption, and receiver-local Settlement remain stronger than server, database, chain, session, or publication state.
- Unqualified installations retain canonical verification but cannot create, receive, activate, or Offline Send transferable Notes.
- Do not claim package publication, deployment, production smoke, production device-profile qualification, signed attestation, or upstream push/tag unless independently observed.
- Preserve user-authored release files and label edits unless a local release-lock correction is required.

---

### Task 1: Complete the standalone v119 archive

**Files:**
- Create or modify: `docs/releases/v119.0.0*`, `releases/v119.0.0*`

**Interfaces:**
- Consumes: canonical upstream v119 records, 85-law registry, custody compatibility matrix, and exact Git candidate boundary.
- Produces: byte-identical standalone archive mirrors with explicit upstream/local evidence boundaries.

- [x] Mirror the release, checklist, process, product truth, regression lessons, history, compatibility, registry, and planning records.
- [x] Record upstream local candidate `dbf016285` and local v118 predecessor `f34aab0` without conflating histories.
- [x] Preserve production device qualification, attestation, package, deployment, smoke, and upstream push/tag as unperformed evidence dimensions.
- [x] Verify all relative Markdown links resolve.

### Task 2: Promote governed standalone surfaces

**Files:**
- Modify: `package.json`, `AGENTS.md`, `README.md`, `RELEASE_NOTES.md`, `CHANGELOG.md`
- Modify: current doctrine headers, `docs/README.md`, and governance index
- Modify: `apps/*.html`, `site/index.html`, `site/sw.js`
- Modify: `scripts/check-release-surfaces.mjs`

**Interfaces:**
- Consumes: exact v119 version, registry, matrix, range, custody law, and archive paths.
- Produces: one coherent standalone v119 identity and executable release lock.

- [x] Advance standalone labels and cache epochs to `119.0.0` without verifier logic changes.
- [x] Advance current documentation pointers while keeping v118 immutable history.
- [x] Require all v119 records, exact 85-law registry identity, matrix/range identity, custody boundary, and mirror parity.
- [x] Run `git diff --check`.

### Task 3: Qualify the exact candidate

**Files:**
- Modify: mirrored v119 checklist only to add observed standalone evidence.

**Interfaces:**
- Consumes: exact working tree after archive and surface promotion.
- Produces: locally observed standalone evidence without claiming production custody qualification.

- [x] Run `node scripts/check_release_lock.mjs 119.0.0`.
- [x] Run `pnpm lint`, `pnpm build`, and `pnpm release:lock 119.0.0`.
- [x] Verify archive parity, relative links, 85-law registry, matrix/range identity, predecessor/candidate boundaries, and clean formatting.
- [x] Mark only observed standalone checks complete.

### Task 4: Commit and tag locally

**Files:**
- Stage only reviewed standalone v119 release files.

**Interfaces:**
- Produces: one detailed local release commit and annotated `v119.0.0` tag.

- [ ] Audit the staged inventory and confirm no unstaged changes.
- [ ] Rerun every configured standalone gate on the exact staged candidate.
- [ ] Commit with a complete title/body covering custody primitives, evidence, and non-claims.
- [ ] Create annotated tag `v119.0.0` targeting the release commit.
- [ ] Verify clean tree, tag target, and remote divergence; do not push.
