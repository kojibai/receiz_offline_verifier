# Copy guide

Use these strings and framing rules for v21 verifier UX and release communications.

## Core product line
- "Verify a file."
- "Upload a file. Proof is in the file."

## Capability summary
- "Supports PNG, PDF, SVG, JSON, trailer-sealed artifacts, .receizbundle containers, and package ZIP/folder scans."
- "Requires a valid Receiz Signature (v3), anchor context, and real Groth16 proof artifacts."
- "Copies fail. Ask for the receiz."

## Verification success
- "Verified file"
- "All required checks passed."

## Required check copy
- "Receiz Signature (v3) verified (<kid>)"
- "Anchor data present"
- "Deterministic Groth16 proof artifacts" (UI label; v21 policy enforces real `g16:` proof validation)

## Verification failure check copy
- "Receiz Signature (v3) invalid"
- "Receiz Signature (v3) missing"
- "Receiz Signature (v3) unavailable"
- "Anchor data present" (bad state when anchor context is missing)
- "Groth16 fields are missing."
- "Only real g16: Groth16 proofs are accepted."

## Verification failure framing
- "Not verified"
- "Verification failed"
- "One or more required checks failed."

## Integrity language constraints
- Prefer "verified" / "not verified" over subjective trust wording.
- Always tie outcomes to byte-level checks and canonical fields.
- Do not imply verification if artifact binding, canonical invariants, signature, anchor, or Groth16 checks fail.
- Do not describe missing/unavailable signature states as warnings in v21 materials.
