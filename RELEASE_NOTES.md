# Release Notes

## v47.7.0
Release date: 2026-04-09

`v47.7.0` is the durable contacts production release. It keeps the `v47.6.x` world-command and concierge operating model intact while turning `/contacts` into a migration-backed CRM with historical backfill, robust import/export, live per-person timelines, and server-truth persistence that survives refresh, sync, and operator handoff.

The core rule does not change: the file remains the authority. Deterministic manifests remain the authority for historical route truth. Contacts durability, historical backfill, import/export, and release metadata remain transport and governance around those truths rather than replacements for them.

Canonical full release note: [docs/releases/v47.7.0.md](docs/releases/v47.7.0.md)
Product-truth freeze: [docs/releases/v47.7.0-product-truth.md](docs/releases/v47.7.0-product-truth.md)

## Highlights
- `/contacts` now persists into dedicated contact, identity, event, and import-run tables instead of behaving like a local-only shell.
- Historical message participants and historical original collectors are automatically materialized into the contacts CRM for signed-in users.
- CSV, JSON, vCard, phone-contact, and local-cache imports all dedupe into the same server-backed contact graph.
- Contact notes, stages, invite status, last-meeting state, and person-first timelines now survive refresh because edits and logged interactions write through the contacts API.
- Release-governed version surfaces stay locked together across package metadata, service worker defaults, public badges, offline verifier surfaces, and release documents.

## Verifier impact
- Current shipped verifier entrypoints are marked `v47.7.0`.
- Repository release/docs surfaces now align to `v47.7.0`.
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
- Platform validation for `v47.7.0` included the targeted contacts bootstrap contract, the TypeScript no-emit check, the production build, and the release-lock version-surface check; `pnpm test:release-freeze` remains the final pre-tag gate.
- Published release surfaces now include the canonical `v47.7.0` release note and the `v47.7.0` product-truth freeze document.
- In this offline verifier repository, the release work is documentation and version-surface alignment only.
- No verifier proof-format or producer payload migration is implied by these repository release/documentation updates alone.

## Migration checklist
- Apply `supabase/migrations/20260409163000_contacts_crm.sql` before routing production traffic to the new contacts API.
- Update outward release/docs references to `v47.7.0`.
- Deploy updated `site/` artifacts.
- Publish the `v47.7.0` release note, product-truth freeze document, and updated docs indexes.
- No producer payload or proof-format migration is implied by these verifier-repo documentation updates alone.

## Security posture
Security posture remains fail-closed: verification still requires byte-level integrity, trusted signature evidence, anchor context, and real Groth16 proof validation.
