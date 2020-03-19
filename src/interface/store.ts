import {TaskI, UserI } from '@/interface/model'

export interface StateI {
  tasks: Array<TaskI>;
  user: UserI
}
