import authReducer from './authReducer'
import projectReducer from './projectReducer'
import {combineReducers} from 'redux'
import { firestoreReducer } from 'redux-firestore';
import {firebaseReducer} from 'react-redux-firebase'

const rootReducer = combineReducers({

    auth: authReducer,
    project: projectReducer,
    firestore: firestoreReducer,  //brings firestore databse inside firestore state.firestore is a new reducer
    firebase: firebaseReducer //we dont need to connect it like firestore, direct use in navbar
});

export default rootReducer