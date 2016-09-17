import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@observer(['appState'])
class App extends Component {
  render() {
    return (
      <div style={{backgroundColor: '#ffabab'}}>
        <h3>Red Counter</h3>
        <hr />
        <button onClick={this.onReset}>
          counter value: {this.props.appState.count} - Reset ?
        </button>
      </div>
    );
  }

  onReset = () => {
    this.props.appState.reset();
  }
};

export default App;
