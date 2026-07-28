# Receiz v114.0.0 Release Lock Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Publish and locally seal the Receiz v114.0.0 standalone-verifier release records and distribution identity while preserving the exact composite-proof authority and all unresolved external evidence boundaries.

**Architecture:** Treat the supplied upstream release book as candidate evidence for the profile/economy sealed-composite architecture, then add only the standalone verifier records required by this repository’s release contract. Mirror every canonical release record into `docs/releases`, promote verifier-visible distribution surfaces together, and make the release checker enforce the new registry, composite-proof records, performance lock, invariant lock, and evidence limitations.

**Tech Stack:** Static HTML/CSS/JavaScript, Node.js release-lock scripts, Markdown release records, JSON constitutional registry, pnpm, Git.

## Global Constraints

- Release and standalone distribution identity is exactly `114.0.0`.
- The v114 constitutional registry digest is exactly `ae912154d97b695464c3a19361bceb9440bc5d703a1d9129edac92c64192e29a`.
- The previous v113 registry digest remains exactly `4c4aa85f9785d205dcf7e4e5109837a83f8c3bf8e166130ae7e87353f299c637`.
- The compatibility interval is exactly `>=114.0.0 <115.0.0`.
- The upstream functional range remains `v113.5.0` at `8f081b1eeee10c2cb9445686116d5120828cfe1a` through `ddd66cd599c0d8bb5be21dba39b621a4c7d017b4`.
- The standalone verifier starts release work from local `d4694afa604781304fe7fd4e885c4e27f326f698`; upstream and local histories must remain distinct.
- Exact sealed Originals, Identity Records, profile successors, economy successors, carried history, ownership, settlement, and deterministic first paint remain stronger than projection, database, session, cache, SDK, MCP, AI, or display state.
- The historical composer failure and incomplete authenticated visual evidence remain unresolved.
- No attestation, package publication, deployment, migration, production mutation or verification, GitHub release publication, or push may be described as complete.

---

### Task 1: Complete the v114 Release Archive

**Files:**
- Modify: `releases/v114.0.0-checklist.md`
- Modify: `releases/v114.0.0-commit-history.md`
- Create: `releases/v114.0.0-performance-findings.md`
- Create: `releases/v114.0.0-invariant-register.md`
- Create: matching records under `docs/releases/`

**Interfaces:**
- Consumes: supplied v114 release book, composite proof record, checklist, registry JSON/digest, and upstream Git identities.
- Produces: twelve byte-identical canonical/archive release records with explicit standalone and external boundaries.

- [ ] **Step 1: Preserve all ten supplied records**

Keep the supplied main note, product truth, process, regression lessons, checklist, commit history, composite proof record/checklist, registry JSON, and registry digest.

- [ ] **Step 2: Add verifier-required performance and invariant locks**

Record bounded foreground append, separate linear archive maintenance, deterministic first paint, proof-memory bounds, recursive carrier authority, CAS/retry/convergence, and exact evidence limitations.

- [ ] **Step 3: Add the standalone history and qualification boundary**

State that upstream `8f081b1e..ddd66cd5` evidence is distinct from this verifier checkout’s `d4694af` base, and keep coordinated package/runtime promotion and all external actions unchecked.

- [ ] **Step 4: Mirror the complete archive**

Copy all twelve `releases/v114*` records to `docs/releases/` and verify byte equality.

### Task 2: Promote Governed Standalone Distribution Surfaces

**Files:**
- Modify: `package.json`
- Modify: `AGENTS.md`
- Modify: `scripts/check-release-surfaces.mjs`
- Modify: `README.md`
- Modify: `RELEASE_NOTES.md`
- Modify: `CHANGELOG.md`
- Modify: `docs/README.md`
- Modify: `docs/FORMAT.md`
- Modify: `docs/governance/README.md`
- Modify: `docs/literal-product-law.md`
- Modify: `docs/experience-first-engineering.md`
- Modify: `docs/truthful-speed-invariants.md`
- Modify: `docs/deterministic-surfaces.md`
- Modify: `docs/scale-reasoning-invariants.md`
- Modify: `docs/verified-history-first-principles.md`
- Modify: `docs/offline-verified-register.md`
- Modify: `docs/pbi-recovery-receiz-id-binding.md`
- Modify: `docs/value-loop-invariants.md`
- Modify: `site/index.html`
- Modify: `site/sw.js`
- Modify: `apps/offline-verifier.html`
- Modify: `apps/offline-record-seal.html`
- Modify: `apps/offline-sports-card-verifier.html`
- Modify: `apps/offline-settlement.html`

**Interfaces:**
- Consumes: completed v114 archive and frozen registry identity.
- Produces: coherent verifier-visible `114.0.0` identity and a release checker that requires all v114 authority/evidence records.

- [ ] **Step 1: Advance package, agent law, doctrine carry-forwards, app labels, and service-worker identity**

Replace current `113.5.0` distribution pointers with `114.0.0`; preserve historical v113 references in prior-release records.

- [ ] **Step 2: Publish current release summaries**

Describe profile/economy sealed successors, Market’s derivative role, bounded first paint/append behavior, registry identity, unresolved visual evidence, and external action boundaries.

- [ ] **Step 3: Strengthen the release checker**

Require the registry JSON/digest, composite proof/checklist, performance/invariant records, registry digest, compatibility interval, release-lock markers, and current version labels.

### Task 3: Qualify the Exact Local Candidate

**Files:**
- Verify: all changed files

**Interfaces:**
- Consumes: tasks 1–2.
- Produces: fresh local evidence for the exact standalone release tree.

- [ ] **Step 1: Run configured release gates**

Run `node scripts/check_release_lock.mjs 114.0.0`, `pnpm lint`, `pnpm build`, and `pnpm release:lock 114.0.0`.

- [ ] **Step 2: Run archive and boundary checks**

Verify twelve-file inventory/parity, relative link resolution, registry digest record, v113 predecessor chain, v114 compatibility interval, unresolved visual/attestation language, and `git diff --check`.

- [ ] **Step 3: Audit the staged tree**

Confirm the exact inventory, no unstaged changes, no whitespace errors, and fresh release-gate results.

### Task 4: Seal the Local Release Commit and Tag

**Files:**
- Commit: the exact audited release tree
- Tag: annotated `v114.0.0`

**Interfaces:**
- Consumes: the green staged tree.
- Produces: one detailed local release commit and annotated tag for user-managed push.

- [ ] **Step 1: Commit with a complete authority and verification description**

Include the changed surfaces, preserved primitives, upstream/local history boundary, checks run, unresolved evidence, and external exclusions.

- [ ] **Step 2: Create the annotated tag**

Bind `v114.0.0` to the exact release commit with registry and compatibility identity in the tag annotation.

- [ ] **Step 3: Verify the committed result**

Require a clean worktree, tag object type `tag`, peeled tag target equal to `HEAD`, fresh release gates, canonical/archive parity, link integrity, and the expected branch-ahead count.
