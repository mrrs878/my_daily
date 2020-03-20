importScripts("/precache-manifest.af74e3a5cf1adf57cb48b7eb29ffcc1b.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

/* eslint-disable */

workbox.core.setCacheNameDetails({
  prefix: 'my-daily',
  suffix: 'v1.0.0'
})

workbox.precaching.precacheAndRoute(self.__precacheManifest || [])

workbox.routing.registerRoute(
  new RegExp('.*experiments?.*'),
  new workbox.strategies.NetworkFirst()
)
workbox.routing.registerRoute(
  new RegExp('.*experiments/\\d'),
  new workbox.strategies.NetworkFirst()
)
workbox.routing.registerRoute(
  new RegExp('.*experiment_types.*'),
  new workbox.strategies.NetworkFirst()
)

self.addEventListener('push', function (e) {
  let data = e.data
  if (e.data) {
    data = data.json()
    console.log('push的数据为：', data)
    self.registration.showNotification(data.text)
  } else {
    console.log('push没有任何数据')
  }
})

