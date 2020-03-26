import { LoginReqI } from '@/interface/ajax'
import { LOGIN, REGISTER } from '@/api/auth'
import { Toast } from 'vant'
import {MSG_TYPE, RES_CODE} from '@/constant'
import store from '@/store'
import { ACTIONS_E } from '@/store/actions'
import CONFIG from '@/config'
import User from '@/models/User'
import { postMessage } from '@/worker/alarm'

export default {
  async login (data: LoginReqI) {
    try {
      const res = await LOGIN(data)
      Toast(res.msg)
      if (res.code === RES_CODE.success) {
        await store.dispatch(ACTIONS_E.updateUser, res.data)
        localStorage.setItem(CONFIG.tokenName, res.data.token)
        postMessage<string>({ type: MSG_TYPE.token, msg: res.data.token })
      }
      return Promise.resolve(res.code === RES_CODE.success)
    } catch (e) {
      console.log(e)
      return Promise.resolve(false)
    }
  },
  async logout () {
    localStorage.removeItem(CONFIG.tokenName)
    await store.dispatch(ACTIONS_E.updateUser, new User())
    await store.dispatch(ACTIONS_E.updateTasks, [])
    return Promise.resolve(true)
  },
  async register (data: LoginReqI) {
    try {
      const res = await REGISTER(data)
      Toast(res.msg)
      return Promise.resolve(res.code === RES_CODE.success)
    } catch (e) {
      console.log(e)
      return Promise.resolve(false)
    }
  }
}
