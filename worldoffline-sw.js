"use strict";

self.addEventListener("install", event => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", event => {
  event.waitUntil((async () => {
    const names = await caches.keys();
    await Promise.all(names
      .filter(name => name.startsWith("worldoffline-assets-v3-") ||
        name === "worldoffline-meta-v3" || name.startsWith("worldoffline-static-"))
      .map(name => caches.delete(name)));
    await self.clients.claim();
  })());
});

// Keep the PWA worker registered while every request uses the network normally.
self.addEventListener("fetch", event => {
  event.respondWith(fetch(event.request));
});
