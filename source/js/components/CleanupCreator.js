
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Location from '../models/Location';
import Cleanup from '../models/Cleanup';

const styles = {
};

/**
 * Component for creating new cleanups
 */
class ConnectedComponent extends Component {
  static propTypes = {
    currentCleanup: PropTypes.instanceOf(Cleanup)
  }

  static defaultProps = {
    currentCleanup: new Cleanup()
  }

  render() {
    return (
      <div>Connected Component</div>
    );
  }
}

// container part
function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedComponent);

