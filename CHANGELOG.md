# Changelog

All notable changes to this project will be documented in this file.

## [v17.0.0] - 2026-03-01

### Added
- Anchor fallback derivation from proof bundle fields when an explicit anchor bundle is missing.
- Anchor ID consistency check between explicit anchor bundle and derived anchor data.

### Changed
- Anchor fact display now resolves from explicit anchor, derived anchor, or `bundle.anchorId`.
- Optional-link/canonical-path checks now use an effective anchor model (explicit anchor or derived anchor).
- Verifier UI version marker from `v16.0.0` to `v17.0.0`.

### Kept
- Core offline verification pipeline and fail-closed semantics from `v16`.
- Carrier extraction and normalization rules for PNG, PDF, SVG, JSON, trailer, and `.receizbundle`.
- Package ZIP/folder manifest verification paths.
- Deterministic and real Groth16 verification modes.

## [v16.0.0] - 2026-02-28

### Changed
- Verifier UI copy reframed from "original/sealed artifact" wording to "file/sealed file" wording.
- Hero, load-step, folder scan, package status, and verification-result text updated for file-first wording.
- Package/folder manifest and unsupported-format errors rewritten to match current "sealed file" terminology.
- Hint copy tuned to `Copies fail. Ask for the receiz.`
- Verifier UI version marker from `v15.5.0` to `v16.0.0`.

### Kept
- Verification contract and canonical checks from `v15.5.0`.
- Multi-carrier support and package verification flow.

## [v15.5.0] - 2026-02-27

### Changed
- Verifier UI version marker from `v15.0.0` to `v15.5.0`.

### Kept
- Runtime behavior and verification semantics from `v15.0.0`.

## [v15.0.0] - 2026-02-26

### Changed
- Service-worker route references aligned from `/receiz-offline-verifier.html` to `/offline-verifier.html`.
- Deployment/docs references aligned to `offline-verifier.html` naming.
- Verifier UI version marker from `v14.0.0` to `v15.0.0`.

### Kept
- Core verifier logic and UI behavior from `v14`.

## [v14.0.0] - 2026-02-26

### Changed
- Verifier UI version marker from `v13.0.0` to `v14.0.0`.
- App entrypoint filename alignment: `apps/receiz-offline-verifier.html` -> `apps/offline-verifier.html`.

### Kept
- Core offline verification pipeline and fail-closed semantics from `v13`.
- Carrier extraction and normalization rules.

## [v13.0.0] - 2026-02-25

### Changed
- Verifier UI copy reframed around "Verify an original."
- Upload flow simplified to a single integrated upload surface (tap to upload + drag/drop).
- Removed dedicated `Choose files` / `Choose folder` controls from the default UI.
- Removed manual optional `/v/...` link input field from the default UI.
- Verify/status text simplified (`Verify Offline` -> `Verify`, `Verified original receiz` -> `Verified original`).
- Verifier UI version marker from `v12.0.0` to `v13.0.0`.

### Kept
- Core offline verification pipeline and fail-closed semantics from `v12`.
- Carrier extraction and normalization rules for PNG, PDF, trailer, and `.receizbundle`.
- Package ZIP/folder manifest verification paths in verifier logic.
- Deterministic and real Groth16 verification modes.

## [v12.0.0] - 2026-02-24

### Changed
- Verifier UI version marker from `v11.0.0` to `v12.0.0`.
- Repository release/docs references updated from `v11` to `v12`.
- Release notes reframed for migration from `v11` to `v12`.

### Kept
- Multi-format carrier verification support (PNG, PDF, trailer, `.receizbundle`).
- Real and deterministic Groth16 verification paths.
- Fail-closed verification semantics and canonical binding checks.

## [v11.0.0] - 2026-02-24

### Added
- Multi-format carrier verification support:
  - PNG proof chunk flow
  - PDF embedded Receiz proof object flow
  - trailer-sealed proof flow
  - `.receizbundle` envelope flow
- Trailer parser (`RECEIZ-TRAILER-v1`) and envelope parser (`receiz.bundle.v1`).
- PDF proof extraction (`/Type /ReceizProof`, `/ProofBundle` literal/hex).
- Real Groth16 verification path using `snarkjs` + verification key JSON.
- JSON Schema definitions for proof, anchor, and bundle envelope payloads.

### Changed
- Verifier UI version marker from `v10.0.0` to `v11.0.0`.
- File chooser accepts additional extensions (`.pdf`, `.jpg`, `.jpeg`, `.gif`, `.webp`, `.receizbundle`).
- Documentation updated from PNG-only contract to v11 multi-carrier contract.

### Kept
- Fail-closed verification semantics.
- Canonical field validation and artifact binding enforcement.
- Optional link path cross-check model.

## [v10.0.0] - 2026-02-22

### Added
- Initial public offline verifier release for PNG artifacts with embedded `receiz.proof_bundle`.
