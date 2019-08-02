import LoginStore from './Login/LoginStore';
import MainContentsChangeStore from './MainContentsChangeStore/MainContentsChangeStore';

const stores = {
  login: new LoginStore(),
  MCCS: new MainContentsChangeStore()
};

export default stores;