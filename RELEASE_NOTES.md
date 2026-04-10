# Release Notes

## v47.6.0
Release date: 2026-04-09

`v47.6.0` is the world command-center and contacts-operations release. It keeps the current `v47.x` product truth intact while turning the district workspace into a live atlas, letting the concierge quarterback tracked twin runs, introducing a standalone contacts CRM, and hardening outreach plus embedded checkout completion so operator state stays truthful under failure.

The core rule does not change: the file remains the authority. Deterministic manifests remain the authority for historical route truth. Public readers, verified-player surfaces, storage proxies, session compatibility layers, scheduling embeds, checkout shells, world embodiment, and release metadata remain transport and governance around those truths.

Canonical full release note: [docs/releases/v47.6.0.md](docs/releases/v47.6.0.md)
Product-truth freeze: [docs/releases/v47.6.0-product-truth.md](docs/releases/v47.6.0-product-truth.md)

## Highlights
- `/world` districts are now map-first, with a richer atlas surface instead of a stacked card list.
- The existing concierge shell can now launch live twin runs from detailed operator prompts and show task progress inside the transcript.
- `/contacts` is now a standalone operating surface with import, export, notes, last-meeting memory, invite drafting, and person-first interaction history.
- World outreach now blocks private/internal webhook destinations and only persists email-thread artifacts after successful delivery.
- Embedded checkout completion now verifies Stripe session state before telling the parent surface that payment succeeded.
- Release-governed version surfaces stay locked together across package metadata, service worker defaults, public badges, offline verifier surfaces, and release documents.

## Verifier impact
- Current shipped verifier entrypoints are marked `v47.6.0`.
- Repository release/docs surfaces now align to `v47.6.0`.
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
- Platform validation for `v47.6.0` included the targeted concierge-quarterback, outreach-validator, outreach-persistence, and checkout-completion contract tests, the TypeScript no-emit check, the release-lock version-surface check, and the release-freeze gate.
- Published release surfaces now include the canonical `v47.6.0` release note and the `v47.6.0` product-truth freeze document.
- In this offline verifier repository, the release work is documentation and version-surface alignment only.
- No verifier proof-format or producer payload migration is implied by these repository release/documentation updates alone.

## Migration checklist
- Update outward release/docs references to `v47.6.0`.
- Deploy updated `site/` artifacts.
- Publish the `v47.6.0` release note, product-truth freeze document, and updated docs indexes.
- No producer payload or proof-format migration is implied by these verifier-repo documentation updates alone.

## Security posture
Security posture remains fail-closed: verification still requires byte-level integrity, trusted signature evidence, anchor context, and real Groth16 proof validation.
