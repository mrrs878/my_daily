import { TASK_STATUS } from '@/constant'

interface BaseModelI {
  ID: number;
  CreatedAt: string;
  DeletedAt: string;
  UpdatedAt: string;
}

export interface TaskI extends BaseModelI {
  title: string;
  label: Array<string>;
  detail: string;
  status: TASK_STATUS;
  alarmTime: number;
  validate: (...params: Array<any>) => string;
}

export interface UserI extends BaseModelI  {
  name: string;
  role: number;
  token: string;
}
