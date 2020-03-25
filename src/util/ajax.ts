import axios from 'axios'
import CONFIG from '@/config'

const instance = axios.create({ timeout: 12000 })
instance.interceptors.request.use(config => {
  config.headers.Authorization = 'Bearer ' + localStorage.getItem(CONFIG.tokenName)
  return config
})
instance.interceptors.response.use(response => {
  if (response.status !== 200) return Promise.resolve(response.status)
  if (response.data.msg === 'token已过期') {
    localStorage.removeItem(CONFIG.tokenName)
  }
  return Promise.resolve(response.data)
}, (error: Error) => {
  console.log(error)
  return Promise.resolve(error)
})

export default instance
