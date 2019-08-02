import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { inject } from 'mobx-react';
import Login from 'components/Login/Login';

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
    console.log(id);
    console.log(pw);
    await login.checkIdentity(id, pw);
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