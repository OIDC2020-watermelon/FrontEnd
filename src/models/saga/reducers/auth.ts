import { createReducer, ActionType } from 'typesafe-actions';
import { takeEvery } from 'redux-saga/effects';
import { produce } from 'immer';

import createAsyncSaga, {
  asyncActionCreator,
  asyncAction,
} from '../../../lib/utils/reduxUtils';
import * as TAuth from '../../../types/redux/entity/auth';
import { TAsyncState } from '../../../types/redux/state/stateTypes';
import { loginApi, logoutApi, getCurrentUserApi } from '../api/auth';
import { saveTokenInCookies } from '../../hook/providers/helper';

//1. 각 모듈별 함수 구분을 위한 prefix 각 모듈 파일명 + '/' 의 조합으로 구성합니다.
const prefix: string = 'auth/';

//2. 액션생성자함수에 대해서 정의합니다.
const LOG_IN = asyncActionCreator(`${prefix}LOG_IN`);
const LOG_OUT = asyncActionCreator(`${prefix}LOG_OUT`);
const GET_CURRENT_USER = asyncActionCreator(`${prefix}GET_CURRENT_USER`);

//3. 액션에 대해서 정의합니다.
export const login = asyncAction<
  TAuth.ILoginRequest,
  TAuth.ILoginSuccess,
  string
>(LOG_IN);
export const logout = asyncAction<
  TAuth.ILogoutRequest,
  TAuth.ILogoutSuccess,
  string
>(LOG_OUT);
export const getCurrentUser = asyncAction<
  TAuth.IGetCurrentUserRequest,
  TAuth.IGetCurrentUserSuccess,
  string
>(GET_CURRENT_USER);

//4. saga 비동기 관련 함수가 필요할 경우 작성 합니다. (optional) saga함수들의 모음은 최하단에 나열합니다.
const loginSaga = createAsyncSaga(login, loginApi);
const logoutSaga = createAsyncSaga(logout, logoutApi);
const getCurrentUserSaga = createAsyncSaga(getCurrentUser, getCurrentUserApi);

//5. 해당 리듀서의 상태 타입을 정의합니다.
export type TAuthState = {
  auth: TAsyncState<TAuth.IUser>;
};

//6. 리듀서의 값을 정의합니다.
const initialState: TAuthState = {
  auth: {
    data: null,
    error: null,
  },
};

//7. 리듀서를 정의합니다.
export default createReducer<TAuthState>(initialState, {
  [LOG_IN.SUCCESS]: (state, action: ActionType<typeof login.success>) =>
    produce(state, (draft) => {
      draft.auth.data = action.payload.data;
      saveTokenInCookies(action.payload.data.data);
      window.location.reload();
    }),
  [LOG_IN.FAILURE]: (state, action: ActionType<typeof login.failure>) =>
    produce(state, (draft) => {
      draft.auth.error = action.payload;
    }),
  [LOG_OUT.SUCCESS]: (state, action: ActionType<typeof logout.success>) =>
    produce(state, (draft) => {
      draft.auth.data = null;
    }),
  [LOG_OUT.FAILURE]: (state, action: ActionType<typeof logout.failure>) =>
    produce(state, (draft) => {
      draft.auth.error = action.payload;
    }),
  [GET_CURRENT_USER.SUCCESS]: (
    state,
    action: ActionType<typeof getCurrentUser.success>,
  ) =>
    produce(state, (draft) => {
      draft.auth.data = action.payload.data.data;
    }),
  [GET_CURRENT_USER.FAILURE]: (
    state,
    action: ActionType<typeof getCurrentUser.failure>,
  ) =>
    produce(state, (draft) => {
      draft.auth.error = action.payload;
    }),
});

//8. `4`번에서 작성한 saga함수들에 대해 구독 요청에 대한 정의를 최하단에 해주도록 합니다.
export function* authSaga() {
  yield takeEvery(LOG_IN.REQUEST, loginSaga);
  yield takeEvery(LOG_OUT.REQUEST, logoutSaga);
  yield takeEvery(GET_CURRENT_USER.REQUEST, getCurrentUserSaga);
}
