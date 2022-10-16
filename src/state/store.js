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
    brand: "",
    laptop_name: "",
    laptop_cpu: "",
    laptop_cpu_cores: null,
    laptop_cpu_threads: null,
    laptop_ram: null,
    laptop_hard_drive_type: "",
    laptop_purchase_date: "",
    laptop_price: null,
    laptop_state: "",
    validateClient: false,
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
    addBrand(state, payload) {
      state.brand = payload
    },
    addLaptopName(state, payload) {
      state.laptop_name = payload
    },
    addLaptopCpu(state, payload) {
      state.laptop_cpu = payload
    },
    addLaptopCpuCores(state, payload) {
      state.laptop_cpu_cores = payload
    },
    addLaptopCpuThreads(state, payload) {
      state.laptop_cpu_threads = payload
    },
    addLaptopRam(state, payload) {
      state.laptop_ram = payload
    },
    addLaptopHardDriveType(state, payload) {
      state.laptop_hard_drive_type = payload
    },
    addLaptopPurchaseDate(state, payload) {
      state.laptop_purchase_date = payload
    },
    addLaptopPrice(state, payload) {
      state.laptop_price = payload
    },
    addLaptopState(state, payload) {
      state.laptop_state = payload
    },
    validateClient(state, payload) {
      state.validateClient = payload
    },
  },
})
