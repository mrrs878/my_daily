import { BASE_API } from './index'
import { AjaxResponseI } from '@/interface/ajax'
import ajax from '@/util/ajax'
import { UserI } from '@/interface/model'

const USER_API = `${BASE_API}/user`

export const GET_INFO = (): Promise<AjaxResponseI<UserI>> => ajax.get(USER_API)
