import client from '../../../lib/config/axios';

const SERVER_URL = process.env.REACT_APP_SHOW_SERVER_URL;

export const getArtistApi = ({ artistId }: any): any =>
  client.get(`${SERVER_URL}/artists/${artistId}`);
