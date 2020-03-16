import {ADD_TASK, VIEW_TASKS, DEL_TASK} from '@/api/task'
import { TaskI } from '@/interface/model'
import { Toast } from 'vant'
import store from '@/store'
import { RES_CODE } from '@/constant'
import ToastError from "@/models/ToastError";

namespace Task {
  export async function addTask(data: TaskI) {
    try {
      const res = await ADD_TASK(data)
      if (res.code !== RES_CODE.success) throw new ToastError(res.msg)
      await store.dispatch('addTask', res.data)
      Toast(res.msg)
    } catch (e) {
      if (e instanceof ToastError) Toast(e.msg)
      console.log(e)
    }
  }
  export async function viewTasks() {
    try {
      const res = await VIEW_TASKS()
      if (res.code !== RES_CODE.success) throw new ToastError(res.msg)
      await store.dispatch('updateTasks', res.data)
    } catch (e) {
      if (e instanceof ToastError) Toast(e.msg)
      console.log(e)
    }
  }
  export async function deleteTask (id: number) {
    try {
      const res = await DEL_TASK(id)
      Toast(res.msg)
      if (res.code !== RES_CODE.success) return
      await store.dispatch('deleteTask', id)
    } catch (e) {
      if (e instanceof ToastError) Toast(e.msg)
      console.log(e)
    }
  }
}

export default Task
