import { autobind } from 'core-decorators';
import { action, observable } from 'mobx';
import LoginRepository from './LoginRepository';

@autobind
class LoginStore {
  @observable isSuccess = false;

  @action async checkIdentity (id, pw) {
    try {
      const data = await LoginRepository.checkIdentity(id, pw);
      if (data === true){
        console.log(data);
        console.log('성공!');
        this.isSuccess = true;
      } else {
        console.log(data);
        console.log('실패!');
        this.isSuccess = false;
      }
    } catch (err) {
      console.log(err);
    }
  }
}

export default LoginStore;