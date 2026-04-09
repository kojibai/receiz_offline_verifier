# Release Notes

## v47.5.0
Release date: 2026-04-09

`v47.5.0` is the world revenue-operations release. It turns the public twin from a conversational surface into a real operator surface by adding revenue skills, multi-channel outbound opportunity lanes, owner-side revenue playbooks, proof-first record kits, unified action-card embeds, booking confirmation packs, and post-call closeout rails without weakening the existing trust or payment primitives.

The core rule does not change: the file remains the authority. Deterministic manifests remain the authority for historical route truth. Public readers, verified-player surfaces, storage proxies, session compatibility layers, scheduling embeds, checkout shells, world embodiment, and release metadata remain transport and governance around those truths.

Canonical full release note: [docs/releases/v47.5.0.md](docs/releases/v47.5.0.md)
Product-truth freeze: [docs/releases/v47.5.0-product-truth.md](docs/releases/v47.5.0-product-truth.md)

## Highlights
- World twins can now run explicit revenue skills across qualify, match, quote, deposit, proof, handoff, follow-up, and renewal rails.
- `/world` now gives owners a revenue-operations control surface instead of only a policy toggle list.
- Outbound communication is now first-class across Receiz email, SMS, and app-webhook channels, all tied to saved owner policy.
- Operator playbooks now load post-call closeout, warm follow-up, and renewal drafts directly into the outreach composer.
- The surrounding business surface is more productized with proof kits, unified action-card embeds, booking confirmation packs, call closeout packs, and the developer site kit.
- Release-governed version surfaces stay locked together across package metadata, service worker defaults, public badges, offline verifier surfaces, and release documents.

## Verifier impact
- Current shipped verifier entrypoints are marked `v47.5.0`.
- Repository release/docs surfaces now align to `v47.5.0`.
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
- Platform validation for `v47.5.0` included the targeted world policy, revenue-skill, revenue-playbook, outreach, conversation-relay, and showcase-selection tests, the TypeScript no-emit check, and the release-lock version-surface check.
- Published release surfaces now include the canonical `v47.5.0` release note and the `v47.5.0` product-truth freeze document.
- In this offline verifier repository, the release work is documentation and version-surface alignment only.
- No verifier proof-format or producer payload migration is implied by these repository release/documentation updates alone.

## Migration checklist
- Update outward release/docs references to `v47.5.0`.
- Deploy updated `site/` artifacts.
- Publish the `v47.5.0` release note, product-truth freeze document, and updated docs indexes.
- No producer payload or proof-format migration is implied by these verifier-repo documentation updates alone.

## Security posture
Security posture remains fail-closed: verification still requires byte-level integrity, trusted signature evidence, anchor context, and real Groth16 proof validation.
