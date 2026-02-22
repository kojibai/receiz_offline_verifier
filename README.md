
<!-- README.md -->

# Receiz Offline Verifier


**Verify a Receiz artifact offline. Proof lives in the file.**

This repository ships the **public, offline-capable verifier** for Receiz PNG artifacts.  
No accounts. No network calls. Deterministic results from the bytes in front of you.

## What it verifies (current)
- **PNG** artifacts with an embedded `receiz.proof_bundle` text chunk.

## What it does not do
- It does not issue Receiz artifacts.
- It does not upload files or store data.
- It does not require a server to verify.

## Where it runs
- Browsers (desktop + mobile)
- Embedded WebViews (including mobile PDF viewers that host HTML/JS)

## Primitive contract (what “Verified” means)

A file is **Verified** only if the verifier can prove integrity from the artifact bytes:
- Exactly one embedded `receiz.proof_bundle`
- Proof bundle decodes successfully
- Canonical fields validate (ts / slug / code / pulse / verifyPath)
- Artifact binding matches (anti-tamper / anti-swap)
- Optional `/v/...` cross-check (if provided) matches an embedded canonical path

Fail closed: if it cannot be proven from the file, it does not verify.

## Quick start (local, offline)

### Option A: Open directly
Open `site/index.html` in a modern browser.

> If your browser restricts WebCrypto on `file://`, use Option B.

### Option B: Serve locally (recommended)
```bash
cd site
python3 -m http.server 8080
# then open http://localhost:8080
````

## Deploy (GitHub Pages)

This repo includes a Pages workflow that publishes the `site/` directory on pushes to `main`.

1. GitHub repo → Settings → Pages
2. Source: **GitHub Actions**
3. Push to `main`

## Repository layout

* `site/index.html` — the offline verifier (self-contained)
* `docs/` — architecture, threat model, format, hardening, deployment
* `.github/` — CI, Pages deploy, issue/PR templates

## Security

If you find a vulnerability (including false-positive verification), do **not** open a public issue.
See `SECURITY.md`.

## License

MIT — see `LICENSE`.

---

<!-- GitHub Release Body -->
<!-- Title: Receiz Offline Verifier v10.0.0 -->

# Receiz Offline Verifier v10.0.0

This release publishes the **Receiz Offline Verifier** as a real primitive:
**a single-file verifier where proof lives in the file and verification is computed offline from bytes.**

## Highlights
- **Offline by construction**: no `fetch`, no XHR, no WebSocket, no EventSource, no sendBeacon.
- **Self-contained**: shipped as `site/index.html` (UI + verifier logic + decompression).
- **Fail-closed verification**: “Verified” only when required checks can be proven from the artifact itself.
- **Anti-tamper / anti-swap**: byte-bound artifact binding verification via SHA-256 basis hashing.
- **Deterministic results**: same bytes → same outcome, across compatible hosts.
- **Mobile-ready**: verified in mobile browsers and environments that host WebViews (including some PDF viewers).

## What’s included

### 1) The verifier primitive
- `site/index.html`
  - Parses PNG chunks (iTXt / tEXt / zTXt)
  - Requires exactly one `receiz.proof_bundle` chunk
  - Decodes proof bundles (compressed + legacy)
  - Validates canonical fields (ts / slug / code / pulse / verifyPath)
  - Verifies artifact binding (tamper + swap detection)
  - Optional `/v/...` path cross-check against embedded canonical paths
  - Displays decoded bundle + chunk summary for inspection

### 2) Threat model + format docs
- `docs/ARCHITECTURE.md` — offline-first architecture contract
- `docs/THREAT_MODEL.md` — attacker model + required defenses
- `docs/FORMAT.md` — embedded keys + bundle encoding conventions
- `docs/HARDENING.md` — rules that must never regress
- `docs/DEPLOYMENT.md` — static hosting instructions

### 3) Guardrails (primitive protection)
- CI hard-fails if:
  - any network primitives are introduced into `site/index.html`
  - any remote script tags are introduced
  - the primitive contract marker (`receiz.proof_bundle`) disappears
- GitHub Pages workflow publishes `site/` as a static site

### 4) Security + contribution posture
- `SECURITY.md` — private vulnerability reporting
- `CONTRIBUTING.md` — correctness-first change rules
- Issue templates + PR template for clean, auditable changes

## Compatibility requirements
The verifier runs anywhere a host provides:
- JavaScript runtime
- local file import (`<input type="file">` / equivalent)
- WebCrypto SHA-256 (`crypto.subtle.digest`)

## Known constraint (current)
- **PNG input only** (this release verifies PNG artifacts that embed `receiz.proof_bundle`).

## Security
If you discover a vulnerability (including false-positive verification), do **not** open a public issue.  
Use the process in `SECURITY.md`.

**Tag:** `v10.0.0`

