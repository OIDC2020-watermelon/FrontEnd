import client from '../../../lib/config/axios';

const SERVER_URL = process.env.REACT_APP_SHOW_SERVER_URL;

export const getThemeHotIssueApi = ({ page, size }: any): any =>
  client.get(
    `${SERVER_URL}/show/products/themes/HOT_ISSUE?page=${page}&size=${size}`,
  );

export const getThemeNEWApi = ({ page, size }: any): any =>
  client.get(
    `${SERVER_URL}/show/products/themes/NEW?page=${page}&size=${size}`,
  );

export const getThemeCommingSoonApi = ({ page, size }: any): any =>
  client.get(
    `${SERVER_URL}/show/products/themes/COMMING_SOON?page=${page}&size=${size}`,
  );

export const getPromotionApi = ({}): any =>
  client.get(`${SERVER_URL}/show/promotions/`);
