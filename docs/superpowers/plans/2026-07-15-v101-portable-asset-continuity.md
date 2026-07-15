# Receiz v101.0.0 Portable Asset Continuity Release Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Promote the supplied Portable Asset Continuity records as the standalone offline verifier's complete `v101.0.0` release surface.

**Architecture:** Preserve the supplied app release facts as upstream truth while aligning verifier labels, service-worker release identity, canonical document pointers, and the repository's eight-document lock. The complete sealed file remains authority; manifest, SDK, API, RPC, database, package, and deployment state remain mechanics.

**Tech Stack:** Markdown, static HTML, service-worker JavaScript, Node.js release checks, pnpm, Git.

## Global Constraints

- Release identity is `v101.0.0` / `101.0.0`, dated `2026-07-15`.
- Changed surface: portable asset admission and its offline/public release witness.
- Preserved primitive: complete sealed proof object with deterministic file verification and continuity.
- Historical artifact verification and Receiz.com single-verdict behavior remain unchanged.
- Durable proof memory remains first admission only, then append forever.

---

### Task 1: Align v101 Release Surfaces

- [ ] Advance package, release date, verifier labels, service-worker identity, and current documentation pointers.
- [ ] Install the supplied six records canonically and add verifier-required performance and invariant records.
- [ ] Add cross-links, release-lock clauses, and the verifier repository's own v100 baseline boundary.
- [ ] Run `node scripts/check_release_lock.mjs 101.0.0`; expected: aligned v101 output.

### Task 2: Verify and Promote

- [ ] Run `pnpm lint`, `pnpm build`, `pnpm release:lock 101.0.0`, and `git diff --check` with all commands exiting 0.
- [ ] Record only verifier-local gates actually executed, then rerun the complete gate set.
- [ ] Commit as `v101.0.0`, create annotated tag `v101.0.0`, push `main` and tag, and verify remote refs.
