import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import { routeCodes } from 'constants/routes';
import themes from 'config/themes';

import Menu from 'components/global/Menu';
import Home from 'views/Home';
import NotFound from 'views/NotFound';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { createMuiTheme } from 'material-ui/styles';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={ createMuiTheme(themes.greens2) }>
        <div>
          <Menu />
          <div>
            <Switch>
              <Route exact path={ routeCodes.HOME } component={ Home } />
              <Route path='*' component={ NotFound } />
            </Switch>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default hot(module)(App);
