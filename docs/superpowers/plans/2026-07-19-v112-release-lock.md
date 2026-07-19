# Receiz v112.0.0 Release Lock Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Publish and locally seal Receiz v112.0.0 executable artifact authority without performing Git push, GitHub Environment attestation, package publication, deployment, database mutation, or remote-global admission work.

**Architecture:** Promote the supplied v112 evidence into byte-matched canonical and archive release trees, add the verifier-required performance and invariant locks, and advance only governed release-identification surfaces. Qualify the 57-law deterministic unsigned registry chain, archive parity, release links, and exact staged Git candidate before creating one detailed local commit and annotated tag.

**Tech Stack:** Markdown/JSON evidence, Node.js release checks, pnpm scripts, static HTML/service-worker version surfaces, Git commit and annotated tag.

## Global Constraints

- Release identity is `v112.0.0`, dated `2026-07-19`.
- Registry digest is `1356f8122d0b5fcbe891d7e6ed1e75faca827f15d63d1ed5d950664e11c146ee` with v111 predecessor `cf02d0bce6ad1541cfe84e27bfb1036777b29616bf8a1e5aeafb899a945e359a`.
- Exact verified sealed bytes remain stronger truth than admission, plans, receipts, stores, sessions, servers, databases, SDK/MCP/AI projections, and UI state.
- Admission establishes profile membership; it does not authorize operations.
- Verified actor/history, portable transition, complete plan, exact-plan capability, neutral staging, independent named-domain verification, and atomic commitment remain distinct boundaries.
- Unknown namespaces are preserved and known namespace mutations require registry-authorized reducers.
- Durable local admission truth is not cache and stores no proof objects or sealed artifact bytes.
- v111 exact bytes remain verifiable/readmissible; v111 runtime authority objects remain non-authoritative in v112.
- Durable proof memory remains first admission only, then append forever.
- No product HTTP route, database migration, application behavior change, remote global admission, or offline-to-global reconciliation is introduced.
- GitHub Environment attestation, publication, deployment, production work, and Git push remain external.

---

### Task 1: Complete and mirror the v112 evidence archive

**Files:** Create `docs/releases/v112.0.0*`, `releases/v112.0.0-performance-findings.md`, and `releases/v112.0.0-invariant-register.md`; update supplied v112 Markdown with canonical links and release-lock headings.

**Interfaces:** Consumes the nine supplied records; produces byte-matched canonical/archive evidence with explicit authority and external-action boundaries.

- [ ] Normalize release-local links and mirror every supplied record, including the compatibility matrix and unsigned registry lock.
- [ ] Add performance findings for exact-byte-first projection, asynchronous admission, neutral staging, independent commit verification, named-domain atomicity, and zero-proof-byte IndexedDB durability.
- [ ] Add an invariant register locking the 57-law registry, artifact/admission/actor/history/transition/plan/capability/stage/commit/receipt hierarchy, v111 compatibility, and unchanged product/database scope.
- [ ] Add required `Release-Lock Requirement` headings and standalone-verifier qualification/external-action boundaries.

### Task 2: Align governed v112 identification surfaces

**Files:** Modify `package.json`, `AGENTS.md`, root release docs, doctrine/documentation maps, static verifier entrypoints, service worker, and release checker date.

**Interfaces:** Consumes canonical v112 truth; produces coherent `112.0.0` identification without an application/API/database behavior claim.

- [ ] Advance every governed current-version pointer to `v112.0.0` and the release date to `2026-07-19`.
- [ ] Describe the executable authority hierarchy, unsigned registry chain, compatibility boundary, neutral staging, named-domain commit, and receipt non-authority.
- [ ] Preserve v111 and earlier only as explicit history; confirm direct primitive naming and no downgrade.

### Task 3: Qualify and record the standalone candidate

**Files:** Update and mirror `v112.0.0-checklist.md` and release records with only locally supported claims.

**Interfaces:** Produces fresh standalone qualification evidence while keeping GitHub attestation and upstream package evidence separate.

- [ ] Run `node scripts/check_release_lock.mjs 112.0.0`, `pnpm lint`, `pnpm build`, and `pnpm release:lock 112.0.0`.
- [ ] Validate the SHA-256 digest, predecessor, effective Kai, 57-law count, registry non-authority, and exact sealed-proof stronger truth.
- [ ] Validate canonical/archive parity, all v112 relative links, current-version scans, and `git diff --check`.
- [ ] Record verified local checks and keep the post-push signed GitHub attestation unchecked.

### Task 4: Commit and tag the exact verified candidate

**Files:** Stage only planned v112 records and governed surfaces; create one detailed commit and annotated `v112.0.0` tag.

**Interfaces:** Produces local Git release objects without remote mutation.

- [ ] Confirm no unstaged changes and no pre-existing v112 tag.
- [ ] Rerun the full qualification against the exact index.
- [ ] Commit with changed surface, preserved primitive, risk boundary, checks, no downgrade, and external exclusions.
- [ ] Tag with the registry seal and verify clean tree, tag-to-HEAD identity, release lock, and branch-ahead count.

## Self-Review

- Spec coverage includes every supplied v112 authority boundary, compatibility rule, visual-evidence boundary, and external exclusion.
- No placeholders, conflicting authority claims, or inconsistent version/digest values remain.
- The plan changes release surfaces only and does not infer implementation authority outside this repository.
