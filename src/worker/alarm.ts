import { swReg } from '@/registerServiceWorker'
import { MSG_TYPE } from '@/constant'
import CONFIG from '@/config'

let worker = null

async function showNotification (text: string) {
  try {
    await swReg.showNotification(text)
  } catch (e) {
    console.log('showNotification error!', e)
  }
}

const ON_MSG_HANDLERS: ObjectKeyValue<Function> = {
  async [MSG_TYPE.alarm] (data: string) {
    console.log('Message received from worker', data)
    await showNotification(data)
  }
}

export function initAlarmWorker () {
  if (window.Worker) {
    worker = new Worker('alarm.js')
    worker.onmessage = onAlarmMessage
    worker.postMessage({ type: MSG_TYPE.token, data: localStorage.getItem(CONFIG.tokenName) })
  } else {
    console.log('Your browser doesn\'t support web workers.')
  }
}

export async function alarm () {
  await showNotification('时间到了~')
}

export function onAlarmMessage (e: MessageEvent) {
  ON_MSG_HANDLERS[e.data.type](e.data.msg)
}
