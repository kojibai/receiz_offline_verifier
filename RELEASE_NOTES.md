# Release Notes

## v47.8.0
Release date: 2026-04-10

`v47.8.0` is the contacts continuity hardening release. It keeps the durable CRM foundation from `v47.7.0`, then closes the public-twin and guest-contact gap so the same relationship record can carry twin exchanges, guest identifiers, direct messaging handoff, calendar continuity, and mobile-visible identity context without splitting the person across separate lanes.

The core rule does not change: the file remains the authority. Deterministic manifests remain the authority for historical route truth. Contact continuity, action-ledger projection, calendar continuity, and release metadata remain transport and governance around those truths rather than replacements for them.

Canonical full release note: [docs/releases/v47.8.0.md](docs/releases/v47.8.0.md)
Product-truth freeze: [docs/releases/v47.8.0-product-truth.md](docs/releases/v47.8.0-product-truth.md)

## Highlights
- Public-twin and guest interactions now project into the same Contacts CRM from the action ledger instead of living only in world receipts or calendar projections.
- Guest visitors are materialized into durable contact records by their saved visitor and thread continuity keys, and authenticated visitors upgrade the same record rather than fragmenting into duplicates.
- World action-ledger entries and calendar projections now attach back to the same contact history with deterministic event keys.
- Mobile contact snapshots expose guest, authenticated, or direct continuity state, and follow-up actions stay available from the same contact surface.
- Guest-only twin follow-up now reopens the saved public twin thread when no direct chat account, email, or phone lane is available.
- Release-governed version surfaces stay locked together across package metadata, service worker defaults, public badges, offline verifier surfaces, and release documents.

## Verifier impact
- Current shipped verifier entrypoints are marked `v47.8.0`.
- Repository release/docs surfaces now align to `v47.8.0`.
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
- Platform validation for `v47.8.0` included the targeted contacts bootstrap contract, the world profile route contract, the TypeScript no-emit check, the production build, the release-lock version-surface check, and the final `pnpm test:release-freeze` gate.
- Published release surfaces now include the canonical `v47.8.0` release note and the `v47.8.0` product-truth freeze document.
- In this offline verifier repository, the release work is documentation and version-surface alignment only.
- No verifier proof-format or producer payload migration is implied by these repository release/documentation updates alone.

## Migration checklist
- Apply `supabase/migrations/20260409163000_contacts_crm.sql` before routing production traffic to the new contacts API.
- Keep service-role Supabase access available for contact sync, historical contact backfill, and world action-ledger projection.
- Retain `visitorKey`, `threadKey`, and visitor identity payloads in public-twin continuity data.
- Update outward release/docs references to `v47.8.0`.
- Deploy updated `site/` artifacts.
- Publish the `v47.8.0` release note, product-truth freeze document, and updated docs indexes.
- No producer payload or proof-format migration is implied by these verifier-repo documentation updates alone.

## Security posture
Security posture remains fail-closed: verification still requires byte-level integrity, trusted signature evidence, anchor context, and real Groth16 proof validation.
