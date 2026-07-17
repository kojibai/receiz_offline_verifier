# Receiz v107.0.0 Release Lock Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Promote the complete supplied Receiz v107.0.0 evidence set into the independent offline verifier, align every current-release surface, verify the local release lock, and create a detailed local commit plus annotated tag without publication, deployment, or push.

**Architecture:** The supplied `releases/v107.0.0*` artifacts remain the upstream release-evidence set and are mirrored byte-for-byte into `docs/releases/` after verifier-required cross-link additions. The verifier adds its mandatory performance-findings and invariant-register records, while package metadata, static entrypoints, service-worker identity, governance pointers, and public documentation advance together to `107.0.0`. Sealed proof objects, signed identity, verified ownership/settlement, canonical receipts, proof heads, and append-only history remain stronger than SDK, MCP, AI-skill, emulator, generator, migration, registry, cache, server, session, or release state.

**Tech Stack:** Markdown, JSON and digest release artifacts, static HTML, JavaScript service worker and Node.js release-lock scripts, pnpm, Git.

## Global Constraints

- Release identity is exactly `v107.0.0`, dated `2026-07-17`.
- Coordinated packages and runtime surfaces are exactly `107.0.0` and bind to declared registry digest `4d0caa6172a69c3bf5817c1c35db5630e555b5d6d824091d45a90fb426b86ef6`.
- The key remains the identity; username rename is an append to that identity and releases the prior username only after canonical commitment.
- Raw profile media and existing media proof references share one atomic profile/media/proof-head append.
- Generic bearer ownership verifies the enclosing artifact before embedded material.
- A queued offline command is a signed proposal with `globallyCommitted: false`; only a verified canonical receipt establishes commitment.
- Known verified local truth paints immediately and synchronization may only discover verified additions after the known head.
- Durable proof memory remains **first admission only, then append forever**.
- Publication, production deployment, database mutation, remote push, and production verification are out of scope.
- Supplied JSON artifacts must remain valid and canonical/archival release copies must be identical.

---

### Task 1: Promote and Bind the Complete v107 Evidence Set

**Files:**
- Create: `docs/releases/v107.0.0*`
- Modify: `releases/v107.0.0.md`
- Modify: `releases/v107.0.0-{product-truth,checklist,process,regression-lessons,commit-history}.md`

**Interfaces:**
- Consumes: fifteen supplied v107 release artifacts and the repository release-lock checker.
- Produces: canonical release evidence with valid local links, mandatory verifier cross-links, and release-lock clauses.

- [ ] **Step 1: Validate all supplied JSON artifacts with `jq -e .` and inspect registry/threat/evidence schema identities.**
- [ ] **Step 2: Verify the digest sidecar and all digest-bearing documents agree on the declared canonical registry digest.**
- [ ] **Step 3: Mirror all supplied artifacts into `docs/releases/` and normalize release-document links for their directory context.**
- [ ] **Step 4: Add verifier performance/invariant links and `Release-Lock Requirement` clauses where required by the checker.**
- [ ] **Step 5: Confirm each canonical file is byte-identical to its archival peer.**

### Task 2: Add Verifier Governance Records

**Files:**
- Create: `docs/releases/v107.0.0-performance-findings.md`
- Create: `docs/releases/v107.0.0-invariant-register.md`
- Create: `releases/v107.0.0-performance-findings.md`
- Create: `releases/v107.0.0-invariant-register.md`

**Interfaces:**
- Consumes: v107 product truth, release notes, developer guide, migration, threat model, visual evidence, and prior verifier invariants.
- Produces: explicit developer-operation performance boundaries and protected-surface law required by `release:lock`.

- [ ] **Step 1: Record local-first projection, atomic profile/media/head work, deterministic queue and emulator behavior, and generator/package boundaries.**
- [ ] **Step 2: Lock same-key identity rename, commit-time uniqueness, enclosing-artifact ownership, verified-receipt projection, queued-not-committed semantics, registry parity, and exact package coordination.**
- [ ] **Step 3: State exact local checks and mandatory release-lock requirements.**
- [ ] **Step 4: Mirror both records into `releases/` and compare them byte-for-byte.**

### Task 3: Align Current Release Surfaces

**Files:**
- Modify: `package.json`
- Modify: `AGENTS.md`
- Modify: `README.md`
- Modify: `RELEASE_NOTES.md`
- Modify: `CHANGELOG.md`
- Modify: `docs/README.md`
- Modify: repository doctrine files enumerated by `scripts/check-release-surfaces.mjs`
- Modify: `scripts/check-release-surfaces.mjs`
- Modify: `site/index.html`
- Modify: `site/sw.js`
- Modify: `apps/offline-verifier.html`
- Modify: `apps/offline-record-seal.html`
- Modify: `apps/offline-sports-card-verifier.html`
- Modify: `apps/offline-settlement.html`

**Interfaces:**
- Consumes: v107 release truth and `107.0.0` identity.
- Produces: one coordinated public verifier identity with direct primitive naming and 2026-07-17 release date.

- [ ] **Step 1: Advance governed version/date markers from v106 to v107 across checker-controlled surfaces.**
- [ ] **Step 2: Rewrite current README, release notes, changelog, and documentation-map narrative for unified proof-native developer operations.**
- [ ] **Step 3: Preserve v106 as historical/migration lineage while eliminating stale v106 current-release claims.**
- [ ] **Step 4: Confirm static verifier and service-worker labels resolve to v107.0.0.**

### Task 4: Verify and Seal the Local Release

**Files:**
- Modify: `docs/releases/v107.0.0-checklist.md`
- Modify: `releases/v107.0.0-checklist.md`

**Interfaces:**
- Consumes: the completed release diff.
- Produces: fresh local verification evidence, a detailed commit, and annotated local tag `v107.0.0`.

- [ ] **Step 1: Run `node scripts/check_release_lock.mjs 107.0.0`; expect exit 0.**
- [ ] **Step 2: Run `pnpm lint`; expect exit 0.**
- [ ] **Step 3: Run `pnpm build`; expect exit 0.**
- [ ] **Step 4: Run `pnpm release:lock 107.0.0`; expect exit 0.**
- [ ] **Step 5: Run JSON validation, registry-digest parity, canonical/archive comparison, stale-current-narrative scan, link scan, and `git diff --check`; expect no failures.**
- [ ] **Step 6: Record verifier-local passing gates in both checklist copies, rerun all verification from the recorded candidate, and inspect the staged diff.**
- [ ] **Step 7: Commit with a complete release title and descriptive body, create annotated tag `v107.0.0`, and do not push.**

## Self-Review

- Spec coverage: identity/profile/media, portable continuity, generic bearer ownership, receipt/proof-head semantics, offline proposals, package/runtime coordination, registry binding, emulator/generator, migration, visual evidence, and external-action boundaries are represented.
- Placeholder scan: no deferred implementation markers or unspecified checks remain.
- Type consistency: release version is consistently `107.0.0`, annotated tag is `v107.0.0`, and the declared registry digest is preserved as a canonical payload digest rather than conflated with the raw JSON file hash.
