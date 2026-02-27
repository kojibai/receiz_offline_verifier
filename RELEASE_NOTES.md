# Release Notes

## v13.0.0 (from v12.0.0)
Release date: 2026-02-25

`v13.0.0` is a UI and release-alignment update. Core verifier contracts from `v12.0.0` are preserved; this release focuses on simplifying the operator-facing upload flow and aligning release/docs metadata to `v13.0.0`.

## Summary
- Refreshed verifier framing and UI copy around "Verify an original."
- Replaced split upload controls with one integrated upload surface.
- Removed manual optional `/v/...` link input from the default UI.
- Simplified verify/status wording.
- Kept core verification logic, package verification paths, and Groth16 behavior from `v12`.

## What changed in v13

### 1) UI refresh and copy updates
- Top-line product language updated:
  - `Verify a receiz offline.` -> `Verify an original.`
  - `Upload the original receiz. Proof lives in the file.` -> `Upload anything. Proof lives in the original.`
- Step/interaction text updated for a simpler intake flow.
- Success wording updated:
  - `Verified original receiz` -> `Verified original`
  - `All required offline checks passed.` -> `All required checks passed.`

### 2) Input flow simplification
- Upload interaction is now centered on a single drop/upload surface.
- Separate `Choose files` and `Choose folder` controls were removed from the default UI.
- Verify action label simplified from `Verify Offline` to `Verify`.
- Drag/drop and multi-file handling remain supported.

### 3) Optional link input behavior
- Default UI no longer asks users to paste a `/v/...` path.
- Verifier core still supports optional canonical-path cross-check when an integration supplies a path value.
- Canonical bundle/path derivation checks inside the proof contract are unchanged.

### 4) Release marker and docs alignment
- UI footer marker updated to `v13.0.0`.
- Release documentation updated from `v12` to `v13` where version markers are user-facing.

## Preserved from v12
- Fail-closed verification semantics.
- Canonical identity validation:
  - `ts`, `slug`, `code`, `kaiPulseEternal`, `verifyPath`
- Canonical derivation checks:
  - `slug <- ts`
  - `verifyPath <- /v/<slug>/<CODE>/<PULSE>`
- Artifact SHA-256 basis binding requirements.
- Carrier-specific extraction/normalization across PNG, PDF, trailer, and `.receizbundle`.
- Package ZIP/folder verification paths for sealed manifest workflows.
- Deterministic + real Groth16 verification modes.

## Compatibility and deployment impact

### Runtime compatibility
- Still a static browser app.
- Works in modern desktop/mobile browsers and compatible WebViews.

### Assets required
Baseline verification:
- `/index.html`

Full v13 feature coverage:
- `/offline-verifier.html` (alternate route, if used)
- `/snarkjs.min.js` (real Groth16 mode)
- `/zk/document_seal_verification_key.json` (real Groth16 mode)
- `/sw.js` (optional; warm/caching behavior)

## Migration checklist (v12 -> v13)
- Deploy updated `site/` artifacts.
- Update outward release/docs references to `v13.0.0`.
- If your workflow depended on a user-entered `/v/...` field in the default UI, provide that input via a custom integration wrapper.
- If using real Groth16 mode, keep `snarkjs.min.js` and verification key JSON available at the same-origin paths.

## Security posture
The release goal remains unchanged: detect tampering deterministically and refuse verification when integrity conditions are not fully proven from artifact bytes and required checks.
