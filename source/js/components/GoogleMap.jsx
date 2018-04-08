import * as Immutable from 'immutable';
import React, { Component } from 'react';
import PropTypes from 'prop-types';


import Location from '../models/Location';

/*
Here is an example of a location object
const locationObject = {
  lat: 0, // integer
  lng: 0, // integer
  html: '', // string
}
*/

const styles = {
  container: {
    display: 'flex',
    backgroundColor: 'rgb(228, 226, 222)',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
};

const MIDDLE_OF_OAKLAND = new Location({
  lat: 37.804,
  lng: -122.271,
  id: null,
});

export default class GoogleMap extends Component {
  static propTypes = {
    locations: PropTypes.arrayOf(Location),
    mapCenter: PropTypes.instanceOf(Location),
    setMapReference: PropTypes.func,
  }

  static defaultProps = {
    locations: [],
    mapCenter: MIDDLE_OF_OAKLAND,
  }

  state = {
    id: Date.now(),
    locationsMarked: Immutable.Set(),
    mapReference: null, // After we initialize the Google Map object, we can use this variable to point to it
  }

  /**
   * After this component is mounted, initialize the Google Map object and point it
   * to this element. We'll also save a reference to the Map object so that it can be
   * used elsewhere, e.g.: in this.markLocations()
   */
  componentDidMount() {
    const { id } = this.state;
    const { locations, mapCenter, setMapReference } = this.props;

    // Initialize Google Map object using mapCenter inside mapContainer
    // https://developers.google.com/maps/documentation/javascript/adding-a-google-map
    const mapReference = new google.maps.Map(document.getElementById(id), {
      zoom: 17,
      center: { lat: mapCenter.latitude, lng: mapCenter.longitude },
    });

    const marker = new google.maps.Marker({
      position: { lat: location.latitude, lng: location.longitude },
      mapReference,
    });

    window.mapReference = mapReference;

    this.setState(
      { mapReference },
      () => {
        this.markLocations(locations); // After we set the map reference, mark locations

        if (setMapReference) {
          setMapReference(mapReference);
        }
      }
    );

  }

  componentWillReceiveProps(nextProps) {
    // Here we should check to see if nextProps.mapCenter has changed.
    // If it has, recenter map to new location
    if (!nextProps.mapCenter.isAt(this.props.mapCenter)) {
      const { mapReference } = this.state;
      // do something to center the map to nextProps.mapCenter
      console.debug(mapReference);
    }

    // If the array of locations have changed, markLocations again
    this.markLocations(nextProps.locations);
  }

  /**
   * Given an array of locations, mark them on the rendered map
   * https://developers.google.com/maps/documentation/javascript/examples/marker-simple
   */
  markLocations = (locations) => {
    const { locationsMarked, mapReference } = this.state;
    locations.forEach(location => {
      if (mapReference != null && !locationsMarked.has(location)) {
        const marker = new google.maps.Marker({
          position: { lat: location.latitude, lng: location.longitude },
          map: mapReference,
        });
        this.setState({
          locationsMarked: locationsMarked.add(location),
        });
      }
    });
  }

  render() {
    const { id } = this.state;
    return (
      <div id={ id } style={ styles.container } />
    );
  }
}

