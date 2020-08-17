import Cookies from 'js-cookie';
import { addMonths } from 'date-fns';
import { TAsyncMultiState } from './../../../types/redux/state/stateTypes';
import {
  getPerformanceApi,
  addPerformanceApi,
  deletePerformanceApi,
  getTrafficApi,
  getTrafficTwoApi,
  adminLoginApi,
  getAdminApi,
} from './../api/admin';
import { createReducer, ActionType } from 'typesafe-actions';
import { takeEvery } from 'redux-saga/effects';
import { produce } from 'immer';

import createAsyncSaga, {
  asyncActionCreator,
  asyncAction,
} from '../../../lib/utils/reduxUtils';

//1. 각 모듈별 함수 구분을 위한 prefix 각 모듈 파일명 + '/' 의 조합으로 구성합니다.
const prefix: string = 'admin/';

//2. 액션생성자함수에 대해서 정의합니다.

const ADD_PERFORMANCE = asyncActionCreator(`${prefix}ADD_PERFORMANCE`);
const DELETE_PERFORMANCE = asyncActionCreator(`${prefix}DELETE_PERFORMANCE`);
const GET_PERFORMANCE = asyncActionCreator(`${prefix}GET_PERFORMANCE`);
const GET_TRAFFIC = asyncActionCreator(`${prefix}GET_TRAFFIC`);
const GET_TRAFFICTWO = asyncActionCreator(`${prefix}GET_TRAFFICTWO`);
const ADMIN_LOGIN = asyncActionCreator(`${prefix}ADMIN_LOGIN`);
const GET_ADMIN = asyncActionCreator(`${prefix}GET_ADMIN`);

//3. 액션에 대해서 정의합니다.

export const addPerformance = asyncAction<any, any, string>(ADD_PERFORMANCE);
export const deletePerformance = asyncAction<any, any, string>(
  DELETE_PERFORMANCE,
);
export const getPerformance = asyncAction<any, any, string>(GET_PERFORMANCE);
export const getTraffic = asyncAction<any, any, string>(GET_TRAFFIC);
export const getTrafficTwo = asyncAction<any, any, string>(GET_TRAFFICTWO);
export const adminLogin = asyncAction<any, any, string>(ADMIN_LOGIN);
export const getAdmin = asyncAction<any, any, string>(GET_ADMIN);

//4. saga 비동기 관련 함수가 필요할 경우 작성 합니다. (optional) saga함수들의 모음은 최하단에 나열합니다.

const addPerformanceSaga = createAsyncSaga(addPerformance, addPerformanceApi);
const deletePerformanceSaga = createAsyncSaga(
  deletePerformance,
  deletePerformanceApi,
);
const getPerformanceSaga = createAsyncSaga(getPerformance, getPerformanceApi);

const getTrafficSaga = createAsyncSaga(getTraffic, getTrafficApi);

const getTrafficTwoSaga = createAsyncSaga(getTrafficTwo, getTrafficTwoApi);

const adminLoginSaga = createAsyncSaga(adminLogin, adminLoginApi);
const getAdminSaga = createAsyncSaga(getAdmin, getAdminApi);

//5. 해당 리듀서의 상태 타입을 정의합니다.
export type TPerformanceState = {
  performance: TAsyncMultiState<any>;
  traffic: TAsyncMultiState<any>;
  trafficTwo: TAsyncMultiState<any>;
  admin: TAsyncMultiState<any>;
};

//6. 리듀서의 값을 정의합니다.
const initialState: TPerformanceState = {
  performance: {
    data: [],
    error: null,
    issues: null,
  },
  traffic: {
    data: [],
    error: null,
    issues: null,
  },
  trafficTwo: {
    data: [],
    error: null,
    issues: null,
  },
  admin: {
    data: null,
    error: null,
    issues: null,
  },
};

