import { Record } from 'immutable';

export const MIDDLE_OF_OAKLAND = {
  latitude: 37.804,
  longitude: -122.271,
};

export default class Location extends Record({
  id: undefined,
  latitude: 0.0,
  longitude: 0.0,
}) {
  constructor(args) {
    // Initialize using args or default to MIDDLE_OF_OAKLAND
    const parsedLatLong = args && args.latitude && args.longitude ? {
      latitude: parseFloat(args.latitude),
      longitude: parseFloat(args.longitude),
    } : {};

    super({
      ...MIDDLE_OF_OAKLAND,
      ...{ id: args ? args.id : null },
      ...parsedLatLong,
    });
  }

  /**
   * Method to determine if one location is at the same location as another.
   * We may decide to refine this logic at some point to consider two locations to be the
   * same if they're within a certain distance from one another.
   */
  isAt(otherLocation) {
    return this.latitutde === otherLocation.latitude && this.longitude === otherLocation.longitude;
  }

  /**
   * Helper method to get an object with lat and lng, used by Google Maps API
   */
  getLatLngObj() {
    return {
      lat: this.latitude,
      lng: this.longitude,
    };
  }
}
