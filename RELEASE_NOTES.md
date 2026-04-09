# Release Notes

## v47.3.0
Release date: 2026-04-09

`v47.3.0` is the custom-domain continuity and sign-in experience release. It keeps the current `v47.x` product truth intact while making business custom domains behave like Receiz-authenticated surfaces instead of isolated public mirrors, and it removes the dead-end passkey experience inside in-app browsers by opening the email path immediately with accurate guidance.

The core rule does not change: the file remains the authority. Deterministic manifests remain the authority for historical route truth. Public readers, verified-player surfaces, storage proxies, world embodiment, and release metadata remain transport and governance around those truths.

Canonical full release note: [docs/releases/v47.3.0.md](docs/releases/v47.3.0.md)
Product-truth freeze: [docs/releases/v47.3.0-product-truth.md](docs/releases/v47.3.0-product-truth.md)

## Highlights
- Verified custom domains can reuse an existing Receiz session, mint a local domain session, and return the user to the business host without reworking the canonical auth core.
- Custom-domain signing flows keep canonical Receiz WebAuthn / PBI authority while feeling native on the business domain through the bridge flow.
- Sign-in surfaces detect likely embedded browsers and open email fallback immediately instead of presenting passkey failure as a product error.
- First-load profile hero media on custom domains resolves with the same trusted-host treatment as the main Receiz domain.
- Release-governed version surfaces stay locked together across package metadata, service worker defaults, public badges, and release documents.

## Verifier impact
- Current shipped verifier entrypoints are marked `v47.3.0`.
- Repository release/docs surfaces now align to `v47.3.0`.
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
- Platform validation for `v47.3.0` included the targeted custom-domain auth bridge regression test, the targeted embedded-browser passkey fallback test, the custom-domain media route and live-player profile contract tests, the TypeScript no-emit check, and a production build.
- Published release surfaces now include the canonical `v47.3.0` release note and the `v47.3.0` product-truth freeze document.
- In this offline verifier repository, the release work is documentation and version-surface alignment only.
- No verifier proof-format or producer payload migration is implied by these repository release/documentation updates alone.

## Migration checklist
- Update outward release/docs references to `v47.3.0`.
- Deploy updated `site/` artifacts.
- Publish the `v47.3.0` release note, product-truth freeze document, and updated docs indexes.
- No producer payload or proof-format migration is implied by these verifier-repo documentation updates alone.

## Security posture
Security posture remains fail-closed: verification still requires byte-level integrity, trusted signature evidence, anchor context, and real Groth16 proof validation.
