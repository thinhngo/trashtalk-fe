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
    locationArray: PropTypes.arrayOf(Location),
    mapCenter: PropTypes.instanceOf(Location)
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
    const map = new google.maps.Map(document.getElementById(id), {
      zoom: 15,
      center: uluru
    });

    const marker = new google.maps.Marker({
      position: { lat: mapCenter.lat, lng: mapCenter.lng },
      map: map
    });
  }

  componentWillReceiveProps(nextProps) {
    // Here we should check to see if nextProps.mapCenter has changed.
    // If it has, recenter map to new location
    if (!nextProps.mapCenter.isAt(this.props.mapCenter)) {
      // do something to center the map to nextProps.mapCenter
    }
  }

  render() {
    const { id } = this.state;
    return (
      <div id={ id } style={ styles.container } />
    );
  }
}

