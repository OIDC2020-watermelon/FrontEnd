export interface IUser {
  name: string;
  email: string;
  password?: string;
}

export interface ILoginRequest {
  email: string;
  password: string;
}

export interface ILoginSuccess {
  data: IUser;
}

export interface ILoginFailure {}

export interface ILogoutRequest {}

export interface ILogoutSuccess {}

export interface ILogoutFailure {}

export interface IGetCurrentUserRequest {}

export interface IGetCurrentUserSuccess {
  data: IUser;
}

export interface IGetCurrentUserFailure {}
