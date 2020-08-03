import client from '../../../lib/config/axios';
import {
  ILoginRequest,
  ILoginSuccess,
  IGetCurrentUserRequest,
  IGetCurrentUserSuccess,
  IDeleteUserRequest,
  IUpdateUserRequest,
  IUpdateUserSuccess,
  IDeleteUserSuccess,
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
export const updateUserApi = ({
  name,
  phoneNo,
  dateOfBirth,
  gender,
}: IUpdateUserRequest): Promise<IUpdateUserSuccess> =>
  client.put(`${SERVER_URL}/auth/user`, { name, phoneNo, dateOfBirth, gender });

// eslint-disable-next-line
export const deleteUserApi = ({}: IDeleteUserRequest): Promise<
  IDeleteUserSuccess
> => client.delete(`${SERVER_URL}/auth/user`);

// eslint-disable-next-line
export const getCurrentUserApi = ({}: IGetCurrentUserRequest): Promise<
  IGetCurrentUserSuccess
> => client.get(`${SERVER_URL}/auth/user`);
