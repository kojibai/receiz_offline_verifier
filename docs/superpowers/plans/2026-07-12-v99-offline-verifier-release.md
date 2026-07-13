# Receiz v99.0.0 Offline Verifier Release Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Promote the standalone Receiz offline verifier and public release surfaces from `v98.0.0` to `v99.0.0`, verify the exact candidate, and publish the repository commit and annotated tag.

**Architecture:** Keep deterministic offline verifier files, service-worker release identity, canonical documentation pointers, and duplicated archival release documents aligned under the repository release-lock script. Preserve the supplied v99 product truth while adding the performance and invariant records required by this repository's stronger local release contract.

**Tech Stack:** Static HTML, service worker JavaScript, Node.js release-lock scripts, pnpm, Git.

## Global Constraints

- Release identity is exactly `v99.0.0` / `99.0.0`, dated `2026-07-12`.
- The changed surface is the offline verifier and public release witness surface.
- The preserved primitive is deterministic offline verification and public proof release identity.
- Deterministic file proof and release documents remain stronger than package, network, session, deployment, or framework state.
- No proof object, artifact system, public proof surface, settlement primitive, ownership state, identity primitive, deterministic first paint, verified history, route truth, service-worker release truth, or Receiz proof law may be renamed as a generic UI concept.

---

### Task 1: Align the v99 Release Contract

**Files:**
- Modify: `package.json`
- Modify: `scripts/check-release-surfaces.mjs`
- Modify: all current-release pointers enumerated by `scripts/check-release-surfaces.mjs`
- Create: `docs/releases/v99.0.0*.md`
- Create: `releases/v99.0.0*.md`

**Interfaces:**
- Consumes: supplied v99 release brief and the existing v98 release-lock structure.
- Produces: a complete v99 release surface accepted by `node scripts/check_release_lock.mjs 99.0.0`.

- [ ] Update package, release date, public/offline labels, service-worker identity, and canonical documentation pointers to v99.
- [ ] Install the supplied v99 release records in both canonical and archival paths.
- [ ] Add repository-required v99 performance findings and invariant register without weakening the supplied product truth.
- [ ] Run `node scripts/check_release_lock.mjs 99.0.0`; expected: `Release surfaces aligned to v99.0.0.`

### Task 2: Verify and Publish the Exact Candidate

**Files:**
- Modify: `docs/releases/v99.0.0-checklist.md`
- Modify: `releases/v99.0.0-checklist.md`

**Interfaces:**
- Consumes: the aligned v99 release candidate.
- Produces: verified commit and annotated `v99.0.0` tag on the configured origin.

- [ ] Run `pnpm lint`, `pnpm build`, `pnpm release:lock 99.0.0`, and `git diff --check`; expected: all exit 0.
- [ ] Record only completed repository-local gates in both v99 checklists.
- [ ] Re-run the full verification sequence after the checklist edit; expected: all exit 0.
- [ ] Commit the exact candidate with message `v99.0.0`.
- [ ] Create annotated tag `v99.0.0` at that commit.
- [ ] Push `main` and `v99.0.0` to `origin`.
