import { initAlarmWorker, closeAlarmWorker } from './alarm'

function initWorkers () {
  initAlarmWorker()
}

function closeWorkers () {
  closeAlarmWorker()
}

export { initWorkers, closeWorkers }
