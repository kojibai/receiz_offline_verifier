# PresenceBound canonical realm (Receiz)

## Why `bad_origin` happens
PresenceBound verification fails with `bad_origin` when WebAuthn assertions are created on an origin that does not match the verifier realm. If requests come from `www`, preview deployments, `localhost`, or any non-canonical host, `clientDataJSON.origin` can diverge from expected production origin.

## Canonical realm (hard requirement)
Receiz uses one permanent WebAuthn realm:

- Expected origin: `https://receiz.com`
- RP ID: `receiz.com`

Middleware redirects every non-canonical request to `https://receiz.com` with HTTP 308 before app code runs. Server verification enforces origin and RP-ID hash checks against canonical constants.

## Reset PresenceBound credentials
The **Reset PresenceBound** action removes all server-side rows in `pbi_passkeys` for the signed-in user and clears known local browser cache keys used by the app.

Important platform limit:
- Websites cannot remotely delete passkeys stored in operating system/browser password managers.
- Users must remove device passkeys manually if they also want local deletion.

## Local development limitation
Passkeys created on `localhost` are scoped to localhost origin and are not valid for the production realm (`https://receiz.com`, `receiz.com`). Test canonical PresenceBound flows on the production domain.

## How to verify in production
1. Open `https://receiz.com/dashboard` while signed in.
2. Run signing flow; registration/auth should use RP ID `receiz.com`.
3. Confirm no `bad_origin` responses.
4. Use **Reset PresenceBound** and verify next signing attempt forces fresh registration.
