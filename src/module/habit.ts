import { HabitI } from '@/interface/model'
import { ADD_HABIT, VIEW_HABITS, UPDATE_HABIT, VIEW_HABIT } from '@/api/habit'
import { RES_CODE } from '@/constant'
import store from '@/store'
import { ACTIONS_E } from '@/store/actions'
import * as R from 'ramda'

export default {
  async addHabit (habit: HabitI): Promise<ModuleRes> {
    try {
      const res = await ADD_HABIT(habit)
      if (res.code === RES_CODE.success) {
        await store.dispatch(ACTIONS_E.addHabit, res.data)
      }
      return Promise.resolve({ code: res.code, msg: res.msg })
    } catch (e) {
      console.log(e)
      return Promise.resolve({ code: RES_CODE.fail, msg: '' })
    }
  },
  async viewHabits (): Promise<ModuleRes> {
    try {
      const res = await VIEW_HABITS()
      if (res.code === RES_CODE.success && !R.equals<Array<HabitI>>(res.data, store.state.habits)) {
        await store.dispatch(ACTIONS_E.updateHabits, res.data)
      }
      return Promise.resolve({ code: res.code, msg: res.msg })
    } catch (e) {
      console.log(e)
      return Promise.resolve({ code: RES_CODE.fail, msg: '' })
    }
  },
  async updateHabitStatus (id: number, status: number): Promise<ModuleRes> {
    try {
      const res = await UPDATE_HABIT({ id, status })
      if (res.code === RES_CODE.success) {
        await store.dispatch(ACTIONS_E.updateHabit, res.data)
      }
      return Promise.resolve({ code: res.code, msg: res.msg })
    } catch (e) {
      console.log(e)
      return Promise.resolve({ code: RES_CODE.fail, msg: '' })
    }
  },
  async refreshHabit (id: number): Promise<ModuleRes> {
    try {
      const res = await VIEW_HABIT(id)
      if (res.code === RES_CODE.success) {
        await store.dispatch(ACTIONS_E.updateHabit, res.data)
      }
      return Promise.resolve({ code: res.code, msg: res.msg })
    } catch (e) {
      console.log(e)
      return Promise.resolve({ code: RES_CODE.fail, msg: '' })
    }
  }
}
