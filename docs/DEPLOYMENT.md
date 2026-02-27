# Deployment

Deploy `site/` to any static host.

## Required for baseline verification
- `/index.html`

## Required for full v13 feature coverage
- `/offline-verifier.html` (if used as alternate path)
- `/snarkjs.min.js` (real Groth16 verification)
- `/zk/document_seal_verification_key.json` (real Groth16 verification)
- `/sw.js` (optional; enables service worker warm behavior)

## GitHub Pages
Serve repository `site/` output over HTTPS.

## Local smoke test
```bash
cd site
python3 -m http.server 8080
# open http://localhost:8080
```
