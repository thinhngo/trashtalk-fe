import { Map } from 'immutable';

import {
  GET_CLEANUPS_START,
  GET_CLEANUPS_ERROR,
  GET_CLEANUPS_SUCCESS
} from 'actions/cleanups';

const initialState = Map({
  loading: false,
  error: null,
  cleanups: null,
  currentCleanup: null
});

const actionsMap = {
  // Async action
  [GET_CLEANUPS_START]: (state) => {
    return state.merge(Map({
      loading: true,
      error: null,
      people: null,
    }));
  },
  [GET_CLEANUPS_ERROR]: (state, action) => {
    return state.merge(Map({
      loading: false,
      error: action.error.message
    }));
  },
  [GET_CLEANUPS_SUCCESS]: (state, action) => {
    return state.merge(Map({
      loading: false,
      people: action.data
    }));
  },
};

export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}
