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

## Quick start (local, offline)

### Option A: Open directly
Open `site/index.html` in a modern browser.

> If your browser restricts WebCrypto on `file://`, use Option B.

### Option B: Serve locally (recommended)
```bash
cd site
python3 -m http.server 8080
# then open http://localhost:8080