import React, { Component } from 'react';
import SignUp from 'components/SignUp/SignUp';
import { inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';

@inject('store')
class SignUpContainer extends Component {
  constructor (props){
    super(props);
    this.state = {
      isTeacher: false,
      id: '',
      name: '',
      pw: '',
      pwCheck: '',
      school: '',
      subject: '',
      class: '',
      number: ''
    };
  }

  changeType = (e) => {
    const isTeacher = this.state.isTeacher;
    if (e.target.name === 'teacher' && isTeacher === false){
      this.setState({
        isTeacher: true,
        isEqualId: false,
        id: '',
        name: '',
        pw: '',
        pwCheck: '',
        school: '',
        subject: '',
        class: '',
        number: ''
      });
      console.log(isTeacher);
    } else if (e.target.name === 'student' && isTeacher === true){
      this.setState({
        isTeacher: false,
        isEqualId: false,
        id: '',
        name: '',
        pw: '',
        pwCheck: '',
        school: '',
        subject: '',
        class: '',
        number: ''
      });
      console.log(isTeacher);
    }
  }

  checkOverlap = async () => {
    const signUp = this.props.store.signUp;
    const state = this.state;
    if (state.id){
      const data = await signUp.checkOverlap(state.id);
      if (data === true){
        alert('통과!');
        this.setState({
          isEqualId: true
        });
      }
      else if (data === false){
        alert('같은 아이디가 있어유!');
      }
    } else {
      alert('아이디를 입력하세요');
    }
  }

  sendTeacherIdentity = async () => {
    const signUp = this.props.store.signUp;
    const state = this.state;
    if (state.pw === state.pwCheck && state.isEqualId === true){
      await signUp.doingSingUpTeacher(state.id, state.name, state.pw, state.school, state.subject);
    } else if (state.isEqualId === false){
      alert('아이디를 중복 체크 해주세요.');
    } else if (state.pw !== state.pwCheck){
      alert('비밀번호를 다시 확인해주세요.');
    } else if (!state.id || !state.pw || !state.name || !state.school || !state.subject){
      alert('입력을 하지 않은 칸이 있습니다!');
    }
  }

  sendStudentIdentity = async () => {
    const signUp = this.props.store.signUp;
    const state = this.state;
    if (state.pw === state.pwCheck && state.isEqualId === true){
      await signUp.doingSingUpStudent(state.id, state.name, state.pw, state.school, state.classNumber, state.number);
    } else if (state.isEqualId === false){
      alert('아이디를 중복 체크 해주세요.');
    } else if (state.pw !== state.pwCheck){
      alert('비밀번호를 다시 확인해주세요.');
    } else if (!state.id || !state.pw || !state.name || !state.school || !state.class || !state.number){
      alert('입력을 하지 않은 칸이 있습니다!');
    }
  }

  handleChange = e => {
    const inputValue = e.target.value;
    console.log(inputValue);
    if (e.target.name === 'id'){
      this.setState({
        [e.target.name]: inputValue,
        isEqualId: false
      });
    } else {
      this.setState({
        [e.target.name]: inputValue
      });
    }
    console.log(this.state.id, this.state.pw, this.state.pwCheck, this.state.name, this.state.number, this.state.school, this.state.class, this.state.number);
  }

  cancleSignUp = () =>{
    confirm('회원가입을 나가시겠습니까?');
    this.props.history.push('/login');
  }

  render () {
    const isTeacher = this.state.isTeacher;
    return (
      <SignUp
        isTeacher={isTeacher}
        changeType={this.changeType}
        checkOverlap={this.checkOverlap}
        sendTeacherIdentity={this.sendTeacherIdentity}
        sendStudentIdentity={this.sendStudentIdentity}
        handleChange={this.handleChange}
        cancleSignUp={this.cancleSignUp}
      >
      </SignUp>
    );
  }
}

export default withRouter(SignUpContainer);