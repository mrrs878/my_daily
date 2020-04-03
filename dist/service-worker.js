importScripts("/precache-manifest.672ae273169ba09a7b1af018d546ea8c.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

/* eslint-disable */

workbox.core.setCacheNameDetails({
  prefix: 'my-daily',
  suffix: 'v0.0.1'
})

workbox.precaching.precacheAndRoute(self.__precacheManifest || [])

self.onpush = async e => {
  await self.registration.showNotification(e.data.json().detail)
}

