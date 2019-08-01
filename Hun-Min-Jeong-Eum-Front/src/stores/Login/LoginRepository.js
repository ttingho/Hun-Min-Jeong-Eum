import axios from 'axios';
import { SERVER } from '../../config/config.json';

class LoginRepository {
  async checkIdentity (id, pw) {
    try {
      await axios.post(`${SERVER}`, {
        id: id,
        pw: pw
      }).then(res => {
        localStorage.setItem('token', res);
        return true;
      }).error(err => {
        localStorage.removeItem('token');
        return false;
      });
    } catch (err) {
      console.log(err);
    }
  }
}

export default new LoginRepository();