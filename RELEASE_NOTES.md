# Release Notes

## v55.0.0
Release date: 2026-04-15

`v55.0.0` turns the `v54.0.0` operating baseline into a fuller production release. `/profile` is now a guided, sticky owner-setup workspace, profile avatar and cover uploads mint sealed Receiz originals, world-twin freshness is enforced across route handoffs, market navigation and live-player entry share a stable-route continuity contract, and performance analytics now canonicalize route groups for ingestion, admin reporting, and backfill.

Canonical full release note: [docs/releases/v55.0.0.md](docs/releases/v55.0.0.md)
Product-truth freeze: [docs/releases/v55.0.0-product-truth.md](docs/releases/v55.0.0-product-truth.md)

## Highlights
- `/profile` is now the guided owner setup lane, with sticky completion, inline username claim/editing, twin-photo handoff into World forge, and a fast-entry seed path.
- Profile avatar and cover updates now process into canonical images, land in public profile-media storage, and mint sealed Receiz originals with verify paths.
- World twin freshness is enforced across profile, public twin, world embed, and forged-avatar handoffs, with compact touch devices kept on on-demand hydration.
- Market and bottom-bar navigation now use shared stable-route helpers, while live-player entry can begin from seeded local payload before authoritative fetches settle.
- Prediction-book hydration for large market snapshots now runs in bounded batches instead of one oversized query.
- Performance analytics now share one canonical route-group map across ingestion, admin reporting, and historical backfill.
- Release-governed version surfaces stay locked together across current-release docs, verifier-contract docs, and offline verifier HTML entrypoints.

## Verifier impact
- Current shipped verifier entrypoints are marked `v55.0.0`.
- Repository release/docs surfaces now align to `v55.0.0`.
- Verifier trust semantics remain file-authoritative, deterministic, and fail-closed.
- Trusted-signature, anchor, and Groth16 requirements remain unchanged relative to `v54.0.0`.

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
- Broader platform validation for `v55.0.0` is captured in the canonical release note, including guided `/profile` activation, sealed profile media, explicit twin freshness, stable market/player continuity, bounded prediction-book hydration, and canonical route-group analytics.
- Published release surfaces now include the canonical `v55.0.0` release note and the `v55.0.0` product-truth freeze document.
- In this offline verifier repository, the release work is documentation and version-surface alignment only.
- No verifier proof-format or producer payload migration is implied by these repository release/documentation updates alone.

## Migration checklist
- Apply `supabase/migrations/20260415120000_profile_guided_setup_completion.sql` in environments that have not already taken the guided owner-setup completion persistence path.
- Confirm `/profile` opens from a primed fast-entry seed without dropping the signed-in workspace shell.
- Confirm the five-step owner setup checklist stays complete after refresh once all setup steps are done.
- Confirm inline username claim/edit inside `/profile` updates the route cleanly.
- Confirm twin-photo capture/upload from `/profile` opens World directly in the avatar forge.
- Confirm avatar and cover uploads update the live profile while minting a sealed original in the background.
- Confirm world, profile, and public-twin surfaces all prefer the freshest saved avatar render.
- Confirm compact touch devices avoid background world-module hydration until explicit intent.
- Confirm market bottom-bar navigation stays on app navigation paths and Viewer opens from market without waiting for the full network round trip.
- Confirm admin performance views aggregate stable canonical routes instead of raw user-specific URLs.
- Update outward release/docs references to `v55.0.0`.
- Deploy updated `site/` artifacts.
- Publish the `v55.0.0` release note, product-truth freeze document, and updated docs indexes.
- No producer payload or proof-format migration is implied by these verifier-repo documentation updates alone.

## Security posture
Security posture remains fail-closed: verification still requires byte-level integrity, trusted signature evidence, anchor context, and real Groth16 proof validation.
