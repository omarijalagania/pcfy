import Vuex from "vuex"
import createPersistedState from "vuex-persistedstate"

export const store = new Vuex.Store({
  state: {
    name: "",
    surname: "",
    email: "",
    phone_number: "",
    team: "",
    position: "",
  },

  plugins: [createPersistedState()],

  mutations: {
    addName(state, payload) {
      state.name = payload
    },
    addSurname(state, payload) {
      state.surname = payload
    },
    addEmail(state, payload) {
      state.email = payload
    },
    addPhoneNumber(state, payload) {
      state.phone_number = payload
    },
    addTeam(state, payload) {
      state.team = payload
    },
    addPosition(state, payload) {
      state.position = payload
    },
  },
})
