# Deployment

Deploy `site/` to any static host.

## Required for baseline verification
- `/index.html`

## Optional by route/runtime behavior
- `/offline-verifier.html` (alternate route + footer download target)
- `/sw.js` (optional; enables versioned service worker warm behavior)

## Embedded verification runtime notes
- Default shipped entrypoints embed the Groth16 verifier runtime and verification key material.
- Trusted signature verification uses in-process WebCrypto Ed25519.
- Signature v4 root-key pins are embedded by default.
- No third-party network dependencies are required for verification.

## Optional Signature v4 root-key pin override
Use this only if you need a custom Signature v4 root-key set.
Root key entries may include lifecycle policy metadata (`activeFromPulse`, `retiredAtPulse`).

```html
<script>
  window.__RECEIZ_SIGNATURE_V4_ROOT_PUBLIC_KEYS_PINNED__ = [
    {
      kid: "receiz.v4.prod.2026-03-02",
      alg: "Ed25519",
      publicKeyRawB64u: "z2pQNWhfQIfrFlkdutiHYLXmgwlt90UX8iIc8HvKtI0",
      status: "active",
      activeFromPulse: "0"
    }
  ];
</script>
```

Set overrides before verifier initialization.
If `status` is `retired`, include `retiredAtPulse` to avoid `unavailable` policy states that fail verification.

## GitHub repository boundary

This repository does not deploy to GitHub Pages. Its GitHub workflow runs the
release verification checks only, producing the repository's CI status check.
The static `site/` directory remains available for an explicitly chosen host or
for local use, but no push from this repository triggers a Pages deployment.

## Local smoke test
```bash
cd site
python3 -m http.server 8080
# open http://localhost:8080
```
