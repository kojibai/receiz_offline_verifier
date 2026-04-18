# Release Notes

## v60.1.0
Release date: 2026-04-18

`v60.1.0` is the continuity-and-market-proof release on top of `v60.0.0`. In this offline verifier repository, the release work is publication of the canonical `v60.1.0` artifacts plus outward version-surface alignment only.

Canonical full release note: [docs/releases/v60.1.0.md](docs/releases/v60.1.0.md)
Product-truth freeze: [docs/releases/v60.1.0-product-truth.md](docs/releases/v60.1.0-product-truth.md)
Release checklist: [docs/releases/v60.1.0-checklist.md](docs/releases/v60.1.0-checklist.md)

## Highlights
- Public profile asset markets now derive holder count and latest witness timing from live public positions and buy activity.
- The market desk, chart dock, and public market metadata surfaces are tighter and more legible on compact devices, especially in public and signed-out flows.
- Home and profile twin shells keep background preload hidden until explicit open intent, preventing late visible promotion after settlement.
- Public profile route assembly is lighter, and `MarketValuePill` sigils now use deterministic surface-scoped IDs to avoid hydration drift.
- No new database migrations are added beyond the `v60.0.0` baseline.
- Release-governed version surfaces now move together to `v60.1.0` across package metadata, public verifier artifacts, shipped release badges, and current-release documentation.

## Verifier impact
- Current shipped verifier, studio, and settlement entrypoints are marked `v60.1.0`.
- Repository release/docs surfaces now align to `v60.1.0`.
- Root package metadata now resolves cleanly at `v60.1.0`.
- No verifier proof-format or producer payload migration is implied by this release update.
- Verifier trust semantics remain unchanged relative to `v60.0.0`.

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
- Broader platform validation for `v60.1.0` is captured in the canonical release note and checklist, including holder-aware public market witness truth, compact market-desk polish, hidden-only twin preload, profile-route continuity, deterministic sigil hydration, and release-surface lockstep.
- Published release surfaces now include the canonical `v60.1.0` release note, the `v60.1.0` product-truth freeze, and the `v60.1.0` checklist.
- In this offline verifier repository, the release work is documentation, visible version-surface alignment, and package-metadata normalization only.
- No verifier proof-format or producer payload migration is implied by these repository release/documentation updates alone.
- There is no dedicated `v60.0.1` release note or tag in the repository, so the canonical `v60.1.0` note records the full post-`v60.0.0` product delta in one governed release record.

## Migration checklist
- No new database migrations beyond the `v60.0.0` baseline.
- Confirm public profile asset markets show holder count and latest witness timing from real public holder activity.
- Confirm market buy continuation still survives passkey and funding fallback, and sell stays hidden when the viewer has no position.
- Confirm home and profile twin shells do not visually remount or upgrade after the page has already settled.
- Confirm opening the twin explicitly still promotes the full twin module cleanly.
- Confirm profile, player, artifact, and home market pills render without hydration ID drift.
- Update outward release/docs references to `v60.1.0`.
- Deploy updated `site/` artifacts.
- Publish the `v60.1.0` release note, product-truth freeze, checklist, and updated docs indexes.
- No producer payload or proof-format migration is implied by these verifier-repo documentation updates alone.

## Security posture
Security posture remains fail-closed: verification still requires byte-level integrity, trusted signature evidence, anchor context, and real Groth16 proof validation.
