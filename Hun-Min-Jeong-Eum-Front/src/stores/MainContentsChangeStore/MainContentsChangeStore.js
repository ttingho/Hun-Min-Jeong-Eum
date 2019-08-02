import { observable, action } from 'mobx';

class MainContentsChangeStore {
  @observable isContents

  constructor () {
    this.isContents = true;
  }

  @action.bound
  changeContents (contents) {
    this.isContents = contents;
  }
}

export default MainContentsChangeStore;