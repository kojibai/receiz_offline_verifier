# Compatibility

The Receiz Offline Verifier is a static browser app designed to run in:
- modern desktop browsers
- modern mobile browsers
- embedded WebViews that allow local HTML/JS execution

## Supported artifact types (v47)
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
- Trusted-signature verification requires a valid `signatureV4` path.
- Any present invalid `signatureV4` payload fails closed (`Trusted signature invalid`).
- If present `signatureV4` is unavailable, trusted verification fails closed (`Trusted signature unavailable`).
- If `signatureV4` is missing, trusted verification fails closed (`Trusted signature missing. Expected signatureV4.`).
- `signatureV3` may be present in payloads but does not satisfy trusted-signature requirements in `v47`.
- Signature key lifecycle checks use bundle pulse (`kaiPulseEternal`) against `activeFromPulse` / `retiredAtPulse`.
- Signature v4 validates root-key policy plus device certificate chain and validity window checks.
- Anchor context is required for trusted verification (`receiz_anchor_bundle` or derivable anchor context from proof bundle fields).
- Groth16 fields are required in `v47`; missing fields fail closed.
- Only real `g16:` Groth16 payloads are accepted in `v47`.
- Default `v47` UI does not collect an optional `/v/...` path value.
- Actual behavior in document viewers depends on whether the viewer exposes a real WebView runtime.
