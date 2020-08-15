import client from '../../../lib/config/axios';
const SERVER_URL = process.env.REACT_APP_RESERVATION_SERVER_URL;
const REACT_APP_SHOW_SERVER_URL = process.env.REACT_APP_SHOW_SERVER_URL;
export const getPerformanceApi = ({ productId }: any): any =>
  client.get(`${SERVER_URL}/performance/${productId}`);
export const deletePerformanceApi = ({ performanceId }: any): any =>
  client.delete(`${SERVER_URL}/performance/${performanceId}`);
export const addPerformanceApi = ({
  availableDates,
  category,
  placeId,
  releaseEndTime,
  releaseStartTime,
  title,
  artistIds,
}: any): any =>
  client.post(`${REACT_APP_SHOW_SERVER_URL}/products/`, {
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
  client.get(
    `${REACT_APP_SHOW_SERVER_URL}/products/${performanceId}/traffic?trafficType=RESERVATION`,
  );

export const getTrafficTwoApi = ({ performanceId }: any): any =>
  client.get(
    `${REACT_APP_SHOW_SERVER_URL}/products/${performanceId}/traffic?trafficType=ACCESS`,
  );
