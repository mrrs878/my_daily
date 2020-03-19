import { BASE_API } from './index'
import { AjaxResponseI, UpdateTaskStatusReqT } from '@/interface/ajax'
import ajax from '@/util/ajax'
import { TaskI } from '@/interface/model'

const TASK_API = `${BASE_API}/task`

export const ADD_TASK = (data: TaskI): Promise<AjaxResponseI<string>> => ajax.post(TASK_API, data)
export const VIEW_TASKS = (): Promise<AjaxResponseI<Array<TaskI>>> => ajax.get(TASK_API)
export const VIEW_TASK = (id: number): Promise<AjaxResponseI<TaskI>> => ajax.get(`${TASK_API}/${id}`)
export const DEL_TASK = (id: number): Promise<AjaxResponseI<TaskI>> => ajax.delete(`${TASK_API}/${id}`)
export const UPDATE_TASK = (data: UpdateTaskStatusReqT): Promise<AjaxResponseI<TaskI>> => ajax.put(`${TASK_API}`, data)
