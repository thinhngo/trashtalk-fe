export const SET_USER_LOCATION = 'SET_USER_LOCATION';

export function setMapCenter(location) {
  return {
    type: SET_USER_LOCATION,
    mapCenter: location
  };
}
