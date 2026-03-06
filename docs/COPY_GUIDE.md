# Copy guide

Use these strings and framing rules for `v26` verifier UX and release communications.

## Core product line
- "Verify a file."
- "Upload a file. Proof is in the file."

## Capability summary
- "Supports PNG, PDF, SVG, JSON, trailer-sealed artifacts, .receizbundle containers, and package ZIP/folder scans."
- "Requires trusted signature verification (`signatureV4`), anchor context, and real Groth16 proof artifacts."
- "Copies fail. Ask for the receiz."

## Verification success
- "Verified file"
- "All required checks passed."

## Required check copy
- "Receiz Signature (v4) verified (<issuerKid> • <certId>)"
- "Anchor data present"
- "Deterministic Groth16 proof artifacts" (UI label; `v26` policy enforces real `g16:` proof validation)

## Verification failure check copy
- "Trusted signature invalid"
- "Trusted signature unavailable"
- "Trusted signature missing"
- "Anchor data present" (bad state when anchor context is missing)
- "Groth16 fields are missing."
- "Only real g16: Groth16 proofs are accepted."

## Warning copy
- No trusted-signature warning copy is used in `v26`; unavailable `signatureV4` is a hard failure.

## Verification failure framing
- "Not verified"
- "Verification failed"
- "One or more required checks failed."

## Integrity language constraints
- Prefer "verified" / "not verified" over subjective trust wording.
- Always tie outcomes to byte-level checks and canonical fields.
- Do not imply verification if artifact binding, canonical invariants, trusted signature checks, anchor checks, or Groth16 checks fail.
