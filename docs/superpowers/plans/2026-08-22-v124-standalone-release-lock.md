# v124 Standalone Release Lock Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Lock and qualify the standalone Receiz offline verifier repository as v124.0.0, preserve the existing Offline Studio local-proof primitive work, and create a detailed local release commit and annotated tag without pushing or claiming external mutations.

**Architecture:** Archive the immutable v124 qualification records from the dedicated implementation lineage and advance the standalone release identity without importing production runtime code. Extend the fail-closed release checker for the expanded 17-record book, exact registry and operation-matrix identities, historical provenance, current public labels, and the Offline Studio local-proof service-worker epoch.

**Tech Stack:** Static HTML/service worker, browser WebCrypto/IndexedDB proof primitives, Node.js release scripts, Markdown/JSON release records, pnpm, Git.

**Spec:** `docs/releases/v124.0.0.md`

## Global Constraints

- Release date: August 22, 2026.
- Version and ruleset: `124.0.0`.
- Release theme: Reality Becomes Infrastructure.
- Immutable v124 qualification source: `906376897c968afa0de88e4cdfca8ea4c11d58c9`.
- Registry digest: `d02429151b0bcebdaeb89485792e377afc55130f9a25e07982c1c88221314247`.
- Immutable predecessor registry: `945a581d1fc49c2dc18fbe8c129771ef464b8a58b96188bce561e88ae8b6ceeb`.
- Application operation matrix: `540d1c1bf39f1b288b257c79a6e020bdcc5e587fc9b7dbf6b7aaa5d082e20ad5` with 53 operations.
- SDK/MCP compatibility: `>=124.0.0 <125.0.0`.
- Constitutional registry law count: 124.
- The sealed proof object remains portable storage and continuity authority.
- Exact authenticated heads remain execution and replay authority.
- Servers, databases, sessions, SDK projections, and network operators remain subordinate coordination mechanics.
- Live Kai is derived from canonical genesis through the existing phi-exact ties-to-even bridge; UTC is observation, not authority.
- Existing v123 whole-pulse fields retain their meaning; micro-pulse precision requires a versioned schema.
- Offline Studio local identity and canonical Signature V4 enrollment must not block deterministic first paint.
- Existing application/principal admission remains unchanged.
- Do not claim package publication, production migration, deployment, smoke, scale, adoption, attestation, upstream merge/tag, or push.

---

### Task 1: Archive the expanded canonical v124 release book

**Files:**
- Create: `releases/v124.0.0*`
- Modify: `docs/releases/v124.0.0.md`
- Modify: `docs/releases/v124.0.0-checklist.md`
- Modify: `docs/releases/v124.0.0-process.md`
- Modify: `docs/releases/v124.0.0-commit-history.md`
- Modify: `docs/releases/v124.0.0-compatibility-matrix.md`
- Modify: `docs/releases/v124.0.0-evidence-status.md`

**Interfaces:**
- Consumes: 17 supplied records matching commit `906376897c968afa0de88e4cdfca8ea4c11d58c9` byte-for-byte.
- Produces: 17 byte-identical canonical/archive pairs with exact standalone provenance and external non-claims.

- [ ] Record immutable v124 qualification source, release-branch boundary, and standalone predecessor `3fca25243b36564ba9282b3e5bfe6b1a216a0870`.
- [ ] Add the standalone qualification boundary without rewriting the implementation ledger.
- [ ] Keep all production, publication, deployment, adoption, scale, attestation, merge, tag, and push evidence explicitly separate.
- [ ] Mirror all 17 records byte-for-byte into `releases/`.

### Task 2: Advance standalone release identity and preserve local proof primitives

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
- Preserve and include: `apps/offline-record-seal.html`
- Modify: `apps/offline-sports-card-verifier.html`
- Modify: `apps/offline-settlement.html`
- Modify: `scripts/check-release-surfaces.mjs`

**Interfaces:**
- Consumes: exact v124 identities and existing uncommitted Offline Studio local-proof primitive changes.
- Produces: coordinated standalone labels, non-blocking local identity/Signature V4 preparation, and an executable release lock.

- [ ] Advance current standalone version labels and cache epochs to `124.0.0`.
- [ ] Preserve `ensureLocalProofPrimitives()` as local Receiz ID plus canonical Signature V4 enrollment, with rejected preflight contained after event binding.
- [ ] Keep first paint and known proof truth independent of enrollment, network, session, and service-worker work.
- [ ] Carry proof, identity, ownership, Settlement, Reserve, and offline-verification doctrine forward without generic renaming.
- [ ] Lock all 17 records, registry digest/predecessor/124 laws, matrix digest/53 operations, compatibility, source commits, archive parity, and current surfaces.

### Task 3: Qualify the exact final candidate

**Files:**
- Modify: `docs/releases/v124.0.0-checklist.md`
- Modify: `releases/v124.0.0-checklist.md`

**Interfaces:**
- Consumes: complete candidate from Tasks 1–2.
- Produces: truthful local evidence with all external evidence dimensions unchanged.

- [ ] Run `node scripts/check_release_lock.mjs 124.0.0`.
- [ ] Run `pnpm lint`, `pnpm build`, and `pnpm release:lock 124.0.0`.
- [ ] Verify all 17 archive pairs, relative release links, registry/matrix identities, immutable source provenance, and `git diff --check`.
- [ ] Inspect the Offline Studio preflight ordering and required local-proof functions in the exact candidate.
- [ ] Mark only standalone local evidence actually observed passing.
- [ ] Stage the exact v124 release set and rerun every gate with no unstaged tracked differences.

### Task 4: Commit and tag locally

**Files:**
- Commit: exact staged v124 standalone release set.

**Interfaces:**
- Consumes: green final staged candidate.
- Produces: one detailed release commit and annotated local `v124.0.0` tag at the same commit.

- [ ] Create a detailed commit stating changed surfaces, preserved primitives, risk boundary, checks, and no-downgrade guarantees.
- [ ] Create annotated local tag `v124.0.0`.
- [ ] Re-run the release lock and verify clean worktree, tag target, and branch divergence.
- [ ] Do not push, publish, deploy, migrate, smoke, attest, merge upstream, or claim production/scale/adoption evidence.
