// Minimal service worker — just enough to satisfy PWA installability
// requirements (PWA Builder / Chrome need a registered service worker).
// It doesn't cache anything aggressively, so the app always loads fresh
// data from Firebase as before.

self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  // Pass-through — no offline caching, avoids serving stale trip data.
  event.respondWith(fetch(event.request));
});
