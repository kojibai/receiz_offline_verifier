# Release Notes

## v47.2.0
Release date: 2026-04-09

`v47.2.0` is the custom-domain routing and setup-surface release. It keeps the current `v47.x` product truth intact while fixing the exact production path that matters for Business domains: the custom hostname root now resolves to the bound public profile instead of falling through to the Receiz 404 surface, and the DNS setup panel is easier to execute from because each DNS name and value can be copied directly.

The core rule does not change: the file remains the authority. Deterministic manifests remain the authority for historical route truth. Public readers, verified-player surfaces, storage proxies, world embodiment, and release metadata remain transport and governance around those truths.

Canonical full release note: [docs/releases/v47.2.0.md](docs/releases/v47.2.0.md)
Product-truth freeze: [docs/releases/v47.2.0-product-truth.md](docs/releases/v47.2.0-product-truth.md)

## Highlights
- Custom-domain root traffic resolves from the effective forwarded host, not only the internal request hostname.
- Connected Business custom domains can land visitors on the bound public profile at `/` without requiring the `/<username>` fallback path.
- DNS setup guidance in `/account` exposes direct copy controls for each DNS record name and value.
- Release-governed version surfaces stay locked together across package metadata, service worker defaults, public badges, and release documents.

## Verifier impact
- Current shipped verifier entrypoints are marked `v47.2.0`.
- Repository release/docs surfaces now align to `v47.2.0`.
- Verifier trust semantics remain file-authoritative, deterministic, and fail-closed.
- Trusted-signature, anchor, and Groth16 requirements remain unchanged relative to `v47.0.0`.

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
- Platform validation for `v47.2.0` included the targeted custom-domain proxy regression test, the release-lock version-surface check, and file-level lint on the modified routing, account, and release-test files.
- Published release surfaces now include the canonical `v47.2.0` release note and the `v47.2.0` product-truth freeze document.
- In this offline verifier repository, the release work is documentation and version-surface alignment only.
- No verifier proof-format or producer payload migration is implied by these repository release/documentation updates alone.

## Migration checklist
- Update outward release/docs references to `v47.2.0`.
- Deploy updated `site/` artifacts.
- Publish the `v47.2.0` release note, product-truth freeze document, and updated docs indexes.
- No producer payload or proof-format migration is implied by these verifier-repo documentation updates alone.

## Security posture
Security posture remains fail-closed: verification still requires byte-level integrity, trusted signature evidence, anchor context, and real Groth16 proof validation.
