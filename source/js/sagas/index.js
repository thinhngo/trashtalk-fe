import { all } from 'redux-saga/effects';

import cleanupSagas from 'sagas/cleanups';

export default function* rootSaga() {
  yield all([
    ...cleanupSagas
  ]);
}
