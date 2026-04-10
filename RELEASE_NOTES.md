# Release Notes

## v48.0.0
Release date: 2026-04-10

`v48.0.0` is the operator-surface release for contacts and world. It upgrades contacts from a dense record viewer into a one-view operator cockpit, keeps linked-account import upgrades durable, and turns world into a cleaner mobile atlas with authoritative naming and separated signal layers.

The core rule does not change: the file remains the authority. Deterministic manifests remain the authority for historical route truth. Contacts operator state, linked-account continuity upgrades, world atlas layering, and release metadata remain transport and governance around those truths rather than replacements for them.

Canonical full release note: [docs/releases/v48.0.0.md](docs/releases/v48.0.0.md)
Product-truth freeze: [docs/releases/v48.0.0-product-truth.md](docs/releases/v48.0.0-product-truth.md)

## Highlights
- Contacts now default to an operator-first shell with best-move, continuity, latest-touch, queue-style prioritization, and compact mobile overlays instead of a long stacked record.
- Mobile contacts still preserve full access to overview, next-step, continuity context, recent activity, edit, invite, log, schedule, and full history.
- Imported contact merges now persist `linked_user_id` upgrades so authenticated identity upgrades do not silently fail to write when the rest of the contact payload is unchanged.
- World now presents an authoritative atlas surface on mobile, with cleaner HUD layers, non-overlapping signal presentation, and a differentiated return-signal panel instead of redundant lower cards.
- Release-governed version surfaces stay locked together across package metadata, service worker defaults, public badges, offline verifier surfaces, and release documents.

## Verifier impact
- Current shipped verifier entrypoints are marked `v48.0.0`.
- Repository release/docs surfaces now align to `v48.0.0`.
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
- Platform validation for `v48.0.0` included contacts and world experience eslint checks, the contacts and world release-contract suites, the release-lock version-surface check, and the final `pnpm test:release-freeze` gate.
- Published release surfaces now include the canonical `v48.0.0` release note and the `v48.0.0` product-truth freeze document.
- In this offline verifier repository, the release work is documentation and version-surface alignment only.
- No verifier proof-format or producer payload migration is implied by these repository release/documentation updates alone.

## Migration checklist
- Apply `supabase/migrations/20260409163000_contacts_crm.sql` before routing production traffic to the compact mobile contacts surface.
- Keep service-role Supabase access available for contact sync, historical backfill, and world action-ledger projection.
- Manually smoke compact mobile contacts with at least one populated contact record and one populated world atlas state before tagging the release.
- Update outward release/docs references to `v48.0.0`.
- Deploy updated `site/` artifacts.
- Publish the `v48.0.0` release note, product-truth freeze document, and updated docs indexes.
- No producer payload or proof-format migration is implied by these verifier-repo documentation updates alone.

## Security posture
Security posture remains fail-closed: verification still requires byte-level integrity, trusted signature evidence, anchor context, and real Groth16 proof validation.
