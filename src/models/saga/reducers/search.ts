import { TAsyncMultiState } from './../../../types/redux/state/stateTypes';
import { getPerformanceApi, getPlaceApi, getArtistApi } from './../api/search';
import { createReducer, ActionType } from 'typesafe-actions';
import { takeEvery } from 'redux-saga/effects';
import { produce } from 'immer';

import createAsyncSaga, {
  asyncActionCreator,
  asyncAction,
} from '../../../lib/utils/reduxUtils';

//1. 각 모듈별 함수 구분을 위한 prefix 각 모듈 파일명 + '/' 의 조합으로 구성합니다.
const prefix: string = 'search/';

//2. 액션생성자함수에 대해서 정의합니다.
const GET_PERFORMANCE = asyncActionCreator(`${prefix}GET_PERFORMANCE`);
const GET_PLACE = asyncActionCreator(`${prefix}GET_PLACE`);
const GET_ARTIST = asyncActionCreator(`${prefix}GET_ARTIST`);

//3. 액션에 대해서 정의합니다.
export const getPerformances = asyncAction<any, any, string>(GET_PERFORMANCE);
export const getPlaces = asyncAction<any, any, string>(GET_PLACE);
export const getArtists = asyncAction<any, any, string>(GET_ARTIST);

//4. saga 비동기 관련 함수가 필요할 경우 작성 합니다. (optional) saga함수들의 모음은 최하단에 나열합니다.
const getPerformanceSaga = createAsyncSaga(getPerformances, getPerformanceApi);
const getPlaceSaga = createAsyncSaga(getPlaces, getPlaceApi);
const petArtistSaga = createAsyncSaga(getArtists, getArtistApi);

//5. 해당 리듀서의 상태 타입을 정의합니다.
export type TSearchState = {
  performance: TAsyncMultiState<any>;
  place: TAsyncMultiState<any>;
  artist: TAsyncMultiState<any>;
};

//6. 리듀서의 값을 정의합니다.
const initialState: TSearchState = {
  performance: {
    data: [],
    error: null,
    issues: null,
  },

  place: {
    data: [],
    error: null,
    issues: null,
  },

  artist: {
    data: [],
    error: null,
    issues: null,
  },
};

//7. 리듀서를 정의합니다.
export default createReducer<TSearchState>(initialState, {
  [GET_PERFORMANCE.SUCCESS]: (
    state,
    action: ActionType<typeof getPerformances.success>,
  ) =>
    produce(state, (draft) => {
      console.log(action.payload);
      draft.performance.data = action.payload.data;
    }),
  [GET_PERFORMANCE.FAILURE]: (
    state,
    action: ActionType<typeof getPerformances.failure>,
  ) =>
    produce(state, (draft) => {
      console.log(action.payload);
      draft.performance.error = null;
    }),
  [GET_PLACE.SUCCESS]: (state, action: ActionType<typeof getPlaces.success>) =>
    produce(state, (draft) => {
      draft.place.data = action.payload.data;
    }),
  [GET_PLACE.FAILURE]: (state, action: ActionType<typeof getPlaces.failure>) =>
    produce(state, (draft) => {
      draft.place.error = action.payload;
    }),
  [GET_ARTIST.SUCCESS]: (
    state,
    action: ActionType<typeof getArtists.success>,
  ) =>
    produce(state, (draft) => {
      draft.artist.data = action.payload.data;
    }),
  [GET_ARTIST.FAILURE]: (
    state,
    action: ActionType<typeof getArtists.failure>,
  ) =>
    produce(state, (draft) => {
      draft.artist.error = action.payload;
    }),
});

//8. `4`번에서 작성한 saga함수들에 대해 구독 요청에 대한 정의를 최하단에 해주도록 합니다.
export function* searchSaga() {
  yield takeEvery(GET_PERFORMANCE.REQUEST, getPerformanceSaga);
  yield takeEvery(GET_PLACE.REQUEST, getPlaceSaga);
  yield takeEvery(GET_ARTIST.REQUEST, petArtistSaga);
}
