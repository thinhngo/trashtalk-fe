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
    backgroundColor: '#dcedc8',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%'
  }
};

const MIDDLE_OF_OAKLAND = new Location({
  lat: 37.804,
  lng: -122.271,
  id: null
});

export default class GoogleMap extends Component {
  static propTypes = {
    locationArray: PropTypes.array, // Should be an array of location objects
    mapCenter: PropTypes.object // Locatino object we use to center the map
  }

  static defaultProps = {
    locationArray: [],
    mapCenter: MIDDLE_OF_OAKLAND
  }

  constructor(props) {
    super(props);
    this.state = {
      mapObject: null // After we initialize the Google Map object, we can use this variable to point to it
    };
    this.state.id = Date.now();
  }

  componentDidMount() {
    const { id } = this.state;
    const { mapCenter, locationArray } = this.props;

    // Initialize Google Map object using mapCenter inside mapContainer
    // https://developers.google.com/maps/documentation/javascript/adding-a-google-map
    const mapContainer = document.getElementById(id);
    console.info('element mounted! %o', mapContainer);

    // For each location in locationArray, add it to the map and add info window if applicable
    locationArray.forEach(
      cleanupLocation => {
        console.debug(cleanupLocation);
      }
    );
  }

  componentWillReceiveProps(nextProps) {
    // Here we should check to see if nextProps.mapCenter has changed.
    // If it has, recenter map to new location
    if (!nextProps.mapCenter.isAt(this.props.mapCenter)) {
      // do something to center the map to nextProps.mapCenter
    }
  }

  render() {
    const { locationArray } = this.props;
    const { id } = this.state;
    return (
      <div id={ id } style={ styles.container } >
        <h1>Google Map Placeholder</h1>
        { (locationArray || []).map((location) => location) }
      </div>
    );
  }
}

