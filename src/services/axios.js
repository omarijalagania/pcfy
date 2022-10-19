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

export const getCpus = async () => {
  const response = await request.get("/cpus")
  return response.data.data
}

export const addLaptop = async (laptop) => {
  const response = await request.post("/laptop/create", laptop, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  })
  return response.data.data
}

export const getLaptops = async () => {
  const response = await request.get(
    `/laptops?token=${process.env.VUE_APP_TOKEN}`,
  )
  return response.data.data
}

export const getOneLaptop = async (data) => {
  const response = await request.get(`/laptop/${data.id}?token=${data.token}`)
  return response.data.data
}
