# Receiz Standard v1

Receiz standardizes sealed proof artifacts around one canonical payload (`receiz.proof_bundle`) carried across PNG/PDF/trailer outputs and Receiz bundle envelopes.
Receiz is a deterministic verification-and-settlement platform where original bytes are authoritative for verification and replayable ledger math is authoritative for settlement.

## Canonical assets

- Schema: `/standards/receiz.schema.v1.json`
- Bundle envelope schema: `/standards/receiz.bundle.schema.v1.json`
- Real Groth16 envelope schema: `/standards/receiz.groth16.real.schema.v1.json`
- Document verify response schema: `/standards/receiz.document-verify.schema.v1.json`
- Error codes: `/standards/receiz-errors.v1.json`
- Test vectors: `/standards/receiz-test-vectors.v1.json`

## Settlement standard references

- Normative settlement standard: `/economy`
- Value-source appendix: `/economy/value-source`
- Transfer runbook: `/economy/transfers`
- Ledger contract: `/economy/ledger`
- Conformance report artifact: `/api/economy/conformance`

The settlement standard publishes normative definitions, requirement IDs, claim-to-code traceability, guarantee boundaries, and conformance controls with evidence artifacts.

## Stability

- `kind` and `payloadVersion` are versioned and stable.
- Validation fields (`ts`, `code`, `kaiPulseEternal`, `verifyPath`) are deterministic.
- A proof bundle is bound to artifact basis bytes via `artifactSha256Basis`.

## Verification guarantees

- Any mutation of locked fields or image bytes invalidates verification.
- Verification confirms record integrity and origin consistency.
- Verification does not prove identity intent or external events.

## Evidence mapping

- Public trust claims SHALL map to source routes/functions and verification evidence artifacts.
- Verification claims are mapped by standards schemas and test vectors.
- Settlement claims are mapped by `/economy` traceability and conformance tables.
