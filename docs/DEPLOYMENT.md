# Deployment

Deploy `site/` to any static host.

## Required for baseline verification
- `/index.html`

## Optional by route/runtime behavior
- `/offline-verifier.html` (alternate route + footer download target)
- `/sw.js` (optional; enables service worker warm behavior)

## Embedded verification runtime notes
- Default shipped entrypoints embed the Groth16 verifier runtime and verification key material.
- Trusted signature verification uses in-process WebCrypto Ed25519.
- Signature v3 key pins and Signature v4 root-key pins are embedded by default.
- No third-party network dependencies are required for verification.

## Optional Signature v3 key pin override
Use this only if you need a custom key set beyond the built-in pinned defaults.
Key entries may include lifecycle policy metadata (`activeFromPulse`, `retiredAtPulse`).

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

## Optional Signature v4 root-key pin override
Use this only if you need a custom Signature v4 root-key set.
Root key entries may include lifecycle policy metadata (`activeFromPulse`, `retiredAtPulse`).

```html
<script>
  window.__RECEIZ_SIGNATURE_V4_ROOT_PUBLIC_KEYS_PINNED__ = [
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

Set overrides before verifier initialization.
If `status` is `retired`, include `retiredAtPulse` to avoid `unavailable` policy states that fail verification when no alternate trusted signature path verifies.

## GitHub Pages
Serve repository `site/` output over HTTPS.

## Local smoke test
```bash
cd site
python3 -m http.server 8080
# open http://localhost:8080
```
