import { ActionTree } from 'vuex'
import { StateI } from '@/interface/store'

export enum ACTIONS_E {
  addTask = 'addTask',
  delTask = 'delTask',
  updateTask = 'updateTask',
  updateTasks = 'updateTasks'
}

const taskActions: ActionTree<StateI, StateI> = {
  [ACTIONS_E.addTask] ({ commit, state }, payload) {
    const tasks = [...state.tasks]
    tasks.push(payload)
    commit('updateTasks', tasks)
  },
  [ACTIONS_E.delTask] ({ commit, state }, payload) {
    const tasks = state.tasks.filter(item => item.ID !== payload)
    commit('updateTasks', tasks)
  },
  [ACTIONS_E.updateTask] ({ commit, state }, payload) {
    const index = state.tasks.findIndex(item => item.ID === payload.ID)
    const tasks = [...state.tasks]
    tasks[index] = payload
    commit('updateTasks', tasks)
  },
  [ACTIONS_E.updateTasks] ({ commit }, payload) {
    commit('updateTasks', payload)
  }
}

export default taskActions
