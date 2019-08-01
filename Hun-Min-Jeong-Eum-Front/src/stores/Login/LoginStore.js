import { autobind } from 'core-decorators';
import { observable, action } from 'mobx';
import LoginRepository from './LoginRepository';

@autobind
class LoginStore {
  @action async checkIdentity (id, pw) {
    try {
      await LoginRepository.checkIdentity(id, pw);
    } catch (err) {
      console.log(err);
    }
  }
}

export default LoginStore;