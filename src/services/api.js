import axios from "axios"

const api = axios.create({
  baseURL: "https://api-solo-fertil.vercel.app",
})

export default api
