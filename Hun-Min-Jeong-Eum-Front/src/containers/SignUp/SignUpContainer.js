import React, { Component } from 'react';
import SignUp from 'components/SignUp/SignUp';

class SignUpContainer extends Component {
  constructor (props){
    super(props);
    this.state = {
      isTeacher: false
    };
  }

  changeType = (e) => {
    if (e.target.name === 'teacher'){
      this.setState({
        isTeacher: true
      });
    } else if (e.target.name === 'student'){
      this.setState({
        isTeacher: false
      });
    }
  }

  render () {
    const isTeacher = this.state.isTeacher;
    return (
      <SignUp
        isTeacher={isTeacher}
        changeType={this.changeType}
      >
      </SignUp>
    );
  }
}

export default SignUpContainer;