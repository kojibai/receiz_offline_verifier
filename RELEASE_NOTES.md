# Release Notes

## v20.0.0 (from v19.0.0)
Release date: 2026-03-04

`v20.0.0` is a UI distribution update focused on easier local reuse of the verifier page.

## Summary
- Added a footer download action (`Download Offline Verifier`) that serves `offline-verifier.html`.
- Applied the same UI update to both published and mirrored entrypoints.
- Advanced release marker to `v20.0.0`.
- Kept verification rules, signature policy, and carrier support unchanged from `v19.0.0`.

## What changed in v20

### 1) Footer download action
- Added a footer action group with a download-style link button.
- Button target:
  - `href="/offline-verifier.html"`
  - `download="offline-verifier.html"`
- Purpose: make it easier to grab the offline verifier artifact directly from the UI.

### 2) Entrypoint parity
- Applied the same footer action + release marker update to:
  - `site/index.html`
  - `apps/offline-verifier.html`

### 3) Release marker update
- Footer release marker updated from `v19.0.0` to `v20.0.0`.

## Preserved from v19
- Signature v3 pulse-based key lifecycle policy (`activeFromPulse` / `retiredAtPulse`).
- Signature v3 payload-hash and Ed25519 verification model.
- Canonical identity and derivation checks (`slug`, `verifyPath`, pulse).
- Carrier extraction/normalization for PNG, PDF, SVG, JSON, trailer, and `.receizbundle`.
- Package ZIP/folder manifest verification paths.
- Deterministic + real Groth16 verification modes.
- Fail-closed verification semantics.

## Compatibility and deployment impact

### Runtime compatibility
- Still a static browser app.
- No new runtime APIs required.

### Assets required
Baseline verification:
- `/index.html`

Full v20 feature coverage:
- `/offline-verifier.html` (alternate route + download target)
- `/snarkjs.min.js` (real Groth16 mode)
- `/zk/document_seal_verification_key.json` (real Groth16 mode)
- `/sw.js` (optional; warm/caching behavior)

No new network assets are required.

## Migration checklist
- Deploy updated `site/` artifacts.
- Update outward release/docs references to `v20.0.0`.
- Keep `/offline-verifier.html` available if footer download action is used.
- If using real Groth16 mode, keep `snarkjs.min.js` and verification key JSON available at same-origin paths.

## Security posture
The release goal remains unchanged: detect tampering deterministically and refuse verification when integrity conditions are not fully proven from artifact bytes and required checks.
