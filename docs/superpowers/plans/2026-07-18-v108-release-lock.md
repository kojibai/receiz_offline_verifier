# Receiz v108.0.0 Release Lock Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Promote the complete supplied Receiz v108.0.0 proof-object-first correction into the independent offline verifier, align every current-release surface, verify the local release lock, and create a detailed local commit plus annotated tag without external release mutations.

**Architecture:** The supplied `releases/v108.0.0*` artifacts remain the upstream release contract and are mirrored byte-for-byte into `docs/releases/` after verifier-required cross-link additions. The verifier adds mandatory performance-findings and invariant-register records, while package metadata, static entrypoints, service-worker identity, governance pointers, and public documentation advance together to `108.0.0`. Receiz law, sealed proof objects, verified local truth, accepted identity proof, and admitted same-account binding remain above Receiz.com reference behavior, SDK, MCP, AI skills, registry, server, database, session, and release evidence.

**Tech Stack:** Markdown, JSON and digest release artifacts, static HTML, JavaScript service worker and Node.js release-lock scripts, pnpm, Git.

## Global Constraints

- Release identity is exactly `v108.0.0`, dated `2026-07-17`.
- Registry digest is exactly `126ca9283fee4ef4c398dbcb958e861cbea191724fdab8eb08df55ff0c14bb79`.
- Registry instant is exactly `2026-07-18T04:38:26.799Z`; canonical effective Kai-Klok whole pulse is exactly `13182786` and is not a release label.
- Authority order is Receiz law, sealed proof/verified local truth, accepted identity proof/admitted binding, Receiz.com reference behavior, SDK, MCP, then AI skills.
- Inline rename and full profile save use `PATCH /api/profile/me`, preserve the admitted account UID, and cannot be gated by `identity_keys` projection state or developer rails.
- Proof-object creation, custody, opening, and ownership preserve complete Record-before-Seal artifacts and verify the enclosing artifact before payload extraction.
- Historical v107 mechanics and witnessed artifacts remain history, not current defaults; `/developers/v107` redirects to unversioned `/developers`, and no `/developers/v108` product page is introduced.
- The never-applied v107 SQL designs remain non-deployable evidence and are never promoted into migration guidance or runtime authority.
- Durable proof memory remains **first admission only, then append forever**.
- Production signing, npm publication, deployment, production database mutation/verification, and remote push are out of scope.
- Supplied JSON artifacts must remain valid and canonical/archival release copies must be identical.

---

### Task 1: Promote and Bind the Complete v108 Evidence Set

**Files:**
- Create: `docs/releases/v108.0.0*`
- Modify: `releases/v108.0.0.md`
- Modify: `releases/v108.0.0-{product-truth,checklist,process,regression-lessons,commit-history}.md`

**Interfaces:**
- Consumes: fourteen supplied v108 release artifacts and the repository release-lock checker.
- Produces: canonical release evidence with valid local links, mandatory verifier cross-links, and release-lock clauses.

- [ ] **Step 1: Validate all supplied JSON artifacts and inspect registry, threat, and visual-evidence schema identities.**
- [ ] **Step 2: Verify digest sidecar parity, previous-digest continuity, seal instant, and `effectiveKai` pulse across the declared evidence.**
- [ ] **Step 3: Mirror supplied artifacts into `docs/releases/` and normalize release-document links for their directory context.**
- [ ] **Step 4: Add verifier performance/invariant links and `Release-Lock Requirement` clauses required by the checker.**
- [ ] **Step 5: Confirm each canonical file is byte-identical to its archival peer.**

### Task 2: Add Verifier Governance Records

**Files:**
- Create: `docs/releases/v108.0.0-performance-findings.md`
- Create: `docs/releases/v108.0.0-invariant-register.md`
- Create: `releases/v108.0.0-performance-findings.md`
- Create: `releases/v108.0.0-invariant-register.md`

**Interfaces:**
- Consumes: v108 authority order, profile correction, developer guide, migration, threat model, visual evidence, and prior verifier law.
- Produces: explicit profile-first-paint, proof-object custody, historical-isolation, and external-action boundaries required by `release:lock`.

- [ ] **Step 1: Record direct first-party profile behavior, same-UID projection refresh, zero-key-row tolerance, complete-artifact custody, and verify-before-extract performance boundaries.**
- [ ] **Step 2: Lock the exact authority order, real Kai-Klok seal, native Record-before-Seal continuity, developer-adapter subordination, non-deployable SQL boundary, and unversioned developer surface.**
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
- Modify: doctrine files enumerated by `scripts/check-release-surfaces.mjs`
- Modify: `site/index.html`
- Modify: `site/sw.js`
- Modify: `apps/offline-verifier.html`
- Modify: `apps/offline-record-seal.html`
- Modify: `apps/offline-sports-card-verifier.html`
- Modify: `apps/offline-settlement.html`

**Interfaces:**
- Consumes: v108 release truth and `108.0.0` identity.
- Produces: one coordinated public verifier identity with proof-object-first naming.

- [ ] **Step 1: Advance governed version markers from v107 to v108 while retaining release date `2026-07-17`.**
- [ ] **Step 2: Rewrite current README, release notes, changelog, and documentation-map narrative for the proof-object-first profile authority correction.**
- [ ] **Step 3: Preserve v107 only in explicit history, regression, redirect, migration, and non-deployable evidence contexts.**
- [ ] **Step 4: Confirm static verifier and service-worker labels resolve to v108.0.0.**

### Task 4: Verify and Seal the Local Release

**Files:**
- Modify: `docs/releases/v108.0.0-checklist.md`
- Modify: `releases/v108.0.0-checklist.md`

**Interfaces:**
- Consumes: the completed release diff.
- Produces: fresh local verification evidence, a detailed commit, and annotated local tag `v108.0.0`.

- [ ] **Step 1: Run `node scripts/check_release_lock.mjs 108.0.0`; expect exit 0.**
- [ ] **Step 2: Run `pnpm lint`; expect exit 0.**
- [ ] **Step 3: Run `pnpm build`; expect exit 0.**
- [ ] **Step 4: Run `pnpm release:lock 108.0.0`; expect exit 0.**
- [ ] **Step 5: Run JSON validation, registry-digest/seal parity, canonical/archive comparison, stale-current-narrative scan, link scan, and `git diff --check`; expect no failures.**
- [ ] **Step 6: Record verifier-local passing gates in both checklist copies, rerun all verification from the recorded candidate, and inspect the staged diff.**
- [ ] **Step 7: Commit with a complete release title and descriptive body, create annotated tag `v108.0.0`, and do not push.**

## Self-Review

- Spec coverage: exact authority order, profile baseline/correction, same-UID continuity, zero-key-row boundary, current SDK/MCP/AI direction, native proof-object custody, never-applied SQL isolation, unversioned developer route, registry seal, visual evidence, and external-action boundaries are represented.
- Placeholder scan: no deferred implementation markers or unspecified checks remain.
- Type consistency: release version is `108.0.0`, tag is `v108.0.0`, release date is `2026-07-17`, seal instant is `2026-07-18T04:38:26.799Z`, effective Kai pulse is `13182786`, and the declared registry digest is not conflated with the raw JSON file hash.
