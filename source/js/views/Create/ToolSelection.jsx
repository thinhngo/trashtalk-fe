import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getTools, getToolCategories } from 'actions/tools';
import Cleanup from 'models/Cleanup';

const styles = {
};

@connect(
  state => ({
    cleanups: state.cleanups.get('cleanups'),
    mapCenter: state.app.get('mapCenter'),
  }),
  dispatch => bindActionCreators({ getTools, getToolCategories }, dispatch)
)
export default class ToolSelection extends Component {
  static propTypes = {
    cleanup: PropTypes.instanceOf(Cleanup),
    getTools: PropTypes.func,
    getToolCategories: PropTypes.func,
    setCleanup: PropTypes.func,
  }

  static defaultProps = {
  }

  componentWillMount() {
    this.props.getTools();
    this.props.getToolCategories();
  }

  render() {
    return (
      <div>Tool Selection</div>
    );
  }
}
