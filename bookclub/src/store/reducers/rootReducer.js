import authReducer from './authReducer'
import bookpostReducer from './bookpostReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'  //syncs firestore data with our state.
import { firebaseReducer } from 'react-redux-firebase' //syncs firebase info including auth

const rootReducer = combineReducers({
    auth: authReducer,
    bookpost: bookpostReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
})

export default rootReducer