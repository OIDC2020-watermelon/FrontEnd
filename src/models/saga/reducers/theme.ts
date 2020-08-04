import { TAsyncState } from './../../../types/redux/state/stateTypes';
import {
  getThemeHotIssueApi,
  getThemeNEWApi,
  getThemeCommingSoonApi,
} from './../api/theme';
import { createReducer, ActionType } from 'typesafe-actions';
import { takeEvery } from 'redux-saga/effects';
import { produce } from 'immer';

import createAsyncSaga, {
  asyncActionCreator,
  asyncAction,
} from '../../../lib/utils/reduxUtils';

//1. 각 모듈별 함수 구분을 위한 prefix 각 모듈 파일명 + '/' 의 조합으로 구성합니다.
const prefix: string = 'theme/';

//2. 액션생성자함수에 대해서 정의합니다.
const GETHOTISSUE = asyncActionCreator(`${prefix}GETHOTISSUE`);
const GETNEW = asyncActionCreator(`${prefix}GETNEW`);
const GETCOMMINGSOON = asyncActionCreator(`${prefix}GETCOMMINGSOON`);

//3. 액션에 대해서 정의합니다.
export const getHotIssue = asyncAction<any, any, string>(GETHOTISSUE);
export const getNew = asyncAction<any, any, string>(GETNEW);
export const getCommingSoon = asyncAction<any, any, string>(GETCOMMINGSOON);

//4. saga 비동기 관련 함수가 필요할 경우 작성 합니다. (optional) saga함수들의 모음은 최하단에 나열합니다.
const getHotIssueSaga = createAsyncSaga(getHotIssue, getThemeHotIssueApi);
const getNewSaga = createAsyncSaga(getNew, getThemeNEWApi);
const getCommingSoonSaga = createAsyncSaga(
  getCommingSoon,
  getThemeCommingSoonApi,
);

//5. 해당 리듀서의 상태 타입을 정의합니다.
export type TMainState = {
  hotIssue: TAsyncState<any>;
  news: TAsyncState<any>;
  commingSoon: TAsyncState<any>;
};
//6. 리듀서의 값을 정의합니다.
export const initialState: TMainState = {
  hotIssue: {
    data: null,
    error: null,
  },

  news: {
    data: null,
    error: null,
  },

  commingSoon: {
    data: null,
    error: null,
  },
};

//7. 리듀서를 정의합니다.
export default createReducer<TMainState>(initialState, {
  [GETHOTISSUE.SUCCESS]: (
    state,
    action: ActionType<typeof getHotIssue.success>,
  ) =>
    produce(state, (draft) => {
      draft.hotIssue.data = action.payload.data;
    }),
  [GETHOTISSUE.FAILURE]: (
    state,
    action: ActionType<typeof getHotIssue.failure>,
  ) =>
    produce(state, (draft) => {
      draft.hotIssue.error = null;
    }),
  [GETNEW.SUCCESS]: (state, action: ActionType<typeof getNew.success>) =>
    produce(state, (draft) => {
      draft.news.data = action.payload.data.data;
    }),
  [GETNEW.FAILURE]: (state, action: ActionType<typeof getNew.failure>) =>
    produce(state, (draft) => {
      draft.news.error = action.payload;
    }),

  [GETCOMMINGSOON.SUCCESS]: (
    state,
    action: ActionType<typeof getCommingSoon.success>,
  ) =>
    produce(state, (draft) => {
      draft.commingSoon.data = action.payload.data.data;
    }),
  [GETCOMMINGSOON.FAILURE]: (
    state,
    action: ActionType<typeof getCommingSoon.failure>,
  ) =>
    produce(state, (draft) => {
      draft.commingSoon.error = action.payload;
    }),
});

//8. `4`번에서 작성한 saga함수들에 대해 구독 요청에 대한 정의를 최하단에 해주도록 합니다.
export function* themeSaga() {
  yield takeEvery(GETHOTISSUE.REQUEST, getHotIssueSaga);
  yield takeEvery(GETNEW.REQUEST, getNewSaga);
  yield takeEvery(GETCOMMINGSOON.REQUEST, getCommingSoonSaga);
}
