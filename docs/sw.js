importScripts("./offline-assets.js");
const PREFIX = "dam-offline:" + self.registration.scope + ":";
const CACHE = PREFIX + self.OFFLINE_VERSION;
const resourceURL = name => new URL(name, self.registration.scope).href;
self.addEventListener("install", event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    // No se activa una versión incompleta. La versión anterior sigue disponible.
    await cache.addAll(self.OFFLINE_ASSETS.map(name => new Request(resourceURL(name), { cache: "reload" })));
  })());
});
self.addEventListener("activate", event => {
  event.waitUntil((async () => {
    for (const key of await caches.keys()) {
      if (key.startsWith(PREFIX) && key !== CACHE) await caches.delete(key);
    }
    await self.clients.claim();
  })());
});
self.addEventListener("message", event => {
  if (event.data === "ACTIVATE_UPDATE") self.skipWaiting();
});
self.addEventListener("fetch", event => {
  const url = new URL(event.request.url);
  if (event.request.method !== "GET" || !url.href.startsWith(self.registration.scope)) return;
  event.respondWith((async () => {
    const cache = await caches.open(CACHE);
    const key = event.request.mode === "navigate" ? resourceURL("index.html") : url.origin + url.pathname;
    return await cache.match(key) || fetch(event.request);
  })());
});
