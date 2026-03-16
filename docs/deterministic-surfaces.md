# Deterministic Surface Contract

Receiz trust surfaces must never use fake loaders.

## Rule

For deterministic routes, first paint must be one of:

- The real server-resolved artifact state.
- A real snapshot written by the previous page during navigation.
- `null` while the server-resolved route commits.

They must never paint:

- Spinners.
- Skeletons.
- Placeholder shells.
- “Opening…”, “Loading…”, or “Preparing…” copy.
- Mock cards that are later replaced with the real artifact.

## Deterministic Routes

The current deterministic routes are:

- `/[username]`
- `/v/[slug]/[code]/[pulse]`
- `/r/[slug]/[code]/[pulse]`
- `/[username]/verified/[receizId]`
- `/[username]/verified/[receizId]/player/live`
- `/wallet/note/[noteId]/status/[proof]`

## Required Pattern

1. Resolve authoritative route data on the server.
2. Use snapshots only as an additive transition fast path.
3. If a `loading.tsx` exists for a deterministic route, it may render only a real snapshot component.
4. If no snapshot exists, render nothing and let the server-resolved route commit.
5. Encode immutable artifact payloads as `ArtifactTruth`.
6. Encode viewer progress, active selection, and playback position as experience state.
7. Encode profile/session/ownership details as augmentation, never as artifact truth.

## Snapshot Policy

Snapshots are allowed because they are deterministic route state, not fake UI.

- Snapshots must contain real artifact or player payloads.
- Snapshots must be written before navigation.
- Snapshots must never become the only source of truth.
- Cold loads, pasted links, reloads, and new tabs must still resolve correctly from the route itself.

## Enforcement

Run:

```bash
pnpm test:deterministic-surfaces
```

This check fails if deterministic routes reintroduce fake loaders, `Suspense` fallback shells, or route-level loading files that do anything other than render a real snapshot.

## Objective UX Criteria

For deterministic routes, a change is acceptable only if these facts stay true:

- A revisit with a valid snapshot requires `0` blocking network round trips before truthful paint.
- A cold open requires `1` route request and `0` fake intermediary frames.
- Placeholder or correction frames before truthful paint stay at `0`.
- Artifact identity comes from deterministic `ArtifactTruth`, not additive network state.
