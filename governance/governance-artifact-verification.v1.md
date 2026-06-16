# Governance Artifact Verification Procedure v1

## Document Control

- Document ID: `receiz-governance-artifact-verification-v1`
- Revision ID: `receiz-governance-artifact-verification-v1-r1`
- Supersedes Revision ID: `none`
- Status: `Active`
- Issuer: `Receiz Governance Office`
- Approval Authority: `Receiz Core Protocol Review`
- Risk Owner: `Enterprise Risk and Resilience`
- Effective Date (UTC): `2026-03-08`

## Objective

Provide a deterministic procedure external parties can run to verify governance artifact integrity and signature validity.

## Verification Command

```bash
pnpm governance:verify-artifact-signature
```

## Verification Inputs

- `/governance/artifact-manifest.v1.json`
- `/governance/governance-keyring.v1.json`
- Required governance artifact files listed in the manifest contract
- Controlled governance registers (`docs/governance/document-register.v1.json`, `docs/governance/evidence-register.v1.json`)

## Acceptance Criteria

A verification run is acceptable only when:

1. Command exits success.
2. Artifact set is exact.
3. All listed digests match.
4. Manifest payload hash matches.
5. Ed25519 signature validates against keyring public key for declared key ID.
