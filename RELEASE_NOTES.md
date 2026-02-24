# Release Notes

## v12.0.0 (from v11.0.0)
Release date: 2026-02-24

`v12.0.0` is a version-alignment release that keeps the multi-carrier verifier contract introduced in `v11.0.0` while updating release markers and documentation references to `v12.0.0`.

## Summary
- Updated release markers and references from `v11.0.0` to `v12.0.0`.
- Kept strict extraction and uniqueness rules for each carrier.
- Kept optional real Groth16 verification path using `snarkjs`.
- Kept schema set for proof, anchor, and container payload contracts.
- Kept core invariants and fail-closed semantics from `v11`.

## Feature set in v12

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
When Groth16 fields exist, v12 validates via one of two modes:
- Deterministic mode:
  - Validates canonical deterministic artifacts against bundle identity.
- Real mode:
  - `groth16Proof` format: `g16:<base64url-or-base64-json>`
  - Payload version: `receiz.g16.real.v1`
  - Verifies digest + public signal alignment to `zkPoseidonHash`
  - Runs `snarkjs.groth16.verify` with `/zk/document_seal_verification_key.json`

If real-mode assets are missing, checks fail explicitly (no silent pass).

### 4) Documentation and schema coverage
Updated v12 contracts in:
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
- UI version marker updated: `v11.0.0` → `v12.0.0`.
- Displays richer diagnostics:
  - per-check results
  - chunk/container summary
  - decoded proof bundle view
  - anchor metadata visibility when present

## Preserved from v11
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

Full v12 feature coverage:
- `/receiz-offline-verifier.html` (alternate route, if used)
- `/snarkjs.min.js` (real Groth16 mode)
- `/zk/document_seal_verification_key.json` (real Groth16 mode)
- `/sw.js` (optional; warm/caching behavior)

## Migration checklist (v11 → v12)
- Deploy updated `site/` artifacts.
- Ensure UI/docs/changelog/release references use `v12.0.0`.
- If using real Groth16, publish `snarkjs.min.js` and verification key JSON at expected same-origin paths.
- Validate CI/docs references against v12 schema and format docs.

## Security posture
The release goal remains unchanged: detect tampering deterministically and refuse verification when integrity conditions are not fully proven from artifact bytes and required checks.
