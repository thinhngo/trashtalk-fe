import { combineReducers } from 'redux';
import app from 'reducers/app';
import cleanups from 'reducers/cleanups';

export default combineReducers({
  app,
  cleanups,
});
