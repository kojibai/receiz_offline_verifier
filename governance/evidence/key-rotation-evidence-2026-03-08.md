# Key Rotation Evidence (2026-03-08)

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

1. Rotation event `2026-03-08T03:58:18.393Z`
- Retired governance key: `receiz.governance.ed25519.f5a236af5a6646f1` (`bootstrap-local`)
- Activated governance key: `receiz.governance.ed25519.e442cc2779f379f1` (`managed-kms`)
2. Rotation event `2026-03-08T04:21:56.716Z`
- Retired governance key: `receiz.governance.ed25519.e442cc2779f379f1` (`managed-kms`)
- Activated governance key: `receiz.governance.ed25519.8c0d360c4c119c6b` (`managed-kms`)

## Evidence References

- Key inventory reference: `key-inventory-2026-03-08`
- Rotation approval reference: `key-rotation-approval-2026-03-08`
