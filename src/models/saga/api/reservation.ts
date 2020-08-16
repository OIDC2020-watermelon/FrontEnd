import client from '../../../lib/config/axios';

const SERVER_URL = process.env.REACT_APP_RESERVATION_SERVER_URL;

export const addReservationApi = ({
  name,
  performanceId,
  ticketList,
}: any): any =>
  client.post(`${SERVER_URL}`, {
    name,
    performanceId,
    ticketList,
  });

export const getReservationsApi = ({ userId }: any): any =>
  client.get(`${SERVER_URL}/user/${userId}`);

export const deleteReservationApi = ({ reservationId }: any): any =>
  client.delete(`${SERVER_URL}/${reservationId}`);
