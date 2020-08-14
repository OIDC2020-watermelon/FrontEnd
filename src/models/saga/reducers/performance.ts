import { TAsyncMultiState } from './../../../types/redux/state/stateTypes';
import {
  getPerformanceApi,
  getPerformanceTicketApi,
  getPerformanceCommentsApi,
  deletePerformanceCommentsApi,
  updatePerformanceCommentsApi,
  addPerformanceCommentsApi,
  getProductApi,
} from './../api/performance';
import { createReducer, ActionType } from 'typesafe-actions';
import { takeEvery } from 'redux-saga/effects';
import { produce } from 'immer';

import createAsyncSaga, {
  asyncActionCreator,
  asyncAction,
} from '../../../lib/utils/reduxUtils';
import message from '../../../lib/utils/message';
import { useHistory } from 'react-router-dom';

//1. 각 모듈별 함수 구분을 위한 prefix 각 모듈 파일명 + '/' 의 조합으로 구성합니다.
const prefix: string = 'performance/';

//2. 액션생성자함수에 대해서 정의합니다.
const GET_PRODUCT = asyncActionCreator(`${prefix}GET_PRODUCT`);
const GET_PERFORMANCE = asyncActionCreator(`${prefix}GET_PERFORMANCE`);
const GET_PERFORMANCE_TICKET = asyncActionCreator(
  `${prefix}GET_PERFORMANCE_TICKET`,
);
const GET_PERFORMANCE_COMMENTS = asyncActionCreator(
  `${prefix}GET_PERFORMANCE_COMMENTS`,
);
const UPDATE_PERFORMANCE_COMMENT = asyncActionCreator(
  `${prefix}UPDATE_PERFORMANCE_COMMENT`,
);
const DELETE_PERFORMANCE_COMMENT = asyncActionCreator(
  `${prefix}DELETE_PERFORMANCE_COMMENT`,
);
const ADD_PERFORMANCE_COMMENT = asyncActionCreator(
  `${prefix}ADD_PERFORMANCE_COMMENT`,
);
//3. 액션에 대해서 정의합니다.
export const getProduct = asyncAction<any, any, string>(GET_PRODUCT);
export const getPerformance = asyncAction<any, any, string>(GET_PERFORMANCE);
export const getPerformanceTicket = asyncAction<any, any, string>(
  GET_PERFORMANCE_TICKET,
);
export const getPerformanceComments = asyncAction<any, any, string>(
  GET_PERFORMANCE_COMMENTS,
);
export const addPerformanceComment = asyncAction<any, any, string>(
  ADD_PERFORMANCE_COMMENT,
);
export const deletePerformanceComment = asyncAction<any, any, string>(
  DELETE_PERFORMANCE_COMMENT,
);
export const updatePerformanceComment = asyncAction<any, any, string>(
  UPDATE_PERFORMANCE_COMMENT,
);

//4. saga 비동기 관련 함수가 필요할 경우 작성 합니다. (optional) saga함수들의 모음은 최하단에 나열합니다.
const getProductSaga = createAsyncSaga(getProduct, getProductApi);
const getPerformanceSaga = createAsyncSaga(getPerformance, getPerformanceApi);
const getPerformanceTicketSaga = createAsyncSaga(
  getPerformanceTicket,
  getPerformanceTicketApi,
);
const getPerformanceCommentsSaga = createAsyncSaga(
  getPerformanceComments,
  getPerformanceCommentsApi,
);
const addPerformanceCommentSaga = createAsyncSaga(
  addPerformanceComment,
  addPerformanceCommentsApi,
);
const deletePerformanceCommentSaga = createAsyncSaga(
  deletePerformanceComment,
  deletePerformanceCommentsApi,
);
const updatePerformanceCommentSaga = createAsyncSaga(
  updatePerformanceComment,
  updatePerformanceCommentsApi,
);

//5. 해당 리듀서의 상태 타입을 정의합니다.
export type TPerformanceState = {
  product: {
    data: any;
    error: any;
  };
  performance: TAsyncMultiState<any>;
  ticket: any;
  comments: any;
};

