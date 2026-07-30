# Receiz v116.0.0 Release Lock Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Publish and locally seal the Receiz v116.0.0 standalone-verifier baseline and release archive without inventing new authority, overstating upstream qualification, or obscuring production SQL history.

**Architecture:** Preserve the supplied v116 baseline records and registry, add standalone-required performance/invariant/history locks, and mirror them into the public documentation archive. Promote only verifier-visible current surfaces, enforce the registry and exact limitations in the release checker, and add a narrow v117 planning deferral so the v116 release does not absorb the orchestration program.

**Tech Stack:** Static HTML/CSS/JavaScript, Node.js release-lock scripts, Markdown release records, JSON constitutional registry, pnpm, Git.

## Global Constraints

- Release and standalone distribution identity is exactly `116.0.0`.
- Product baseline is `0820771f7ab929b39c8a4a5315d20474f914e307`.
- This standalone verifier starts from local `0988a5e`; the upstream product baseline and local release history remain distinct.
- V116 registry digest is exactly `9bf61fcf4541edf565bb2ded252e35a976a3ca7c9176dea0f1ffac74ce192a80`.
- Immutable predecessor v115 digest is exactly `69b553d5ff8c1287ff33bfb2f3197ea3ec9bccf6a6ce9d3c47107d0819d3f246`.
- Compatibility interval is exactly `>=116.0.0 <117.0.0`.
- V116 introduces no new authority model, orchestration layer, issuer, verifier, registry hierarchy, or proof chain.
- Verified local truth paints before server, session, database, or unsigned owner projection.
- Accepted PBI identity proof cannot be erased by a weaker returning-owner projection.
- Purchased credits are non-expiring and follow checkout, refund, dispute loss, and idempotent dispute restoration.
- First use begins with Composer; optional Twin setup is not a prerequisite.
- Core creation, identity, proof, ownership, verification, and sharing remain free; Premium and Business boundaries remain exact.
- Dispute-credit SQL is installed in production, but Supabase migration history does not record the July migration files.
- The remaining twelve listed July migrations stay unchecked; the installed dispute migration is not converted into migration-history truth.
- Upstream product, focused, full-freeze, governance, attestation, and visual gates remain unchecked because the candidate records a removed dependency tree.
- Package publication, remote tag/push, deployment, and production smoke remain unclaimed.
- The broader orchestration program is deferred to v117 and supplies no v116 authority.
- Preserve the user’s pre-existing v116 Offline Studio/verifier label edits.

---

### Task 1: Complete the v116 Release Archive

**Files:**
- Modify: `releases/v116.0.0.md`
- Modify: `releases/v116.0.0-product-truth.md`
- Modify: `releases/v116.0.0-checklist.md`
- Modify: `releases/v116.0.0-process.md`
- Modify: `releases/v116.0.0-regression-lessons.md`
- Modify: `releases/v116.0.0-commit-history.md`
- Create: `releases/v116.0.0-performance-findings.md`
- Create: `releases/v116.0.0-invariant-register.md`
- Create: `releases/v117.0.0-planning.md`
- Create/Modify: matching records under `docs/releases/`

**Interfaces:**
- Consumes: supplied baseline records, registry JSON/digest, actual local/upstream Git identities, and explicit SQL/gate limitations.
- Produces: ten byte-identical v116 records plus a mirrored v117 deferral record with all links resolvable.

- [ ] **Step 1: Preserve and normalize the supplied release book**

Keep the sealed-current-product baseline, Composer-first setup, paid-credit/PBI continuity, registry identity, installed-dispute-SQL fact, absent migration-history fact, unchecked gates, and external boundaries.

- [ ] **Step 2: Add performance and invariant locks**

Record known-proof-first paint, append-only refresh, checkout/dispute idempotency, signed-term propagation, no unrelated product change, and exact uncertainty around missing upstream dependencies and migration history.

- [ ] **Step 3: Add standalone and v117 planning boundaries**

Record local base `0988a5e` separately from upstream `0820771f7`, and create a v117 orchestration planning document that explicitly has no v116 implementation or authority effect.

- [ ] **Step 4: Mirror and validate the archive**

Mirror the ten v116 records and v117 plan to `docs/releases/`, check byte equality, parse the registry, and validate every relative link.

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
- Modify: doctrine carry-forward records
- Modify: `site/index.html`
- Modify: `site/sw.js`
- Modify: `apps/offline-verifier.html`
- Modify: `apps/offline-record-seal.html`
- Modify: `apps/offline-sports-card-verifier.html`
- Modify: `apps/offline-settlement.html`

**Interfaces:**
- Consumes: completed v116 archive and registry.
- Produces: coherent standalone `116.0.0` identity and an executable release lock.

- [ ] **Step 1: Advance current verifier-visible surfaces**

Move package, agent law, doctrine status, static tools, and service-worker identity to `116.0.0`, preserving supplied app-file edits.

- [ ] **Step 2: Publish current release summaries**

Describe unchanged authority, Composer-first setup, PBI/credit continuity, product tiers, registry chain, production SQL/history distinction, upstream gate limitations, and v117 deferral.

- [ ] **Step 3: Update the release checker**

Require the ten-record archive, v117 plan, registry version/predecessor/digest, compatibility interval, release-lock markers, SQL/history distinction, upstream dependency limitation, current labels, and external exclusions.

### Task 3: Qualify the Exact Standalone Candidate

**Files:**
- Verify: all changed files

**Interfaces:**
- Consumes: tasks 1–2.
- Produces: fresh local evidence without claiming upstream gates.

- [ ] **Step 1: Run configured standalone gates**

Run `node scripts/check_release_lock.mjs 116.0.0`, `pnpm lint`, `pnpm build`, and `pnpm release:lock 116.0.0`.

- [ ] **Step 2: Run archive, registry, SQL, and limitation checks**

Verify ten-record parity, v117 plan parity, link resolution, 79-law registry chain/digest, upstream identity, one installed dispute migration, twelve unchecked July migrations, missing-history wording, missing-dependency/upstream-gate wording, and `git diff --check`.

- [ ] **Step 3: Audit the staged tree**

Confirm exact inventory, no unstaged changes, no whitespace errors, preserved user edits, and fresh local gates.

### Task 4: Seal the Local Release Commit and Tag

**Files:**
- Commit: exact audited tree
- Tag: annotated `v116.0.0`

**Interfaces:**
- Consumes: green staged tree.
- Produces: one detailed local commit and annotated tag for user-managed push.

- [ ] **Step 1: Create the detailed commit**

Record changed surfaces, preserved primitives, registry identity, SQL/history boundary, upstream/local history distinction, local checks, upstream gate gaps, v117 deferral, and external exclusions.

- [ ] **Step 2: Create the annotated tag**

Bind `v116.0.0` to the exact local commit without claiming remote tag/push or deployment.

- [ ] **Step 3: Verify the committed result**

Require clean status, annotated tag peeled to `HEAD`, fresh configured gates, archive/link/registry validation, preserved unchecked boundaries, and expected branch-ahead count.
