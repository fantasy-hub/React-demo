import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { count } from './count'
import { user } from './user'

const store = createStore(
    combineReducers({
        count,
        user,
    }),
    applyMiddleware(logger, thunk)
)

export default store