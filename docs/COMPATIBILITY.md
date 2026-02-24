# Compatibility

The Receiz Offline Verifier is a static browser app designed to run in:
- modern desktop browsers
- modern mobile browsers
- embedded WebViews that allow local HTML/JS execution

## Supported artifact types (v11)
- `.png`
- `.pdf`
- trailer-sealed files (including image/document binaries)
- `.receizbundle`
- File chooser accepts `.png`, `.pdf`, `.jpg`, `.jpeg`, `.gif`, `.webp`, `.receizbundle`.
- Non-PNG/PDF files verify only when they contain a valid Receiz trailer payload or valid `.receizbundle` envelope JSON.

## Required host capabilities
- JavaScript runtime
- file access via `<input type="file">` or equivalent
- WebCrypto SHA-256 (`crypto.subtle.digest`)
- Text decoding APIs (`TextDecoder`)

## Optional capabilities for full feature set
- `snarkjs` runtime for real Groth16 proof verification
- hosted verification key file at `/zk/document_seal_verification_key.json`
- service worker support for cache warm behavior

## Notes
- Deterministic verification path works without real-Groth16 assets.
- Real-Groth16 checks fail explicitly when runtime assets are missing.
- Actual behavior in document viewers depends on whether the viewer exposes a real WebView runtime.
