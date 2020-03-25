import { HabitI, TaskI, UserI } from '@/interface/model'

export interface StateI {
  tasks: Array<TaskI>;
  habits: Array<HabitI>
  user: UserI;
}
