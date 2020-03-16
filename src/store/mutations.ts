import { MutationTree } from "vuex";
import { StateI } from "@/interface/store";

const taskMutations: MutationTree<StateI> = {
  updateTask (state, payload) {
    state.tasks = payload
  }
}

export default taskMutations
