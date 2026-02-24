# Changelog

All notable changes to this project will be documented in this file.

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
