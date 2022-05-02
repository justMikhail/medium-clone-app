import axios from '@/api/axios'

const register = credentials => {
  return axios.post('/users', {
    users: credentials
  })
}

export default {
  register,
}
