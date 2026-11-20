// خدمة عمل بسيطة: تمرّر كل الطلبات للشبكة دون تخزين مؤقت، لتفادي عرض نسخة قديمة من التطبيق.
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
