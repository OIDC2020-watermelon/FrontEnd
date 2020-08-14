import client from '../../../lib/config/axios';

const SERVER_URL = process.env.REACT_APP_SHOW_SERVER_URL;
const TICKET_SERVER_URL = process.env.REACT_APP_RESERVATION_SERVER_URL;

export const getProductApi = ({ productId }: any): any =>
  client.get(`${SERVER_URL}/products/${productId}`);

export const getPerformanceApi = ({ productId }: any): any =>
  client.get(`${TICKET_SERVER_URL}/performance/${productId}`);

export const getPerformanceTicketApi = ({ performanceId }: any): any =>
  client.get(`${TICKET_SERVER_URL}/ticket/performance/${performanceId}`);

export const getPerformanceCommentsApi = ({ performanceId, type }: any): any =>
  client.get(`${SERVER_URL}/products/${performanceId}/comments/${type}`);

export const addPerformanceCommentsApi = ({
  performanceId,
  type,
  content,
}: any): any =>
  client.post(`${SERVER_URL}/products/${performanceId}/comments/${type}`, {
    content,
  });

export const deletePerformanceCommentsApi = ({ commentId }: any): any =>
  client.delete(`${SERVER_URL}/comments/${commentId}`);

export const updatePerformanceCommentsApi = ({ commentId }: any): any =>
  client.put(`${SERVER_URL}/comments/${commentId}`);
