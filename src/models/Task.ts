import { TaskI } from '@/interface/model'
import { TASK_STATUS } from '@/constant'

class Task implements TaskI {
  alarmTime: number;
  detail: string;
  label: Array<string>;
  status: TASK_STATUS;
  title: string;
  CreatedAt: string;
  ID: number;

  constructor(alarmTime: number, detail: string, label: Array<string>, status: TASK_STATUS, title: string, id = -1, createAt = '') {
    this.alarmTime = alarmTime;
    this.detail = detail;
    this.label = label;
    this.status = status;
    this.title = title;
    this.ID = id
    this.CreatedAt = createAt
  }

  validate (...params: Array<any>) {
    if (!this.title) return '请输入任务标题'
    if (!this.detail) return '请输入任务详情'
    if (typeof params[0] !== "number") return '请传入正确的时间'
    if (this.alarmTime === params[0]) return '请选择提醒时间'
    return ''
  }
}

export default Task
