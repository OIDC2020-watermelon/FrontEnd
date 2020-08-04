import {
  TAsyncMultiState,
  TAsyncState,
} from './../../../types/redux/state/stateTypes';
import { addPerformanceApi, deletePerformanceApi } from './../api/seller';
import { createReducer, ActionType } from 'typesafe-actions';
import { takeEvery } from 'redux-saga/effects';
import { produce } from 'immer';

import createAsyncSaga, {
  asyncActionCreator,
  asyncAction,
} from '../../../lib/utils/reduxUtils';

//1. 각 모듈별 함수 구분을 위한 prefix 각 모듈 파일명 + '/' 의 조합으로 구성합니다.
const prefix: string = 'seller/';

//2. 액션생성자함수에 대해서 정의합니다.
const ADD_PERFORMANCE = asyncActionCreator(`${prefix}ADD_PERFORMANCE`);
const DELETE_PERFORMANCE = asyncActionCreator(`${prefix}DELETE_PERFORMANCE`);

//3. 액션에 대해서 정의합니다.
export const addPerformance = asyncAction<any, any, string>(ADD_PERFORMANCE);
export const deletePerformance = asyncAction<any, any, string>(
  DELETE_PERFORMANCE,
);
//4. saga 비동기 관련 함수가 필요할 경우 작성 합니다. (optional) saga함수들의 모음은 최하단에 나열합니다.
const addPerformanceSaga = createAsyncSaga(addPerformance, addPerformanceApi);
const deletePerformanceSaga = createAsyncSaga(
  deletePerformance,
  deletePerformanceApi,
);

//5. 해당 리듀서의 상태 타입을 정의합니다.
export type TSellerState = {
  seller: TAsyncState<any>;
};

//6. 리듀서의 값을 정의합니다.
const initialState: TSellerState = {
  seller: {
    data: null,
    error: null,
  },
};

//7. 리듀서를 정의합니다.
export default createReducer<TSellerState>(initialState, {
  [ADD_PERFORMANCE.SUCCESS]: (
    state,
    action: ActionType<typeof addPerformance.success>,
  ) =>
    produce(state, (draft) => {
      console.log(action.payload);
      draft.seller.data = action.payload.data;
    }),
  [ADD_PERFORMANCE.FAILURE]: (
    state,
    action: ActionType<typeof addPerformance.failure>,
  ) =>
    produce(state, (draft) => {
      console.log(action.payload);
      draft.seller.error = null;
    }),
  [DELETE_PERFORMANCE.SUCCESS]: (
    state,
    action: ActionType<typeof deletePerformance.success>,
  ) =>
    produce(state, (draft) => {
      draft.seller.data = action.payload.data.data;
    }),
  [DELETE_PERFORMANCE.FAILURE]: (
    state,
    action: ActionType<typeof deletePerformance.failure>,
  ) =>
    produce(state, (draft) => {
      draft.seller.error = action.payload;
    }),
});

//8. `4`번에서 작성한 saga함수들에 대해 구독 요청에 대한 정의를 최하단에 해주도록 합니다.
export function* sellerSaga() {
  yield takeEvery(ADD_PERFORMANCE.REQUEST, addPerformanceSaga);
  yield takeEvery(DELETE_PERFORMANCE.REQUEST, deletePerformanceSaga);
}
