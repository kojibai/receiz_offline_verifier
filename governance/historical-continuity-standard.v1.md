# Historical Continuity Standard v1

## Document Control

- Document ID: `receiz-historical-continuity-standard-v1`
- Revision ID: `receiz-historical-continuity-standard-v1-r1`
- Supersedes Revision ID: `none`
- Status: `Active`
- Issuer: `Receiz Governance Office`
- Approval Authority: `Receiz Core Protocol Review`
- Risk Owner: `Enterprise Risk and Resilience`
- Effective Date (UTC): `2026-04-19`

## Purpose

This standard defines how Receiz preserves authentic historical records when verification standards evolve.

Receiz SHALL preserve history without falsifying current verification meaning.
If a future standard change causes older authentic records to no longer satisfy the current verifier, those records SHALL be handled as governed historical continuity, not as silently rewritten current records and not as disposable noise.

## Core Rule

Standards may evolve.
History may not be rewritten to pretend the newer standard always existed.

Receiz SHALL preserve all three truths at once:

1. Current verification meaning remains strict.
2. Historical records remain authentic to their original issuance context.
3. Standard transitions remain visible, reviewable, and provable.

## Trust States

Receiz trust presentation SHALL distinguish at least these states:

1. `Verified`
   - Passes the current active verification standard.
   - SHALL NOT be assigned to records that fail the current standard merely because they are old.
2. `Historical`
   - Authentic record from a governed prior standard or governed transition cohort.
   - SHALL be separate from `Verified`.
   - SHALL NOT imply that the record passes the current standard.
3. `Warning`
   - Unknown, inconsistent, malformed, unsupported, or genuinely failing record.
   - SHALL remain the state for anything not admitted into a governed historical cohort.

## Historical Continuity Principles

1. Original bytes are authoritative.
   Historical continuity SHALL preserve original artifact bytes whenever those bytes are being represented as the original historical artifact.

2. Current verification semantics stay strict.
   A standard transition SHALL NOT loosen current verifier rules merely to make old records appear current.

3. Historical continuity is governed, not inferred by shape.
   Historical status SHALL be granted only by exact governed cohort membership.
   It SHALL NOT be granted by broad traits such as missing `signatureV4`, localhost URLs, older timestamp ranges, or any other reusable shape.

4. Historical continuity is additive.
   Repair metadata, governance manifests, transport wrappers, and later attestations may be added.
   These additions SHALL NOT alter original issuance identity fields in a way that makes the historical record impersonate a newly issued current record.

5. Public and private visibility remain separate.
   A public historical cohort SHALL NOT expose private record identifiers or private metadata.
   If a frozen cohort contains private records, Receiz SHALL either:
   - exclude them from the public historical cohort, or
   - govern them under a separate private/internal continuity artifact.

6. Historical continuity SHALL increase disclosure, not reduce it.
   The system SHOULD make it easier for users to understand what standard a record belongs to, why that classification exists, and why new records cannot enter that historical class.

## Identity Preservation Rules

For any governed historical repair or transport upgrade, Receiz SHALL preserve the original proof identity unless a separate explicit re-issuance standard is invoked.

This means the remediation SHALL NOT silently replace or mutate the historical meaning of:

- original `code`
- original `pulse`
- original `ts`
- original claim identity
- original anchor identity when one exists and is part of the issued record identity

If later attestations are added, they SHALL be disclosed as later attestations of the historical record, not represented as proof that the historical record originally carried that later standard.

## Mandatory Controls For Historical Cohorts

1. Every historical cohort SHALL have a stable cohort ID.
2. Every historical cohort SHALL be defined by exact immutable membership data.
3. Membership payloads SHALL be canonicalized and hash-locked.
4. Public historical cohorts SHOULD be sealed as Receiz governance artifacts.
5. If a governance artifact is published for a historical cohort, the exact committed artifact bytes SHALL be pinned and any byte drift SHALL fail verification.
6. Historical cohort membership changes SHALL be treated as `high-risk` governance changes.
7. Historical cohort membership SHALL NOT be expanded by runtime heuristics.
8. Historical downloads MAY ship in a verified transport package that contains:
   - untouched original bytes
   - the historical governance artifact
   - sealed manifests binding the package contents
