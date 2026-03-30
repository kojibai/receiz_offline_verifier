# Release Notes

## v46.0.0
Release date: 2026-03-30

`v46.0.0` is the lock-the-surface release for everything shipped since `v45.0.0`. It freezes the current post-`45` product surface around richer original/document viewing, a more complete verified-original player, stronger Public Twin photoreal embodiment, stricter world-stage delivery truth, better streaming/storage correctness, and a clearer release-freeze contract.

The core rule does not change: the file remains the authority. Deterministic manifests remain the authority for historical route truth. Replayable append-only ledger math remains the authority for settlement. Viewers, players, photoreal shells, and twin runtime paths remain transport around those boundaries.

Canonical full release note: [docs/releases/v46.0.0.md](docs/releases/v46.0.0.md)
Product-truth freeze: [docs/releases/v46.0.0-product-truth.md](docs/releases/v46.0.0-product-truth.md)

## Highlights
- Elevated original/document delivery into a deliberate product surface with richer classification, fullscreen reading, inline viewer URLs, and explicit original/derivative download precedence.
- Strengthened the live verified-original player with clearer profile identity framing, richer Kairos and pulse presentation, stronger purchase/paid-download gating, better queue/timeline handling, and dedicated social images.
- Hardened Public Twin photoreal generation with an explicit portrait contract, persisted feature-map authority metadata, backend/native/heuristic face-feature alignment fallback paths, and deterministic compact/mobile overlay fitting.
- Tightened world-stage truth so dock and stage remain separate surfaces and video renders only when a real delivery exists.
- Preserved byte-range delivery semantics through signed storage proxy routes, `HEAD` partial-content behavior, inline document viewing, and release-version-tied service-worker behavior.
- Added an explicit release-freeze layer around the product surface through a release-scoped product-truth document and broader release-contract framing.

## Verifier impact
- Current shipped verifier entrypoints are marked `v46.0.0`.
- Repository release/docs surfaces now align to `v46.0.0`.
- Verifier trust semantics remain file-authoritative, deterministic, and fail-closed.
- Trusted-signature, anchor, and Groth16 requirements remain unchanged relative to `v45.0.0`.

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
- Cumulative scope since `v45.0.0`: `112` files changed, `41,661` insertions, `1,237` deletions.
- Published release surfaces now include the canonical `v46.0.0` release note and the `v46.0.0` product-truth freeze document.
- No verifier proof-format or producer payload migration is implied by these repository release/documentation updates alone.

## Migration checklist
- Update outward release/docs references to `v46.0.0`.
- Deploy updated `site/` artifacts.
- Publish the `v46.0.0` release note, product-truth freeze document, and updated docs indexes.
- No producer payload or proof-format migration is implied by these verifier-repo documentation updates alone.

## Security posture
Security posture remains fail-closed: verification still requires byte-level integrity, trusted signature evidence, anchor context, and real Groth16 proof validation.
