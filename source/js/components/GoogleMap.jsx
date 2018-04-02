
import React, { Component } from 'react';
 import { connect } from 'react-redux';
import PropTypes from 'prop-types';

@connect(state => ({
  counter: state.app.get('counter'),
}))

/*
const location = {
  lat: 0, // integer
  lng: 0, // integer
  html: '', // string
}
*/

export default class GoogleMap extends Component {
  static propTypes = {
    locationArray: PropTypes.array,
  }

  constructor(props) {
    super(props);
    this.state = {};
    this.state.id = Date.now();
  }

  componentDidMount() {
    const { id } = this.state;
    const reference = document.getElementById(id);
    console.info('ref mounted! %o', reference);
  }

  render() {
    const { locationArray } = this.props;
    const { id } = this.state;
    return (
      <div id={ id } >
        <h1>Google Map Placeholder</h1>
        { (locationArray || []).map((location) => location) }
      </div>
    );
  }
}

