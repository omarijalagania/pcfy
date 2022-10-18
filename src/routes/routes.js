import HomePage from "../views/HomePage"
import ClientInfo from "../views/ClientInfo"
import PcInfo from "../views/PcInfo.vue"
import AddSuccess from "../views/AddSuccess.vue"

export const routes = [
  { path: "/", component: HomePage },
  { path: "/client-info", component: ClientInfo },
  { path: "/pc-info", component: PcInfo },
  { path: "/success", component: AddSuccess },
]
