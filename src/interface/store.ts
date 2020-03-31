import { HabitI, TaskI, UserI, MessageI } from '@/interface/model'

export interface StateI {
  tasks: Array<TaskI>;
  habits: Array<HabitI>;
  user: UserI;
  msgCnt: number;
  message: Array<MessageI>;
}
