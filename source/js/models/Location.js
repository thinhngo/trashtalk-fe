import { Record } from 'immutable';

export const MIDDLE_OF_OAKLAND = {
  lat: 37.804,
  lng: -122.271,
};

export default class Location extends Record({
  id: undefined,
  lat: 0.0,
  lng: 0.0
}) {
  constructor(args) {
    // Initialize using args or default to MIDDLE_OF_OAKLAND
    super(Object.assign({}, MIDDLE_OF_OAKLAND, args));
  }

  isAt(otherLocation) {
    // Method to determine if one location is at the same location as another.
    // We may decide to refine this logic at some point to consider two locations to be the
    // same if they're within a certain distance from one another.
    return this.lat === otherLocation.lat && this.lng === otherLocation.lng;
  }
}
