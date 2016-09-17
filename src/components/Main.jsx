import React, { Component } from 'react';
import DevTools from 'mobx-react-devtools';
import { Link } from 'react-router';

class Main extends Component {
  render() {
    return (
      <div>
        <h2>Mobx-React-Router</h2>
        <hr />
        <Link to="/counter1">counter1</Link> | <Link to="/counter2">counter2</Link>
        <hr />
        {this.props.children}
        <DevTools />
      </div>
    );
  }
}

export default Main;
