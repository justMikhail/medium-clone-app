import axios from 'axios';
import {getItemFromLocalStorage} from '@/helpers/persistanceStorege';

axios.defaults.baseURL = 'https://conduit.productionready.io/api'
axios.interceptors.request.use(config => {
  const token = getItemFromLocalStorage('accessToken')
  const authorizationToken = token
    ? `Token ${token}`
    : ``
  config.headers.Authorization = authorizationToken
  return config;
})

export default axios;
