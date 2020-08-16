import { TAsyncMultiState } from './../../../types/redux/state/stateTypes';
import {
  addReservationApi,
  deleteReservationApi,
  getReservationsApi,
} from './../api/reservation';
import { createReducer, ActionType } from 'typesafe-actions';
import { takeEvery } from 'redux-saga/effects';
import { produce } from 'immer';

import createAsyncSaga, {
  asyncActionCreator,
  asyncAction,
} from '../../../lib/utils/reduxUtils';
import message from '../../../lib/utils/message';

//1. 각 모듈별 함수 구분을 위한 prefix 각 모듈 파일명 + '/' 의 조합으로 구성합니다.
const prefix: string = 'reservation/';

//2. 액션생성자함수에 대해서 정의합니다.
const ADD_RESERVATION = asyncActionCreator(`${prefix}ADD_RESERVATION`);
const DELETE_RESERVATION = asyncActionCreator(`${prefix}DELETE_RESERVATION`);
const GET_RESERVATIONS = asyncActionCreator(`${prefix}GET_RESERVATIONS`);

//3. 액션에 대해서 정의합니다.
export const addReservation = asyncAction<any, any, string>(ADD_RESERVATION);
export const deleteReservation = asyncAction<any, any, string>(
  DELETE_RESERVATION,
);
export const getReservations = asyncAction<any, any, string>(GET_RESERVATIONS);

//4. saga 비동기 관련 함수가 필요할 경우 작성 합니다. (optional) saga함수들의 모음은 최하단에 나열합니다.
const addReservationSaga = createAsyncSaga(addReservation, addReservationApi);
const deleteReservationSaga = createAsyncSaga(
  deleteReservation,
  deleteReservationApi,
);
const getReservationsSaga = createAsyncSaga(
  getReservations,
  getReservationsApi,
);

//5. 해당 리듀서의 상태 타입을 정의합니다.
export type TReservationState = {
  reservation: TAsyncMultiState<any>;
};

//6. 리듀서의 값을 정의합니다.
const initialState: TReservationState = {
  reservation: {
    data: [],
    error: null,
    issues: null,
  },
};

//7. 리듀서를 정의합니다.
export default createReducer<TReservationState>(initialState, {
  [ADD_RESERVATION.SUCCESS]: (
    state,
    action: ActionType<typeof addReservation.success>,
  ) =>
    produce(state, (draft) => {
      console.log(action.payload);
      draft.reservation.data = action.payload.data;
      window.location.reload();
      message('예매에 성공했습니다.');
    }),
  [ADD_RESERVATION.FAILURE]: (
    state,
    action: ActionType<typeof addReservation.failure>,
  ) =>
    produce(state, (draft) => {
      console.log(action.payload);
      draft.reservation.error = null;
    }),
  [DELETE_RESERVATION.SUCCESS]: (
    state,
    action: ActionType<typeof deleteReservation.success>,
  ) =>
    produce(state, (draft) => {
      // draft.reservation.data = action.payload.data;
      console.log('삭제 성공');
    }),
  [DELETE_RESERVATION.FAILURE]: (
    state,
    action: ActionType<typeof deleteReservation.failure>,
  ) =>
    produce(state, (draft) => {
      draft.reservation.error = action.payload;
    }),
  [GET_RESERVATIONS.SUCCESS]: (
    state,
    action: ActionType<typeof getReservations.success>,
  ) =>
    produce(state, (draft) => {
      draft.reservation.data = action.payload.data;
    }),
  [GET_RESERVATIONS.FAILURE]: (
    state,
    action: ActionType<typeof getReservations.failure>,
  ) =>
    produce(state, (draft) => {
      draft.reservation.error = action.payload;
    }),
});

//8. `4`번에서 작성한 saga함수들에 대해 구독 요청에 대한 정의를 최하단에 해주도록 합니다.
export function* reservationSaga() {
  yield takeEvery(ADD_RESERVATION.REQUEST, addReservationSaga);
  yield takeEvery(DELETE_RESERVATION.REQUEST, deleteReservationSaga);
  yield takeEvery(GET_RESERVATIONS.REQUEST, getReservationsSaga);
}
