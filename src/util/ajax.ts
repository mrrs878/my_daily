import axios from 'axios'

const instance = axios.create({ timeout: 12000 })
instance.interceptors.request.use(config => {
  config.headers.Authorization = 'Bearer ' + localStorage.getItem('access_token')
  return config
})
instance.interceptors.response.use(response => {
  if (response.status !== 200) return Promise.resolve(response.status)
  return Promise.resolve(response.data)
}, (error: Error) => {
  console.log(error)
  return Promise.resolve(error)
})

export default instance
