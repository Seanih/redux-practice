import counterReducer from './counter'
import loggedReducer from './isLogged'
import { combineReducers } from 'redux'

const allReducers = combineReducers({
    countState: counterReducer,
    isLoggedState: loggedReducer
})

export default allReducers