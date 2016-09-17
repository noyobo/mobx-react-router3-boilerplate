import { observable, action } from 'mobx';

const appState = observable({
  count: 0
});

appState.increment = function() {
  this.count++;
};

appState.decrement = function() {
  this.count--;
};

appState.reset = function() {
  this.count = 0;
};

export default appState;
