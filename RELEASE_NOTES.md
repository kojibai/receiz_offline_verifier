# Release Notes

## v55.1.0
Release date: 2026-04-16

`v55.1.0` is the continuity-and-execution release on top of the `v55.0.0` profile/world/market baseline. Once Receiz already knows the truth for a surface, the product now carries that truth forward: `/profile`, public profiles, search handoff, composer host, and profile navigation reuse the same live graph; market and chart entry reuse warmed route snapshots; buy becomes one passkey-first continuation with exact-shortfall funding and automatic resume; sell becomes USD-intent and held-position aware; non-entitled execution and settlement become exact-USD authoritative; and live-player/card presentation is more deterministic.

Canonical full release note: [docs/releases/v55.1.0.md](docs/releases/v55.1.0.md)
Product-truth freeze: [docs/releases/v55.1.0-product-truth.md](docs/releases/v55.1.0-product-truth.md)
Release checklist: [docs/releases/v55.1.0-checklist.md](docs/releases/v55.1.0-checklist.md)

## Highlights
- Profile truth is now treated as reusable live graph across `/profile`, public profiles, people search, the composer host, and profile navigation instead of being rediscovered through extra shells.
- Public profile navigation now lands on the same authoritative page truth whether it comes from direct load, signed-in navigation, or floating people search.
- Profile artifact/live-player actions, bottom-bar routes, account-to-dashboard, market entry, and chart-to-market `Full` transitions now reuse the richest warmed route snapshot instead of forcing second-click or second-settle behavior.
- Buy now behaves like one continuation system: `Buy` starts the ceremony, passkey resolves in place, funding covers only the exact shortfall, and the pending order resumes automatically on the same surface.
- Sell is budget-first on chart and desk, only appears when the viewer holds shares, and non-entitled share/prediction execution is now USD-authoritative at the database layer.
- Live-player entry, back-card fit, public twin preview precedence, and market/chart presentation are tighter and more deterministic.
- Release-governed version surfaces stay locked together across current-release docs, verifier-contract docs, and offline verifier HTML entrypoints.

## Verifier impact
- Current shipped verifier, studio, and settlement entrypoints are marked `v55.1.0`.
- Repository release/docs surfaces now align to `v55.1.0`.
- Verifier trust semantics remain file-authoritative, deterministic, and fail-closed.
- Trusted-signature, anchor, and Groth16 requirements remain unchanged relative to `v55.0.0`.

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
- There is no dedicated `v55.0.1` release note or tag; `v55.1.0` intentionally rolls up the full repository delta after `v55.0.0`.
- Broader platform validation for `v55.1.0` is captured in the canonical release note and checklist, including profile truth reuse, route continuity, passkey-first trade continuation, exact-USD wallet settlement, and live-player/twin determinism.
- Published release surfaces now include the canonical `v55.1.0` release note, the `v55.1.0` product-truth freeze, and the `v55.1.0` checklist.
- In this offline verifier repository, the release work is documentation and version-surface alignment only.
- No verifier proof-format or producer payload migration is implied by these repository release/documentation updates alone.

## Migration checklist
- Apply `supabase/migrations/20260416025923_market_nonentitled_usd_execution.sql`.
- Apply `supabase/migrations/20260416041200_market_prediction_nonentitled_usd_execution.sql`.
- Confirm passkey auth, session bootstrap propagation, and magic-link fallback all operate on the same market/chart continuation path.
- Confirm Stripe embedded checkout returns through the exact pending trade continuation path for both chart and desk funding.
- Confirm `/profile` direct load, search navigation, logged-in navigation, and publish flows stay fully hydrated without shell fallback or second settle.
- Confirm chart and market `Buy` resume the exact order after funding, and closing funding after passkey still leaves the new account signed in.
- Confirm chart `Sell` only appears when the viewer has a real held position in that asset and uses USD receive input instead of raw share input.
- Confirm live-player back-card copy fits in frame and public twin presence is deterministic when the route conditions are valid.
- Update outward release/docs references to `v55.1.0`.
- Deploy updated `site/` artifacts.
- Publish the `v55.1.0` release note, product-truth freeze, checklist, and updated docs indexes.
- No producer payload or proof-format migration is implied by these verifier-repo documentation updates alone.

## Security posture
Security posture remains fail-closed: verification still requires byte-level integrity, trusted signature evidence, anchor context, and real Groth16 proof validation.
