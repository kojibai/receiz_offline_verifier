# Release Notes

## v17.0.0 (from v16.0.0)
Release date: 2026-03-01

`v17.0.0` completes the copy and UX alignment work from the `v14 -> v16` train and adds anchor-handling hardening in verifier logic. The result is the same fail-closed contract with stronger anchor consistency checks and clearer file-first operator messaging.

## Summary
- Added anchor fallback derivation directly from proof bundle fields.
- Added explicit mismatch detection when anchor bundle ID and derived anchor ID disagree.
- Anchor fact rendering now resolves even when only proof-level anchor data exists.
- Maintained fail-closed semantics and canonical field/binding checks.
- Advanced release marker to `v17.0.0`.

## What changed in v17

### 1) Anchor resilience and consistency hardening
- Added `deriveAnchorBundleFromProofBundle(...)` fallback path to construct anchor context from proof fields when no explicit anchor bundle is present.
- Anchor validation now uses an effective anchor model (`explicit anchor || derived anchor`) for parent checks and optional-link matching.
- Added a hard failure when explicit and derived anchor IDs differ:
  - `Anchor ID mismatch between anchor bundle and proof bundle.`
- Facts panel anchor display now resolves in order:
  - `result.anchor.anchorId`
  - derived anchor ID from proof bundle
  - `bundle.anchorId`

### 2) File-first wording alignment (carried from v16 and finalized)
- Hero and intake copy now use file-first framing:
  - `Verify a file.`
  - `Upload a file. Proof is in the file.`
- Input and status copy were normalized for file workflows:
  - `1) Load file`
  - `Verified file`
- Folder/package statuses and checks now consistently use `sealed file` wording.

### 3) Package/folder messaging normalization
- Package/folder manifest error language no longer mixes `sealed artifact` vs `sealed file` terms.
- Unsupported-format guidance now references package ZIP/folder input without older wording.
- Manifest mismatch messaging is clearer for missing files, size mismatch, and hash mismatch paths.

### 4) Release marker and route alignment
- Footer release marker updated to `v17.0.0`.
- Alternate verifier route naming remains aligned to `offline-verifier.html` from prior `v14/v15` path migration.

## Release train context (v14 -> v17)
- `v14.0.0` (2026-02-26): version marker update and app entrypoint filename alignment (`receiz-offline-verifier.html` -> `offline-verifier.html`).
- `v15.0.0` (2026-02-26): runtime/docs route references aligned to `/offline-verifier.html`.
- `v15.5.0` (2026-02-27): release marker update.
- `v16.0.0` (2026-02-28): broad copy migration from `original/sealed artifact` terms to `file/sealed file` terms.
- `v17.0.0` (2026-03-01): anchor fallback derivation + anchor consistency hardening.

## Preserved from v16
- Fail-closed verification semantics.
- Canonical identity validation:
  - `ts`, `slug`, `code`, `kaiPulseEternal`, `verifyPath`
- Canonical derivation checks:
  - `slug <- ts`
  - `verifyPath <- /v/<slug>/<CODE>/<PULSE>`
- Artifact SHA-256 basis binding requirements.
- Carrier-specific extraction/normalization across PNG, PDF, SVG, JSON, trailer, and `.receizbundle`.
- Package ZIP/folder verification paths for sealed manifest workflows.
- Deterministic + real Groth16 verification modes.

## Compatibility and deployment impact

### Runtime compatibility
- Still a static browser app.
- Works in modern desktop/mobile browsers and compatible WebViews.

### Assets required
Baseline verification:
- `/index.html`

Full v17 feature coverage:
- `/offline-verifier.html` (alternate route, if used)
- `/snarkjs.min.js` (real Groth16 mode)
- `/zk/document_seal_verification_key.json` (real Groth16 mode)
- `/sw.js` (optional; warm/caching behavior)

## Migration checklist
- Deploy updated `site/` artifacts.
- Update outward release/docs references to `v17.0.0`.
- Ensure alternate route references use `/offline-verifier.html` (not legacy path names).
- If using real Groth16 mode, keep `snarkjs.min.js` and verification key JSON available at same-origin paths.
- If integrations supply optional `/v/...` values, no API change is required; anchor fallback now broadens accepted embedded canonical path sources while staying fail-closed.

## Security posture
The release goal remains unchanged: detect tampering deterministically and refuse verification when integrity conditions are not fully proven from artifact bytes and required checks.
