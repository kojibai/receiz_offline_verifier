# Deployment

Deploy `site/` to any static host.

## Required for baseline verification
- `/index.html`

## Required for full v20 feature coverage
- `/offline-verifier.html` (if used as alternate path)
- `/snarkjs.min.js` (real Groth16 verification)
- `/zk/document_seal_verification_key.json` (real Groth16 verification)
- `/sw.js` (optional; enables service worker warm behavior)

## Optional Signature v3 key pin override
Use this only if you need a custom key set beyond the built-in pinned defaults.
Key entries may optionally include lifecycle policy metadata (`activeFromPulse`, `retiredAtPulse`).

```html
<script>
  window.__RECEIZ_SIGNATURE_V3_PUBLIC_KEYS_PINNED__ = [
    {
      kid: "receiz.v3.prod.2026-03-02",
      alg: "Ed25519",
      publicKeyRawB64u: "z2pQNWhfQIfrFlkdutiHYLXmgwlt90UX8iIc8HvKtI0",
      status: "active",
      activeFromPulse: "0"
    }
  ];
</script>
```

Set the override before verifier initialization.
If `status` is `retired`, include `retiredAtPulse` to avoid policy-unavailable warnings.

## GitHub Pages
Serve repository `site/` output over HTTPS.

## Local smoke test
```bash
cd site
python3 -m http.server 8080
# open http://localhost:8080
```
