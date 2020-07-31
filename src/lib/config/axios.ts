import axios from 'axios';
import { getToken } from '../utils/authUtils';

// axios setting
const client = axios.create();
export const backUrl =
  process.env.NODE_ENV === 'production'
    ? 'http://localhost:3002'
    : 'http://localhost:3002';
client.defaults.baseURL = backUrl;
client.defaults.withCredentials = true;
client.defaults.headers.get['X-AUTH-TOKEN'] = getToken();
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