9. Historical transport packaging SHALL NOT rewrite the original artifact bytes themselves.

## Allowed Remediation Types

The following are allowed when done transparently and without violating the identity-preservation rules:

1. Canonical URL repair.
   Example: replacing stale localhost verify URLs with the canonical production origin.

2. Metadata repair.
   Example: repairing stored `verify_url` or payload-side `verifyUrl` fields where the historical record identity remains unchanged.

3. Later attestation.
   Example: attaching a later signature or governance wrapper that attests to the historical artifact as it exists.

4. Historical transport packaging.
   Example: distributing the original artifact inside a verified ZIP package with a pinned historical governance bundle.

5. Historical cohort disclosure.
   Example: rendering `Historical` on deterministic routes and historical viewers while reserving `Verified` for the current standard.

## Prohibited Actions

The following are prohibited unless a separate published re-issuance standard explicitly authorizes them:

1. Minting a new current proof identity and presenting it as the original historical record.
2. Recomputing old records under a newer verifier and pretending they were always issued that way.
3. Reclassifying records as historical by pattern match instead of governed cohort membership.
4. Marking historical records as current `Verified` merely because they are authentic.
5. Publishing private record IDs inside a public historical governance artifact.
6. Rewriting original bytes and still calling the result the original historical artifact.
7. Broad verifier exceptions that allow freshly created records to imitate a historical class.

## Standard Transition Procedure

When a future verification standard change affects authentic existing records, Receiz SHALL follow this order:

1. Determine whether the issue is:
   - current verification failure
   - presentation failure
   - metadata/path failure
   - transport/download failure
   - actual corruption
2. Preserve the current verifier semantics.
3. Identify the exact affected historical set by immutable IDs and fields.
4. Separate public and private records before any public disclosure artifact is created.
5. Freeze a canonical cohort payload.
6. Hash-lock the payload.
7. If the cohort is public, generate and pin a sealed governance artifact for that cohort.
8. Update deterministic routes and viewers to represent the cohort as `Historical`, not `Verified`.
9. Apply any safe metadata or transport repairs without changing historical identity.
10. Add tests proving:
    - non-members do not classify as `Historical`
    - current verifier logic is unchanged
    - pinned cohort artifacts fail on byte drift
11. Record the change as a governed standards transition.

## User-Facing Disclosure Requirements

When a historical cohort is surfaced publicly, Receiz SHOULD disclose:

- the public trust label, preferably `Historical`
- that the record predates the current standard
- that the record is preserved as originally issued
- that new records cannot be created under that historical class
- whether a later attestation or transport package has been added

Receiz SHOULD avoid user-facing labels that imply the record is broken when it is in fact an authentic governed historical record.

## Governance Classification For Future Changes

Any change that creates, expands, or modifies a historical cohort SHALL be treated as `high-risk` under the change-control standard because it affects public trust semantics.

Such changes SHALL include:

1. the reason the cohort is required
2. the exact immutable membership basis
3. the public/private separation decision
4. the payload hash and pinned artifact hash when applicable
5. the user-facing trust-state behavior
6. the evidence that current verification semantics were not weakened

## First Governed Application

The first governed application of this standard was the Receiz pre-v4 historical continuity repair completed on `2026-04-19`.

That application established these precedents:

1. Public historical continuity used a frozen public cohort rather than a broad legacy pattern.
2. Private records were excluded from the public cohort.
3. Current verification semantics were preserved.
4. Historical downloads were upgraded through verified transport packaging while preserving original bytes.
5. Historical presentation was separated from current `Verified` status.

## Relationship To Other Standards

- Verified-history architecture and deterministic-route behavior remain governed by [docs/verified-history-first-principles.md](../verified-history-first-principles.md).
- Public governance artifact integrity remains governed by [docs/governance/governance-artifact-signature-standard.v1.md](governance-artifact-signature-standard.v1.md).
- Release approval and high-risk controls remain governed by [docs/governance/change-control-standard.v1.md](change-control-standard.v1.md).

