import authReducer from './authReducer'
import bookpostReducer from './bookpostReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'  //syncs firestore data with our state.

const rootReducer = combineReducers({
    auth: authReducer,
    bookpost: bookpostReducer,
    firestore: firestoreReducer
})

export default rootReducer