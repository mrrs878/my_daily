import { BASE_API } from './index'
import { AjaxResponseI, LoginReqI } from '@/interface/ajax'
import ajax from '@/util/ajax'
import { UserI } from '@/interface/model'

const LOGIN_API = `${BASE_API}/auth`

export const LOGIN = (data: LoginReqI): Promise<AjaxResponseI<UserI>> => ajax.post(`${ LOGIN_API }/login`, data)
export const REGISTER = (data: LoginReqI): Promise<AjaxResponseI<UserI>> => ajax.post(`${ LOGIN_API }/register`, data)
