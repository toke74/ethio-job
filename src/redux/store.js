import {createStore, applyMiddleware, compose} from 'redux';
import {reactReduxFirebase, getFirebase} from 'react-redux-firebase';
import {reduxFirestore, getFirestore} from 'redux-firestore';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import firebase from '../firebase/firebase';

const rrfConfig = {
  userProfile: 'users',
  attachAuthIsReady: true,
  useFirestoreForProfile: true,
  updateProfileOnLogin: false,
};

const middleware = [thunk.withExtraArgument ({getFirebase, getFirestore})];

const store = createStore (
  rootReducer,
  compose (
    applyMiddleware (...middleware),
    reactReduxFirebase (firebase, rrfConfig),
    reduxFirestore (firebase),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__ ()
  )
);

export default store;
