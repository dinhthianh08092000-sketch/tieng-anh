// Lưu app vào máy để học được khi không có mạng.
// Ưu tiên bản mới trên mạng; mất mạng thì dùng bản đã lưu.
const C = 'tanm-v2-demo-5';
const SHELL = ['./', './index.html', './style.css', './app.js', './ai.js', './content.js', './manifest.json'];
self.addEventListener('install', e => { e.waitUntil(caches.open(C).then(c => c.addAll(SHELL)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== C).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  if (url.origin !== location.origin) return; // mô hình AI do thư viện tự lưu
  const isAudioOrImg = /\/(audio|img)\//.test(url.pathname);
  if (isAudioOrImg){
    e.respondWith(caches.match(e.request).then(hit => hit || fetch(e.request).then(r => { if (r.ok){ const cp = r.clone(); caches.open(C).then(c => c.put(e.request, cp)); } return r; })));
  } else {
    e.respondWith(fetch(e.request).then(r => { if (r.ok){ const cp = r.clone(); caches.open(C).then(c => c.put(e.request, cp)); } return r; }).catch(() => caches.match(e.request)));
  }
});
