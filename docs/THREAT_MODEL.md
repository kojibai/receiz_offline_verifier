# Threat model

## Primary threats
1) Tampered artifact: attacker edits the file and tries to keep “verified”.
2) Bundle swap: attacker copies a proof bundle from one artifact to another.
3) Parser ambiguity: attacker crafts confusing chunks/compression to cause inconsistent decoding.
4) UI deception: UI displays verified without required checks.

## Required defenses
- Proof bundle uniqueness (exactly 1 embedded `receiz.proof_bundle`)
- Byte-bound artifact binding:
  - compute a stable hash of the artifact with proof bundle chunks removed
  - compare to the embedded binding field
- Strict canonical field checks (ts/slug/code/pulse/path)
- Fail closed with explicit reasons
- Offline-only execution (no network primitives)

## Non-goals
- Preventing edits to a file (any file can be edited)
- Goal is: **edits are detectable** and cause verification failure