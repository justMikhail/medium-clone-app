import axios from '@/api/axios'

const getAllTags = () => {
  return axios.get('/tags').then(response => response.data.tags)
}

export default {
  getAllTags,
}
