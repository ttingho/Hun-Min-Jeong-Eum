import { autobind } from 'core-decorators';
import { observable } from 'mobx';

@autobind
class UserStore {
  @observable userData = {
    createdTime: '',
    numberId: -1,
    is_teacher: false,
    name: '',
    password: '',
    schoolName: '',
    userId: ''
  }
}

export default UserStore;