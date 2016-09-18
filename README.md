mobx-react-router-boilerplate
=============================

A minimal application that combines [MobX](https://mobxjs.github.io/mobx) with [React](https://facebook.github.io/react) abd [React-Router](https://github.com/ReactTraining/react-router) Originally cloned from [mobx-react-boilerplate](https://github.com/mobxjs/mobx-react-boilerplate)

### What is in here ?
This boilerplate shows how to use the react-router with mobx.
We have two components, the BlueCounter and the RedCounter. Both  shows the same observable 'count' value from the a mobx 'AppState'

Two routes are setup for displaying each counter, and Provider from mobx-react is used here:
```
    <Provider appState={ appState }>
      <Router history={ browserHistory }>
        <Route path='/' component={ Main }>
          <Route path='counter1' component={ BlueCounter } />
          <Route path='counter2' component={ RedCounter } />
        </Route>
      </Router>
    </Provider>
```

### Run the example

```
npm install
npm start
open http://localhost:3002
```