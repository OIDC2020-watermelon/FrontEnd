import { applyMiddleware, createStore, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer, { rootSaga } from "./index";

const isDev = process.env.NODE_ENV === 'development';

const sagaMiddleware = createSagaMiddleware();

const enhancer = compose(
  applyMiddleware(sagaMiddleware),
  isDev &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
);

const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(rootSaga).toPromise();
export default store;
// 리덕스 개발자도구 적용