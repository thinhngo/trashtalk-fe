
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import CircleSvg from 'svg/circle.svg';
import SquareSvg from 'svg/square.svg';
import TriangleSvg from 'svg/triangle.svg';
import bookImg from 'img/book2.jpg';
import GoogleMap from '../components/GoogleMap';

import { increment } from 'actions/app';

@connect(state => ({
  counter: state.app.get('counter'),
}))
export default class Home extends Component {
  static propTypes = {
    counter: PropTypes.number,
    // from react-redux connect
    dispatch: PropTypes.func,
  }

  handleTestButtonClick = () => {
    const { dispatch } = this.props;

    dispatch(increment());
  }

  render() {
    return (
      <div className='Home'>
        <GoogleMap />
      </div>
    );
  }
}

