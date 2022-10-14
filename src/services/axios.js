import { request } from "./instance"

export const getTeams = async () => {
  const response = await request.get("/teams")
  return response.data.data
}

export const getPositions = async () => {
  const response = await request.get("/positions")
  return response.data.data
}

export const getBrands = async () => {
  const response = await request.get("/brands")
  return response.data.data
}
