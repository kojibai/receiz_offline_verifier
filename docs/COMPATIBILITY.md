# Compatibility

The Receiz Offline Verifier is a static browser app designed to run in:
- modern desktop browsers
- modern mobile browsers
- embedded WebViews that allow local HTML/JS execution

## Supported artifact types (v23)
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
- WebCrypto Ed25519 key import/verify support (required for trusted signature verification)
- Text decoding APIs (`TextDecoder`)
- `snarkjs` Groth16 verify runtime availability (embedded in shipped entrypoints)

## Optional capabilities
- service worker support for cache warm behavior

## Notes
- Trusted-signature verification requires at least one valid signature path (`signatureV3` or `signatureV4`).
- Any present invalid signature payload fails closed (`Trusted signature invalid`).
- If no signature path verifies, missing/unavailable trusted signatures fail closed.
- Signature key lifecycle checks use bundle pulse (`kaiPulseEternal`) against `activeFromPulse` / `retiredAtPulse`.
- Signature v4 validates root-key policy plus device certificate chain and validity window checks.
- Anchor context is required for trusted verification (`receiz_anchor_bundle` or derivable anchor context from proof bundle fields).
- Groth16 fields are required in `v23`; missing fields fail closed.
- Only real `g16:` Groth16 payloads are accepted in `v23`.
- Default `v23` UI does not collect an optional `/v/...` path value.
- Actual behavior in document viewers depends on whether the viewer exposes a real WebView runtime.
