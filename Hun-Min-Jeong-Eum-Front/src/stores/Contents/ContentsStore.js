import { autobind } from 'core-decorators';
import { observable, action } from 'mobx';
import UserRepository from './ContentsRepository';

@autobind
class ContentsStore {
  @observable.ref userData;

  @action async getUser () {
    try {
      let data;
      const check = await UserRepository.getCheck();
      console.log('check: ', check);
      if (check.data.is_teacher === true ) {
        data = await UserRepository.getTeacher();
        console.log('teacher : ', data);
      } else {
        data = await UserRepository.getStudent();
        console.log('student : ', data);
      }
      this.userData = data;
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
}

export default ContentsStore;