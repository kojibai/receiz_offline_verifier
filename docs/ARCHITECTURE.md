# Architecture

## Goals
- Public verification.
- Offline-capable verification from local artifact bytes.
- Deterministic outcomes for the same input bytes.
- Fail-closed result model.

## Implementation shape
- Static HTML app with embedded verifier logic and decompression runtime.
- Input via unified upload surface (file picker + drag/drop).
- Format detection by signature bytes (PNG, PDF, JPEG, GIF, WEBP, ZIP/unknown fallback).

## Verification pipeline
1. Detect artifact carrier format.
2. Extract proof bundle according to carrier rules.
3. Build basis bytes according to carrier normalization rules.
4. Decode and validate canonical bundle fields.
5. Verify artifact SHA-256 binding.
6. Validate Receiz Signature v3 when `signatureV3` is present.
7. Optionally cross-check integration-provided `/v/...` path.
8. Validate Groth16 artifacts when fields are present.

## Receiz Signature v3 model
- Signature payload is read from `proofbundle.signatureV3`.
- Signed payload hash is computed from canonicalized bundle content with `signatureV3` removed.
- Ed25519 verification runs against pinned key metadata selected by `kid`.
- Built-in pinned keys can be overridden by `globalThis.__RECEIZ_SIGNATURE_V3_PUBLIC_KEYS_PINNED__`.
- Signature policy validates `signedAtMs` against verifier clock (future-skew guard).
- Signature policy can enforce key lifecycle windows via key metadata (`activeFromMs` / `retiredAtMs`).
- Invalid signatures are hard failures; missing/unavailable signatures are warning states.

## Groth16 modes
- Deterministic mode: validates deterministic artifact construction from canonical identity.
- Real mode (`g16:` payload): verifies with `snarkjs.groth16.verify` against `/zk/document_seal_verification_key.json`.

## Offline and network contract
- No third-party network calls are required for core deterministic verification.
- Signature v3 verification uses WebCrypto in-process and does not require network fetches.
- Real Groth16 mode may request same-origin static assets:
  - `/snarkjs.min.js`
  - `/zk/document_seal_verification_key.json`
- Service worker registration and warm messaging is non-critical and failure-tolerant.
