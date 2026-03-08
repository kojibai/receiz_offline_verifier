# Release Notes

## v27.0.0 (from v26.0.0)
Release date: 2026-03-08

`v27.0.0` is a release-marker and documentation alignment update. This release changes footer version strings in the two shipped HTML entrypoints and aligns repository docs to `v27.0.0`.

## Summary
- Footer release marker advanced from `v26.0.0` to `v27.0.0`.
- Applied the marker update in:
  - `site/index.html`
  - `apps/offline-verifier.html`
- Updated repository release/docs references from `v26` to `v27`.
- No runtime or policy behavior changed relative to `v26`.

## What changed in v27

### 1) Entrypoint release marker update
- Footer release marker text changed from `v26.0.0` to `v27.0.0` in both shipped entrypoints.

### 2) Documentation sync
- Updated docs and release references to reflect `v27.0.0` as current release.
- Release docs now explicitly capture that this `v26 -> v27` transition does not alter verifier semantics.

## Preserved from v26
- Trusted-signature success still requires verified `signatureV4`.
- Trusted-signature failure semantics remain fail-closed:
  - invalid present `signatureV4` -> `Trusted signature invalid`
  - unavailable present `signatureV4` -> `Trusted signature unavailable`
  - missing `signatureV4` -> `Trusted signature missing. Expected signatureV4.`
- Effective anchor context remains required (explicit or derivable).
- Groth16 fields remain required and only real `g16:` proof payloads are accepted.
- Carrier extraction/normalization for PNG, PDF, SVG, JSON, trailer, and `.receizbundle`.
- Package ZIP/folder manifest verification paths.
- Canonical identity derivation and artifact-binding checks.
- Fail-closed verification semantics.

## Compatibility and deployment impact

### Runtime compatibility
- Still a static browser app.
- No new network dependency introduced.
- Requires WebCrypto Ed25519 support for trusted signature verification paths.

### Policy impact
- None relative to `v26`. Existing `signatureV4`/anchor/Groth16 enforcement behavior is unchanged.

### Assets required
Required:
- `/index.html`

Optional by deployment route:
- `/offline-verifier.html` (alternate route + footer download target)
- `/sw.js` (service worker warm/caching behavior)

## Migration checklist
- Update outward release/docs references to `v27.0.0`.
- Deploy updated `site/` artifacts.
- No producer payload or proof-format migration is required if already compatible with `v26`.

## Security posture
Security posture remains fail-closed: verification still requires byte-level integrity, trusted signature evidence, anchor context, and real Groth16 proof validation.
