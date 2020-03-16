export interface AjaxResponseI<T> {
  data: T;
  code: number;
  msg: string,
  status: number
}
