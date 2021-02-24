import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const INCREMENT = "increment";
const DECREMENT = "decrement";

export default new Vuex.Store({
  state: {
    count: 1
  },
  mutations: {
    [INCREMENT]: (state) => {
      state.count++;
    },
    [DECREMENT]: (state) => {
      if (state.count > 0) {
        state.count--;
      }
    }
  },
  actions: {
    setIncrement({ commit }) {
      commit(INCREMENT);
    },
    setDecrement({ commit }) {
      commit(DECREMENT);
    }
  }
});
