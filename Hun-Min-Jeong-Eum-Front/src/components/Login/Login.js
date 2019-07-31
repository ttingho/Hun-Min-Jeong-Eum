import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Login.scss';
import { inject } from 'mobx-react';

@inject('store')
class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            id:"",
            pw:""
        };
    }

    goingSignUp = () =>{
        this.props.history.push('/signUp');
    }

    doingLogin = async() => {
        const login = this.props.store.login;
        const { id, pw } = this.state;
        console.log(id);
        console.log(pw);
        await login.checkIdentity(id, pw);
    }

    handleChange = e => {
        const inputValue = e.target.value
        console.log(inputValue);
        this.setState({
            [e.target.name]: inputValue
        })
        console.log(this.state.id, this.state.pw);
    }

    render() {
        return (
            <div className="Login">
                <div className="Login--body">
                    <p className="Login--body--title">나랏말싸미</p>
                    <div className="Login--body--inputs">
                        <input type="text" placeholder="아이디" onChange={this.handleChange} name="id" className="Login--body--inputs--idInput"/>
                        <input type="text" placeholder="비밀번호" onChange={this.handleChange} name="pw" className="Login--body--inputs--pwInput"/>
                    </div>
                    <div className="Login--body--buttons">
                        <button type="submit" onClick={() => this.doingLogin()} className="Login--body--buttons--loginButton">로그인</button>
                        <button className="Login--body--buttons--signUpButton" onClick={() => this.goingSignUp()}>회원가입</button>
                    </div>
                </div>
            </div>
        );
    }
}   

export default withRouter(Login);