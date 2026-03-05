# Release Notes

## v22.0.0 (from v21.0.0)
Release date: 2026-03-05

`v22.0.0` is a release-marker and documentation alignment release.
There are no verification-policy or runtime behavior changes relative to `v21.0.0`.

## Summary
- Advanced footer release marker from `v21.0.0` to `v22.0.0`.
- Applied the version marker update in both shipped entrypoints.
- Updated outward release and operations docs references to `v22`.

## What changed in v22

### 1) Version marker update
- Footer release marker advanced from `v21.0.0` to `v22.0.0` in:
  - `site/index.html`
  - `apps/offline-verifier.html`

### 2) Release/docs reference alignment
- Updated release-facing documentation to point to `v22.0.0` as current.
- Updated policy and operations docs that were version-scoped to `v21` labels.

## Preserved from v21
- Signature v3 is required for verified outcomes (`missing`/`unavailable` remain hard failures).
- Effective anchor context is required (explicit or derivable anchor data).
- Groth16 fields are required and only real `g16:` proof payloads are accepted.
- Carrier extraction/normalization for PNG, PDF, SVG, JSON, trailer, and `.receizbundle`.
- Package ZIP/folder manifest verification paths.
- Canonical identity derivation and artifact-binding checks.
- Fail-closed verification semantics.

## Compatibility and deployment impact

### Runtime compatibility
- Still a static browser app.
- No new runtime/network dependency introduced.

### Breaking policy impact
- None in `v22`; policy behavior is unchanged from `v21`.

### Assets required
Required:
- `/index.html`

Optional by deployment route:
- `/offline-verifier.html` (alternate route + footer download target)
- `/sw.js` (service worker warm/caching behavior)

## Migration checklist
- Update outward release/docs references to `v22.0.0`.
- Deploy updated `site/` artifacts.

## Security posture
Security posture is unchanged from `v21`: verification remains fail-closed and still requires byte-level integrity, valid signature authorship evidence, anchor context, and real Groth16 proof validation.
