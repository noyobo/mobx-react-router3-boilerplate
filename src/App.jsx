import { observable, action } from 'mobx';
import { Provider } from 'mobx-react';
import { render } from 'react-dom';
import { Route, Router, browserHistory } from 'react-router';
import React, { Component } from 'react';

import AppState from './AppState';
import BlueCounter from './components/BlueCounter';
import Main from './components/Main';
import RedCounter from './components/RedCounter';

const appState = new AppState();

class App extends Component {
  render() {
    return (
      <Provider appState={appState}>
        <Router history={browserHistory}>
          <Route path="/" component={Main}>
            <Route path="counter1" component={BlueCounter} />
            <Route path="counter2" component={RedCounter} />
          </Route>
        </Router>
      </Provider>
    );
  }
}

export default App;
