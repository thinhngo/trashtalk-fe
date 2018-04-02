import { Record } from 'immutable';

export default class Location extends Record({
  id: undefined,
  lat: 0.0,
  lng: 0.0
}) {
  isAt(otherLocation) {
    return this.lat === otherLocation.lat && this.lng === otherLocation.lng;
  }
}
