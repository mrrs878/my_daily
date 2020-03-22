// import { BASE_API } from './index'
import { AjaxResponseI } from '@/interface/ajax'
import ajax from '@/util/ajax'

const BASE_API = 'http://localhost:8086'
const SW_API = `${BASE_API}/sw`

export const subscribable = (data: PushSubscription): Promise<AjaxResponseI<any>> => {
  return ajax.post(`${ SW_API }/sub`, data)
}
