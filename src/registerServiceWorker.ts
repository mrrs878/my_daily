/* eslint-disable no-console */
import {register} from 'register-service-worker'
import {urlBase64ToUint8Array} from '@/util/base64'
import {subscribable} from '@/api/sw'

async function subscribeUserToPush(registration: ServiceWorkerRegistration, publicKey: string) {
  const subscribeOptions = {
    userVisibleOnly: true,
    applicationServerKey: urlBase64ToUint8Array(publicKey)
  };
  return await registration.pushManager.subscribe(subscribeOptions)
}

if ('serviceWorker' in window.navigator && process.env.NODE_ENV === 'production') {
  const publicKey = 'BOEQSjdhorIf8M0XFNlwohK3sTzO9iJwvbYU-fuXRF0tvRpPPMGO6d_gJC_pUQwBT7wD8rKutpNTFHOHN3VqJ0A';
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready (res) {
      console.log(
        'App is being served from cache by a service worker.\n' +
        'For more details, visit https://goo.gl/AFskqB'
      )
    },
    async registered (reg) {
      try {
        const subscription = await subscribeUserToPush(reg, publicKey)
        console.log('subscribeUserToPushed.')
        await subscribable(subscription)
        console.log('Service worker has been registered.')
      } catch (e) {
        console.log('register error', e, e.message)
      }
    },
    cached () {
      console.log('Content has been cached for offline use.')
    },
    updatefound () {
      console.log('New content is downloading.')
    },
    updated () {
      console.log('New content is available; please refresh.')
    },
    offline () {
      console.log('No internet connection found. App is running in offline mode.')
    },
    error (error) {
      console.error('Error during service worker registration:', error)
    }
  })
}
