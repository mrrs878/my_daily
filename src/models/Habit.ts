import { HabitI } from '@/interface/model'
import { HABIT_STATUS, INVALID_NUMBER } from '@/constant'

class Habit implements HabitI {
  CreatedAt: string;
  DeletedAt: string;
  ID: number;
  UpdatedAt: string;
  alarmTime: string;
  alarmDate: Array<string>;
  detail: string;
  label: Array<string>;
  status: HABIT_STATUS;
  title: string;

  constructor (alarmTime: string, detail: string, label: Array<string>, status: HABIT_STATUS, title: string,
    alarmDate: Array<string>, id = INVALID_NUMBER, createdAt = '', deletedAt = '', updatedAt = '') {
    this.CreatedAt = createdAt
    this.DeletedAt = deletedAt
    this.ID = id
    this.UpdatedAt = updatedAt
    this.alarmTime = alarmTime
    this.detail = detail
    this.label = label
    this.status = status
    this.title = title
    this.alarmDate = alarmDate
  }

  validate () {
    if (!this.title) return '请输入习惯标题'
    if (!this.detail) return '请输入习惯详情'
    if (!this.alarmTime) return '请选择时间'
    if (this.alarmDate.length === 0) return '请选择提醒日期'
    return ''
  }
}

export default Habit
