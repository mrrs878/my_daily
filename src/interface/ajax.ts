export interface AjaxResponseI<T> {
  data: T;
  code: number;
  msg: string;
  status: number;
}

export type UpdateTaskStatusReqT = { id: number; status: number }

export type LoginReqI = { name: string; password: string }
