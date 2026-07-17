# Receiz v106.0.0 Release Lock Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Promote the supplied Receiz v106.0.0 evidence into the independent offline verifier, align every current-release surface, verify the local release lock, and create a detailed local commit plus annotated tag without publication, deployment, or push.

**Architecture:** The supplied `releases/v106.0.0*` files remain the canonical upstream evidence set and are mirrored byte-for-byte into `docs/releases/`. The verifier adds its required performance-findings and invariant-register records, while package metadata, static verifier labels, service-worker identity, governance pointers, and public documentation advance together to `106.0.0`. Sealed proof objects and verified local truth remain stronger than registry, SDK, MCP, AI-skill, migration, release, session, server, or display state.

**Tech Stack:** Markdown and JSON release artifacts, static HTML, JavaScript service worker and Node.js release-lock scripts, pnpm, Git.

## Global Constraints

- Release identity is exactly `v106.0.0`, dated `2026-07-16`.
- The only new main-application behavior is owner-local Showcase/PBI/Live Player admission continuity; the Sports safe-area change is inherited regression repair.
- The coordinated package set is `@receiz/sdk@106.0.0`, `@receiz/mcp-server@106.0.0`, and `@receiz/ai-skills@106.0.0`; the independent verifier stays separately pinned and lower authority than sealed proof objects.
- Durable proof memory remains **first admission only, then append forever**.
- Publication, production deployment, database mutation, remote push, and production verification are out of scope.
- Supplied machine-readable artifacts must remain valid JSON and canonical/archival release copies must be identical.

---

### Task 1: Promote the Complete v106 Evidence Set

**Files:**
- Create: `docs/releases/v106.0.0*`
- Modify: `releases/v106.0.0.md`
- Modify: `releases/v106.0.0-{product-truth,checklist,process,regression-lessons,commit-history}.md`

**Interfaces:**
- Consumes: fourteen supplied v106 release artifacts and the repository release-lock checker.
- Produces: canonical release evidence with mandatory verifier cross-links and release-lock clauses.

- [ ] **Step 1: Validate every supplied JSON artifact with `jq -e .`.**
- [ ] **Step 2: Mirror all supplied v106 artifacts into `docs/releases/`.**
- [ ] **Step 3: Add links to performance findings and the invariant register where the verifier lock requires them.**
- [ ] **Step 4: Add explicit `Release-Lock Requirement` clauses to regression lessons and commit history.**
- [ ] **Step 5: Confirm each canonical file is byte-identical to its archival `releases/` peer.**

### Task 2: Add Verifier Governance Records

**Files:**
- Create: `docs/releases/v106.0.0-performance-findings.md`
- Create: `docs/releases/v106.0.0-invariant-register.md`
- Create: `releases/v106.0.0-performance-findings.md`
- Create: `releases/v106.0.0-invariant-register.md`

**Interfaces:**
- Consumes: v106 product truth, compatibility, performance budget, evidence, migration contract, and prior verifier invariants.
- Produces: explicit constitutional-performance boundaries and protected-surface law required by `release:lock`.

- [ ] **Step 1: Record deterministic local constitutional evaluation and zero-network/database conformance boundaries.**
- [ ] **Step 2: Lock registry digest parity, independent replay, command admission, owner-local append continuity, exact package coordination, and non-authority of release evidence.**
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
- Modify: `site/index.html`
- Modify: `site/sw.js`
- Modify: `apps/offline-verifier.html`
- Modify: `apps/offline-record-seal.html`
- Modify: `apps/offline-sports-card-verifier.html`
- Modify: `apps/offline-settlement.html`

**Interfaces:**
- Consumes: `106.0.0` and v106 release truth.
- Produces: one coordinated public verifier identity with direct primitive naming.

- [ ] **Step 1: Advance current version markers from 105.0.0 to 106.0.0 across checker-governed surfaces.**
- [ ] **Step 2: Rewrite current README, release notes, changelog, and documentation-map narrative for the v106 constitutional enforcement system.**
- [ ] **Step 3: Keep prior release history intact while eliminating stale v105 current-release claims.**
- [ ] **Step 4: Confirm static verifier and service-worker labels resolve to v106.0.0.**

### Task 4: Verify and Seal the Local Release

**Files:**
- Modify: `docs/releases/v106.0.0-checklist.md`
- Modify: `releases/v106.0.0-checklist.md`

**Interfaces:**
- Consumes: the completed release diff.
- Produces: fresh local verification evidence, a detailed commit, and annotated local tag `v106.0.0`.

- [ ] **Step 1: Run `node scripts/check_release_lock.mjs 106.0.0`; expect exit 0.**
- [ ] **Step 2: Run `pnpm lint`; expect exit 0.**
- [ ] **Step 3: Run `pnpm build`; expect exit 0.**
- [ ] **Step 4: Run `pnpm release:lock 106.0.0`; expect exit 0.**
- [ ] **Step 5: Run JSON validation, canonical/archive comparisons, stale-current-narrative scan, and `git diff --check`; expect no failures.**
- [ ] **Step 6: Record the verifier-local passing gates in both checklist copies, rerun the full verification set, and inspect the staged diff.**
- [ ] **Step 7: Commit with a complete release title and descriptive body, then create annotated tag `v106.0.0`; do not push.**

## Self-Review

- Spec coverage: supplied application scope, registry-bound enforcement, local admission restoration, package coordination, independent replay, migration/evidence artifacts, proof-memory law, and no-publication boundary are each represented.
- Placeholder scan: no deferred implementation markers or unspecified checks remain.
- Type consistency: release version is consistently `106.0.0`, annotated tag is consistently `v106.0.0`, and the registry digest is preserved as a declared canonical payload digest rather than conflated with the raw file SHA-256.
