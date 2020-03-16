import { BASE_API } from './index'
import { AjaxResponseI } from '@/interface/ajax'
import ajax from '@/util/ajax'
import { TaskI } from '@/interface/model'
import Task from '@/models/Task'

const TASK_API = `${ BASE_API }/task`

export const ADD_TASK = (data: TaskI): Promise<AjaxResponseI<string>> => ajax.post(TASK_API, data)
export const VIEW_TASKS = (): Promise<AjaxResponseI<Array<Task>>> => ajax.get(TASK_API)
