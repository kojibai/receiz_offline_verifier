# Compatibility

The Receiz Offline Verifier is a single-file static app designed to run in:
- modern browsers
- embedded WebViews (mobile)
- environments that surface HTML/JS inside “document viewers” (including some PDF viewers)

## Why it works in WebViews / PDF viewers
The verifier:
- makes no network calls
- ships decompression inline (fflate)
- verifies from file bytes using SHA-256 via WebCrypto

## Requirements
A host environment must provide:
- a JavaScript runtime
- file access via `<input type="file">` or drag/drop equivalents
- `crypto.subtle.digest` (WebCrypto SHA-256)

## Notes
- “PDF viewer support” depends on whether that viewer is actually hosting a WebView and permits local HTML/JS execution.
- Verification remains offline and deterministic in any compatible host.