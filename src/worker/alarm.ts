import { swReg } from '@/registerServiceWorker'
import { MSG_TYPE, TASK_STATUS } from '@/constant'
import { MsgI } from '@/interface/worker'
import { AjaxResponseI } from '@/interface/ajax'
import { TaskI } from '@/interface/model'
import TaskModule from '@/module/task'
import { Notify } from 'vant'

let worker: Worker

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
    Notify({ type: 'primary', message: data })
    await showNotification(data)
  },
  async [MSG_TYPE.requestError] (data: AjaxResponseI<Array<TaskI>>) {
    console.log(data.msg)
  },
  async [MSG_TYPE.failed] (task: TaskI) {
    try {
      await TaskModule.updateTaskStatus(task.ID, TASK_STATUS.failed)
      Notify({ type: 'danger', message: `${ task.title }任务已过期` })
    } catch (e) {
      console.log(e)
    }
  }
}

export function initAlarmWorker () {
  if (window.Worker) {
    worker = new Worker('alarm.js')
    worker.onmessage = onAlarmMessage
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

export function postMessage<T> (msg: MsgI<T>) {
  worker.postMessage(msg)
}
