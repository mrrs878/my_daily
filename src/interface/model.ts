import { HABIT_STATUS, TASK_STATUS } from '@/constant'

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

export interface UserI extends BaseModelI {
  name: string;
  role: number;
  token: string;
}

export interface HabitI extends BaseModelI {
  title: string;
  label: Array<string>;
  detail: string;
  status: HABIT_STATUS;
  alarmTime: string;
  alarmDate: Array<string>;
  validate: (...params: Array<any>) => string;
}

export interface MessageI extends BaseModelI {
  title: string;
  label: Array<string>;
  detail: string;
  status: number;
  userId: number;
}
