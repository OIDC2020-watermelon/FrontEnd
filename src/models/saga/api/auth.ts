import client from '../../../lib/config/axios';
import {
  ILoginRequest,
  ILoginSuccess,
  ILogoutRequest,
  ILogoutSuccess,
  IGetCurrentUserRequest,
  IGetCurrentUserSuccess,
} from '../../../types/redux/entity/auth';

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export const loginApi = ({
  email,
  password,
}: ILoginRequest): Promise<ILoginSuccess> =>
  client.post(`${SERVER_URL}/login`, {
    email,
    password,
  });

// eslint-disable-next-line
export const logoutApi = ({}: ILogoutRequest): Promise<ILogoutSuccess> =>
  client.get(`${SERVER_URL}/logout`);

// eslint-disable-next-line
export const getCurrentUserApi = ({}: IGetCurrentUserRequest): Promise<
  IGetCurrentUserSuccess
> => client.get(`${SERVER_URL}/user`);
