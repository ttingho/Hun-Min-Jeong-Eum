import axios from 'axios';
import { SERVER } from '../../config/config.json';
import UserStore from 'stores/User/UserStore.js';

class LoginRepository {
  async checkIdentity (id, pw) {
    try {
      return await axios.post(`${SERVER}/api/login/`, {
        user_id: id,
        password: pw
      }).then(res => {
        console.log(res.status);
        if (res.status === 200){
          localStorage.setItem('token', res.data.token);
          return true;
        } else {
          localStorage.removeItem('token');
          return false;
        }
      });
    } catch (err) {
      console.error(err);
      localStorage.removeItem('token');
      return false;
    }
  }

  async getUserData () {
    try {
      return await axios.get(`${SERVER}/api/user/`, {
        headers:{
          Authorization: 'Token ' + localStorage.getItem('token')
        }
      }).then(res => {
        console.log(res);
        UserStore.userData = {
          createdTime: res.data.created_at,
          numberId: res.data.id,
          is_teacher: res.data.is_teacher,
          name: res.data.name,
          password: res.data.password,
          schoolName: res.data.school_name,
          userId: res.data.user_id
        };
        console.log(UserStore.userData);
      });
    } catch (err) {
      console.error(err);
    }
  }
}

export default new LoginRepository();