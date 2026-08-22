# v123 Standalone Release Lock Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Lock and qualify the standalone Receiz offline verifier repository as v123.0.0, then create a detailed local release commit and annotated tag without pushing or claiming external mutations.

**Architecture:** Preserve canonical offline verification and settled first-paint behavior while advancing only standalone release identity and archival evidence. Extend the executable release lock so visible versions, doctrine markers, registry identity, operation matrix, compatibility, source provenance, and byte-identical archive mirrors fail closed on drift.

**Tech Stack:** Static HTML/service worker, Node.js release scripts, Markdown/JSON release records, pnpm, Git.

**Spec:** `docs/releases/v123.0.0.md`

## Global Constraints

- Release date: August 22, 2026.
- Version and ruleset: `123.0.0`.
- Registry digest: `945a581d1fc49c2dc18fbe8c129771ef464b8a58b96188bce561e88ae8b6ceeb`.
- Immutable predecessor registry: `ed65956a16dd5f0d76d04db2f4a651fc43eb0a71cef64afd53576aa782dc9896`.
- Application operation matrix: `e08cec3e3ad22c20ddd6c08169ece19f094c366214d6d6b4dc432cd97558e2c5` with 36 operations.
- SDK/MCP compatibility: `>=123.0.0 <124.0.0`.
- Constitutional registry law count: 115.
- The enclosing proof object and edge verification remain authority.
- Consent and grants remain narrow, application-bound, short-lived, and subordinate to proof identity.
- Phi moves only through distinct Settlement or Reserve rails; USD remains display-only.
- Stable v122 protocol names stay unchanged where they are wire identities.
- Existing application first-paint, identity, ownership, settlement, public-proof, and offline-verification behavior remains unchanged.
- Do not claim package publication, production migration, deployment, smoke, attestation, upstream application tag, or push.

---

### Task 1: Archive canonical v123 evidence

**Files:**
- Create: `releases/v123.0.0*`
- Modify: `docs/releases/v123.0.0.md`
- Modify: `docs/releases/v123.0.0-checklist.md`
- Modify: `docs/releases/v123.0.0-process.md`
- Modify: `docs/releases/v123.0.0-commit-history.md`
- Modify: `docs/releases/v123.0.0-compatibility-matrix.md`

**Interfaces:**
- Consumes: canonical records matching `/Users/bjklock/Kai-Turah/receiz/docs/releases/v123.0.0*`.
- Produces: eleven byte-identical standalone archive pairs with exact source and evidence boundaries.

- [ ] Record latest committed application candidate `1b3d9ad2a7739f5bc2ffff28103ffd3bc4f30e59`, pushed base `fc6ef96cedd3ed6b30da7576a53a5c2977645f82`, and standalone predecessor `64ca5dc3884234f1e1c146f042819eca05ff95c3`.
- [ ] Add the exact standalone qualification boundary without rewriting application history.
- [ ] Preserve all external actions as separately unclaimed evidence dimensions.
- [ ] Mirror all eleven records byte-for-byte into `releases/`.

### Task 2: Advance standalone v123 identity

**Files:**
- Modify: `package.json`
- Modify: `AGENTS.md`
- Modify: `README.md`
- Modify: `RELEASE_NOTES.md`
- Modify: `CHANGELOG.md`
- Modify: `docs/README.md`
- Modify: `docs/FORMAT.md`
- Modify: `docs/governance/README.md`
- Modify: doctrine status records under `docs/`
- Modify: `site/index.html`
- Modify: `site/sw.js`
- Modify: `apps/offline-verifier.html`
- Modify: `apps/offline-record-seal.html`
- Modify: `apps/offline-sports-card-verifier.html`
- Modify: `apps/offline-settlement.html`
- Modify: `scripts/check-release-surfaces.mjs`

**Interfaces:**
- Consumes: v123 identity constants and canonical release records from Task 1.
- Produces: coordinated standalone version labels and an executable fail-closed release lock.

- [ ] Advance current standalone version labels and cache epochs to `123.0.0`.
- [ ] Carry existing proof, identity, ownership, Settlement, Reserve, and first-paint doctrine forward without implementation changes.
- [ ] Name Intent Becomes Lawful Action directly without turning tokens, rows, receipts, MCP results, AI prose, or UI into authority.
- [ ] Lock registry digest/predecessor/115-law count, matrix digest/36 operations, compatibility, source commits, archive parity, and required release surfaces.

### Task 3: Qualify the final candidate

**Files:**
- Modify: `docs/releases/v123.0.0-checklist.md`
- Modify: `releases/v123.0.0-checklist.md`

**Interfaces:**
- Consumes: complete release candidate from Tasks 1–2.
- Produces: truthful local evidence with external mutations still unchecked.

- [ ] Run `node scripts/check_release_lock.mjs 123.0.0`.
- [ ] Run `pnpm lint`, `pnpm build`, and `pnpm release:lock 123.0.0`.
- [ ] Verify archive parity, relative links, registry/matrix identity, upstream and standalone boundaries, and `git diff --check`.
- [ ] Mark only the standalone local evidence actually observed passing.
- [ ] Stage the exact release set and rerun every local gate with no unstaged tracked differences.

### Task 4: Commit and tag locally

**Files:**
- Commit: exact staged v123 standalone release set.

**Interfaces:**
- Consumes: green final staged candidate.
- Produces: one detailed release commit and annotated local `v123.0.0` tag at the same commit.

- [ ] Create a detailed commit describing changed surfaces, preserved primitives, risk boundaries, checks, and no-downgrade guarantees.
- [ ] Create annotated local tag `v123.0.0`.
- [ ] Re-run the release lock and verify clean worktree, tag target, and branch divergence.
- [ ] Do not push, publish, deploy, migrate, attest, or claim production smoke.
