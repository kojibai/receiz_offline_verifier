# Receiz v115.0.0 Release Lock Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Publish and locally seal the Receiz v115.0.0 standalone-verifier distribution and complete release archive while preserving enclosing-artifact authority and every external evidence boundary.

**Architecture:** Preserve the supplied v115 release book and deterministic registry, add the performance/invariant records required by this standalone repository, and mirror the complete archive byte-for-byte. Promote verifier-visible distribution surfaces together and update the release checker to enforce Native Capture/PBI append authority, the v114 registry predecessor, compatibility, physical-device evidence limits, and external-action exclusions.

**Tech Stack:** Static HTML/CSS/JavaScript, Node.js release-lock scripts, Markdown release records, JSON constitutional registry, pnpm, Git.

## Global Constraints

- Release and standalone distribution identity is exactly `115.0.0`.
- V115 registry digest is exactly `69b553d5ff8c1287ff33bfb2f3197ea3ec9bccf6a6ce9d3c47107d0819d3f246`.
- Immutable predecessor v114 digest is exactly `ae912154d97b695464c3a19361bceb9440bc5d703a1d9129edac92c64192e29a`.
- Compatibility interval is exactly `>=115.0.0 <116.0.0`.
- Upstream baseline is `1b4ff9d4ae85018ec434b62df940a4a2eb75c94f`; coordinated promotion is `9425462d5ddfb996b3a825a69cc4aeeff4c5134a`.
- This standalone verifier starts from local `6cfb3fd969723aa7601c49d5eaba373ab184ab62`; upstream and local histories remain distinct.
- The enclosing sealed artifact is authority; Native Capture and PBI authorship are verified appends beneath it.
- An ordinary upload cannot acquire Native Capture provenance, and Native Capture does not claim physical-sensor certification.
- PBI authorship cannot change ownership, custody, media bytes, Native Capture provenance, or prior history.
- Local proof settlement does not wait for optional network publication.
- V114 profile/economy proof objects and verifier behavior remain frozen and verifiable.
- Physical Face ID/native iOS chooser qualification remains unclaimed.
- The three SQL migrations remain unapplied and ordered exactly by timestamp.
- No package publication, remote tag/push, deployment, production mutation, or production smoke verification may be described as complete.
- The broader SDK orchestration north star remains deferred to v116.

---

### Task 1: Complete the v115 Release Archive

**Files:**
- Modify: `releases/v115.0.0.md`
- Modify: `releases/v115.0.0-product-truth.md`
- Modify: `releases/v115.0.0-checklist.md`
- Modify: `releases/v115.0.0-process.md`
- Modify: `releases/v115.0.0-regression-lessons.md`
- Modify: `releases/v115.0.0-commit-history.md`
- Create: `releases/v115.0.0-performance-findings.md`
- Create: `releases/v115.0.0-invariant-register.md`
- Modify/Create: matching `docs/releases/v115*` records

**Interfaces:**
- Consumes: supplied v115 release records, registry JSON/digest, upstream identities, and explicit evidence boundaries.
- Produces: ten byte-identical canonical/archive records required by the standalone release lock.

- [ ] **Step 1: Preserve and normalize the supplied release book**

Keep Native Capture, PBI authorship, canonical verification, outbox, frozen-v114 continuity, distribution identity, WebKit evidence, and external action truth intact. Correct the SQL count to the three migrations named by the checklist.

- [ ] **Step 2: Add performance and invariant locks**

Record exact media preservation, bounded active-flush quiescence, no-cap durable pending proof memory, fail-closed corrupt reads, enclosing-artifact-first verification, ordered authorship, and physical-device evidence limits.

- [ ] **Step 3: Add standalone history and qualification boundaries**

Keep the upstream 44-commit candidate distinct from the standalone verifier’s local base. Add local commands without marking SQL, publication, remote Git, deployment, production, or physical-device evidence complete.

- [ ] **Step 4: Mirror and validate all ten records**

Copy canonical files to `docs/releases/`, require byte equality, parse registry JSON, and validate every relative link.

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
- Consumes: completed v115 archive and registry chain.
- Produces: coherent `115.0.0` standalone distribution identity and executable release-lock pointers.

- [ ] **Step 1: Advance all current verifier-visible labels**

Move package, agent law, doctrine carry-forwards, static tools, and service-worker identity from `114.0.0` to `115.0.0`.

- [ ] **Step 2: Publish current release summaries**

Describe Native Capture/PBI append authority, canonical verification, local-first settlement, registry/compatibility, frozen v114 continuity, and exact residual risks.

- [ ] **Step 3: Update the release checker**

Require the current ten-record v115 archive, registry chain/digest, compatibility interval, release-lock markers, physical-device limitation, local/external boundary language, and current distribution labels.

### Task 3: Qualify the Exact Local Candidate

**Files:**
- Verify: all changed files

**Interfaces:**
- Consumes: tasks 1–2.
- Produces: fresh local qualification for the exact standalone tree.

- [ ] **Step 1: Run configured gates**

Run `node scripts/check_release_lock.mjs 115.0.0`, `pnpm lint`, `pnpm build`, and `pnpm release:lock 115.0.0`.

- [ ] **Step 2: Run archive, registry, and boundary checks**

Verify ten-record inventory/parity, link resolution, 79-law registry version/predecessor/digest record, upstream identities, three unapplied SQL migrations, Face ID/native chooser limitation, and `git diff --check`.

- [ ] **Step 3: Audit the staged tree**

Confirm exact inventory, no unstaged changes, no whitespace errors, and fresh configured-gate results.

### Task 4: Seal the Local Release Commit and Tag

**Files:**
- Commit: exact audited tree
- Tag: annotated `v115.0.0`

**Interfaces:**
- Consumes: green staged tree.
- Produces: one detailed local commit and annotated tag for user-managed push.

- [ ] **Step 1: Create the detailed commit**

Record changed surfaces, preserved proof primitives, registry/compatibility, upstream/local history boundary, checks, residual physical-device risk, and external exclusions.

- [ ] **Step 2: Create the annotated tag**

Bind `v115.0.0` to the exact release commit with the registry chain and enclosing-artifact authority in the annotation.

- [ ] **Step 3: Verify the committed result**

Require a clean worktree, annotated tag peeled to `HEAD`, fresh gates, ten-record parity/link integrity, registry validation, and expected branch-ahead count.
