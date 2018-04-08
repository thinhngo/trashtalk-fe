
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

import GoogleMap from '../GoogleMap';
import { getCleanups } from '../../actions/cleanups';

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
  state => ({ mapCenter: state.app.mapCenter }),
  dispatch => bindActionCreators({ getCleanups }, dispatch)
)
export default class Home extends Component {
  static propTypes = {
    getCleanups: PropTypes.func,
    mapCenter: PropTypes.instanceOf(Location),
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
    const { mapCenter } = this.props;
    return (
      <div
        onMouseEnter={ this.getLocation }
        style={ styles.container }
      >
        <GoogleMap mapCenter={ mapCenter } />
      </div>
    );
  }
}
