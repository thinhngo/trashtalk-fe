import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Cleanup from '../../models/Cleanup';

const styles = {
};

export default class ConnectedComponent extends Component {
  static propTypes = {
    cleanup: PropTypes.instanceOf(Cleanup),
    setCleanup: PropTypes.func,
  }

  static defaultProps = {
  }

  render() {
    return (
      <div>Tool Selection</div>
    );
  }
}
