
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

import GoogleMap from '../GoogleMap';
import { getCleanups } from 'actions/cleanups';

import Cleanup from 'models/Cleanup';

const styles = {
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    zIndex: -1
  }
};


@connect(
  state => ({
    cleanups: state.cleanups.get('cleanups'),
    mapCenter: state.app.mapCenter,
  }),
  dispatch => bindActionCreators({ getCleanups }, dispatch)
)
export default class Home extends Component {
  static propTypes = {
    cleanups: PropTypes.arrayOf(Cleanup),
    getCleanups: PropTypes.func,
    mapCenter: PropTypes.instanceOf(Location),
  }

  static defaultProps = {
    cleanups: [],
  }

  componentWillMount() {
    this.props.getCleanups();
  }

  onGetLocationSuccess = (location) => {
    console.debug(location);
  }

  getLocation = () => {
    const getSuccess = (location) => console.debug(location);
    navigator.geolocation.getCurrentPosition(getSuccess);
  }

  render() {
    const { cleanups, mapCenter } = this.props;
    const cleanupLocations = cleanups.map(cleanup => cleanup.location);
    console.debug(cleanupLocations);
    return (
      <div
        onMouseEnter={ this.getLocation }
        style={ styles.container }
      >
        <GoogleMap
          locations={ cleanupLocations }
          mapCenter={ mapCenter }
        />
      </div>
    );
  }
}
