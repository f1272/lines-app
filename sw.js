self.addEventListener('install', (event) => {
  // اینجا می‌تونی بعداً کش هم اضافه کنی
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  // برای مدیریت کش‌های قدیمی اگر لازم شد
  clients.claim();
});
