# Compatibility

The Receiz Offline Verifier is a static browser app designed to run in:
- modern desktop browsers
- modern mobile browsers
- embedded WebViews that allow local HTML/JS execution

## Supported artifact types (v19)
- `.png`
- `.pdf`
- `.svg`
- `.json`
- trailer-sealed files (including image/document binaries)
- `.receizbundle`
- sealed package ZIP / folder-style multi-file selections (manifest-driven path)
- Upload control accepts any file type; verification succeeds only for supported carriers/contracts.
- Non-matching signatures can still verify when they contain a valid Receiz trailer payload or valid `.receizbundle` envelope JSON.

## Required host capabilities
- JavaScript runtime
- file access via `<input type="file">` or equivalent
- WebCrypto SHA-256 (`crypto.subtle.digest`)
- Text decoding APIs (`TextDecoder`)

## Optional capabilities for full feature set
- WebCrypto Ed25519 key import/verify support (for signed `signatureV3` bundles)
- `snarkjs` runtime for real Groth16 proof verification
- hosted verification key file at `/zk/document_seal_verification_key.json`
- service worker support for cache warm behavior

## Notes
- Deterministic verification path works without real Groth16 assets.
- Real Groth16 checks fail explicitly when runtime assets are missing.
- Signed bundles with invalid `signatureV3` payloads fail closed.
- Signed bundles with unknown/unconfigured or lifecycle-unavailable signature key IDs surface warning state (`Receiz Signature (v3) unavailable`).
- Signed-bundle policy checks use bundle pulse (`kaiPulseEternal`) against key lifecycle metadata (`activeFromPulse` / `retiredAtPulse`).
- `signedAtMs` is envelope-shape validated but does not gate verification on local clock skew.
- Default `v19` UI does not collect an optional `/v/...` path value.
- Actual behavior in document viewers depends on whether the viewer exposes a real WebView runtime.
