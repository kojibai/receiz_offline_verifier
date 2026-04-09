# Release Notes

## v47.4.0
Release date: 2026-04-09

`v47.4.0` is the native business-entitlement and embedded-surface continuity release. It keeps the current `v47.x` product truth intact while fixing the exact places where Business could still be flattened back into older Premium-era assumptions, replacing remaining Calendly upgrade / WireProof scheduling surfaces with the canonical Receiz calendar embed, and making the public payments widget keep Stripe checkout inside a Receiz-hosted popup instead of redirecting buyers away from the page.

The core rule does not change: the file remains the authority. Deterministic manifests remain the authority for historical route truth. Public readers, verified-player surfaces, storage proxies, session compatibility layers, scheduling embeds, checkout shells, world embodiment, and release metadata remain transport and governance around those truths.

Canonical full release note: [docs/releases/v47.4.0.md](docs/releases/v47.4.0.md)
Product-truth freeze: [docs/releases/v47.4.0-product-truth.md](docs/releases/v47.4.0-product-truth.md)

## Highlights
- Native session-derived surfaces preserve effective Business entitlement instead of collapsing into legacy Premium-only compatibility output.
- Affiliate, profile bootstrap, and world session payloads now expose effective entitlement truth so Business survives older compatibility layers.
- Upgrade and WireProof scheduling CTAs use the Receiz calendar embed instead of Calendly.
- The public payments widget opens Stripe embedded checkout inside a Receiz-hosted popup shell and keeps redirect-required methods inside the same Receiz surface.
- Release-governed version surfaces stay locked together across package metadata, service worker defaults, public badges, offline verifier surfaces, and release documents.

## Verifier impact
- Current shipped verifier entrypoints are marked `v47.4.0`.
- Repository release/docs surfaces now align to `v47.4.0`.
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
- Platform validation for `v47.4.0` included the targeted plan-session regression test, the targeted world district access contract test, the targeted world session payload contract test, the TypeScript no-emit check, the release-lock version-surface check, and a production build; discovery cache revalidation logged non-blocking upstream fetch failures during static generation.
- Published release surfaces now include the canonical `v47.4.0` release note and the `v47.4.0` product-truth freeze document.
- In this offline verifier repository, the release work is documentation and version-surface alignment only.
- No verifier proof-format or producer payload migration is implied by these repository release/documentation updates alone.

## Migration checklist
- Update outward release/docs references to `v47.4.0`.
- Deploy updated `site/` artifacts.
- Publish the `v47.4.0` release note, product-truth freeze document, and updated docs indexes.
- No producer payload or proof-format migration is implied by these verifier-repo documentation updates alone.

## Security posture
Security posture remains fail-closed: verification still requires byte-level integrity, trusted signature evidence, anchor context, and real Groth16 proof validation.
