# Release Notes

## v58.0.0
Release date: 2026-04-17

`v58.0.0` is the authoritative-market and release-surface coherence cut on top of the `v57.0.0` version-surface baseline. If Receiz already knows the deterministic market truth and the live user overlay truth, the app should show that truth immediately instead of dropping positions, delaying wallet state, or rebuilding an oversized desk snapshot after paint.

Canonical full release note: [docs/releases/v58.0.0.md](docs/releases/v58.0.0.md)
Product-truth freeze: [docs/releases/v58.0.0-product-truth.md](docs/releases/v58.0.0-product-truth.md)
Release checklist: [docs/releases/v58.0.0-checklist.md](docs/releases/v58.0.0-checklist.md)

## Highlights
- Signed-in `/market` and signed-in market asset entry are authoritative again on first paint instead of waiting on a late client snapshot before positions, history, and wallet state appear.
- Market transport now ships a deterministic seed plus live overlay instead of serializing the fully expanded desk snapshot over the wire.
- The chart buy popover and market wallet now hydrate through the same wallet-summary path, so buying power and wallet state do not lag behind the visible signed-in state.
- Tracked-position surfaces now count live shares plus only contracts that are still open; expired or non-open contracts no longer inflate the live position count.
- Market snapshot continuity, prediction history, and share-trade history are treated as durable user-visible truth rather than disposable background fetch state.
- Release-governed version surfaces now move together to `v58.0.0` across package metadata, public verifier artifacts, shipped release badges, and current-release documentation.

## Verifier impact
- Current shipped verifier, studio, and settlement entrypoints are marked `v58.0.0`.
- Repository release/docs surfaces now align to `v58.0.0`.
- Root package metadata now resolves cleanly at `v58.0.0`.
- Verifier trust semantics remain unchanged relative to `v57.0.0`.
- Trusted-signature, anchor, and Groth16 requirements remain unchanged relative to `v57.0.0`.

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
- Broader platform validation for `v58.0.0` is captured in the canonical release note and checklist, including authoritative signed-in market entry, wallet/chart-buy hydration coherence, deterministic market transport, tracked-position semantics, and release-surface lockstep.
- Published release surfaces now include the canonical `v58.0.0` release note, the `v58.0.0` product-truth freeze, and the `v58.0.0` checklist.
- In this offline verifier repository, the release work is documentation, visible version-surface alignment, and package-metadata normalization only.
- No verifier proof-format or producer payload migration is implied by these repository release/documentation updates alone.
- This release record intentionally rolls up the full repository delta after `v57.0.0` because there is no dedicated public `v57.0.1` through `v57.99` note in the repository.

## Migration checklist
- Apply `supabase/migrations/20260417194500_receiz_schema_drift_repair.sql`.
- Apply `supabase/migrations/20260417204000_world_district_baseline_contract.sql`.
- Apply `supabase/migrations/20260417225500_profile_analytics_last_event_at_repair.sql`.
- Apply `supabase/migrations/20260417233500_receiz_anchor_kind_repair.sql`.
- Confirm signed-in `/market` and `/market/assets/[receizId]` show positions, history, and wallet state on first paint.
- Confirm chart buy opens with live buying power and does not sit in a wallet-loading state after sign-in.
- Confirm tracked positions count only live share positions plus still-open contracts.
- Confirm market route refresh keeps history and wallet continuity when a weaker snapshot arrives later.
- Update outward release/docs references to `v58.0.0`.
- Deploy updated `site/` artifacts.
- Publish the `v58.0.0` release note, product-truth freeze, checklist, and updated docs indexes.
- No producer payload or proof-format migration is implied by these verifier-repo documentation updates alone.

## Security posture
Security posture remains fail-closed: verification still requires byte-level integrity, trusted signature evidence, anchor context, and real Groth16 proof validation.