//6. 리듀서의 값을 정의합니다.
const initialState: TPerformanceState = {
  product: {
    data: null,
    error: null,
  },
  performance: {
    data: null,
    error: null,
    issues: null,
  },
  ticket: null,
  comments: null,
};

//7. 리듀서를 정의합니다.
export default createReducer<TPerformanceState>(initialState, {
  [GET_PRODUCT.SUCCESS]: (
    state,
    action: ActionType<typeof getPerformance.success>,
  ) =>
    produce(state, (draft) => {
      draft.product.data = action.payload.data;
    }),
  [GET_PRODUCT.FAILURE]: (
    state,
    action: ActionType<typeof getPerformance.failure>,
  ) =>
    produce(state, (draft) => {
      message('존재하지 않는 상품입니다.');
      draft.product.error = null;
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
      draft.performance.error = null;
    }),
  [GET_PERFORMANCE_TICKET.SUCCESS]: (
    state,
    action: ActionType<typeof getPerformance.success>,
  ) =>
    produce(state, (draft) => {
      draft.ticket = action.payload.data;
    }),
  [GET_PERFORMANCE_TICKET.FAILURE]: (
    state,
    action: ActionType<typeof getPerformance.failure>,
  ) => produce(state, (draft) => {}),
  [GET_PERFORMANCE_COMMENTS.SUCCESS]: (
    state,
    action: ActionType<typeof getPerformance.success>,
  ) =>
    produce(state, (draft) => {
      draft.comments = action.payload.data;
    }),
  [GET_PERFORMANCE_COMMENTS.FAILURE]: (
    state,
    action: ActionType<typeof getPerformance.failure>,
  ) => produce(state, (draft) => {}),
  [DELETE_PERFORMANCE_COMMENT.SUCCESS]: (
    state,
    action: ActionType<typeof getPerformance.success>,
  ) =>
    produce(state, (draft) => {
      // draft.comments = action.payload.data;
    }),
  [DELETE_PERFORMANCE_COMMENT.FAILURE]: (
    state,
    action: ActionType<typeof getPerformance.failure>,
  ) => produce(state, (draft) => {}),
  [ADD_PERFORMANCE_COMMENT.SUCCESS]: (
    state,
    action: ActionType<typeof getPerformance.success>,
  ) =>
    produce(state, (draft) => {
      // draft.comments = action.payload.data;
    }),
  [ADD_PERFORMANCE_COMMENT.FAILURE]: (
    state,
    action: ActionType<typeof getPerformance.failure>,
  ) => produce(state, (draft) => {}),
  [UPDATE_PERFORMANCE_COMMENT.SUCCESS]: (
    state,
    action: ActionType<typeof getPerformance.success>,
  ) =>
    produce(state, (draft) => {
      draft.comments?.push(action.payload.data);
    }),
  [UPDATE_PERFORMANCE_COMMENT.FAILURE]: (
    state,
    action: ActionType<typeof getPerformance.failure>,
  ) => produce(state, (draft) => {}),
  COMMENT_RESET: (state) =>
    produce(state, (draft) => {
      draft.comments = null;
    }),
});

//8. `4`번에서 작성한 saga함수들에 대해 구독 요청에 대한 정의를 최하단에 해주도록 합니다.
export function* performanceSaga() {
  yield takeEvery(GET_PRODUCT.REQUEST, getProductSaga);
  yield takeEvery(GET_PERFORMANCE.REQUEST, getPerformanceSaga);
  yield takeEvery(GET_PERFORMANCE_TICKET.REQUEST, getPerformanceTicketSaga);
  yield takeEvery(GET_PERFORMANCE_COMMENTS.REQUEST, getPerformanceCommentsSaga);
  yield takeEvery(ADD_PERFORMANCE_COMMENT.REQUEST, addPerformanceCommentSaga);
  yield takeEvery(
    DELETE_PERFORMANCE_COMMENT.REQUEST,
    deletePerformanceCommentSaga,
  );
  yield takeEvery(
    UPDATE_PERFORMANCE_COMMENT.REQUEST,
    updatePerformanceCommentSaga,
  );
}
