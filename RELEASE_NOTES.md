# Release Notes

## v50.0.0
Release date: 2026-04-11

`v50.0.0` is the world revenue OS release and the major recap cut for everything shipped after `v40.0.0`. It takes Receiz from a strong trust-and-world foundation into a product that can actually operate: durable contacts CRM, live world command surfaces, concierge-run lead sourcing, campaign persistence, scheduled autopilot, provider-backed enrichment, truthful rail readiness, deliverability telemetry, reply handling, and closed-loop revenue attribution.

The core rule does not change: the file remains the authority. Deterministic manifests remain the authority for route truth. Ledger-backed payment state remains the authority for settlement. The twin, campaign, outreach, and operator surfaces are execution and continuity layers around those trust boundaries, not replacements for them.

Canonical full release note: [docs/releases/v50.0.0.md](docs/releases/v50.0.0.md)
Product-truth freeze: [docs/releases/v50.0.0-product-truth.md](docs/releases/v50.0.0-product-truth.md)

## Highlights
- Receiz now has a real revenue operating system inside `/world`, not just a conversational twin surface.
- Contacts, campaigns, outreach, replies, bookings, and revenue attribution now move through one governed system instead of separate product islands.
- The twin can source leads, enrich contact paths, import them into Contacts, stage and send outreach, track provider events, surface reply work, and keep campaign continuity alive across runs.
- Rail readiness is now explicit: blocked rails, missing provider setup, missing endpoints, and delivery failures surface as blocked operator state instead of optimistic success.
- A standalone enrichment service can run separately and feed provider-backed public contact enrichment into the main app deployment.
- Release-governed version surfaces stay locked together across package metadata, service worker defaults, public badges, offline verifier surfaces, and release documents.

## Verifier impact
- Current shipped verifier entrypoints are marked `v50.0.0`.
- Repository release/docs surfaces now align to `v50.0.0`.
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
- Platform validation for `v50.0.0` included type-checking, contacts/world release-contract suites, targeted world revenue-engine tests, and the release-lock gate captured in the canonical release note.
- Published release surfaces now include the canonical `v50.0.0` release note and the `v50.0.0` product-truth freeze document.
- In this offline verifier repository, the release work is documentation and version-surface alignment only.
- No verifier proof-format or producer payload migration is implied by these repository release/documentation updates alone.

## Migration checklist
- Apply `supabase/migrations/20260409163000_contacts_crm.sql`, `20260410113000_world_campaigns.sql`, `20260410143000_world_campaign_autopilot_scheduler.sql`, and `20260410170000_world_campaign_events.sql` before routing production traffic to the live operator surfaces.
- Keep service-role Supabase access available for contacts sync, campaign persistence, provider event ingestion, and revenue reconciliation.
- Configure outbound email, SMS, webhook, autopilot, and enrichment envs before expecting real autonomous outreach.
- Update outward release/docs references to `v50.0.0`.
- Deploy updated `site/` artifacts.
- Publish the `v50.0.0` release note, product-truth freeze document, and updated docs indexes.
- No producer payload or proof-format migration is implied by these verifier-repo documentation updates alone.

## Security posture
Security posture remains fail-closed: verification still requires byte-level integrity, trusted signature evidence, anchor context, and real Groth16 proof validation.
