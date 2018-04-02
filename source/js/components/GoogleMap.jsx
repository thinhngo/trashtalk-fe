
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

@connect(state => ({
  counter: state.app.get('counter'),
}))

export default class GoogleMap extends Component {
  render() {
    return (
      <div>
        <h1>hello</h1>
      </div>
    );
  }
}

