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

export default class GoogleMap extends Component {
  static propTypes = {
    locationArray: PropTypes.array, // Should be an array of location objects
    currentLocation: PropTypes.object // Should be a location object
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

  componentWillReceiveProps(nextProps) {
    // Here we should check to see if nextProps.currentLocation has changed.
    // If it has, recenter map to new location
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

