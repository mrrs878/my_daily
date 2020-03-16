import { TASK_STATUS } from '@/constant'

export interface TaskI {
  ID?: number;
  CreatedAt: string;
  title: string;
  label: Array<string>;
  detail: string;
  status: TASK_STATUS;
  alarmTime: number;
  validate: (...params: Array<any>) => string
}
