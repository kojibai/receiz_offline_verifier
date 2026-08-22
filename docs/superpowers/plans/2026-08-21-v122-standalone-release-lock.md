# v122 Standalone Release Lock Implementation Plan

> **For Codex:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Lock and qualify the standalone Receiz offline verifier repository as v122.0.0, then create a detailed local release commit and annotated tag without pushing or claiming external mutations.

**Architecture:** Preserve the standalone verifier implementation and settled first-paint paths while advancing coordinated release identity and archiving the canonical v122 records. The release checker is the executable lock: it binds visible versions, doctrine carry-forward markers, mirror parity, registry identity, compatibility range, and the observed upstream implementation source.

**Tech Stack:** Static HTML/service worker, Node.js release scripts, Markdown/JSON release records, pnpm, Git.

---

## Task 1: Archive the canonical release evidence

**Files:**
- Create: `releases/v122.0.0*`
- Modify: `docs/releases/v122.0.0.md`
- Modify: `docs/releases/v122.0.0-checklist.md`
- Modify: `docs/releases/v122.0.0-process.md`
- Modify: `docs/releases/v122.0.0-commit-history.md`
- Modify: `docs/releases/v122.0.0-compatibility-matrix.md`

1. Preserve the supplied canonical application records and add a precise standalone repository boundary.
2. Record upstream implementation source `e5c156800b5b27cf9b16a9f9d9b6ba2b97105124`, standalone predecessor `d5ce67805d721d73ca300a22647872abffbdaeb9`, compatibility `>=122.0.0 <123.0.0`, registry digest `ed65956a16dd5f0d76d04db2f4a651fc43eb0a71cef64afd53576aa782dc9896`, and predecessor digest `29a793a5bcc0195ab41d30614d37ac51df66023af354fa4335460764eb0af413`.
3. Keep publication, deployment, migration execution, production smoke, attestation, push, and upstream application tagging explicitly unclaimed.
4. Mirror all eleven v122 records byte-for-byte into `releases/`.

## Task 2: Promote standalone release identity

**Files:**
- Modify: `package.json`
- Modify: `AGENTS.md`
- Modify: `README.md`
- Modify: `RELEASE_NOTES.md`
- Modify: `CHANGELOG.md`
- Modify: `docs/README.md`
- Modify: `docs/FORMAT.md`
- Modify: `docs/governance/README.md`
- Modify: doctrine carry-forward records under `docs/`
- Modify: `site/index.html`
- Modify: `site/sw.js`
- Modify: `apps/offline-verifier.html`
- Modify: `apps/offline-record-seal.html`
- Modify: `apps/offline-sports-card-verifier.html`
- Modify: `apps/offline-settlement.html`
- Modify: `scripts/check-release-surfaces.mjs`

1. Advance current standalone version labels and cache epochs from 121.0.0 to 122.0.0.
2. Carry the established Receiz primitive law forward without altering verifier behavior.
3. Name the v122 boundary directly: proof objects remain authority; SDK/API/database/MCP/AI are subordinate coordination mechanics; Phi moves only through Settlement or Reserve; USD is display projection.
4. Update the release checker for all eleven mirrored records, the 109-law registry, exact identity digests, compatibility range, and upstream/standalone commit boundaries.

## Task 3: Qualify the release candidate

**Files:**
- Modify: `docs/releases/v122.0.0-checklist.md`
- Modify: `releases/v122.0.0-checklist.md`

1. Run `node scripts/check_release_lock.mjs 122.0.0`.
2. Run `pnpm lint`, `pnpm build`, and `pnpm release:lock 122.0.0`.
3. Verify release archive parity, relative release links, registry digest/109-law identity, exact compatibility, repository boundaries, and `git diff --check`.
4. Mark only the standalone local checks actually observed passing; leave all external actions unchecked.
5. Stage the exact release set and rerun the gates against the staged candidate with no unstaged differences.

## Task 4: Commit and tag locally

**Files:**
- Commit: the exact staged v122 standalone release set

1. Create a detailed release commit describing the authority boundary, archived evidence, coordinated surfaces, checks, and explicit non-claims.
2. Create annotated tag `v122.0.0` at the release commit.
3. Verify clean worktree, tag target, branch divergence, and the release lock after commit.
4. Do not push, publish packages, deploy, execute production migration, or claim production verification.
