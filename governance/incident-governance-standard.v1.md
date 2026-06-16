# Incident Governance Standard v1

## Document Control

- Document ID: `receiz-incident-governance-standard-v1`
- Revision ID: `receiz-incident-governance-standard-v1-r1`
- Supersedes Revision ID: `none`
- Status: `Active`
- Issuer: `Receiz Governance Office`
- Approval Authority: `Receiz Core Protocol Review`
- Risk Owner: `Enterprise Risk and Resilience`
- Effective Date (UTC): `2026-03-08`

## Severity Model

| Severity | Definition | Initial Response SLA | Executive Notification | Postmortem SLA |
| --- | --- | --- | --- | --- |
| `SEV-1` | Active material service/security impact on authoritative routes or settlement controls. | 15 minutes | Immediate | 48 hours |
| `SEV-2` | Significant degradation with workaround available. | 30 minutes | Within 1 hour | 72 hours |
| `SEV-3` | Limited impact, no control boundary breach. | 4 hours | Daily rollup | 5 business days |
| `SEV-4` | Informational/non-service-impacting event. | 1 business day | Weekly rollup | Optional |

## Mandatory Incident Controls

1. Incidents SHALL be assigned a severity and owner.
2. Containment actions SHALL be timestamped.
3. Recovery and verification steps SHALL be documented.
4. Root cause and corrective actions SHALL be recorded.
5. Corrective actions SHALL have owners and due dates.
6. Exceptions and residual risk acceptance SHALL be approved by Risk Owner.

## Artifacts

- Postmortems SHALL use `docs/governance/templates/postmortem-template.v1.md`.
- Corrective actions SHALL be tracked in `docs/governance/corrective-action-register.v1.md`.
