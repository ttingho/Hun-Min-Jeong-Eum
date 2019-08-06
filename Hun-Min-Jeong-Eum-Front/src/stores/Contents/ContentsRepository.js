import axios from 'axios';
import { SERVER } from '../../config/config.json';

class ContentsRepository {
  async getTeacher () {
    try {
      return await axios.get(`${SERVER}/api/t_info/`, {
        headers: { 'Authorization': 'Token ' + localStorage.getItem('token') }
      });
    } catch (err) {
      console.error(err);
    }
  }
  async getStudent () {
    try {
      return await axios.get(`${SERVER}/api/s_info/`, {
        headers: { 'Authorization': 'Token ' + localStorage.getItem('token') }
      });
    } catch (err) {
      console.error(err);
    }
  }
  async getCheck () {
    try {
      return await axios.get(`${SERVER}/api/user/`, {
        headers: { 'Authorization': 'Token ' + localStorage.getItem('token') }
      });
    } catch (err) {
      console.error(err);
    }
  }
}

export default new ContentsRepository();