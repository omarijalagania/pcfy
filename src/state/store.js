import { createStore } from "vuex"

export const store = createStore({
  state() {
    return {
      name: "",
    }
  },
  mutations: {
    addName(state, payload) {
      state.name = payload
    },
  },
})
