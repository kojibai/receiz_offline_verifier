# Key Rotation Evidence (2026-06-13)

## Scope

- Signing key lifecycle controls
- OIDC key lifecycle controls
- Release attestation signing-key custody controls

## Procedure

1. Verify active key IDs, retirement state, and publication state.
2. Validate key rotation records and rollback readiness.
3. Confirm no retired or unauthorized key is active.

## Result

- Review status: `pass`
- Exceptions opened: `0`
- Corrective actions opened: `0`

## Governance Key Rotation Records

1. Active governance key verified for release evidence signing.
- Active governance key: `receiz.governance.ed25519.8c0d360c4c119c6b` (`managed-kms`)
- Review result: no retired or unauthorized governance signing key is active in the governance controls output.

## Evidence References

- Key inventory reference: `key-inventory-2026-06-13`
- Rotation approval reference: `key-rotation-approval-2026-06-13`
