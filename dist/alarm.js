const MSG_TYPE = {
  alarm: 'alarm',
  failed: 'failed',
  token: 'token',
  requestError: 'requestError',
  taskChange: 'tasksChange',
  setRefreshRate: 'setRefreshRate'
}
const MINUTE = 1000 * 60
const HOUR = MINUTE * 60

const API = {
  dev: 'https://api.p18c.top',
  test: 'http://localhost:9090'
}
const BASE_API = API.test

const data = {
  token: '',
  tasks: [],
  alarmedTasks: [],
  monitorId: -1
}

function fetch (url, method) {
  return new Promise((resolve, reject) => {
    if (!data.token) return
    const httpRequest = new XMLHttpRequest()
    if (!httpRequest) {
      reject(new Error('Giving up :( Cannot create an XMLHTTP instance'))
      return false
    }
    httpRequest.onreadystatechange = function () {
      try {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
          if (httpRequest.status === 200) {
            resolve(JSON.parse(httpRequest.response))
          } else {
            reject(new Error('There was a problem with the request'))
          }
        }
      } catch (e) {
        reject(e)
        console.log('Caught Exception: ' + e.description)
      }
    }
    httpRequest.open(method, url)
    httpRequest.setRequestHeader('Content-Type', 'application/json')
    httpRequest.setRequestHeader('Accept', 'application/json, text/plain, */*')
    httpRequest.setRequestHeader('Authorization', `Bear ${data.token}`)
    httpRequest.send()
  })
}
function destroyMonitorTask () {
  clearInterval(data.monitorId)
}
function createMonitorTask (refreshRate) {
  data.monitorId = setInterval(() => {
    if (data.tasks.length === 0) return
    const diff = data.tasks[0].alarmTime - new Date().getTime()
    if (diff <= 0) {
      postMessage({ type: MSG_TYPE.alarm, msg: `${data.tasks[0].title}任务已过期` })
      postMessage({ type: MSG_TYPE.failed, msg: data.tasks[0] })
      data.alarmedTasks.push(data.tasks[0].ID)
      data.tasks.shift()
    } else if (diff <= HOUR && !data.alarmedTasks.includes(data.tasks[0].ID)) {
      postMessage({ type: MSG_TYPE.alarm, msg: `请注意${data.tasks[0].title}任务` })
      data.alarmedTasks.push(data.tasks[0].ID)
      data.tasks.shift()
    }
  }, refreshRate)
}

const ON_MSG_HANDLERS = {
  async [MSG_TYPE.token] (token) {
    data.token = token
    // const res = await fetch(`${BASE_API}/task`, 'GET')
    // if (res.code !== 0) {
    //   postMessage({ type: MSG_TYPE.requestError, data: res })
    //   return
    // }
    // data.tasks = res.data
  },
  [MSG_TYPE.taskChange] (tasks) {
    const tmp = tasks.filter(item => (item.status === 0 || item.status === 1))
    data.tasks = tmp.sort((item1, item2) => item1.alarmTime < item2.alarmTime)
    if (data.tasks.length === 0) destroyMonitorTask()
  },
  [MSG_TYPE.setRefreshRate] (rate) {
    destroyMonitorTask()
    createMonitorTask(rate)
  }
}

function onMessage (e) {
  const { type, msg } = e.data
  if (!ON_MSG_HANDLERS[type]) return
  ON_MSG_HANDLERS[type](msg)
}

onmessage = onMessage
createMonitorTask(MINUTE)
