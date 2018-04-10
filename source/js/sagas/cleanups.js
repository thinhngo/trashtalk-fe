import { takeLatest, call, put } from 'redux-saga/effects';

import {
  GET_CLEANUPS_ERROR,
  GET_CLEANUPS_START,
  GET_CLEANUPS_SUCCESS,
} from 'actions/cleanups';

import api from 'api';

function* getCleanupsStart() {
  try {
    const data = yield call(() => api.getCleanups());
    const action = { type: GET_CLEANUPS_SUCCESS, data };
    yield put(action);
  } catch (error) {
    const action = { type: GET_CLEANUPS_ERROR, error };
    yield put(action);
  }
}

export function* getCleanupsWatcher() {
  yield takeLatest(GET_CLEANUPS_START, getCleanupsStart);
}

export default [
  getCleanupsWatcher(),
];
