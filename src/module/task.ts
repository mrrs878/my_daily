import { ADD_TASK, VIEW_TASKS, DEL_TASK, UPDATE_TASK, VIEW_TASK } from '@/api/task'
import { TaskI } from '@/interface/model'
import { Toast } from 'vant'
import store from '@/store'
import { RES_CODE } from '@/constant'
import ToastError from '@/models/ToastError'
import { ACTIONS_E } from '@/store/actions'

namespace Task {
  export async function addTask (data: TaskI): Promise<ModuleRes> {
    try {
      const res = await ADD_TASK(data)
      if (res.code === RES_CODE.success) {
        await store.dispatch(ACTIONS_E.addTask, res.data)
      }
      return Promise.resolve({ code: res.code, msg: res.msg })
    } catch (e) {
      console.log(e)
      return Promise.resolve({ code: RES_CODE.fail, msg: '' })
    }
  }
  export async function viewTasks (): Promise<ModuleRes> {
    try {
      const res = await VIEW_TASKS()
      if (res.code === RES_CODE.success) {
        await store.dispatch(ACTIONS_E.updateTasks, res.data)
      }
      return Promise.resolve({ code: res.code, msg: res.msg })
    } catch (e) {
      console.log(e)
      return Promise.resolve({ code: RES_CODE.fail, msg: '' })
    }
  }
  export async function deleteTask (id: number) {
    try {
      const res = await DEL_TASK(id)
      Toast(res.msg)
      if (res.code !== RES_CODE.success) return
      await store.dispatch(ACTIONS_E.delTask, id)
    } catch (e) {
      if (e instanceof ToastError) Toast(e.msg)
      console.log(e)
    }
  }
  export async function refreshTask (id: number): Promise<ModuleRes> {
    try {
      const res = await VIEW_TASK(id)
      if (res.code === RES_CODE.success) {
        await store.dispatch(ACTIONS_E.updateTask, res.data)
      }
      return Promise.resolve({ code: res.code, msg: res.msg })
    } catch (e) {
      console.log(e)
      return Promise.resolve({ code: RES_CODE.fail, msg: '' })
    }
  }
  export async function updateTaskStatus (id: number, status: number): Promise<ModuleRes> {
    try {
      const res = await UPDATE_TASK({ id, status })
      if (res.code === RES_CODE.success) {
        await store.dispatch(ACTIONS_E.updateTask, res.data)
      }
      return Promise.resolve({ code: res.code, msg: res.msg })
    } catch (e) {
      console.log(e)
      return Promise.resolve({ code: RES_CODE.fail, msg: '' })
    }
  }
}

export default Task
