# Contributing

This is a correctness-first verifier.

## Non-negotiables

- No network calls in the offline verifier.
- Fail closed: if something cannot be proven, do not mark verified.
- Verification rules must be deterministic and documented.
- Avoid “smart” parsing heuristics—prefer strict, explicit rules.

## Local dev

Static site only:

```bash
cd site
python3 -m http.server 8080