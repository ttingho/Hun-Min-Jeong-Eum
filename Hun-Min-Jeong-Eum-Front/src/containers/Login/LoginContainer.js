import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { inject } from 'mobx-react';
import Login from 'components/Login/Login';
import Swal from 'sweetalert2';

@inject('store')
class LoginContainer extends Component {
  constructor (props){
    super(props);
    this.state = {
      id:'',
      pw:''
    };
  }

  goingSignUp = () =>{
    this.props.history.push('/signUp');
  }

  doingLogin = async () => {
    const login = this.props.store.login;
    const { id, pw } = this.state;
    if (id || pw){
      await login.checkIdentity(id, pw);
      if (login.isSuccess === true){
        Swal.fire({
          title: '로그인 성공',
          text: 'Success',
          type: 'success',
          confirmButtonText: 'Cool'
        });
        console.log(await login.getUserData());
        this.props.history.push('/');
      } else if (login.isSuccess === false){
        Swal.fire({
          title: '로그인 실패',
          text: 'ID나 PW가 틀려요.',
          type: 'error',
          confirmButtonText: 'Cool'
        });
      }
    } else {
      Swal.fire({
        title: 'Error',
        text: 'ID와 PW를 입력해주세요!',
        type: 'error',
        confirmButtonText: 'Cool'
      });
    }
  }

  handleChange = e => {
    const inputValue = e.target.value;
    console.log(inputValue);
    this.setState({
      [e.target.name]: inputValue
    });
    console.log(this.state.id, this.state.pw);
  }

  render () {
    return (
      <Login
        goingSignUp={this.goingSignUp}
        doingLogin={this.doingLogin}
        handleChange={this.handleChange}
      >
      </Login>
    );
  }
}   

export default withRouter(LoginContainer);