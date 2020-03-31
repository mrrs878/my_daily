let ws: WebSocket

function onOpen (e: Event) {
  console.log('created socket connected', e)
}
function onMsg (msg: MessageEvent, handlers: ObjectKeyValue<Function>) {
  const reader = new FileReader()
  reader.onload = () => {
    if (typeof reader.result === "string") {
      const { label, data } = JSON.parse(reader.result)
      handlers[label](data)
      console.log('received socket msg: ', JSON.parse(reader.result))
    }
  }
  reader.readAsText(msg.data)
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
  }
}
