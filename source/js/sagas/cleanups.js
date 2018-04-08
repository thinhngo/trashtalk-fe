import { takeEvery, takeLatest, call, put } from 'redux-saga/effects';

import {
  GET_CLEANUPS_ERROR,
  GET_CLEANUPS_START,
  GET_CLEANUPS_SUCCESS,
  GET_TOOLS_START,
  GET_TOOL_CATEGORIES_START,
} from 'actions/cleanups';

import api from 'api';

// -------- Get people

function createGetCleanups() {
  return function* () { // eslint-disable-line consistent-return
    try {
      const data = yield call(() => api.getCleanups());
      const action = { type: GET_CLEANUPS_SUCCESS, data };
      yield put(action);
    } catch (error) {
      const action = { type: GET_CLEANUPS_ERROR, error };
      yield put(action);
    }
  };
}

export function* getCleanupsWatcher() {
  yield takeEvery(GET_CLEANUPS_START, createGetCleanups());
}

// export function* getToolCategoriesWatcher() {
//   yield takeEvery(GET_TOOL_CATEGORIES_START, getToolCategories);
// }

// export function* getToolsWatcher() {
//   yield takeEvery(GET_TOOLS_START, getTools);
// }

export default {
  getCleanupsWatcher,
  // getToolCategoriesWatcher,
  // getToolsWatcher,
};
