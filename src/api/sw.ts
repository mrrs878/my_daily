// import { BASE_API } from './index'
import { AjaxResponseI } from '@/interface/ajax'
import ajax from '@/util/ajax'

const BASE_API = 'http://192.168.5.210:3000'
const SW_API = `${BASE_API}/sw`

export const subscribable = (data: PushSubscription): Promise<AjaxResponseI<any>> =>
  ajax.post(`${ SW_API }/sub`, data)
