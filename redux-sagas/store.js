import {
     createStore,
     applyMiddleware
} from "redux";

import rootReducer from "./root-reducer"
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";

import rootSaga from './root-saga'

const sagasMiddleware = createSagaMiddleware()

const middlewares = [logger, sagasMiddleware];

export const store = createStore(rootReducer, applyMiddleware(...middlewares))

sagasMiddleware.run(rootSaga)


