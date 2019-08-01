import React, { Component } from 'react';

class SignUp extends Component {
  constructor (props){
    super(props);
    this.state = {};
  }

  render () {
    return (
      <div className="SignUp">
        <p className="SignUp--title">회원가입</p>
        <div>
          <button className="SignUp--teacherButton"></button>
          <button className="SignUp--studentButton"></button>
          <div>
            <p>{}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;