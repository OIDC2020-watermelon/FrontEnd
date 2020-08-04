import client from '../../../lib/config/axios';

const SERVER_URL = process.env.REACT_APP_RESERVATION_SERVER_URL;

export const addPerformanceApi = ({
  availableDate,
  duration,
  productId,
  session,
  sprice,
  startAt,
  vipPrice,
}: any): any =>
  client.post(`${SERVER_URL}/api/performance`, {
    availableDate,
    duration,
    productId,
    session,
    sprice,
    startAt,
    vipPrice,
  });

export const deletePerformanceApi = ({ performanceId }: any): any =>
  client.delete(`${SERVER_URL}/api/performance/${performanceId}`);
