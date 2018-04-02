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

export default class GoogleMap extends Component {
  static propTypes = {
    locationArray: PropTypes.array, // Should be an array of location objects
    currentLocation: PropTypes.object, // Should be a location object
  }

  constructor(props) {
    super(props);
    this.state = {};
    this.state.id = Date.now();
  }

  componentDidMount() {
    // Google map would be initialized here
    const { id } = this.state;
    const { currentLocation } = this.props;
    const reference = document.getElementById(id);
    console.info('ref mounted! %o', reference);
  }

  render() {
    const { locationArray } = this.props;
    const { id } = this.state;
    return (
      <div id={ id } >
        <h1>Google Map Placeholder</h1>
        { (locationArray || []).map((location) => location) }
      </div>
    );
  }
}

