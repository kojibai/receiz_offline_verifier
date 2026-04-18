# Release Notes

## v60.0.0
Release date: 2026-04-18

`v60.0.0` is the major stable release that locks the full `v50.0.0` through `v58.0.0` buildout into one canonical product cut and rolls the complete repository delta after `v58.0.0` into the next governed release.

Canonical full release note: [docs/releases/v60.0.0.md](docs/releases/v60.0.0.md)
Product-truth freeze: [docs/releases/v60.0.0-product-truth.md](docs/releases/v60.0.0-product-truth.md)
Release checklist: [docs/releases/v60.0.0-checklist.md](docs/releases/v60.0.0-checklist.md)

## Highlights
- The homepage now shows live proof playback, a live twin dock, and direct market action instead of a static-only marketing shell.
- Profile uploads and profile-original downloads now preserve or restore canonical Receiz verification more aggressively, including on-demand reseal and backfill paths for legacy streamed originals.
- Twin portrait generation now produces a distinct profile-ready artifact with its own verify path and an explicit apply-to-profile step instead of silently overwriting the public profile picture.
- Market buy continuation, wallet presentation, and certificate framing are tighter in real compact-device flows.
- Production schema hardening for this release includes market conformance history RLS, auth init-plan policy repair, and high-value foreign-key indexes.
- Release-governed version surfaces now move together to `v60.0.0` across package metadata, public verifier artifacts, shipped release badges, and current-release documentation.

## Verifier impact
- Current shipped verifier, studio, and settlement entrypoints are marked `v60.0.0`.
- Repository release/docs surfaces now align to `v60.0.0`.
- Root package metadata now resolves cleanly at `v60.0.0`.
- Verifier trust semantics remain unchanged relative to `v58.0.0`.
- Trusted-signature, anchor, and Groth16 requirements remain unchanged relative to `v58.0.0`.

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
- Broader platform validation for `v60.0.0` is captured in the canonical release note and checklist, including live front-door proof/twin behavior, canonical original upload/download recovery, explicit twin portrait publishing, compact wallet/certificate presentation, schema hardening, and release-surface lockstep.
- Published release surfaces now include the canonical `v60.0.0` release note, the `v60.0.0` product-truth freeze, and the `v60.0.0` checklist.
- In this offline verifier repository, the release work is documentation, visible version-surface alignment, and package-metadata normalization only.
- No verifier proof-format or producer payload migration is implied by these repository release/documentation updates alone.
- This release record intentionally rolls up the full repository delta after `v58.0.0`, including the absent `v59.x` interval, because there is no dedicated public `v58.1.0` through `v59.99` note in the repository.

## Migration checklist
- Apply `supabase/migrations/20260418001500_market_conformance_history_rls.sql`.
- Apply `supabase/migrations/20260418003000_auth_rls_initplan_policy_fix.sql`.
- Apply `supabase/migrations/20260418004500_high_value_fk_indexes.sql`.
- Confirm the homepage hero loads live proof, twin, and direct market action instead of a static-only marketing shell.
- Confirm market buy continues cleanly through passkey and Stripe funding fallback rather than dying on missing wallet bootstrap state.
- Confirm profile uploads still seal through the canonical path and legacy streamed originals download as verifiable Receiz artifacts.
- Confirm forged twin portraits expose their own verify file and only become the profile picture after explicit operator action.
- Update outward release/docs references to `v60.0.0`.
- Deploy updated `site/` artifacts.
- Publish the `v60.0.0` release note, product-truth freeze, checklist, and updated docs indexes.
- No producer payload or proof-format migration is implied by these verifier-repo documentation updates alone.

## Security posture
Security posture remains fail-closed: verification still requires byte-level integrity, trusted signature evidence, anchor context, and real Groth16 proof validation.
