import { all } from 'redux-saga/effects';
import cleanupSagas from './cleanups';

export default function* rootSaga() {
  yield all([
    cleanupSagas
  ]);
}
