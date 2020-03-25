import { HabitI } from '@/interface/model'

export default {
  addHabit (habit: HabitI): Promise<ModuleRes> {
    return Promise.resolve({code: 0, msg: ''})
  }
}
