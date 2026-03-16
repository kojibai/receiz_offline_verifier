# Release Notes

## v30.0.0
Release date: 2026-03-16

`v30.0.0` is the public release standard for the modern Receiz platform.

In this offline verifier repository, `v30.0.0` keeps the verifier trust contract unchanged from `v29.0.0` while expanding the public documentation set around standards, deterministic surfaces, PresenceBound realm controls, governance, and release integrity.

Canonical full release note: [docs/releases/v30.0.0.md](docs/releases/v30.0.0.md)

## Summary
- Footer release marker advanced to `v30.0.0` in both shipped HTML entrypoints.
- Repository docs now align to `v30.0.0`.
- Added public release, standards, and governance documentation under `docs/`.
- No verifier runtime or policy behavior changed relative to `v29.0.0`.

## What changed in v30

### 1. Public release framing
- Published the full `v30.0.0` release note at [docs/releases/v30.0.0.md](docs/releases/v30.0.0.md).
- Added a docs index at [docs/README.md](docs/README.md) so the public release materials are navigable.

### 2. Standards and trust-surface docs
- Added [docs/receiz-standard-v1.md](docs/receiz-standard-v1.md) for canonical proof and settlement framing.
- Added [docs/deterministic-surfaces.md](docs/deterministic-surfaces.md) for deterministic route requirements.
- Added [docs/presencebound-canonical-realm.md](docs/presencebound-canonical-realm.md) for canonical WebAuthn realm behavior.

### 3. Governance docs
- Added a public governance index at [docs/governance/README.md](docs/governance/README.md).
- Published governance standards, controlled registers, and summary evidence artifacts under `docs/governance/`.
- Trimmed governance evidence examples to keep them useful without exposing low-value operational detail.

## Verifier impact
- No verifier policy or runtime behavior changed relative to `v29.0.0`.
- The current shipped entrypoints are marked `v30.0.0`.
- Trusted-signature, anchor, and Groth16 requirements are unchanged.

## Preserved from v29
- Trusted-signature success still requires verified `signatureV4`.
- Trusted-signature failure semantics remain fail-closed:
  - invalid present `signatureV4` -> `Trusted signature invalid`
  - unavailable present `signatureV4` -> `Trusted signature unavailable`
  - missing `signatureV4` -> `Trusted signature missing. Expected signatureV4.`
- Effective anchor context remains required (explicit or derivable).
- Groth16 fields remain required and only real `g16:` proof payloads are accepted.
- Carrier extraction/normalization for PNG, PDF, SVG, JSON, trailer, and `.receizbundle`.
- Package ZIP/folder manifest verification paths.
- Canonical identity derivation and artifact-binding checks.
- Fail-closed verification semantics.

## Compatibility and deployment impact

### Runtime compatibility
- Still a static browser app.
- No new network dependency introduced.
- Requires WebCrypto Ed25519 support for trusted signature verification paths.

### Policy impact
- None relative to `v29`. Existing `signatureV4`/anchor/Groth16 enforcement behavior is unchanged.

### Assets required
Required:
- `/index.html`

Optional by deployment route:
- `/offline-verifier.html` (alternate route + footer download target)
- `/sw.js` (service worker warm/caching behavior)

## Migration checklist
- Update outward release/docs references to `v30.0.0`.
- Deploy updated `site/` artifacts.
- Publish the new `docs/` materials if you want the governance and standards surface to be publicly discoverable.
- No producer payload or proof-format migration is required if already compatible with `v29`.

## Security posture
Security posture remains fail-closed: verification still requires byte-level integrity, trusted signature evidence, anchor context, and real Groth16 proof validation.
