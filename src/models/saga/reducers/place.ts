import { getPlaceApi } from './../api/place';
import { TAsyncState } from './../../../types/redux/state/stateTypes';
import { createReducer, ActionType } from 'typesafe-actions';
import { takeEvery } from 'redux-saga/effects';
import { produce } from 'immer';

import createAsyncSaga, {
  asyncActionCreator,
  asyncAction,
} from '../../../lib/utils/reduxUtils';

//1. 각 모듈별 함수 구분을 위한 prefix 각 모듈 파일명 + '/' 의 조합으로 구성합니다.
const prefix: string = 'place/';

//2. 액션생성자함수에 대해서 정의합니다.
const GET_PLACE = asyncActionCreator(`${prefix}GET_PLACE`);

//3. 액션에 대해서 정의합니다.
export const getPlace = asyncAction<any, any, string>(GET_PLACE);

//4. saga 비동기 관련 함수가 필요할 경우 작성 합니다. (optional) saga함수들의 모음은 최하단에 나열합니다.
const getPlaceSaga = createAsyncSaga(getPlace, getPlaceApi);

//5. 해당 리듀서의 상태 타입을 정의합니다.
export type TPlaceState = {
  place: TAsyncState<any>;
};

//6. 리듀서의 값을 정의합니다.
const initialState: TPlaceState = {
  place: {
    data: null,
    error: null,
  },
};

//7. 리듀서를 정의합니다.
export default createReducer<TPlaceState>(initialState, {
  [GET_PLACE.SUCCESS]: (state, action: ActionType<typeof getPlace.success>) =>
    produce(state, (draft) => {
      console.log(action.payload);
      draft.place.data = action.payload.data;
    }),
  [GET_PLACE.FAILURE]: (state, action: ActionType<typeof getPlace.failure>) =>
    produce(state, (draft) => {
      console.log(action.payload);
      draft.place.error = null;
    }),
});

//8. `4`번에서 작성한 saga함수들에 대해 구독 요청에 대한 정의를 최하단에 해주도록 합니다.
export function* placeSaga() {
  yield takeEvery(GET_PLACE.REQUEST, getPlaceSaga);
}
