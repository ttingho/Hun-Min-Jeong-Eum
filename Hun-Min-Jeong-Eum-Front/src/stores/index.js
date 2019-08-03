import LoginStore from './Login/LoginStore';
import MainContentsChangeStore from './MainContentsChangeStore/MainContentsChangeStore';
import SignUpStore from './SignUp/SignUpStore';

const stores = {
  login: new LoginStore(),
  signUp: new SignUpStore(),
  MCCS: new MainContentsChangeStore()
};

export default stores;