# Governance Key Custody Standard v1

## Document Control

- Document ID: `receiz-governance-key-custody-standard-v1`
- Revision ID: `receiz-governance-key-custody-standard-v1-r1`
- Supersedes Revision ID: `none`
- Status: `Active`
- Issuer: `Receiz Governance Office`
- Approval Authority: `Receiz Core Protocol Review`
- Risk Owner: `Enterprise Risk and Resilience`
- Effective Date (UTC): `2026-03-08`

## Custody Objectives

1. Active production governance signing keys SHALL use managed custody class (`managed-kms` or `managed-hsm`).
2. Private keys SHALL NOT be stored in repository content.
3. Key activation, retirement, and custody class SHALL be published in governance keyring metadata.
4. Key lifecycle changes SHALL require approval authority review and risk-owner awareness.

## Approved Custody Classes

1. `managed-kms`: Managed KMS-backed custody.
2. `managed-hsm`: Dedicated HSM-backed custody.
3. `bootstrap-local`: Temporary local bootstrap custody for initial provisioning only; SHALL NOT remain active in institutional production state.

## Access and Use Controls

1. Key-use permission SHALL be least-privilege and role-bound.
2. High-risk governance updates SHALL enforce separation of duties in key-use approval.
3. Emergency key-use events SHALL be logged and post-reviewed.

## Rotation and Revocation

1. Governance signing keys SHALL have a documented rotation cadence and event-driven rotation criteria.
2. Retired keys SHALL remain published for historical signature verification continuity.
3. Key compromise SHALL trigger immediate key retirement and new-key activation workflow.

## Evidence

Key-custody and rotation evidence SHALL be recorded in governance evidence controls and review artifacts.
