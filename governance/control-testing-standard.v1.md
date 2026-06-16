# Control Testing Standard v1

## Document Control

- Document ID: `receiz-control-testing-standard-v1`
- Revision ID: `receiz-control-testing-standard-v1-r1`
- Supersedes Revision ID: `none`
- Status: `Active`
- Issuer: `Receiz Governance Office`
- Approval Authority: `Receiz Core Protocol Review`
- Risk Owner: `Enterprise Risk and Resilience`
- Effective Date (UTC): `2026-03-08`

## Testing Cadence

| Control | Frequency | Evidence Artifact |
| --- | --- | --- |
| Economy conformance gate | Every CI run + release | Conformance JSON and workflow logs |
| API security contract tests | Every CI run + weekly scheduled | CI logs |
| Runtime chaos/failure path checks | Every CI run + weekly scheduled | CI logs |
| Governance artifact signature verification | Every CI run + release + weekly scheduled | Signed manifest verification logs |
| Privileged access review | Quarterly | Access review evidence record |
| Signing/auth key rotation evidence review | Quarterly | Key lifecycle evidence record |
| DR restore + replay test | Semiannual | DR restore evidence report |
| Independent assurance cycle evidence | Annual | External assessment and attestation references |
| Uptime synthetic checks | Every 15 minutes | Synthetic uptime workflow logs |
| Production SLO validation | Every 6 hours | Production SLO workflow logs |
| Auth rate-limit proof | Hourly | Proof workflow logs |

## Control Requirements

1. Failed mandatory control tests SHALL block release.
2. Scheduled control test failures SHALL open incident or exception records.
3. Test evidence SHALL be retained and traceable to commit and run identifiers.
4. Evidence-cadence controls SHALL be machine-checked via `docs/governance/evidence-register.v1.json`.
5. Governance artifact signature verification SHALL be machine-checked on every release path.
