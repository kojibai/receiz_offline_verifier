# Governance Artifact Signature Standard v1

## Document Control

- Document ID: `receiz-governance-artifact-signature-standard-v1`
- Revision ID: `receiz-governance-artifact-signature-standard-v1-r1`
- Supersedes Revision ID: `none`
- Status: `Active`
- Issuer: `Receiz Governance Office`
- Approval Authority: `Receiz Core Protocol Review`
- Risk Owner: `Enterprise Risk and Resilience`
- Effective Date (UTC): `2026-03-08`

## Purpose

This standard defines cryptographic integrity controls for published governance artifacts.

## Mandatory Controls

1. Governance artifacts SHALL be represented by a signed manifest published at `/governance/artifact-manifest.v1.json`.
2. The signed manifest SHALL include SHA-256 digests for each required governance artifact path.
3. The manifest payload SHALL include hash anchors to controlled governance registers.
4. Manifest signatures SHALL use asymmetric cryptography (`Ed25519`).
5. Signature key IDs SHALL resolve to `/governance/governance-keyring.v1.json`.
6. Signing keys used for active governance manifests SHALL be managed custody class (`managed-kms` or `managed-hsm`).
7. Artifact-signature verification failure SHALL block release.

## Required Artifact Set

The manifest SHALL include all governance-public artifacts listed by the governance artifact contract in repository control scripts.

## Verification Rule

Verification SHALL confirm:

1. Exact artifact-set membership.
2. Digest and size integrity for each artifact.
3. Payload hash integrity.
4. Signature validity against keyring public key material.
5. Register hash-anchor continuity.
