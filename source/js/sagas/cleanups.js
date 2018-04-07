import { takeLatest, call, put } from 'redux-saga/effects';

import {
  GET_CLEANUPS_START,
  GET_TOOLS_START,
  GET_TOOL_CATEGORIES_START
} from 'actions/cleanups';
import { getToolCategories, getTools } from '../actions/cleanups';

// -------- Get people

export function* getCleanups() {
  yield takeLatest(GET_TOOL_CATEGORIES_START, getToolCategories);
}

export function* getToolCategoriesWatcher() {
  yield takeLatest(GET_TOOL_CATEGORIES_START, getToolCategories);
}

export function* getToolsWatcher() {
  yield takeLatest(GET_TOOLS_START, getTools);
}

export default {
  getToolCategories,
  getTools
};
