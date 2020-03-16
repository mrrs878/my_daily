import { ActionTree } from "vuex";
import { StateI } from "@/interface/store";

const taskActions: ActionTree<StateI, StateI> = {
  addTask ({ commit, state }, payload) {
    const tasks = [ ...state.tasks ]
    tasks.push(payload)
    commit('updateTasks', tasks)
  },
  delTask ({ commit, state }, payload) {
    const tasks = state.tasks.filter(item => item.ID !== payload)
    commit('updateTasks', tasks)
  },
  updateTask ({ commit, state }, payload) {
    const index = state.tasks.findIndex(item => item.ID === payload.ID)
    const tasks = [ ...state.tasks ]
    tasks[index] = payload
    commit('updateTasks', tasks)
  },
  updateTasks ({ commit, state }, payload) {
    commit('updateTasks', payload)
  }
}

export default taskActions
