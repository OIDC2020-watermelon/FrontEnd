import client from '../../../lib/config/axios';

const SERVER_URL = process.env.REACT_APP_SHOW_SERVER_URL;

export const getBookingApi = ({ category, keyword, page }: any): any =>
  client.get(
    `${SERVER_URL}/products/search?category=${category}&keyword=${keyword}&page=${page}&size=${5}`,
  );
