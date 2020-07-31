export interface IUser {
  name: string;
  email: string;
  password?: string;
}

export interface ILoginRequest {
  provider: string;
  accessToken: string;
}

export interface ILoginSuccess {
  data: any;
}

export interface ILoginFailure {}

export interface ILogoutRequest {}

export interface ILogoutSuccess {}

export interface ILogoutFailure {}

export interface IGetCurrentUserRequest {}

export interface IGetCurrentUserSuccess {
  data: any;
}

export interface IGetCurrentUserFailure {}
