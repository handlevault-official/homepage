const CACHE_NAME = 'crisp-suite-v1';
const urlsToCache = [
  './index.html',
  './manifest.json',
  './assets/logo.svg'
];

// I-install ang service worker at i-cache ang mga pangunahing files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// I-serve ang cached files kapag offline o para mas mabilis ang loading
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
