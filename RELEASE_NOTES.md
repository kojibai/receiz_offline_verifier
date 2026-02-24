# Release Notes

## v11.0.0 (from v10.0.0)
Release date: 2026-02-24

`v11.0.0` expands the verifier from a PNG-only flow (`v10`) to a multi-carrier verifier while preserving fail-closed, byte-level integrity guarantees.

## Summary
- Moved from single-carrier verification to multi-carrier verification.
- Added strict extraction and uniqueness rules per carrier.
- Added optional real Groth16 verification path using `snarkjs`.
- Added schema set for proof, anchor, and container payload contracts.
- Kept core invariants and fail-closed semantics from `v10`.

## New in v11

### 1) Multi-carrier artifact support
The verifier now accepts and validates:
- PNG (`receiz.proof_bundle` in text chunks).
- PDF (`/Type /ReceizProof` object with `/ProofBundle`).
- Trailer-sealed artifacts with EOF markers:
  - prefix: `\n\n--RECEIZ-TRAILER-v1--\n`
  - suffix: `\n--END-RECEIZ-TRAILER--\n`
- `.receizbundle` envelope containers (`kind: receiz.bundle.v1`).

File chooser support expanded to:
- `.png`, `.pdf`, `.jpg`, `.jpeg`, `.gif`, `.webp`, `.receizbundle`

Notes:
- Detection is byte-signature driven (`PNG`, `PDF`, `JPEG`, `GIF`, `WEBP`, `ZIP`, fallback).
- Non-PNG/PDF signatures are processed through trailer/envelope fallback logic.

### 2) Carrier-specific extraction and normalization
- PNG:
  - Requires exactly one `receiz.proof_bundle`.
  - Optional: `receiz_anchor_bundle`, `receiz.groth16`.
  - Accepts `iTXt`, `tEXt`, `zTXt` text chunk payloads.
  - Basis hash computed after removing only proof-bundle chunk(s).
- PDF:
  - Requires exactly one `/Type /ReceizProof`.
  - `/ProofBundle` accepted as literal string or hex string.
  - Basis hash computed after stripping appended `%RECEIZ_SEAL_UPDATE_v1%` updates.
- Trailer:
  - Requires exactly one trailer payload at EOF.
  - Basis is bytes before trailer prefix.
- `.receizbundle`:
  - Requires `manifest`, `originalBase64`, `proofbundle`.
  - Validates manifest fields (`filename`, `mime`, `basisSha256`, `createdAt`, `version: 1`).
  - Basis is decoded `originalBase64`.

### 3) Groth16 verification modes
When Groth16 fields exist, v11 validates via one of two modes:
- Deterministic mode:
  - Validates canonical deterministic artifacts against bundle identity.
- Real mode:
  - `groth16Proof` format: `g16:<base64url-or-base64-json>`
  - Payload version: `receiz.g16.real.v1`
  - Verifies digest + public signal alignment to `zkPoseidonHash`
  - Runs `snarkjs.groth16.verify` with `/zk/document_seal_verification_key.json`

If real-mode assets are missing, checks fail explicitly (no silent pass).

### 4) Documentation and schema coverage
Added/updated v11 contracts in:
- `docs/FORMAT.md`
- `docs/ARCHITECTURE.md`
- `docs/COMPATIBILITY.md`
- `docs/HARDENING.md`
- `docs/THREAT_MODEL.md`
- `docs/DEPLOYMENT.md`

Added schemas:
- `docs/schemas/receiz-proof-bundle.schema.json`
- `docs/schemas/receiz-anchor-bundle.schema.json`
- `docs/schemas/receiz-bundle-envelope.schema.json`
- `docs/schemas/README.md`

### 5) UX and diagnostics
- UI version marker updated: `v10.0.0` → `v11.0.0`.
- Displays richer diagnostics:
  - per-check results
  - chunk/container summary
  - decoded proof bundle view
  - anchor metadata visibility when present

## Preserved from v10
- Fail-closed verification model.
- Canonical field validation:
  - `ts`, `slug`, `code`, `kaiPulseEternal`, `verifyPath`
- Canonical derivation checks:
  - `slug <- ts`
  - `verifyPath <- /v/<slug>/<CODE>/<PULSE>`
- Artifact SHA-256 basis binding requirement.
- Optional `/v/...` link cross-check against embedded canonical paths.
- No third-party network dependencies.

## Compatibility and deployment impact

### Runtime compatibility
- Still a static browser app.
- Works in modern desktop/mobile browsers and compatible WebViews.

### Assets required
Baseline verification:
- `/index.html`

Full v11 feature coverage:
- `/receiz-offline-verifier.html` (alternate route, if used)
- `/snarkjs.min.js` (real Groth16 mode)
- `/zk/document_seal_verification_key.json` (real Groth16 mode)
- `/sw.js` (optional; warm/caching behavior)

## Migration checklist (v10 → v11)
- Deploy updated `site/` artifacts.
- If using real Groth16, publish `snarkjs.min.js` and verification key JSON at expected same-origin paths.
- Update any integration docs that assumed PNG-only verification.
- Add handling for trailer/envelope inputs if upstream tooling emits them.
- Validate CI/docs references against v11 schema and format docs.

## Security posture
The release goal remains unchanged: detect tampering deterministically and refuse verification when integrity conditions are not fully proven from artifact bytes and required checks.
