import {combineReducers} from 'redux';
import jobReducer from './jobReducer';
import {firebaseReducer} from 'react-redux-firebase';
import {firestoreReducer} from 'redux-firestore';

export default combineReducers ({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  job: jobReducer,
});
