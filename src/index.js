import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import combineReducer from './store/reducers/combineReducer' 
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import {reduxFirestore, getFirestore} from 'redux-firestore'
import {reactReduxFirebase, getFirebase} from 'react-redux-firebase'
import fbConfig from './config/fbconfig'
import firebase from 'firebase'
const store = createStore(combineReducer, compose(
  applyMiddleware(thunk.withExtraArgument({
    getFirebase, getFirestore})),
reduxFirestore(firebase, fbConfig),
reactReduxFirebase(fbConfig, {useFirestoreForProfile:true, userProfile:'users', attachAuthIsReady:true})

));

// loads page only after authenticating from firebase whether logged in or logged out
store.firebaseAuthIsReady.then(()=>{
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
      <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
})


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
