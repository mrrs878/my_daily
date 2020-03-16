export interface AjaxResponseI<T> {
  data: T;
  msg: string,
  success: boolean,
  status: number
}