//7. 리듀서를 정의합니다.
export default createReducer<TPerformanceState>(initialState, {
  [ADD_PERFORMANCE.SUCCESS]: (
    state,
    action: ActionType<typeof addPerformance.success>,
  ) =>
    produce(state, (draft) => {
      console.log(action.payload);
      draft.performance.data = action.payload.data;
    }),
  [ADD_PERFORMANCE.FAILURE]: (
    state,
    action: ActionType<typeof addPerformance.failure>,
  ) =>
    produce(state, (draft) => {
      draft.performance.error = null;
    }),
  [ADMIN_LOGIN.SUCCESS]: (
    state,
    action: ActionType<typeof adminLogin.success>,
  ) =>
    produce(state, (draft) => {
      Cookies.set('aid', action.payload.data.data, {
        expires: addMonths(new Date(), 1), // Save for 1 month
      });
      window.location.reload();
    }),
  [ADMIN_LOGIN.FAILURE]: (
    state,
    action: ActionType<typeof adminLogin.failure>,
  ) =>
    produce(state, (draft) => {
      draft.admin.error = null;
    }),
  [GET_ADMIN.SUCCESS]: (state, action: ActionType<typeof getAdmin.success>) =>
    produce(state, (draft) => {
      draft.admin.data = action.payload.data.data;
    }),
  [GET_ADMIN.FAILURE]: (state, action: ActionType<typeof getAdmin.failure>) =>
    produce(state, (draft) => {
      draft.admin.error = null;
    }),
  [DELETE_PERFORMANCE.SUCCESS]: (
    state,
    action: ActionType<typeof deletePerformance.success>,
  ) =>
    produce(state, (draft) => {
      // draft.reservation.data = action.payload.data;
      console.log('삭제 성공');
    }),
  [DELETE_PERFORMANCE.FAILURE]: (
    state,
    action: ActionType<typeof deletePerformance.failure>,
  ) =>
    produce(state, (draft) => {
      draft.performance.error = action.payload;
    }),
  [GET_PERFORMANCE.SUCCESS]: (
    state,
    action: ActionType<typeof getPerformance.success>,
  ) =>
    produce(state, (draft) => {
      draft.performance.data = action.payload.data;
    }),
  [GET_PERFORMANCE.FAILURE]: (
    state,
    action: ActionType<typeof getPerformance.failure>,
  ) =>
    produce(state, (draft) => {
      draft.performance.error = action.payload;
    }),

  [GET_TRAFFIC.SUCCESS]: (
    state,
    action: ActionType<typeof getPerformance.success>,
  ) =>
    produce(state, (draft) => {
      draft.traffic.data = action.payload.data;
    }),
  [GET_TRAFFIC.FAILURE]: (
    state,
    action: ActionType<typeof getPerformance.failure>,
  ) =>
    produce(state, (draft) => {
      draft.traffic.error = action.payload;
    }),

  [GET_TRAFFICTWO.SUCCESS]: (
    state,
    action: ActionType<typeof getPerformance.success>,
  ) =>
    produce(state, (draft) => {
      draft.trafficTwo.data = action.payload.data;
    }),
  [GET_TRAFFICTWO.FAILURE]: (
    state,
    action: ActionType<typeof getPerformance.failure>,
  ) =>
    produce(state, (draft) => {
      draft.trafficTwo.error = action.payload;
    }),
});

//8. `4`번에서 작성한 saga함수들에 대해 구독 요청에 대한 정의를 최하단에 해주도록 합니다.
export function* adminSaga() {
  yield takeEvery(ADD_PERFORMANCE.REQUEST, addPerformanceSaga);
  yield takeEvery(DELETE_PERFORMANCE.REQUEST, deletePerformanceSaga);
  yield takeEvery(GET_PERFORMANCE.REQUEST, getPerformanceSaga);
  yield takeEvery(GET_TRAFFIC.REQUEST, getTrafficSaga);
  yield takeEvery(GET_TRAFFICTWO.REQUEST, getTrafficTwoSaga);
  yield takeEvery(ADMIN_LOGIN.REQUEST, adminLoginSaga);
  yield takeEvery(GET_ADMIN.REQUEST, getAdminSaga);
}
