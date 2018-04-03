import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import { routeCodes } from 'constants/routes';
import themes from 'config/themes';

import Menu from 'components/global/Menu';
import Create from 'views/Create';
import NotFound from 'views/NotFound';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { createMuiTheme } from 'material-ui/styles';
import MapLayer from '../components/global/MapLayer';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={ createMuiTheme(themes.greens2) }>
        <div>
          <Menu />
          <MapLayer />
          <div>
            <Switch>
              <Route exact path={ routeCodes.NEW_CLEANUP } component={ Create } />
              <Route path={ routeCodes.HOME } />
              <Route path='*' component={ NotFound } />
            </Switch>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default hot(module)(App);
