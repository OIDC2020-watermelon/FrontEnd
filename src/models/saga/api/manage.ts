import client from '../../../lib/config/axios';

const SERVER_URL = process.env.REACT_APP_RESERVATION_SERVER_URL;

export const getManageAPI = ({ userId }: any): any =>
  client.get(`${SERVER_URL}/reservation/user/${userId}`);
