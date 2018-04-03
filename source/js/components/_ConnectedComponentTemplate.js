
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const styles = {
};

/**
 * Template for creating connected components
 */
class ConnectedComponent extends Component {
  static propTypes = {
  }

  static defaultProps = {
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
