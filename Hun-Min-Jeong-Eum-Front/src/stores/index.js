import ExStore from './ExStore';
import LoginStore from './Login/LoginStore';

const stores = {
  ex: new ExStore(),
  login: new LoginStore(),
};

export default stores;