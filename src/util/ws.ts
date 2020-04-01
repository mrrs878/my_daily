let ws: WebSocket

function onOpen (e: Event) {
  console.log('created socket connected', e)
}
function onMsg (msg: MessageEvent, handlers: ObjectKeyValue<Function>) {
  const msgReader = new FileReader()
  msgReader.onload = () => {
    if (typeof msgReader.result === 'string') {
      console.log('received socket msg: ', JSON.parse(msgReader.result))
      const { label, data } = JSON.parse(msgReader.result)
      const cb = handlers[label]
      cb && cb(data)
    }
  }
  msgReader.readAsText(msg.data)
}
function onClose (e: CloseEvent) {
  console.log('closed socket connected: ', e)
}
function onError (e: Event) {
  console.log('socket error', e)
}

export default {
  setup (channel: string, handlers: ObjectKeyValue<Function>) {
    try {
      ws = new WebSocket(`ws://localhost:9090/msg/${channel}`)
    } catch (e) {
      console.log('setup websocket error: ', e)
    }
    ws.onopen = onOpen
    ws.onmessage = msg => onMsg(msg, handlers)
    ws.onclose = onClose
    ws.onerror = onError
  },
  close () {
    ws.close()
  },
  sendMsg (msg: { label: string; data: string }) {
    ws.send(JSON.stringify(msg))
  }
}
