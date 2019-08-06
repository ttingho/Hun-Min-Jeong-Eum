import LoginStore from './Login/LoginStore';
import MainContentsChangeStore from './MainContentsChangeStore/MainContentsChangeStore';
import SignUpStore from './SignUp/SignUpStore';
import UserStore from './User/UserStore';
import ContentsStore from './Contents/ContentsStore';

const stores = {
  login: new LoginStore(),
  signUp: new SignUpStore(),
  MCCS: new MainContentsChangeStore(),
  user: new UserStore(),
  contents: new ContentsStore()
};

export default stores;