const MSG_TYPE = {
  alarm: 'alarm',
  token: 'token'
}

const data = {
  token: ''
}

const ON_MSG_HANDLERS = {
  [MSG_TYPE.token] (token) {
    data.token = token
  }
}

function onMessage (e) {
  const { type, data } = e.data
  ON_MSG_HANDLERS[type](data)
}

function fetch (url, method) {
  if (!data.token) return
  const httpRequest = new XMLHttpRequest()
  if (!httpRequest) {
    alert('Giving up :( Cannot create an XMLHTTP instance')
    return false
  }
  httpRequest.onreadystatechange = function () {
    try {
      if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
          console.log(httpRequest.responseText)
        } else {
          console.log('There was a problem with the request.')
        }
      }
    } catch (e) {
      console.log('Caught Exception: ' + e.description)
    }
  }
  httpRequest.setRequestHeader('Content-Type', 'application/json')
  httpRequest.setRequestHeader('Authorization', `Bear ${data.token}`)
  httpRequest.open(method, url)
  httpRequest.send()
}

onmessage = onMessage

// postMessage({ type: MSG_TYPE.alarm, msg: '距离测试任务结束还有10min' })

fetch()
