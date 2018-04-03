
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
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
class Home extends Component {
  static propTypes = {
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
      <div style={ styles.container }>
        <div onMouseEnter={ this.getLocation } style={ styles.mapContainer }>
          <GoogleMap />
        </div>
      </div>
    );
  }
}

// container part
function mapStateToProps(state) {
  return {
    mapCenter: state.app
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

