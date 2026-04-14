# Release Notes

## v53.0.0
Release date: 2026-04-14

`v53.0.0` carries forward the full market lineage from `v52.0.0` and `v52.5.0` into a cleaner public product system. Market stays a governed execution layer around file, manifest, and settlement truth while public market data routes, historical conformance evidence, stronger prediction resolution, touch-safe market/player flows, passkey account attachment, first-class Enterprise handling, simpler public entry surfaces, and public-key-based release attestation move forward together.

Canonical full release note: [docs/releases/v53.0.0.md](docs/releases/v53.0.0.md)
Product-truth freeze: [docs/releases/v53.0.0-product-truth.md](docs/releases/v53.0.0-product-truth.md)

## Highlights
- The full governed market system now carries forward with public market data routes, indexed asset surfaces, persisted conformance history, and stricter prediction resolution.
- Market desk, value-pill, and player surfaces are more touch-safe and open more cleanly into viewer and playback flows.
- Public proof and market surfaces now emit stronger machine-readable metadata, structured data, sitemap coverage, and Open Graph treatment.
- Existing email accounts attach passkeys from signed-in account surfaces while public passkey registration refuses silent account-claim behavior.
- Enterprise is first-class across shared plan/session/world logic, and the public front door is simplified around Verify, Seal, Record, and Public Twin.
- Release attestation now uses `Ed25519` signatures verified against the published governance keyring, with legacy HMAC retained only for older artifacts.
- Release-governed version surfaces stay locked together across current-release docs and offline verifier HTML entrypoints.

## Verifier impact
- Current shipped verifier entrypoints are marked `v53.0.0`.
- Repository release/docs surfaces now align to `v53.0.0`.
- Verifier trust semantics remain file-authoritative, deterministic, and fail-closed.
- Trusted-signature, anchor, and Groth16 requirements remain unchanged relative to `v52.0.0`.

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

## Operational notes
- Broader platform validation for `v53.0.0` is captured in the canonical release note, including public market data routes, conformance history, prediction hardening, metadata discipline, passkey ownership, entitlement handling, product framing, and release-lock gates.
- Published release surfaces now include the canonical `v53.0.0` release note and the `v53.0.0` product-truth freeze document.
- In this offline verifier repository, the release work is documentation and version-surface alignment only.
- No verifier proof-format or producer payload migration is implied by these repository release/documentation updates alone.

## Migration checklist
- Apply `supabase/migrations/20260414004000_market_prediction_finalize_ambiguity_fix.sql` and `20260414012000_market_conformance_history.sql` before routing production traffic to the live market and prediction surfaces.
- Confirm `GET /api/market/public-snapshot` and `GET /api/market/assets/[receizId]` return public machine-readable market data for public assets.
- Confirm `GET /api/market/conformance/history` and `GET /api/market/conformance/history/rollups` hydrate after the live conformance route runs.
- Confirm prediction contracts reject expired wagers and resolve borderline comparisons with micro-dollar precision and ambiguity-fix logic.
- Confirm signed-in account surfaces can attach Face ID / passkeys for existing email users and that public passkey registration returns the ownership-preserving error for already-claimed emails.
- Confirm `/login` remains a noindex developer-login embed, `/signin` remains the normal user path, and `/receiz-world` redirects to `/public-twin#world`.
- Set `RELEASE_ATTESTATION_SIGNING_KEY` to an `Ed25519` PKCS#8 PEM or base64-encoded PEM and `RELEASE_ATTESTATION_SIGNING_KEY_ID` to an active key in `public/governance/governance-keyring.v1.json`.
- Update outward release/docs references to `v53.0.0`.
- Deploy updated `site/` artifacts.
- Publish the `v53.0.0` release note, product-truth freeze document, and updated docs indexes.
- No producer payload or proof-format migration is implied by these verifier-repo documentation updates alone.

## Security posture
Security posture remains fail-closed: verification still requires byte-level integrity, trusted signature evidence, anchor context, and real Groth16 proof validation.
