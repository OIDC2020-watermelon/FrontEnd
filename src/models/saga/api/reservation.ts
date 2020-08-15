import client from '../../../lib/config/axios';

const SERVER_URL = process.env.REACT_APP_RESERVATION_SERVER_URL;

export const addReservationApi = ({
  availableDate,
  name,
  pay,
  startAt,
  userId,
}: any): any =>
  client.post(`${SERVER_URL}`, {
    availableDate,
    name,
    pay,
    startAt,
    userId,
  });

export const getReservationsApi = ({ userId }: any): any =>
  client.get(`${SERVER_URL}/user/${userId}`);

export const deleteReservationApi = ({ reservationId }: any): any =>
  client.delete(`${SERVER_URL}/${reservationId}`);
