import { SERVER } from '../../config/config.json';
import axios from 'axios';

class SignUpRepository {
  // async checkOverlap (id){
  //   const req = {
  //     user_id: id
  //   };
  //   try {
  //     console.log('signuprepo: ' + req.user_id);
  //     await axios.get(`${SERVER}/api/user_id/check/`, req).then(res => {
  //       console.log(res);
  //       if(res.data.data === "true"){
  //         console.log("성공성공성공 트루트루");
  //       } else if(res.data.data === "false"){
  //         console.log("성공성공성공 펄스펄스");
  //       }
  //     }).error(err => {
  //       console.log(err);
  //     });
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }

  async checkOverlap (id){
    try {
      console.log('ididididididid', id);
      return await axios.get(`${SERVER}/api/user_id/check/`, {
        user_id: id
      }).then(res => {
        console.log(res);
      }).error(err => {
        console.log(err);
      });
    } catch (err) {
      console.error(err);
    }
  }

  async doingSingUpStudent (id, name, pw, school, classNumber, number, grade){
    try {
      console.log(id, name, pw, school, classNumber, grade, number);
      return await axios.post(`${SERVER}/api/student/`, {
        user_id: id,
        name: name,
        password: pw,
        school_name: school,
        school_class: classNumber,
        school_grade: grade,
        school_num: number
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
      return await axios.post(`${SERVER}/api/teacher/`, {
        user_id: id,
        name: name,
        password: pw,
        school_name: school,
        school_subjects: subject
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