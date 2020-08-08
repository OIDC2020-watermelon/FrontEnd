export interface IUser {
  dateOfBirth?: string;
  gender?: string;
  name?: string;
  phoneNo?: string;
  roles: [string];
  uid: string;
}

export interface ILoginRequest {
  provider: string;
  accessToken: string;
}

export interface ILoginSuccess {
  data: any;
}

export interface ILoginFailure {}

// get user

export interface IGetCurrentUserRequest {}

export interface IGetCurrentUserSuccess {
  data: any;
}

export interface IGetCurrentUserFailure {}

// update
export interface IUpdateUserRequest {
  name?: string;
  phoneNo?: string;
  gender?: string;
  dateOfBirth?: string;
}

export interface IUpdateUserSuccess {
  data: any;
}

export interface IUpdateUserFailure {}

// delete
export interface IDeleteUserRequest {}

export interface IDeleteUserSuccess {
  data: any;
}

export interface IDeleteUserFailure {}
