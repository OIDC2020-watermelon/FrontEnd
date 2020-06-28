import { createAsyncAction, AsyncActionCreatorBuilder } from 'typesafe-actions';
import { call, put } from 'redux-saga/effects';

type TAsyncAction = {
  REQUEST: string;
  SUCCESS: string;
  FAILURE: string;
};

type TPromiseCreatorFunction<P, T> =
  | ((payload: P) => Promise<T>)
  | (() => Promise<T>);

// ex) const ASYNC_VAL = asyncActionCreator(`${prefix}ASYNC_VAL`)
// 비동기 액션 타입명 생성기
export const asyncActionCreator = (actionName: string): TAsyncAction => {
  const asyncTypeAction: string[] = ['_REQUEST', '_SUCCESS', '_FAILURE'];

  return {
    REQUEST: actionName + asyncTypeAction[0],
    SUCCESS: actionName + asyncTypeAction[1],
    FAILURE: actionName + asyncTypeAction[2],
  };
};

// T : Request, P : Success, J : Failure 's type
// 비동기 액션 생성기
export const asyncAction = <T, P, J>(asyncAction: TAsyncAction) => {
  return createAsyncAction(
    asyncAction.REQUEST,
    asyncAction.SUCCESS,
    asyncAction.FAILURE,
  )<T, P, J>();
};

export default function createAsyncSaga<
  RequestType,
  RequestPayload,
  SuccessType,
  SuccessPayload,
  FailureType,
  FailurePayload
>(
  asyncAction: AsyncActionCreatorBuilder<
    [RequestType, [RequestPayload, undefined]],
    [SuccessType, [SuccessPayload, undefined]],
    [FailureType, [FailurePayload, undefined]]
  >,
  asyncFunction: TPromiseCreatorFunction<RequestPayload, SuccessPayload>,
  successFunc?: any,
  failureFunc?: any,
) {
  return function* saga(action: ReturnType<typeof asyncAction.request>) {
    try {
      const result: SuccessPayload = yield call(
        asyncFunction,
        (action as any).payload,
      ); // api 호출 이때 파라미터는 request()에서 받은 값으로 전달
      console.log('result : ', result);
      yield put(asyncAction.success(result)); // success  액션함수를 dispatch 하여 api결과값 반환
      if (successFunc) {
        yield call(successFunc, result); // 성공 이후의 추가 액션이 필요할 경우 이에대한  callback 선언
      }
    } catch (e) {
      yield put(asyncAction.failure(e)); // failure  액션함수를 dispatch 하여 error 반환
      if (failureFunc) {
        yield call(successFunc, e); // 실패 이후의 추가 액션이 필요할 경우 이에대한  callback 선언
      }
    }
  };
}
