import { GET_INFO } from '@/api/user'
import { RES_CODE } from '@/constant'
import store from '@/store'
import { ACTIONS_E } from '@/store/actions'

export default {
  async getUserInfo (): Promise<ModuleRes> {
    try {
      const res = await GET_INFO()
      if (res.code === RES_CODE.success) {
        await store.dispatch(ACTIONS_E.updateUser, res.data)
      }
      return Promise.resolve({ code: res.code, msg: res.msg })
    } catch (e) {
      console.log(e)
      return Promise.resolve({ code: RES_CODE.fail, msg: '' })
    }
  }
}
