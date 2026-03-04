# Copy guide

Use these strings and framing rules for v20 verifier UX and release communications.

## Core product line
- "Verify a file."
- "Upload a file. Proof is in the file."

## Capability summary
- "Supports PNG, PDF, SVG, JSON, trailer-sealed artifacts, .receizbundle containers, and package ZIP/folder scans."
- "Copies fail. Ask for the receiz."

## Verification success
- "Verified file"
- "All required checks passed."

## Signature check copy
- "Receiz Signature (v3) verified (<kid>)"
- "Receiz Signature (v3) invalid"
- "Receiz Signature (v3) missing"
- "Receiz Signature (v3) unavailable"

## Verification failure framing
- "Not verified"
- "Verification failed"
- "One or more required checks failed."

## Integrity language constraints
- Prefer "verified" / "not verified" over subjective trust wording.
- Always tie outcomes to byte-level checks and canonical fields.
- Do not imply verification if artifact binding, canonical invariants, or required signature checks fail.
