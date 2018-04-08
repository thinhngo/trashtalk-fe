import { takeEvery, takeLatest, call, put } from 'redux-saga/effects';

import {
  GET_CLEANUPS_START,
  GET_TOOLS_START,
  GET_TOOL_CATEGORIES_START
} from 'actions/cleanups';
import { getCleanups, getToolCategories, getTools } from '../actions/cleanups';

// -------- Get people

export function* getCleanupsWatcher() {
  yield takeEvery(GET_CLEANUPS_START, getCleanups);
}

export function* getToolCategoriesWatcher() {
  yield takeEvery(GET_TOOL_CATEGORIES_START, getToolCategories);
}

export function* getToolsWatcher() {
  yield takeEvery(GET_TOOLS_START, getTools);
}

export default {
  getCleanupsWatcher,
  getToolCategoriesWatcher,
  getToolsWatcher
};
