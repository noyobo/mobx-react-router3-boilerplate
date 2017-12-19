import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject('appState')
@observer
class App extends Component {
  render() {
    return (
      <div style={{ backgroundColor: '#ababff' }}>
        <h3>Blue Counter</h3>
        <hr />
        Value: {this.props.appState.count}
        <br />
        <button onClick={this.handleIncrement}>+</button>
        <button onClick={this.handleReset}>Reset</button>
        <button onClick={this.handleDecrement}>-</button>
      </div>
    );
  }

  handleReset = () => {
    this.props.appState.reset();
  };

  handleIncrement = () => {
    this.props.appState.increment();
  };

  handleDecrement = () => {
    this.props.appState.decrement();
  };
}

export default App;
