import LoginStore from './Login/LoginStore';
import MainContentsChangeStore from './MainContentsChangeStore/MainContentsChangeStore';
import SignUpStore from './SignUp/SignUpStore';
import UserStore from './User/UserStore';

const stores = {
  login: new LoginStore(),
  signUp: new SignUpStore(),
  MCCS: new MainContentsChangeStore(),
  user: new UserStore()
};

export default stores;