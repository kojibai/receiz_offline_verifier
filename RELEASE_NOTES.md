# Release Notes

## v47.0.0
Release date: 2026-04-05

`v47.0.0` turns the broad platform expansion of `v46.0.0` into a cleaner and more governed product surface: richer original and document delivery, stronger verified-player continuity and sharing, harder-to-break media and storage behavior, more authority-aware Public Twin/world rendering, and a tighter release-freeze contract across the platform.

The core rule does not change: the file remains the authority. Deterministic manifests remain the authority for historical route truth. Public readers, verified-player surfaces, storage proxies, world embodiment, and release metadata remain transport and governance around those truths.

Canonical full release note: [docs/releases/v47.0.0.md](docs/releases/v47.0.0.md)
Product-truth freeze: [docs/releases/v47.0.0-product-truth.md](docs/releases/v47.0.0-product-truth.md)

## Highlights
- Originals and documents now behave like first-class product surfaces instead of attachment passthroughs.
- Verified-player routes are stronger destinations: better continuity, richer metadata, and clearer public sharing behavior.
- Signed storage-object routes preserve `HEAD` and byte-range semantics, and service-worker freshness is tied more explicitly to release-version truth.
- Public Twin and world surfaces now run under stronger authority, stage separation, freshness, and sanitization rules.
- Release governance now moves product-surface inventory, version surfaces, freeze gates, and attestation checks together.

## Verifier impact
- Current shipped verifier entrypoints are marked `v47.0.0`.
- Repository release/docs surfaces now align to `v47.0.0`.
- Verifier trust semantics remain file-authoritative, deterministic, and fail-closed.
- Trusted-signature, anchor, and Groth16 requirements remain unchanged relative to `v46.0.0`.

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
- Cumulative scope since `v46.0.0`: `309` files changed, `75,572` insertions, `4,153` deletions.
- Published release surfaces now include the canonical `v47.0.0` release note and the `v47.0.0` product-truth freeze document.
- No verifier proof-format or producer payload migration is implied by these repository release/documentation updates alone.

## Migration checklist
- Update outward release/docs references to `v47.0.0`.
- Deploy updated `site/` artifacts.
- Publish the `v47.0.0` release note, product-truth freeze document, and updated docs indexes.
- No producer payload or proof-format migration is implied by these verifier-repo documentation updates alone.

## Security posture
Security posture remains fail-closed: verification still requires byte-level integrity, trusted signature evidence, anchor context, and real Groth16 proof validation.
