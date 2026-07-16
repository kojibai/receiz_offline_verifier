# Receiz v105.0.0 Browser-Safe SDK Release Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Promote the v105 browser-safe SDK records through the standalone offline verifier release lock.

**Architecture:** Align verifier/public identity and the eight-document contract while preserving authenticated native Record-before-Seal truth. Browser-safe root/React/testing graphs, Node-only compiler exports, emulator evidence, capabilities, stable errors, protected generation, semantic MCP operations, and package manifests remain developer mechanics beneath verification.

**Tech Stack:** Markdown, static HTML, service-worker JavaScript, Node.js checks, pnpm, Git.

## Global Constraints

- Release identity is `v105.0.0` / `105.0.0`, dated `2026-07-16`.
- Changed surface: browser-safe SDK architecture and its offline/public release witness.
- Preserved primitive: authenticated native Record before Seal, real Receiz ID ownership, continuity-bound verification, and historical proof compatibility.
- Emulator and conformance output never become production verification authority.
- Durable proof memory remains first admission only, then append forever.

---

### Task 1: Align Release Surfaces

- [ ] Advance package, verifier labels, service-worker identity, and current documentation pointers.
- [ ] Install supplied records canonically and add performance findings, invariant register, cross-links, release-lock clauses, and local baseline.
- [ ] Run `node scripts/check_release_lock.mjs 105.0.0` successfully.

### Task 2: Verify and Hand Off

- [ ] Run `pnpm lint`, `pnpm build`, `pnpm release:lock 105.0.0`, `git diff --check`, and current-narrative scan successfully.
- [ ] Record only verifier-local checks actually executed and rerun the complete gate set.
- [ ] Commit with a complete title/body and create local annotated tag `v105.0.0`; do not push.
