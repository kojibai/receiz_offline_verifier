# Architecture

## Goals
- Public verification
- Offline capability (no network required)
- Deterministic outcomes from file bytes
- Fail-closed behavior

## Implementation shape
- Single static HTML file: UI + verifier logic + embedded decompressor
- Parses PNG chunks (iTXt/tEXt/zTXt) for embedded payloads
- Uses WebCrypto SHA-256 for hashing

## Offline contract
- No fetch/XHR/WebSocket/EventSource/sendBeacon
- No remote dependencies
- All checks must be derivable from the artifact bytes and user-provided optional link path