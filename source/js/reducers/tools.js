import { Map } from 'immutable';

import {
  GET_TOOLS_START,
  GET_TOOLS_ERROR,
  GET_TOOLS_SUCCESS,
  GET_TOOL_CATEGORIES_START,
  GET_TOOL_CATEGORIES_ERROR,
  GET_TOOL_CATEGORIES_SUCCESS,
} from 'actions/cleanups';

import { Tool, ToolCategory } from 'models';

const initialState = Map({
  loading: false,
  error: null,
  tools: {},
  toolCategories: {},
});

const actionsMap = {
  // Async action
  [GET_TOOLS_START]: (state) => {
    return state.merge(Map({
      loading: true,
      error: null,
    }));
  },
  [GET_TOOLS_ERROR]: (state, action) => {
    return state.merge(Map({
      loading: false,
      error: action.error.message,
    }));
  },
  [GET_TOOLS_SUCCESS]: (state, action) => {
    return state.merge(Map({
      loading: false,
      cleanups: action.data.map(o => new Tool(o)),
    }));
  },
  // Async action
  [GET_TOOL_CATEGORIES_START]: (state) => {
    return state.merge(Map({
      loading: true,
      error: null,
    }));
  },
  [GET_TOOL_CATEGORIES_ERROR]: (state, action) => {
    return state.merge(Map({
      loading: false,
      error: action.error.message,
    }));
  },
  [GET_TOOL_CATEGORIES_SUCCESS]: (state, action) => {
    return state.merge(Map({
      loading: false,
      cleanups: action.data.map(o => new ToolCategory(o)),
    }));
  },
};

export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}
