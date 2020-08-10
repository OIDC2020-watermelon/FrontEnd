import client from '../../../lib/config/axios';

const SERVER_URL = process.env.REACT_APP_SHOW_SERVER_URL;

export const getPerformanceApi = ({ keyword }: any): any =>
  client.get(`${SERVER_URL}/show/products/search?keyword=${keyword}`);

export const getPlaceApi = ({ keyword }: any): any =>
  client.get(`${SERVER_URL}/show/places/search?keyword=${keyword}`);

export const getArtistApi = ({ keyword }: any): any =>
  client.get(`${SERVER_URL}/show/artists/search?keyword=${keyword}`);
