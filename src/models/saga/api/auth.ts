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
  provider,
  accessToken,
}: ILoginRequest): Promise<ILoginSuccess> =>
  client.post(
    `${SERVER_URL}/auth/signin/${provider}?accessToken=${accessToken}`,
  );

// eslint-disable-next-line
export const logoutApi = ({}: ILogoutRequest): Promise<ILogoutSuccess> =>
  client.get(`${SERVER_URL}/logout`);

// eslint-disable-next-line
export const getCurrentUserApi = ({}: IGetCurrentUserRequest): Promise<
  IGetCurrentUserSuccess
> => client.get(`${SERVER_URL}/auth/user`);
