import { TAsyncMultiState } from './../../../types/redux/state/stateTypes';
import {
  getPerformanceApi,
  getPerformanceTicketApi,
  getPerformanceCommentsApi,
} from './../api/performance';
import { createReducer, ActionType } from 'typesafe-actions';
import { takeEvery } from 'redux-saga/effects';
import { produce } from 'immer';

import createAsyncSaga, {
  asyncActionCreator,
  asyncAction,
} from '../../../lib/utils/reduxUtils';

const dummy = {
  id: 1,
  title: 'Bee Season',
  category: '클래식/댄스',
  runningTime: 158,
  thumbnailImgUrl: 'http://dummyimage.com/150x150.jpg/ff4444/ffffff',
  releaseStartTime: '2020-08-20T00:00:00',
  releaseEndTime: '2020-09-23T00:00:00',
  place: { id: 1, name: 'Meadow Ridge' },
  artists: [
    {
      id: 1,
      name: 'Clarissa Planque',
    },
    {
      id: 2,
      name: 'Herb Ianilli',
    },
    {
      id: 3,
      name: 'Herb Ianilli',
    },
    {
      id: 4,
      name: 'Clarissa Planque',
    },
  ],
  rrated: '15',
};

//1. 각 모듈별 함수 구분을 위한 prefix 각 모듈 파일명 + '/' 의 조합으로 구성합니다.
const prefix: string = 'performance/';

//2. 액션생성자함수에 대해서 정의합니다.
const GET_PERFORMANCE = asyncActionCreator(`${prefix}GET_PERFORMANCE`);
const GET_PERFORMANCE_TICKET = asyncActionCreator(
  `${prefix}GET_PERFORMANCE_TICKET`,
);

const GET_PERFORMANCE_COMMENTS = asyncActionCreator(
  `${prefix}GET_PERFORMANCE_COMMENTS`,
);
//3. 액션에 대해서 정의합니다.
export const getPerformance = asyncAction<any, any, string>(GET_PERFORMANCE);
export const getPerformanceTicket = asyncAction<any, any, string>(
  GET_PERFORMANCE_TICKET,
);
export const getPerformanceComments = asyncAction<any, any, string>(
  GET_PERFORMANCE_COMMENTS,
);

//4. saga 비동기 관련 함수가 필요할 경우 작성 합니다. (optional) saga함수들의 모음은 최하단에 나열합니다.
const getPerformanceSaga = createAsyncSaga(getPerformance, getPerformanceApi);
const getPerformanceTicketSaga = createAsyncSaga(
  getPerformanceTicket,
  getPerformanceTicketApi,
);
const getPerformanceCommentsSaga = createAsyncSaga(
  getPerformanceComments,
  getPerformanceCommentsApi,
);

//5. 해당 리듀서의 상태 타입을 정의합니다.
export type TPerformanceState = {
  performance: TAsyncMultiState<any>;
  ticket: any;
  comments: any;
};

//6. 리듀서의 값을 정의합니다.
const initialState: TPerformanceState = {
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
  [GET_PERFORMANCE.SUCCESS]: (
    state,
    action: ActionType<typeof getPerformance.success>,
  ) =>
    produce(state, (draft) => {
      draft.performance.data = dummy;
    }),
  [GET_PERFORMANCE.FAILURE]: (
    state,
    action: ActionType<typeof getPerformance.failure>,
  ) =>
    produce(state, (draft) => {
      draft.performance.data = dummy;
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
  COMMENT_RESET: (state) =>
    produce(state, (draft) => {
      draft.comments = null;
    }),
});

//8. `4`번에서 작성한 saga함수들에 대해 구독 요청에 대한 정의를 최하단에 해주도록 합니다.
export function* performanceSaga() {
  yield takeEvery(GET_PERFORMANCE.REQUEST, getPerformanceSaga);
  yield takeEvery(GET_PERFORMANCE_TICKET.REQUEST, getPerformanceTicketSaga);
  yield takeEvery(GET_PERFORMANCE_COMMENTS.REQUEST, getPerformanceCommentsSaga);
}
