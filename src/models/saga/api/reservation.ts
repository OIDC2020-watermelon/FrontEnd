import client from '../../../lib/config/axios';
import {
  ILoginRequest,
  ILoginSuccess,
  IDeleteUserRequest,
  IUpdateUserRequest,
  IUpdateUserSuccess,
  IDeleteUserSuccess,
} from '../../../types/redux/entity/auth';

const SERVER_URL = process.env.REACT_APP_RESERVATION_SERVER_URL;

export const addReservationApi = ({
  availableDate,
  name,
  pay,
  startAt,
  userId,
}: any): any =>
  client.post(`${SERVER_URL}/api/reservation`, {
    availableDate,
    name,
    pay,
    startAt,
    userId,
  });

export const getReservationsApi = ({ userId }: any): any =>
  client.get(`${SERVER_URL}/api/reservation/user/${userId}`);

export const deleteReservationApi = ({ reservationId }: any): any =>
  client.delete(`${SERVER_URL}/api/reservation/user/${reservationId}`);
