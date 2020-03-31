import { MutationTree } from 'vuex'
import { StateI } from '@/interface/store'
import { HabitI, MessageI, TaskI, UserI } from '@/interface/model'

export enum MUTATIONS_E {
  updateTasks = 'updateTasks',
  updateUser = 'updateUser',
  updateHabits = 'updateHabits',
  updateMsgCnt = 'updateMsgCnt',
  updateMessages = 'updateMessages'
}

const taskMutations: MutationTree<StateI> = {
  [MUTATIONS_E.updateTasks] (state, payload: Array<TaskI>) {
    state.tasks = payload
  },
  [MUTATIONS_E.updateHabits] (state, payload: Array<HabitI>) {
    state.habits = payload
  },
  [MUTATIONS_E.updateUser] (state, payload: UserI) {
    state.user = payload
  },
  [MUTATIONS_E.updateMsgCnt] (state, payload: number) {
    state.msgCnt = payload
  },
  [MUTATIONS_E.updateMessages] (state, payload: Array<MessageI>) {
    state.message = payload
  }
}

export default taskMutations
