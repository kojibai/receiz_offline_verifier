# Receiz v104.0.0 Application Contract Compiler Release Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Promote the v104 Application Contract Compiler records through the standalone offline verifier release lock.

**Architecture:** Align verifier/public release identity and the eight-document contract while preserving the SDK as compiler core and CLI/MCP as thin interfaces. Deterministic plans, root-confined changes, exact preview digests, framework wiring, and package manifests remain mechanics beneath sealed artifact truth.

**Tech Stack:** Markdown, static HTML, service-worker JavaScript, Node.js checks, pnpm, Git.

## Global Constraints

- Release identity is `v104.0.0` / `104.0.0`, dated `2026-07-16`.
- Changed surface: application contract compilation and its offline/public release witness.
- Preserved primitive: sealed Receiz proof objects and append-only witnessed history.
- Inspection and planning are not verification; writes require the exact reviewed digest and remain repository-root confined.
- Durable proof memory remains first admission only, then append forever.

---

### Task 1: Align Release Surfaces

- [ ] Advance package, verifier labels, service-worker identity, and current documentation pointers.
- [ ] Install supplied records canonically and add performance findings, invariant register, cross-links, release-lock clauses, and local baseline.
- [ ] Run `node scripts/check_release_lock.mjs 104.0.0` successfully.

### Task 2: Verify and Hand Off

- [ ] Run `pnpm lint`, `pnpm build`, `pnpm release:lock 104.0.0`, `git diff --check`, and current-narrative scan successfully.
- [ ] Record only verifier-local checks actually executed and rerun the complete gate set.
- [ ] Commit with a complete title/body and create local annotated tag `v104.0.0`; do not push.
