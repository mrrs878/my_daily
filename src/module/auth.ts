import { LoginReqI } from '@/interface/ajax'
import { LOGIN, LOGIN_BY_GITHUB, REGISTER } from '@/api/auth'
import { Toast } from 'vant'
import { MSG_TYPE, RES_CODE } from '@/constant'
import store from '@/store'
import { ACTIONS_E } from '@/store/actions'
import CONFIG from '@/config'
import User from '@/models/User'
import { postMessage } from '@/worker/alarm'
import { UserI } from '@/interface/model'

export default {
  async login (data: LoginReqI) {
    try {
      const res = await LOGIN(data)
      Toast(res.msg)
      if (res.code === RES_CODE.success) {
        this.updateToken(res.data)
      }
      return Promise.resolve(res.code === RES_CODE.success)
    } catch (e) {
      console.log(e)
      return Promise.resolve(false)
    }
  },
  async updateToken (data: UserI) {
    await store.dispatch(ACTIONS_E.updateUser, data)
    localStorage.setItem(CONFIG.tokenName, data.token)
    postMessage<string>({ type: MSG_TYPE.token, msg: data.token })
  },
  async logout () {
    localStorage.removeItem(CONFIG.tokenName)
    await store.dispatch(ACTIONS_E.updateUser, new User())
    await store.dispatch(ACTIONS_E.updateTasks, [])
    await store.dispatch(ACTIONS_E.updateMessages, [])
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
  },
  async loginByGithub (code: string): Promise<UserI | null> {
    try {
      const res = await LOGIN_BY_GITHUB(code)
      return Promise.resolve(res.data)
    } catch (e) {
      console.log(e)
      return Promise.resolve(null)
    }
  }
}
