import client from '../../../lib/config/axios';

const SERVER_URL = process.env.REACT_APP_SHOW_SERVER_URL;
const TICKET_SERVER_URL = process.env.REACT_APP_RESERVATION_SERVER_URL;

export const getPerformanceApi = ({ performanceId }: any): any =>
  client.get(`${SERVER_URL}/api/performance/${performanceId}`);

export const getPerformanceTicketApi = ({ performanceId }: any): any =>
  client.get(
    `${TICKET_SERVER_URL}/reservation/ticket/performance/${performanceId}`,
  );

export const getPerformanceCommentsApi = ({ performanceId, type }: any): any =>
  client.get(`${SERVER_URL}/show/products/${performanceId}/comments/${type}`);
