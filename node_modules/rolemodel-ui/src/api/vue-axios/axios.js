import axios from 'axios'

let customAxios = axios.create({
  baseURL: window.appConfig.API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

export default customAxios
