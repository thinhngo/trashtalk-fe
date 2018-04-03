import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

const styles = {
  Toolbar: {
    display: 'flex',
    justifyContent: 'space-between'
  }
};

export default class Menu extends Component {
  onCreateClick = () => {

  }

  render() {
    return (
      <AppBar title='Title' position='static'>
        <Toolbar style={ styles.Toolbar }>
          <Typography variant='title' color='inherit'>
            TrashTalk
          </Typography>
          <Button
            variant='raised'
            color='secondary'
            onClick={ this.onCreateClick }
          >
            Organize a Cleanup
          </Button>
        </Toolbar>
      </AppBar>
    );
  }
}
