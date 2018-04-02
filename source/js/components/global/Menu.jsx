import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

export default class Menu extends Component {
  render() {
    return (
      <AppBar title='Title' >
        <Toolbar>
          <Typography variant='title' color='inherit'>
            TrashTalk
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}
