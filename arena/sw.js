// McLearn Arena offline support: network first for the app page, cache fallback when offline.
const C = 'mcl-arena-v1';
const CORE = ['/arena/', '/arena/icon-192.png', '/arena/icon-512.png', '/arena/manifest.webmanifest'];
self.addEventListener('install', e => { e.waitUntil(caches.open(C).then(c => c.addAll(CORE)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== C).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  const r = e.request; if (r.method !== 'GET') return;
  const u = new URL(r.url);
  const sameApp = u.origin === location.origin && u.pathname.startsWith('/arena');
  const cdn = /fonts\.(googleapis|gstatic)\.com|cdnjs\.cloudflare\.com/.test(u.host);
  if (!sameApp && !cdn) return;
  if (r.mode === 'navigate' || sameApp) {
    e.respondWith(fetch(r).then(res => { const cp = res.clone(); caches.open(C).then(c => c.put(sameApp && r.mode === 'navigate' ? '/arena/' : r, cp)); return res; }).catch(() => caches.match(r.mode === 'navigate' ? '/arena/' : r).then(m => m || caches.match('/arena/'))));
  } else {
    e.respondWith(caches.match(r).then(m => m || fetch(r).then(res => { const cp = res.clone(); caches.open(C).then(c => c.put(r, cp)); return res; })));
  }
});
