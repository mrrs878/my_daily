import { BASE_API } from './index'
import { AjaxResponseI, UpdateTaskStatusReqT } from '@/interface/ajax'
import ajax from '@/util/ajax'
import { HabitI } from '@/interface/model'

const HABIT_API = `${BASE_API}/habit`

export const ADD_HABIT = (data: HabitI): Promise<AjaxResponseI<string>> => ajax.post(HABIT_API, data)
export const VIEW_HABITS = (): Promise<AjaxResponseI<Array<HabitI>>> => ajax.get(HABIT_API)
export const VIEW_HABIT = (id: number): Promise<AjaxResponseI<HabitI>> => ajax.get(`${HABIT_API}/${id}`)
export const DEL_HABITS = (id: number): Promise<AjaxResponseI<HabitI>> => ajax.delete(`${HABIT_API}/${id}`)
export const UPDATE_HABIT = (data: UpdateTaskStatusReqT): Promise<AjaxResponseI<HabitI>> => ajax.put(`${HABIT_API}`, data)
