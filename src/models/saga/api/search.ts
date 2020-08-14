import client from '../../../lib/config/axios';

const SERVER_URL = process.env.REACT_APP_SHOW_SERVER_URL;

export const getPerformanceApi = ({ keyword }: any): any =>
  client.get(`${SERVER_URL}/products/search?keyword=${keyword}`);

export const getPlaceApi = ({ keyword }: any): any =>
  client.get(`${SERVER_URL}/places/search?keyword=${keyword}`);

export const getArtistApi = ({ keyword }: any): any =>
  client.get(`${SERVER_URL}/artists/search?keyword=${keyword}`);
