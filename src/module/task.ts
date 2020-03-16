import {ADD_TASK, VIEW_TASKS} from '@/api/task'
import { TaskI } from '@/interface/model'
import { Toast } from 'vant'

namespace Task {
  export async function addTask(data: TaskI) {
    try {
      const res = await ADD_TASK(data)
      Toast(res.msg)
    } catch (e) {
      console.log(e)
    }
  }
  export async function viewTasks() {
    try {
      const res = await VIEW_TASKS()
      console.log(res)
    } catch (e) {
      console.log(e)
    }
  }
}

export default Task
