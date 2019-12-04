import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { count } from './count'
import { user } from './user'
import createSagaMiddleware from "redux-saga";
import sagaEvent from './sagas'

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    combineReducers({
        count,
        user,
    }),
    // applyMiddleware(logger, thunk)
    applyMiddleware(logger, sagaMiddleware)
)

sagaMiddleware.run(sagaEvent)

export default store