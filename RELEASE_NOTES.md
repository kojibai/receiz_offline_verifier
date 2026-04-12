# Release Notes

## v51.0.0
Release date: 2026-04-12

`v51.0.0` is the release where product framing catches up to what the system has become. Receiz is now presented through the real public ladder: Free lets people try the surface, Authorship proves what is theirs, Business gives ownership of the surface, Automation turns Receiz into an operating system for revenue motion, and Enterprise scales that operating layer. The trust model does not change: the file remains the authority, deterministic manifests remain the authority for route truth, and ledger-backed settlement remains the authority for payment truth.

Canonical full release note: [docs/releases/v51.0.0.md](docs/releases/v51.0.0.md)
Product-truth freeze: [docs/releases/v51.0.0-product-truth.md](docs/releases/v51.0.0-product-truth.md)

## Highlights
- The pricing story now follows the real ladder from Free to Enterprise instead of centering legacy Premium/Pro naming.
- Public plan names are now `Authorship`, `Business`, and `Automation`, while internal billing keys remain safely mapped to `premium`, `business`, and `pro`.
- Upgrade, billing, account, FAQ, and entitlement-adjacent surfaces now explain proof, ownership, and automation in the same order.
- Free remains usable; paid tiers open deeper operating layers instead of turning the free product into a crippled teaser.
- Contacts/world truth hardening from `v50.0.0` remains part of the release, including fuller CRM visibility, placeholder cleanup, stronger guest/profile continuity, more user-facing history, and calmer outreach pacing.
- Release-governed version surfaces stay locked together across current-release docs and offline verifier HTML entrypoints.

## Verifier impact
- Current shipped verifier entrypoints are marked `v51.0.0`.
- Repository release/docs surfaces now align to `v51.0.0`.
- Verifier trust semantics remain file-authoritative, deterministic, and fail-closed.
- Trusted-signature, anchor, and Groth16 requirements remain unchanged relative to `v50.0.0`.

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
- Broader platform validation for `v51.0.0` is captured in the canonical release note, including plan-mapping, Contacts release-contract, world revenue-engine, and release-lock gates.
- Published release surfaces now include the canonical `v51.0.0` release note and the `v51.0.0` product-truth freeze document.
- In this offline verifier repository, the release work is documentation and version-surface alignment only.
- No verifier proof-format or producer payload migration is implied by these repository release/documentation updates alone.

## Migration checklist
- Apply `supabase/migrations/20260409163000_contacts_crm.sql`, `20260410113000_world_campaigns.sql`, `20260410143000_world_campaign_autopilot_scheduler.sql`, `20260410170000_world_campaign_events.sql`, and `20260412151000_world_guest_profiles.sql` before routing production traffic to the live operator surfaces.
- Keep internal billable keys on `premium`, `business`, and `pro` while public plan names map to `Authorship`, `Business`, and `Automation`.
- Confirm Stripe price IDs and checkout configuration match the public upgrade surface before tagging the release.
- Update outward release/docs references to `v51.0.0`.
- Deploy updated `site/` artifacts.
- Publish the `v51.0.0` release note, product-truth freeze document, and updated docs indexes.
- No producer payload or proof-format migration is implied by these verifier-repo documentation updates alone.

## Security posture
Security posture remains fail-closed: verification still requires byte-level integrity, trusted signature evidence, anchor context, and real Groth16 proof validation.
