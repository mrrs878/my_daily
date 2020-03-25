importScripts("/precache-manifest.4a7473246111e947a4f3c0b94d813ad9.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

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

