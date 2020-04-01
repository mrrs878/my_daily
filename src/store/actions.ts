import { ActionTree } from 'vuex'
import { StateI } from '@/interface/store'
import { MUTATIONS_E } from './mutations'

export enum ACTIONS_E {
  addTask = 'addTask',
  delTask = 'delTask',
  updateTask = 'updateTask',
  updateTasks = 'updateTasks',
  updateHabit = 'updateHabit',
  updateHabits = 'updateHabits',
  addHabit = 'addHabit',
  updateUser = 'updateUser',
  updateMsgCnt = 'updateMsgCnt',
  addMessage = 'addMessage',
  updateMessages = 'updateMessages',
  updateMessage = 'updateMessage',
  delMessage = 'delMessage'
}

const taskActions: ActionTree<StateI, StateI> = {
  [ACTIONS_E.addTask] ({ commit, state }, payload) {
    const tasks = [...state.tasks]
    tasks.push(payload)
    commit(MUTATIONS_E.updateTasks, tasks)
  },
  [ACTIONS_E.delTask] ({ commit, state }, payload) {
    const tasks = state.tasks.filter(item => item.ID !== payload)
    commit(MUTATIONS_E.updateTasks, tasks)
  },
  [ACTIONS_E.updateTask] ({ commit, state }, payload) {
    const index = state.tasks.findIndex(item => item.ID === payload.ID)
    const tasks = [...state.tasks]
    tasks[index] = payload
    commit(MUTATIONS_E.updateTasks, tasks)
  },
  [ACTIONS_E.updateTasks] ({ commit }, payload) {
    commit(MUTATIONS_E.updateTasks, payload)
  },
  [ACTIONS_E.updateUser] ({ commit }, payload) {
    commit(MUTATIONS_E.updateUser, payload)
  },
  [ACTIONS_E.addHabit] ({ commit, state }, payload) {
    const habits = [...state.habits]
    habits.push(payload)
    commit(MUTATIONS_E.updateHabits, habits)
  },
  [ACTIONS_E.updateHabit] ({ commit, state }, payload) {
    const index = state.habits.findIndex(item => item.ID === payload.ID)
    const habits = [...state.habits]
    habits[index] = payload
    commit(MUTATIONS_E.updateHabits, habits)
  },
  [ACTIONS_E.updateHabits] ({ commit }, payload) {
    commit(MUTATIONS_E.updateHabits, payload)
  },
  [ACTIONS_E.updateMsgCnt] ({ commit }, payload) {
    commit(MUTATIONS_E.updateMsgCnt, payload)
  },
  [ACTIONS_E.updateMessages] ({ commit }, payload) {
    commit(MUTATIONS_E.updateMessages, payload)
  },
  [ACTIONS_E.addMessage] ({ commit, state }, payload) {
    const message = [...state.message]
    message.push(payload)
    commit(MUTATIONS_E.updateMessages, message)
  },
  [ACTIONS_E.updateMessage] ({ commit, state }, payload) {
    const index = state.message.findIndex(item => item.ID === payload.ID)
    const message = [...state.message]
    message[index] = payload
    commit(MUTATIONS_E.updateMessages, message)
  },
  [ACTIONS_E.delMessage] ({ commit, state }, payload) {
    const message = state.message.filter(item => item.ID !== payload)
    commit(MUTATIONS_E.updateMessages, message)
  }
}

export default taskActions
