/* eslint-disable */

workbox.core.setCacheNameDetails({
  prefix: 'browse-exp',
  suffix: 'v1.0.0',
});
workbox.core.skipWaiting();
workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute(self.__precacheManifest || []);

workbox.routing.registerRoute(
  new RegExp('.*experiments\?.*'),
  new workbox.strategies.NetworkFirst()
);
workbox.routing.registerRoute(
  new RegExp('.*experiments/\\d'),
  new workbox.strategies.NetworkFirst()
)
workbox.routing.registerRoute(
  new RegExp('.*experiment_types.*'),
  new workbox.strategies.NetworkFirst()
)

self.addEventListener('push', function (e) {
  var data = e.data
  if (e.data) {
    data = data.json()
    console.log('push的数据为：', data)
    self.registration.showNotification(data.text)
  }
  else {
    console.log('push没有任何数据')
  }
})
