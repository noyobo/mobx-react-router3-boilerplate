import React from 'react';
import { Route, Router, browserHistory } from 'react-router';
import { Provider } from 'mobx-react';
import { render } from 'react-dom';
import AppState from './AppState';

const appState = new AppState();

import Main from './components/Main';
import BlueCounter from './components/BlueCounter';
import RedCounter from './components/RedCounter';

render(
    <Provider appState={ appState }>
      <Router history={ browserHistory }>
        <Route path='/' component={ Main }>
          <Route path='counter1' component={ BlueCounter } />
          <Route path='counter2' component={ RedCounter } />
        </Route>
      </Router>
    </Provider>,
    document.getElementById('root')
);