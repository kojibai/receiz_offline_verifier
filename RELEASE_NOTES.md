# Release Notes

## v52.5.0
Release date: 2026-04-13

`v52.5.0` is the follow-on hardening release after `v52.0.0`. Assets continue trading through the governed deterministic quote engine, trade evidence is persisted as replayable quote context, share certificates support partial custody motion, market media and pill surfaces are more deliberate and lighter at runtime, and market now carries stronger conformance and official share-ready trust surfaces. The authority model does not change: the file remains the authority, deterministic manifests remain the authority for route truth, and ledger-backed settlement remains the authority for payment truth.

Canonical full release note: [docs/releases/v52.5.0.md](docs/releases/v52.5.0.md)
Product-truth freeze: [docs/releases/v52.5.0-product-truth.md](docs/releases/v52.5.0-product-truth.md)

## Highlights
- Market execution resolves through a canonical deterministic quote engine instead of a visible additive fee layer.
- Buys and sells persist replayable quote evidence, including reference mid, quote mid, bid, ask, spread, shift, and pressure inputs.
- Share certificates now support partial withdrawals, remaining balances, and partial redeposit flows.
- Market now has its own conformance suite, badge/history endpoints, and release-governed documentation.
- Premium market pills, floating desk-card treatment, contextual media playback, and inline launch surfaces now avoid more wasteful runtime work.
- Shared market assets now resolve through a dedicated market share route with asset-specific trust metadata.
- Release-governed version surfaces stay locked together across current-release docs and offline verifier HTML entrypoints.

## Verifier impact
- Current shipped verifier entrypoints are marked `v52.5.0`.
- Repository release/docs surfaces now align to `v52.5.0`.
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
- Broader platform validation for `v52.5.0` is captured in the canonical release note, including quote determinism, quote evidence persistence, market conformance, runtime hardening, contextual media behavior, inline launch, share surfaces, and release-lock gates.
- Published release surfaces now include the canonical `v52.5.0` release note and the `v52.5.0` product-truth freeze document.
- In this offline verifier repository, the release work is documentation and version-surface alignment only.
- No verifier proof-format or producer payload migration is implied by these repository release/documentation updates alone.

## Migration checklist
- Apply `supabase/migrations/20260413041500_market_share_positions.sql`, `20260413070500_market_prediction_books.sql`, `20260413102000_market_execution_guards.sql`, `20260413134500_market_share_certificates_partial_balance.sql`, `20260413153000_market_share_trade_fees.sql`, and `20260413174500_market_quote_engine_snapshot.sql` before routing production traffic to the live market surfaces.
- Confirm `/market/conformance`, `/api/market/conformance`, `/api/market/conformance/badge`, `/api/market/conformance/history`, and `/api/market/conformance/history/rollups` return passing production data before tagging the release.
- Confirm Next/Vercel output tracing includes the required market conformance source set.
- Confirm wallet/session rails are active for signed-in buy/sell execution and that partial-balance share-certificate UI ships only after the migration is live.
- Update outward release/docs references to `v52.5.0`.
- Deploy updated `site/` artifacts.
- Publish the `v52.5.0` release note, product-truth freeze document, and updated docs indexes.
- No producer payload or proof-format migration is implied by these verifier-repo documentation updates alone.

## Security posture
Security posture remains fail-closed: verification still requires byte-level integrity, trusted signature evidence, anchor context, and real Groth16 proof validation.
