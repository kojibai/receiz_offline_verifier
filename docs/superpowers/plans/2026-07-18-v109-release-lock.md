# Receiz v109.0.0 Release Lock Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Publish and locally seal the complete Receiz v109.0.0 offline-verifier release record without performing npm publication, deployment, database mutation, production signing, or Git push.

**Architecture:** Promote the supplied v109 evidence into the canonical `docs/releases/` tree while retaining the byte-mirrored `releases/` archive. Add the verifier-required performance and invariant locks, then advance only release-identification and documentation surfaces because Receiz.com behavior, database schema, migrations, queries, and production data remain unchanged. Qualification validates the release checker, constitutional registry lineage, archive parity, links, stale current-release language, and the exact staged Git candidate before commit and tag.

**Tech Stack:** Markdown and JSON release evidence, Node.js release-surface checks, pnpm scripts, static HTML/service-worker version surfaces, Git commit and annotated tag.

## Global Constraints

- Release identity is exactly `v109.0.0`, dated `2026-07-18`.
- Sealed proof-object bytes are stronger truth than SDK, MCP, AI, server, session, database, registry, or release evidence.
- `ARTIFACT-011` requires zero-network complete-artifact verification and extraction without weaker state.
- Native issuance remains authenticated Record -> Seal; v109 changes verification/opening and visible release identity, not issuance authority or Receiz.com behavior.
- Artifact and verified payload remain separate custody domains, and extraction follows complete enclosing-artifact verification.
- Historical sealed artifacts and release evidence remain immutable; obsolete version-specific developer implementations are not current installable surfaces.
- Durable proof memory remains first admission only, then append forever.
- npm publication, deployment, production database mutation, production attestation, authenticated production evidence, and Git push remain separate and incomplete.

---

### Task 1: Promote and complete the v109 release archive

**Files:**
- Create: `docs/releases/v109.0.0*`
- Create: `releases/v109.0.0-performance-findings.md`
- Create: `releases/v109.0.0-invariant-register.md`
- Modify: supplied `releases/v109.0.0*.md` where generic release-lock links/headings are required

**Interfaces:**
- Consumes: the eight supplied v109 Markdown/JSON/digest records and existing release-checker contract.
- Produces: byte-identical canonical/archive evidence with complete cross-links and explicit local-only qualification boundaries.

- [ ] Normalize release-local Markdown links and promote all supplied files into `docs/releases/`.
- [ ] Add performance findings covering zero-network local recomputation, fail-closed mutation behavior, artifact/payload separation, packaged roots/runtime, and unchanged issuance/application/database boundaries.
- [ ] Add an invariant register locking `ARTIFACT-011`, proof-object authority, verified-before-extract custody, subordinate MCP/AI mechanics, historical compatibility, and external-action boundaries.
- [ ] Add required release-lock links/headings to the main note, product truth, checklist, process, regression lessons, and commit history.
- [ ] Record standalone-verifier local qualification checks without marking production signing, publication, deployment, database mutation, or push complete.

### Task 2: Align governed v109 release-identification surfaces

**Files:**
- Modify: `package.json`, `AGENTS.md`, `README.md`, `RELEASE_NOTES.md`, `CHANGELOG.md`
- Modify: `docs/README.md`, `docs/FORMAT.md`, `docs/governance/README.md`
- Modify: doctrine files listed by `scripts/check-release-surfaces.mjs`
- Modify: `apps/offline-*.html`, `site/index.html`, `site/sw.js`
- Modify: `scripts/check-release-surfaces.mjs`

**Interfaces:**
- Consumes: canonical v109 product truth and release-lock pointers.
- Produces: coherent `109.0.0` package, documentation, static-entrypoint, service-worker, and release-date identification without claiming application or database behavior changes.

- [ ] Advance current release pointers and checker date to `v109.0.0` / `2026-07-18`.
- [ ] Describe local byte verification, verify-before-extract opening, `ARTIFACT-011`, registry seal, and unchanged Receiz.com/database behavior on current documentation surfaces.
- [ ] Preserve v108 and earlier references only where explicitly historical.
- [ ] Confirm no implemented primitive is renamed or downgraded.

### Task 3: Qualify and record the local release candidate

**Files:**
- Modify: `releases/v109.0.0-checklist.md`
- Mirror: `docs/releases/v109.0.0-checklist.md`

**Interfaces:**
- Consumes: completed release evidence and aligned surfaces.
- Produces: fresh local qualification evidence for the standalone verifier only.

- [ ] Run `node scripts/check_release_lock.mjs 109.0.0`.
- [ ] Run `pnpm lint`, `pnpm build`, and `pnpm release:lock 109.0.0`.
- [ ] Validate JSON parsing, registry digest/previous digest, 34-law count, `ARTIFACT-011`, effective Kai, seal instant, and proof-object authority.
- [ ] Validate canonical/archive byte parity and all v109 relative links.
- [ ] Review stale v108 current-surface references and run `git diff --check`.
- [ ] Mark only the verified standalone local checks complete and rerun the full suite.

### Task 4: Commit and annotate the verified release

**Files:**
- Stage: only v109 release records and governed surfaces from Tasks 1–3.
- Create: one detailed Git commit and annotated tag `v109.0.0`.

**Interfaces:**
- Consumes: exact clean staged candidate passing every Task 3 check.
- Produces: one local release commit and one annotated local tag, with no remote mutation.

- [ ] Confirm no unstaged changes and no pre-existing `v109.0.0` tag.
- [ ] Rerun the complete qualification against the exact staged candidate.
- [ ] Commit with a full title/body naming the changed surface, preserved primitive, risk boundary, checks, and external exclusions.
- [ ] Create annotated tag `v109.0.0` with constitutional digest and external-action exclusions.
- [ ] Verify clean worktree, tag object type, tag-to-HEAD identity, release lock, and branch-ahead count.

## Self-Review

- Spec coverage: all user-supplied outcome, compatibility, application/database boundary, evidence, constitutional, durability, and external-action requirements map to Tasks 1–4.
- Placeholder scan: the plan contains no deferred implementation placeholders.
- Type consistency: version, registry digest lineage, `ARTIFACT-011`, effective Kai, release instant, artifact/payload separation, and external boundaries use the supplied names consistently.
