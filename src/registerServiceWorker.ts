/* eslint-disable no-console */
import { register } from 'register-service-worker'
import { urlBase64ToUint8Array } from '@/util/base64'
import { subscribable } from '@/api/sw'

function askPermission() {
  return new Promise(function(resolve, reject) {
    const permissionResult = Notification.requestPermission(function(result) {
      resolve(result);
    });

    if (permissionResult) {
      new Notification('test')
      permissionResult.then(resolve, reject);
    }
  })
    .then(function(permissionResult) {
      if (permissionResult !== 'granted') {
        throw new Error('We weren\'t granted permission.');
      }
    });
}

async function subscribeUserToPush(registration: ServiceWorkerRegistration, publicKey: string) {
  await askPermission()
  const subscribeOptions = {
    userVisibleOnly: true,
    applicationServerKey: urlBase64ToUint8Array(publicKey)
  };
  return await registration.pushManager.subscribe(subscribeOptions)
}

if ('serviceWorker' in window.navigator) {
  const publicKey = 'BOEQSjdhorIf8M0XFNlwohK3sTzO9iJwvbYU-fuXRF0tvRpPPMGO6d_gJC_pUQwBT7wD8rKutpNTFHOHN3VqJ0A';
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready (res) {
      console.log(
        'App is being served from cache by a service worker.\n' +
        'For more details, visit https://goo.gl/AFskqB'
      )
    },
    async registered (reg) {
      const subscription = await subscribeUserToPush(reg, publicKey)
      await subscribable(subscription)
      console.log('Service worker has been registered.')
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
