import { BASE_APIS } from '@/constant'
import config from '@/config'
import taskApis from './task'

export const BASE_API = BASE_APIS[config.env]
