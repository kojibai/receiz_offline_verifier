# Change Control Standard v1

## Document Control

- Document ID: `receiz-change-control-standard-v1`
- Revision ID: `receiz-change-control-standard-v1-r1`
- Supersedes Revision ID: `none`
- Status: `Active`
- Issuer: `Receiz Governance Office`
- Approval Authority: `Receiz Core Protocol Review`
- Risk Owner: `Enterprise Risk and Resilience`
- Effective Date (UTC): `2026-03-08`

## Change Classes

| Class | Definition | Required Approvals | Separation of Duties |
| --- | --- | --- | --- |
| `normal` | Non-breaking updates with no material control-boundary impact. | 1 approver from Approval Authority. | Recommended. |
| `high-risk` | Changes to normative rules, conformance logic, key management, settlement logic, or trust boundaries. | 2 approvers: Approval Authority + Risk Owner delegate. | Mandatory: author SHALL NOT be sole approver. |
| `emergency` | Time-critical change required to contain active reliability/security risk. | 1 emergency approver + Risk Owner notification. | Mandatory post-incident dual review within 72h. |

## Mandatory Approval Paths

1. Every change SHALL declare `change class` before release.
2. `high-risk` changes SHALL include explicit risk statement and mitigation plan.
3. `emergency` changes SHALL include immediate justification and post-review due date.
4. All release attestations SHALL include approver identity and approval reference.

## Release Controls

1. Conformance gate failure SHALL block release.
2. Governance register validation failure SHALL block release.
3. Governance evidence-cadence validation failure SHALL block release.
4. Governance artifact signature verification failure SHALL block release.
5. Release attestation generation failure SHALL block release.
6. For `high-risk` class, second approver identity SHALL be present and distinct from author.

## Exceptions

Exceptions are permitted only with Risk Owner approval and MUST be logged in `docs/governance/exception-log.v1.md`.
