# Receiz v100.0.0 Release Documents Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Promote the supplied Living Proof records as the standalone offline verifier's complete `v100.0.0` release surface.

**Architecture:** Preserve the supplied app release facts as upstream product truth while aligning this repository's deterministic verifier labels, service-worker version, canonical document pointers, and eight-document release lock. Add only the verifier-specific performance, invariant, and local-gate boundaries required by the existing lock script.

**Tech Stack:** Markdown, static HTML, service-worker JavaScript, Node.js release-lock scripts, pnpm, Git.

## Global Constraints

- Release identity is exactly `v100.0.0` / `100.0.0`, dated `2026-07-14`.
- Changed surface: offline verifier, public release witness, service-worker release identity, and canonical release records.
- Preserved primitive: deterministic file proof and proof-native public witness truth.
- Sealed identity, custody, ownership, settlement, verified history, and deterministic first paint remain above SDK, MCP, server, session, network, cache, or generic display mechanics.
- Existing Twin atlas backfill remains a verified append beneath settled first paint.

---

### Task 1: Align v100 Release Surfaces

**Files:**
- Modify: `package.json`, `scripts/check-release-surfaces.mjs`, current release pointers, verifier HTML, and `site/sw.js`
- Create: `docs/releases/v100.0.0*.md` and repository-required `releases/v100.0.0-{performance-findings,invariant-register}.md`

- [ ] Advance current verifier/public release identity and date to v100.
- [ ] Install the supplied six records in the canonical release path.
- [ ] Add performance findings, invariant register, cross-links, and release-lock clauses required by the verifier contract.
- [ ] Run `node scripts/check_release_lock.mjs 100.0.0`; expected: `Release surfaces aligned to v100.0.0.`

### Task 2: Verify and Promote the Exact Candidate

**Files:**
- Modify: `docs/releases/v100.0.0-checklist.md` and `releases/v100.0.0-checklist.md`

- [ ] Run `pnpm lint`, `pnpm build`, `pnpm release:lock 100.0.0`, and `git diff --check` with all commands exiting 0.
- [ ] Record only verifier-local gates actually executed.
- [ ] Re-run every verifier-local gate after the checklist edit.
- [ ] Commit as `v100.0.0`, create annotated tag `v100.0.0`, push `main` and the tag, and verify remote refs.
