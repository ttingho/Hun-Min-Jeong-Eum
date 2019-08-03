import { SERVER } from '../../config/config.json';
import axios from 'axios';

class SignUpRepository {
  async checkOverlap (id){
    try {
      return await axios.post(`${SERVER}`, {
        id: id
      }).then(res => {
        console.log(res);
      }).error(err => {
        console.log(err);
      });
    } catch (err) {
      console.error(err);
    }
  }

  async doingSingUpStudent (id, name, pw, school, classNumber, number){
    try {
      return await axios.post(`${SERVER}`, {
        id: id,
        name: name,
        pw: pw,
        school: school,
        class: classNumber,
        number: number
      }).then(res=>{
        console.log(res);
      }).error(err => {
        console.log(err);
      });
    } catch (err) {
      console.error(err);
    }
  }

  async doingSingUpTeacher (id, name, pw, school, subject){
    try {
      return await axios.post(`${SERVER}`, {
        id: id,
        name: name,
        pw: pw,
        school: school,
        subject: subject
      }).then(res=>{
        console.log(res);
      }).error(err => {
        console.log(err);
      });
    } catch (err) {
      console.error(err);
    }
  }
}

export default new SignUpRepository();