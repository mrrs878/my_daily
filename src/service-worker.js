/* eslint-disable */

workbox.core.setCacheNameDetails({
  prefix: 'my-daily',
  suffix: 'v0.0.1'
})

workbox.precaching.precacheAndRoute(self.__precacheManifest || [])

self.onpush = async e => {
  await self.registration.showNotification(e.data.json().detail)
}
