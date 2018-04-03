import { Map } from 'immutable';

import { SET_USER_LOCATION } from 'actions/app';

import Location from 'models/Location';

const initialState = Map({
  mapCenter: new Location()
});

const actionsMap = {
  [SET_USER_LOCATION]: (state, action) => {
    return state.set('mapCenter', action.location);
  }
};

export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}
