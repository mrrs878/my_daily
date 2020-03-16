import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import mutations from './mutations'
import actions from './actions'
import { StateI } from "@/interface/store";

Vue.use(Vuex)

export default new Vuex.Store<StateI>({
  state,
  mutations,
  actions
})
