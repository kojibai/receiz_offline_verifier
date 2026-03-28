# Release Notes

## v40.0.0
Release date: 2026-03-27

`v40.0.0` is the release where Receiz stops looking like a single proof product with adjacent tools and starts behaving like a full trust runtime: hardened signatures, stronger offline issuance and verification, operational wallet and payment controls, richer public artifact delivery, broader admin and business infrastructure, and a first-class world runtime stack.

The core rule does not change: the file remains the authority. Record, seal, share, and verify are still deterministic. Public `/v` routes, online viewers, profile delivery, and world surfaces provide context, portability, and operational reach around the same underlying artifact truth.

Canonical full release note: [docs/releases/v40.0.0.md](docs/releases/v40.0.0.md)

## Summary
- Current shipped verifier entrypoints are marked `v40.0.0`.
- Repository release/docs surfaces now align to `v40.0.0`.
- Published the full `v40.0.0` release note and updated public docs indexes to point at it.
- Release framing now emphasizes hardened trust, deeper offline proof tooling, operational wallet/settlement controls, richer artifact delivery, stronger admin/business rails, and world-runtime infrastructure.

## What changed in v40

### 1. Release framing
- Published the full `v40.0.0` release note at [docs/releases/v40.0.0.md](docs/releases/v40.0.0.md).
- Updated [docs/README.md](docs/README.md) so the current public release materials point to `v40.0.0`.

### 2. Current-release docs alignment
- Updated README and verifier-contract docs so `v40` is the active release label for current runtime/documentation behavior.
- Kept historical changelog and prior release-note entries intact.

### 3. Platform themes reflected in this release
- Hardened trust and signing are now described as central platform primitives.
- Offline proof, offline studio, and document-seal delivery are framed as operational product surfaces.
- Wallet, payment, settlement, admin, artifact delivery, and world-runtime expansion now define the public release story.

## Verifier impact
- The file remains the authority.
- Trusted-signature, anchor, and Groth16 requirements remain fail-closed.
- Current shipped verifier entrypoints are marked `v40.0.0`.

## Preserved verifier contract
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
- Existing `signatureV4`/anchor/Groth16 enforcement behavior remains the current verifier contract in this repository.

### Assets required
Required:
- `/index.html`

Optional by deployment route:
- `/offline-verifier.html` (alternate route + footer download target)
- `/sw.js` (service worker warm/caching behavior)

## Migration checklist
- Update outward release/docs references to `v40.0.0`.
- Deploy updated `site/` artifacts.
- Publish the `v40.0.0` release note and updated docs indexes.
- No producer payload or proof-format migration is implied by these documentation updates alone.

## Security posture
Security posture remains fail-closed: verification still requires byte-level integrity, trusted signature evidence, anchor context, and real Groth16 proof validation.
