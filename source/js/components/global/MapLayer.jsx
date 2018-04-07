
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

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
class Home extends Component {
  static propTypes = {
    getCleanups: PropTypes.func,
    mapCenter: PropTypes.instanceOf(Location),
    children: PropTypes.element
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
        <GoogleMap />
      </div>
    );
  }
}

// container part
function mapStateToProps(state) {
  return {
    mapCenter: state.app.mapCenter
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getCleanups
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

