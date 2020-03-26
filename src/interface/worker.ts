import { MSG_TYPE } from '@/constant'

export interface MsgI<T> {
  type: MSG_TYPE;
  msg: T
}
