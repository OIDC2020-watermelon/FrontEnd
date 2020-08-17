import axios from 'axios';
import client from '../../../lib/config/axios';
import { getToken } from '../../../lib/utils/authUtils';

const admin = axios.create();
admin.defaults.headers.common['X-AUTH-TOKEN'] = getToken('aid');

const SERVER_URL = process.env.REACT_APP_RESERVATION_SERVER_URL;
const REACT_APP_ADMIN_SERVER_URL = process.env.REACT_APP_ADMIN_SERVER_URL;
const REACT_APP_USER_SERVER_URL = process.env.REACT_APP_USER_SERVER_URL;

export const getPerformanceApi = ({ productId }: any): any =>
  client.get(`${SERVER_URL}/performance/${productId}`);
export const deletePerformanceApi = ({ performanceId }: any): any =>
  admin.delete(`${REACT_APP_ADMIN_SERVER_URL}/products/${performanceId}`);
export const addPerformanceApi = ({
  availableDates,
  category,
  placeId,
  releaseEndTime,
  releaseStartTime,
  title,
  artistIds,
}: any): any =>
  admin.post(`${REACT_APP_ADMIN_SERVER_URL}/products/`, {
    availableDates,
    category,
    placeId,
    releaseEndTime,
    releaseStartTime,
    title,
    artistIds,
  });
// 그래프

export const getTrafficApi = ({ performanceId }: any): any =>
  admin.get(
    `${REACT_APP_ADMIN_SERVER_URL}/products/${performanceId}/traffic?trafficType=ACCESS`,
  );

export const getTrafficTwoApi = ({ performanceId }: any): any =>
  admin.get(
    `${REACT_APP_ADMIN_SERVER_URL}/products/${performanceId}/traffic?trafficType=RESERVATION`,
  );

export const adminLoginApi = ({ email, password }: any): any =>
  admin.post(
    `${REACT_APP_USER_SERVER_URL}/signin?email=${email}&password=${password}`,
  );

export const getAdminApi = (): any =>
  admin.get(`${REACT_APP_USER_SERVER_URL}/user`);
