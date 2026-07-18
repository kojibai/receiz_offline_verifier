const RECEIZ_RELEASE_VERSION = "108.0.0";
const RECEIZ_CACHE = `receiz-static-${RECEIZ_RELEASE_VERSION}`;
const RECEIZ_DEFAULT_WARM_URLS = [
  "/",
  "/index.html",
  "/offline-verifier.html",
  "/offline-record-seal.html",
  "/offline-settlement.html"
];

self.__RECEIZ_RELEASE_VERSION = RECEIZ_RELEASE_VERSION;

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(RECEIZ_CACHE)
      .then((cache) => cache.addAll(RECEIZ_DEFAULT_WARM_URLS).catch(() => undefined))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => key.startsWith("receiz-static-") && key !== RECEIZ_CACHE)
            .map((key) => caches.delete(key))
        )
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener("message", (event) => {
  const data = event.data || {};
  if (data.type !== "WARM_URLS" || !Array.isArray(data.urls)) return;

  const urls = data.urls
    .filter((url) => typeof url === "string" && url.startsWith("/"))
    .slice(0, 20);

  event.waitUntil(
    caches.open(RECEIZ_CACHE).then((cache) =>
      Promise.all(urls.map((url) => cache.add(url).catch(() => undefined)))
    )
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    fetch(request)
      .then((response) => {
        const clone = response.clone();
        event.waitUntil(caches.open(RECEIZ_CACHE).then((cache) => cache.put(request, clone)));
        return response;
      })
      .catch(() => caches.match(request))
  );
});
