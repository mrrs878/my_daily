/* eslint-disable no-console */
import { register } from 'register-service-worker'
import { urlBase64ToUint8Array } from '@/util/base64'
import { subscribable } from '@/api/sw'

let swReg: ServiceWorkerRegistration

async function subscribeUserToPush (registration: ServiceWorkerRegistration, publicKey: string) {
  const subscribeOptions = {
    userVisibleOnly: true,
    applicationServerKey: urlBase64ToUint8Array(publicKey)
  }
  const res = await registration.pushManager.subscribe(subscribeOptions)
  return res
}

// if ('serviceWorker' in window.navigator && process.env.NODE_ENV === 'production') {
if ('serviceWorker' in window.navigator) {
  const publicKey = 'BOEQSjdhorIf8M0XFNlwohK3sTzO9iJwvbYU-fuXRF0tvRpPPMGO6d_gJC_pUQwBT7wD8rKutpNTFHOHN3VqJ0A'
  register(`${process.env.BASE_URL}service-worker.js`, {
    async ready (reg) {
      try {
        const subscription = await subscribeUserToPush(reg, publicKey)
        await subscribable(subscription)
      } catch (e) {
        console.log('register error', e, e.message)
      }
      console.log(
        'App is being served from cache by a worker.\n' +
        'For more details, visit https://goo.gl/AFskqB'
      )
    },
    async registered (reg) {
      swReg = reg
      console.log('Service worker has been registered.')
    },
    cached () {
      console.log('Content has been cached for offline use.')
    },
    updatefound () {
      console.log('New content is downloading.')
    },
    async updated (reg) {
      console.log('New content is available; please refresh.')
      await reg.update()
      console.log('update successful')
    },
    offline () {
      console.log('No internet connection found. App is running in offline mode.')
    },
    error (error) {
      console.error('Error during worker worker registration:', error)
    }
  })
}

export { swReg }
