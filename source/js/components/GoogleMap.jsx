import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
    height: '100%',
    width: '100%'
  }
};

const MIDDLE_OF_OAKLAND = {
  lat: 37.804,
  lng: -122.271,
  id: null
};

export default class GoogleMap extends Component {
  static propTypes = {
    locationArray: PropTypes.array, // Should be an array of location objects
    currentLocation: PropTypes.object // Should be a location object
  }

  static defaultProps = {
    locationArray: [],
    currentLocation: MIDDLE_OF_OAKLAND
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
    const { currentLocation, locationArray } = this.props;

    // Initialize Google Map object using currentLocation inside mapContainer
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
    // Here we should check to see if nextProps.currentLocation has changed.
    // If it has, recenter map to new location
    if(nextProps.currentLocation !== this.props.currentLocation) {
      // do something
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

