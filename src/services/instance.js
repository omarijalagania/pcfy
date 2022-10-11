import axios from "axios"

export const request = axios.create({
  baseURL: "https://pcfy.redberryinternship.ge/api",
})
