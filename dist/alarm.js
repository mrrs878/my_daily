const MSG_TYPE = {
  alarm: 'alarm',
  taskFailed: 'taskFailed',
  habitFailed: 'habitFailed',
  token: 'token',
  requestError: 'requestError',
  tasksChange: 'tasksChange',
  habitsChange: 'habitsChange',
  setRefreshRate: 'setRefreshRate'
}
const DAY_VIEWS = ['日', '一', '二', '三', '四', '五', '六']
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
  habits: [],
  alarmedTasks: [],
  alarmedHabits: [],
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
function taskMonitor () {
  if (data.tasks.length === 0) return
  const task = data.tasks[0]
  const diff = task.alarmTime - new Date().getTime()
  if (diff <= 0) {
    postMessage({ type: MSG_TYPE.taskFailed, msg: task })
    data.tasks.shift()
  } else if (diff <= HOUR && !data.alarmedTasks.includes(task.ID)) {
    postMessage({ type: MSG_TYPE.alarm, msg: `请注意${task.title}任务` })
    data.alarmedTasks.push(task.ID)
    data.tasks.shift()
  }
}
function habitMonitor () {
  if (data.habits.length === 0) return
  const habit = data.habits[0]
  const currentDate = new Date()
  const diff = new Date(`${currentDate.toLocaleDateString()} ${habit.alarmTime}`) - currentDate
  if (diff <= 0) {
    postMessage({ type: MSG_TYPE.habitFailed, msg: habit })
    data.alarmedHabits.push(habit.ID)
    data.habits.shift()
  } else if (diff <= HOUR && !data.alarmedHabits.includes(habit.ID)) {
    postMessage({ type: MSG_TYPE.alarm, msg: `请注意${habit.title}习惯` })
    data.alarmedHabits.push(habit.ID)
    data.habits.shift()
  }
}
function createMonitor (refreshRate) {
  data.monitorId = setInterval(() => {
    taskMonitor()
    habitMonitor()
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
  [MSG_TYPE.tasksChange] (tasks) {
    const tmp = tasks.filter(item => (item.status === 0 || item.status === 1))
    data.tasks = tmp.sort((item1, item2) => item1.alarmTime < item2.alarmTime)
  },
  [MSG_TYPE.setRefreshRate] (rate) {
    destroyMonitorTask()
    createMonitor(rate)
  },
  [MSG_TYPE.habitsChange] (habits) {
    const tmp = habits.filter(item => {
      const dates = item.alarmDate.split('#')
      const day = DAY_VIEWS[new Date().getDay()]
      return ((item.status === 0 || item.status === 1) && dates.includes(day))
    })
    data.habits = tmp.sort((item1, item2) => item1.alarmTime < item2.alarmTime)
  }
}

function onMessage (e) {
  const { type, msg } = e.data
  if (!ON_MSG_HANDLERS[type]) return
  ON_MSG_HANDLERS[type](msg)
}

onmessage = onMessage
createMonitor(MINUTE)
