# Release Attestation Standard v1

## Document Control

- Document ID: `receiz-release-attestation-standard-v1`
- Revision ID: `receiz-release-attestation-standard-v1-r1`
- Supersedes Revision ID: `none`
- Status: `Active`
- Issuer: `Receiz Governance Office`
- Approval Authority: `Receiz Core Protocol Review`
- Risk Owner: `Enterprise Risk and Resilience`
- Effective Date (UTC): `2026-03-08`

## Required Attestation Fields

Every production release SHALL emit an attestation artifact with:

1. Commit SHA and tree SHA.
2. Build identifier and build hash.
3. Conformance report hash and conformance revision hash.
4. Change class (`normal`, `high-risk`, `emergency`).
5. Approver identity and approval reference.
6. Risk owner identity.
7. Separation-of-duties result.
8. Payload digest and cryptographic signature.

## Signature Requirement

1. Release attestation payloads SHALL be signed.
2. Signing key identifier SHALL be recorded in the artifact.
3. Signature verification SHALL be reproducible from payload + key material.

## Retention

Release attestations SHALL be retained as immutable artifacts for a minimum of 7 years.

## Verification

Attestations SHALL be machine-verifiable using the published attestation schema and verification script.
