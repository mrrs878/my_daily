export interface AjaxResponseI<T> {
  data: T;
  code: number;
  msg: string;
  status: number;
}

export type UpdateTaskStatusT = { id: number; status: number }
