import { observable, action } from 'mobx';

export default  class AppState {
  @observable count = 0;

  @action increment() {
    this.count++;
  }

  @action decrement() {
    this.count--;
  }

  @action reset() {
    this.count = 0;
  }
}