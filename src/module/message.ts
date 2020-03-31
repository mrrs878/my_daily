import store from '@/store'
import {ACTIONS_E} from "@/store/actions";

enum MSG_LABEL {
  pushMsgList ='pushMsgList',
  pushMsg = 'pushMsg'
}

export const wsMsgHandlers = {
  async [MSG_LABEL.pushMsgList] (data: string) {
    await store.dispatch(ACTIONS_E.updateMessages, JSON.parse(data))
  },
  async [MSG_LABEL.pushMsg] (data: string) {
    await store.dispatch(ACTIONS_E.addMessage, JSON.parse(data))
  }
}
