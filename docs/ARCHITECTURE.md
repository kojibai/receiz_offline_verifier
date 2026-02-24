# Architecture

## Goals
- Public verification.
- Offline-capable verification from local artifact bytes.
- Deterministic outcomes for the same input bytes.
- Fail-closed result model.

## Implementation shape
- Static HTML app with embedded verifier logic and decompression runtime.
- Input via file chooser and drag/drop.
- Format detection by signature bytes (PNG, PDF, JPEG, GIF, WEBP, ZIP/unknown fallback).

## Verification pipeline
1. Detect artifact carrier format.
2. Extract proof bundle according to carrier rules.
3. Build basis bytes according to carrier normalization rules.
4. Decode and validate canonical bundle fields.
5. Verify artifact SHA-256 binding.
6. Optionally cross-check user-provided `/v/...` path.
7. Validate Groth16 artifacts when fields are present.

## Groth16 modes
- Deterministic mode: validates deterministic artifact construction from canonical identity.
- Real mode (`g16:` payload): verifies with `snarkjs.groth16.verify` against `/zk/document_seal_verification_key.json`.

## Offline and network contract
- No third-party network calls are required for core deterministic verification.
- Real Groth16 mode may request same-origin static assets:
  - `/snarkjs.min.js`
  - `/zk/document_seal_verification_key.json`
- Service worker registration and warm messaging is non-critical and failure-tolerant.
