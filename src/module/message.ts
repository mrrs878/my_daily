import store from '@/store'
import { ACTIONS_E } from '@/store/actions'
import { Toast } from 'vant'

enum MSG_LABEL {
  pushMsgList ='pushMsgList',
  pushMsg = 'pushMsg',
  readAll = 'ReadAll',
  readOne = 'ReadOne',
  getAll = 'GetAll',
  removeOne = 'RemoveOne'
}

interface ResData<T> {
  success: boolean;
  data: T;
}

export const wsMsgHandlers = {
  async [MSG_LABEL.pushMsgList] (data: string) {
    await store.dispatch(ACTIONS_E.updateMessages, JSON.parse(data))
  },
  async [MSG_LABEL.pushMsg] (data: string) {
    await store.dispatch(ACTIONS_E.addMessage, JSON.parse(data))
  },
  async [MSG_LABEL.readAll] (data: string) {
    const res: ResData<string> = JSON.parse(data)
    if (res.success) {
      await store.dispatch(ACTIONS_E.updateMessages, JSON.parse(res.data))
      Toast('更新成功')
    }
    else {}
  },
  async [MSG_LABEL.readOne] (data: string) {
    const res: ResData<string> = JSON.parse(data)
    if (res.success) {
      await store.dispatch(ACTIONS_E.updateMessage, JSON.parse(res.data))
      Toast('更新成功')
    } else Toast('更新失败')
  },
  async [MSG_LABEL.getAll] (data: string) {
    const res: ResData<string> = JSON.parse(data)
    if (res.success) {
      await store.dispatch(ACTIONS_E.updateMessages, JSON.parse(res.data))
      Toast('更新成功')
    } else Toast('更新失败')
  },
  async [MSG_LABEL.removeOne] (data: string) {
    const res: ResData<string> = JSON.parse(data)
    if (res.success) {
      await store.dispatch(ACTIONS_E.delMessage, JSON.parse(res.data).ID)
      Toast('删除成功')
    } else Toast('更新失败')
  }
}
