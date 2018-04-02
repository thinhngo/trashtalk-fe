import { Record } from 'immutable';

export default class Location extends Record({
  id: undefined,
  lat: 0.0,
  lng: 0.0
}) {
  isAt(otherLocation) {
    // Method to determine if one location is at the same location as another.
    // We may decide to refine this logic at some point to consider two locations to be the
    // same if they're within a certain distance from one another.
    return this.lat === otherLocation.lat && this.lng === otherLocation.lng;
  }
}
