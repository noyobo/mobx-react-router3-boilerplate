import React, { Component } from 'react';
import { observer } from 'mobx-react';

// @observer
@observer(['appState'])
class App extends Component {
  render() {
    return (
      <div style={{backgroundColor: '#ababff'}}>
        <h3>Blue Counter</h3>
        <hr />
        <button onClick={this.onReset}>
          Blue Button - Seconds passed: {this.props.appState.timer}
        </button>
      </div>
    );
  }

  onReset = () => {
    this.props.appState.resetTimer();
  }
};

export default App;
