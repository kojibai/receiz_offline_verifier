# Receiz v110.0.0 Release Lock Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Publish and locally seal the complete Receiz v110.0.0 unified artifact admission and recovery release without performing npm publication, deployment, production attestation, database mutation, or Git push.

**Architecture:** Promote the supplied v110 evidence into the canonical `docs/releases/` tree while preserving a byte-identical `releases/` archive. Add verifier-required performance and invariant locks, then advance release-identification surfaces only because Receiz.com behavior, APIs, database schema, migrations, queries, production data, and native Record -> Seal issuance remain unchanged. Qualify constitutional lineage, `ARTIFACT-012` through `ARTIFACT-015`, archive parity, links, and the exact staged Git candidate before commit and tag.

**Tech Stack:** Markdown and JSON release evidence, Node.js release-surface checks, pnpm scripts, static HTML/service-worker version surfaces, Git commit and annotated tag.

## Global Constraints

- Release identity is exactly `v110.0.0`, dated `2026-07-18`.
- Exact enclosing artifact bytes and verified proof history remain stronger truth than admission verdicts, plans, explanations, SDK, MCP, AI, server, session, database, registry, or release evidence.
- `artifacts.admitAndRecover` performs zero writes and zero network calls.
- Verdicts are exactly `canonical-identity`, `bearer-recovery`, `verified-legacy-read`, `foreign-owner`, and `invalid`.
- Actions are explicitly bounded by `canRestore`, `canSign`, `canClaimOwnership`, `canPublish`, and `canSettle`.
- Recovery commit requires SDK-issued plan custody, runtime-verified Ed25519 capability, stable idempotency, expected-head continuity, and caller-provided atomic storage.
- Bearer possession, legacy reads, foreign-owner artifacts, explanations, and plans never become identity, signing, publishing, settlement, or proof authority.
- Durable proof memory remains first admission only, then append forever.
- npm publication, deployment, production attestation, production database work, production verification, and Git push remain separate and incomplete.

---

### Task 1: Promote and complete the v110 release archive

**Files:**
- Create: `docs/releases/v110.0.0*`
- Create: `releases/v110.0.0-performance-findings.md`
- Create: `releases/v110.0.0-invariant-register.md`
- Modify: supplied `releases/v110.0.0*.md` where generic release-lock links/headings are required

**Interfaces:**
- Consumes: the eight supplied v110 Markdown/JSON/digest records and the current release-checker contract.
- Produces: byte-identical canonical/archive evidence with explicit recovery authority, local-only qualification, and external-action boundaries.

- [ ] Normalize release-local links and promote every supplied record into `docs/releases/`.
- [ ] Add performance findings for exact-byte admission, single-pass read-only recovery, deterministic history, atomic commit, idempotency, replay protection, and unchanged application/database scope.
- [ ] Add an invariant register locking five verdicts/actions, `ARTIFACT-012` through `ARTIFACT-015`, bearer non-escalation, plan/capability custody, atomicity, convergence, and external boundaries.
- [ ] Add release-lock links/headings to the main note, product truth, checklist, process, regression lessons, and commit history.
- [ ] Record standalone-verifier local checks without claiming upstream package evidence or external actions were reproduced.

### Task 2: Align governed v110 identification surfaces

**Files:**
- Modify: `package.json`, `AGENTS.md`, `README.md`, `RELEASE_NOTES.md`, `CHANGELOG.md`
- Modify: `docs/README.md`, `docs/FORMAT.md`, `docs/governance/README.md`
- Modify: doctrine files listed by `scripts/check-release-surfaces.mjs`
- Modify: `apps/offline-*.html`, `site/index.html`, `site/sw.js`
- Verify: `scripts/check-release-surfaces.mjs` retains release date `2026-07-18`

**Interfaces:**
- Consumes: canonical v110 product truth and release-lock pointers.
- Produces: coherent `110.0.0` package, documentation, static-entrypoint, and service-worker identity without an application or database behavior claim.

- [ ] Advance current release pointers to `v110.0.0` while retaining the correct date.
- [ ] Describe unified admission/recovery, five verdicts/actions, read-only coordination, explicit atomic commit, constitutional registry seal, and unchanged application/database behavior.
- [ ] Preserve v109 and earlier references only as explicit history or foundation.
- [ ] Confirm direct primitive names and no forbidden downgrade.

### Task 3: Qualify and record the local candidate

**Files:**
- Modify: `releases/v110.0.0-checklist.md`
- Mirror: `docs/releases/v110.0.0-checklist.md`

**Interfaces:**
- Consumes: completed evidence and aligned surfaces.
- Produces: fresh standalone-verifier qualification evidence only.

- [ ] Run `node scripts/check_release_lock.mjs 110.0.0`.
- [ ] Run `pnpm lint`, `pnpm build`, and `pnpm release:lock 110.0.0`.
- [ ] Validate registry digest lineage, 38 laws, `ARTIFACT-012` through `ARTIFACT-015`, effective Kai, seal instant, and proof-object authority.
- [ ] Validate canonical/archive byte parity and every v110 relative link.
- [ ] Review stale v109 current-surface references and run `git diff --check`.
- [ ] Mark only verified local checks complete and rerun the full qualification.

### Task 4: Commit and annotate the verified release

**Files:**
- Stage: only v110 records and governed surfaces from Tasks 1–3.
- Create: one detailed Git commit and annotated tag `v110.0.0`.

**Interfaces:**
- Consumes: exact staged candidate passing all Task 3 checks.
- Produces: one local release commit and annotated local tag, without remote mutation.

- [ ] Confirm no unstaged changes and no pre-existing `v110.0.0` tag.
- [ ] Rerun complete qualification against the exact staged candidate.
- [ ] Commit with a complete title/body covering changed surface, preserved primitive, risk boundary, checks, no downgrade, and external exclusions.
- [ ] Create annotated tag `v110.0.0` with constitutional seal and external exclusions.
- [ ] Verify clean worktree, tag type, tag-to-HEAD identity, release lock, and branch-ahead count.

## Self-Review

- Spec coverage: headline API, five verdicts/actions, admission/planning/commit boundaries, deterministic history, MCP/AI parity, authority guarantees, application/database scope, constitutional laws, durability, and external actions map to Tasks 1–4.
- Placeholder scan: no deferred implementation placeholders are present.
- Type consistency: operation names, verdicts, actions, registry laws, capability/idempotency/atomicity boundaries, and external exclusions match the supplied v110 contract.
