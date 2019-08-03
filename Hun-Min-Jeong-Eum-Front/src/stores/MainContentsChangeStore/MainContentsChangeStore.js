import { observable, action } from 'mobx';

class MainContentsChangeStore {
  @observable isContents

  constructor () {
    this.isContents = true;
  }

  @action.bound
  changeContents () {
    this.isContents = !this.isContents;
  }
}

export default MainContentsChangeStore;