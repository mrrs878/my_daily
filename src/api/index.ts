import { BASE_APIS, BASE_WS_APIS } from '@/constant'
import config from '@/config'

export const BASE_API = BASE_APIS[config.env]
export const BASE_WS_API = BASE_WS_APIS[config.env]
