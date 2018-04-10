import { takeEvery, call, put } from 'redux-saga/effects';

import {
  GET_TOOLS_ERROR,
  GET_TOOLS_START,
  GET_TOOLS_SUCCESS,
  GET_TOOL_CATEGORIES_ERROR,
  GET_TOOL_CATEGORIES_START,
  GET_TOOL_CATEGORIES_SUCCESS,
} from 'actions/cleanups';

import api from 'api';

function* getToolsStart() {
  try {
    const data = yield call(() => api.getTools());
    const action = { type: GET_TOOLS_SUCCESS, data };
    yield put(action);
  } catch (error) {
    const action = { type: GET_TOOLS_ERROR, error };
    yield put(action);
  }
}

function* getToolCategoriesStart() {
  try {
    const data = yield call(() => api.getToolCategories());
    const action = { type: GET_TOOL_CATEGORIES_SUCCESS, data };
    yield put(action);
  } catch (error) {
    const action = { type: GET_TOOL_CATEGORIES_ERROR, error };
    yield put(action);
  }
}

export function* getToolCategoriesWatcher() {
  yield takeEvery(GET_TOOL_CATEGORIES_START, getToolCategoriesStart);
}

export function* getToolsWatcher() {
  yield takeEvery(GET_TOOLS_START, getToolsStart);
}

export default [
  getToolCategoriesWatcher(),
  getToolsWatcher(),
];
