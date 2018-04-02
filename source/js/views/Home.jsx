
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import GoogleMap from '../components/GoogleMap';

const styles = {
  container: {
    display: 'flex'
  },
  mapContainer: {
    height: '100vh',
    width: '100%'
  }
};
export default class Home extends Component {
  static propTypes = {
  }

  render() {
    return (
      <div style={ styles.container }>
        <div style={ styles.mapContainer }>
          <GoogleMap />
        </div>
      </div>
    );
  }
}

