// خدمة عمل بسيطة: تمرّر كل الطلبات إلى الشبكة دون تخزين مؤقت،
// حتى لا يرى المستخدم نسخة قديمة من التطبيق بعد التحديث.
self.addEventListener('install', (e) => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', (e) => {
  e.respondWith(fetch(e.request));
});
