import axios from 'axios';
import { SERVER } from '../../config/config.json';

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
}

export default new LoginRepository();