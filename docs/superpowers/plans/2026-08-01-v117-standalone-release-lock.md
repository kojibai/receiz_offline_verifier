# Receiz v117 Standalone Release Lock Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Promote only the standalone offline-verifier repository to the coordinated Receiz v117 identity, preserve the supplied release archive, qualify the exact local candidate, and create a local release commit and annotated tag without pushing.

**Architecture:** Treat the main Receiz repository as the source of the already-implemented product and package evidence, but do not modify or release it. In this repository, mirror the canonical v117 records, preserve v116 as immutable history, advance only standalone version surfaces and release-law pointers, and keep upstream-only gates and external actions explicitly outside the local qualification claim.

**Tech Stack:** Static HTML, service worker JavaScript, Node.js release-lock scripts, Markdown release records, pnpm, and Git annotated tags.

## Global Constraints

- Modify only `/Users/bjklock/Kai-Turah/receiz_offline_verifier`.
- Version identity is exactly `117.0.0`; compatibility is exactly `>=117.0.0 <118.0.0`.
- Registry digest is exactly `598ee0fa4dc31b8394fdd2b7b8fe713c8ee8c4b33e6ecdd92101a1a93d8787a8` and chains to v116 digest `9bf61fcf4541edf565bb2ded252e35a976a3ca7c9176dea0f1ffac74ce192a80`.
- Durable proof memory remains first admission only, then append forever.
- The v118 orchestration record is planning only and is not v117 implementation or evidence.
- Do not claim app/package qualification, npm publication, remote push, deployment, database mutation, production smoke verification, or attestation unless actually performed here.
- Preserve existing user-authored v117 files and edits unless a local release-lock correction is required.

---

### Task 1: Complete the standalone v117 release archive

**Files:**
- Modify: `docs/releases/v117.0.0*.md`
- Modify: `releases/v117.0.0*.md`
- Create: `docs/releases/v118.0.0-planning.md`
- Create: `releases/v118.0.0-planning.md`

**Interfaces:**
- Consumes: supplied canonical v117 release records and registry files.
- Produces: byte-identical public/private archive mirrors with honest standalone qualification boundaries.

- [x] Verify all supplied v117 records and registry files are mirrored byte-for-byte.
- [x] Add the v118 planning-only record required by the v117 links.
- [x] Add a standalone evidence section that distinguishes local checks from upstream application/package gates.
- [x] Verify every relative Markdown link resolves.

### Task 2: Promote governed standalone surfaces

**Files:**
- Modify: `package.json`, `AGENTS.md`, `README.md`, `RELEASE_NOTES.md`, `CHANGELOG.md`
- Modify: `docs/README.md`, current doctrine headers, and governance index
- Modify: `apps/*.html`, `site/index.html`, `site/sw.js`
- Modify: `scripts/check-release-surfaces.mjs`

**Interfaces:**
- Consumes: v117 version, registry, predecessor, compatibility, and archive paths.
- Produces: one coherent standalone current-release identity and an executable local lock.

- [x] Advance current standalone labels and service-worker epochs to `117.0.0` without changing verifier behavior.
- [x] Advance current documentation pointers while retaining historical v116 references as history.
- [x] Update the release lock to require the v117 archive, v118 deferral, registry chain, and exact evidence boundaries.
- [x] Run `git diff --check` before qualification.

### Task 3: Qualify the exact standalone candidate

**Files:**
- Modify: `docs/releases/v117.0.0-checklist.md`
- Modify: `releases/v117.0.0-checklist.md`

**Interfaces:**
- Consumes: the exact working tree after Tasks 1 and 2.
- Produces: observed local evidence only; upstream and external gates remain unchecked.

- [x] Run `node scripts/check_release_lock.mjs 117.0.0`.
- [x] Run `pnpm lint`, `pnpm build`, and `pnpm release:lock 117.0.0`.
- [x] Verify archive parity, registry structure/digest record, relative links, v116 predecessor tag, and clean patch formatting.
- [x] Mark only observed standalone checks complete and preserve exact non-claims.

### Task 4: Commit and tag locally

**Files:**
- Stage only reviewed v117 standalone release files.

**Interfaces:**
- Produces: one detailed local release commit and one annotated `v117.0.0` tag.

- [ ] Audit the staged inventory and confirm there are no unstaged changes.
- [ ] Rerun the full standalone release lock on the staged tree.
- [ ] Commit with a complete title and body describing primitives, evidence, and non-claims.
- [ ] Create annotated tag `v117.0.0` targeting the release commit.
- [ ] Verify the clean tree, tag target, and divergence from `origin/main`; do not push.
