import axios from 'axios';
import { getToken } from '../utils/authUtils';

// axios setting
const client = axios.create();
// client.defaults.withCredentials = true;
client.defaults.headers.common['X-AUTH-TOKEN'] = getToken();
// intercepter setting
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default client;
