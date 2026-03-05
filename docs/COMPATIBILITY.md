# Compatibility

The Receiz Offline Verifier is a static browser app designed to run in:
- modern desktop browsers
- modern mobile browsers
- embedded WebViews that allow local HTML/JS execution

## Supported artifact types (v22)
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
- WebCrypto Ed25519 key import/verify support (required for Signature v3 verification)
- Text decoding APIs (`TextDecoder`)
- `snarkjs` Groth16 verify runtime availability (embedded in shipped entrypoints)

## Optional capabilities
- service worker support for cache warm behavior

## Notes
- Signed bundles with invalid `signatureV3` payloads fail closed.
- Signed bundles with unknown/unconfigured or lifecycle-unavailable signature key IDs fail closed in `v22`.
- Missing `signatureV3` fails closed in `v22`.
- Anchor context is required for trusted verification (`receiz_anchor_bundle` or derivable anchor context from proof bundle fields).
- Groth16 fields are required in `v22`; missing fields fail closed.
- Only real `g16:` Groth16 payloads are accepted in `v22`.
- Signed-bundle policy checks use bundle pulse (`kaiPulseEternal`) against key lifecycle metadata (`activeFromPulse` / `retiredAtPulse`).
- `signedAtMs` is envelope-shape validated but does not gate verification on local clock skew.
- Default `v22` UI does not collect an optional `/v/...` path value.
- Actual behavior in document viewers depends on whether the viewer exposes a real WebView runtime.
