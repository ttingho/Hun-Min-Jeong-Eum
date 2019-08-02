import React from 'react';
import './Login.scss';

const Login = ({ goingSignUp, doingLogin, handleChange }) => {
  return (
    <div className="Login">
      <div className="Login--body">
        <p className="Login--body--title">나랏말싸미</p>
        <div className="Login--body--inputs">
          <input type="text" placeholder="아이디" onChange={handleChange} name="id" className="Login--body--inputs--idInput"/>
          <input type="password" placeholder="비밀번호" onChange={handleChange} name="pw" className="Login--body--inputs--pwInput"/>
        </div>
        <div className="Login--body--buttons">
          <button type="submit" onClick={doingLogin} className="Login--body--buttons--loginButton">로그인</button>
          <button className="Login--body--buttons--signUpButton" onClick={goingSignUp}>회원가입</button>
        </div>
      </div>
    </div>
  );
};

export default Login;