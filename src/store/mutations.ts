import { MutationTree } from "vuex";
import { StateI } from "@/interface/store";
import {TaskI} from "@/interface/model";

const taskMutations: MutationTree<StateI> = {
  updateTasks (state, payload: Array<TaskI>) {
    state.tasks = payload
  }
}

export default taskMutations
