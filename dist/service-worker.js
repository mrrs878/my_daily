importScripts("/precache-manifest.3c4da7eff709a348dca949e521ce1602.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

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

self.onpush = async e => {
  await self.registration.showNotification(e.data.json().detail)
}

