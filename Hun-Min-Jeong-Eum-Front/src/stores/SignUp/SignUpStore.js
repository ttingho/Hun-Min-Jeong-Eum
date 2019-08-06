import { autobind } from 'core-decorators';
import SignUpRepository from './SignUpRepository';

@autobind
class SignUpStore {
  async checkOverlap (id){
    try {
      await SignUpRepository.checkOverlap(id);
    } catch (err) {
      console.log(err);
    }
  }

  async doingSingUpStudent (id, name, pw, school, classNumber, number, grade){
    try {
      await SignUpRepository.doingSingUpStudent(id, name, pw, school, classNumber, number, grade);
    } catch (err) {
      console.log(err);
    }
  }

  async doingSingUpTeacher (id, name, pw, school, subject){
    try {
      await SignUpRepository.doingSingUpTeacher(id, name, pw, school, subject);
    } catch (err) {
      console.log(err);
    }
  }
}

export default SignUpStore;