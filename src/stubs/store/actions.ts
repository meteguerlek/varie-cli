import { ActionContext } from "vuex";
import RootState from "@store/rootState";
import { tempState } from "./stateInterface";

export default function($http) {
  return {
    sampleAction: (context: ActionContext<tempState, RootState>, data) => {
      return $http.post("/some-url", {
        data
      });
    }
  };
}