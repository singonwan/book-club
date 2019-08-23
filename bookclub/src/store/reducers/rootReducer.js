import authReducer from './authReducer'
import bookpostReducer from './bookpostReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    auth: authReducer,
    bookpost: bookpostReducer
})

export default rootReducer