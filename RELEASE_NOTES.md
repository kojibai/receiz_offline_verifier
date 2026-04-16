# Release Notes

## v54.0.0
Release date: 2026-04-15

`v54.0.0` broadens the first `v53.0.0` public-market baseline into a more complete operating release. The public product map is broader, Business is a first-class public surface, admin is now a command deck, Stripe-funded wallet behavior is more transparently ledger-backed, signed-in routes prefer shared session bootstrap over cold identity probes, market value surfaces render deterministic preview state before live hydration, world-twin continuity persists across the profile/artifact/player journey, and Kai sigil SVG output is now serialization-stable across server and client.

Canonical full release note: [docs/releases/v54.0.0.md](docs/releases/v54.0.0.md)
Product-truth freeze: [docs/releases/v54.0.0-product-truth.md](docs/releases/v54.0.0-product-truth.md)

## Highlights
- The public product system is broader and clearer, with dedicated Business, outcomes-map, ladder, explainer, and start-here surfaces.
- Admin is now an operational command deck with one-view access to payments, users, wallet operations, growth, integrity, and backfill controls.
- Stripe-funded wallet deposits, embed payments, and profile purchase flows now align more transparently with ledger-backed wallet truth and admin visibility.
- Signed-in routes now prefer one shared session/bootstrap graph over repeated mount-time identity probing.
- Profile, artifact viewer, live player, and market surfaces now share deterministic `marketPreview` state so value pills render immediately and hydrate live afterward.
- World twin continuity now persists as a runtime contract across profile, artifact viewer, and live player handoffs.
- Kai sigil SVG output is now serialization-stable, eliminating a real hydration mismatch caused by tiny floating-point drift.
- Release-governed version surfaces stay locked together across current-release docs and offline verifier HTML entrypoints.

## Verifier impact
- Current shipped verifier entrypoints are marked `v54.0.0`.
- Repository release/docs surfaces now align to `v54.0.0`.
- Verifier trust semantics remain file-authoritative, deterministic, and fail-closed.
- Trusted-signature, anchor, and Groth16 requirements remain unchanged relative to `v53.0.0`.

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
- Broader platform validation for `v54.0.0` is captured in the canonical release note, including the public product-map expansion, admin command deck, wallet-ledger transparency, session-bootstrap reuse, deterministic market-preview behavior, twin continuity, and hydration-stability gates.
- Published release surfaces now include the canonical `v54.0.0` release note and the `v54.0.0` product-truth freeze document.
- In this offline verifier repository, the release work is documentation and version-surface alignment only.
- No verifier proof-format or producer payload migration is implied by these repository release/documentation updates alone.

## Migration checklist
- Apply `supabase/migrations/20260319153000_wallet_stripe_credit_rollups.sql` and `supabase/migrations/20260319170000_wallet_admin_post_adjustment.sql` in environments that have not already taken the admin wallet/Stripe transparency changes.
- Confirm `/admin` opens as the command-deck shell and exposes the payment action center correctly.
- Confirm admin wallet adjustments produce ledger entries instead of silent balance overwrites.
- Confirm profile price pills show deterministic value before any click and upgrade live after settle.
- Confirm profile, artifact viewer, and live player reuse the loaded twin instead of replaying the twin load sequence on each handoff.
- Confirm the dock never leaks the square fallback image before the rigged twin is ready.
- Confirm calendar, contacts, account, upgrade, and related signed-in surfaces open from existing signed-in bootstrap state instead of cold identity fetches.
- Confirm no Kai sigil hydration mismatch appears on profile or asset surfaces.
- Update outward release/docs references to `v54.0.0`.
- Deploy updated `site/` artifacts.
- Publish the `v54.0.0` release note, product-truth freeze document, and updated docs indexes.
- No producer payload or proof-format migration is implied by these verifier-repo documentation updates alone.

## Security posture
Security posture remains fail-closed: verification still requires byte-level integrity, trusted signature evidence, anchor context, and real Groth16 proof validation.
