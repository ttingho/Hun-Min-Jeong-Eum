import React, { Component } from 'react';
import SignUp from 'components/SignUp/SignUp';
import { inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import Swal from 'sweetalert2';

@inject('store')
class SignUpContainer extends Component {
  constructor (props){
    super(props);
    this.state = {
      isTeacher: false,
      isEqualId: false,
      id: '',
      name: '',
      pw: '',
      pwCheck: '',
      school: '',
      subject: '',
      classNumber: '',
      grade: '',
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
        classNumber: '',
        grade: '',
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
        classNumber: '',
        grade: '',
        number: ''
      });
      console.log(isTeacher);
    }
  }

  checkOverlap = async () => {
    const signUp = this.props.store.signUp;
    const id = this.state.id;
    if (id){
      const data = await signUp.checkOverlap(id);
      console.log(id);
      console.log(data);
      
      if (data === 'false'){
        Swal.fire({
          title: '중복 확인 성공',
          text: 'Success',
          type: 'success',
          confirmButtonText: 'Cool'
        });
        this.setState({
          isEqualId: true
        });
      } else if (data === 'true'){
        Swal.fire({
          title: '중복 확인 실패',
          text: 'ID가 중복이에요.',
          type: 'error',
          confirmButtonText: 'Cool'
        });
      }
    } else {
      Swal.fire({
        title: 'Error',
        text: 'ID를 입력해주세요.',
        type: 'error',
        confirmButtonText: 'Cool'
      });
    }
  }

  sendTeacherIdentity = async () => {
    const signUp = this.props.store.signUp;
    const state = this.state;

    if (state.pw !== state.pwCheck){
      Swal.fire({
        title: 'Error',
        text: 'PW를 다시 확인해주세요',
        type: 'error',
        confirmButtonText: 'Cool'
      });
    } else if (!state.id || !state.pw || !state.name || !state.school || !state.subject){
      Swal.fire({
        title: 'Error',
        text: '입력을 하지 않은 정보가 있습니다.',
        type: 'error',
        confirmButtonText: 'Cool'
      });
    } else {
      await signUp.doingSingUpTeacher(state.id, state.name, state.pw, state.school, state.subject);
      Swal.fire({
        title: '회원가입 성공',
        text: 'Success',
        type: 'success',
        confirmButtonText: 'Cool'
      });
      this.props.history.push('/login');
    }
    // else if (state.isEqualId === false){
    //   Swal.fire({
    //     title: 'Error',
    //     text: 'ID를 중복확인 해주세요',
    //     type: 'error',
    //     confirmButtonText: 'Cool'
    //   });
    // }
     
  }

  sendStudentIdentity = async () => {
    const signUp = this.props.store.signUp;
    const state = this.state;
    console.log(state.id, state.name, state.pw, state.school, state.classNumber, state.number);
   
    if (state.pw !== state.pwCheck){
      Swal.fire({
        title: 'Error',
        text: 'PW를 다시 확인해주세요',
        type: 'error',
        confirmButtonText: 'Cool'
      });
    } else if (!state.id || !state.pw || !state.name || !state.school || !state.classNumber || !state.number || !state.grade){
      Swal.fire({
        title: 'Error',
        text: '입력을 하지 않은 정보가 있습니다.',
        type: 'error',
        confirmButtonText: 'Cool'
      });
    } else {
      await signUp.doingSingUpStudent(state.id, state.name, state.pw, state.school, state.classNumber, state.number, state.grade);
      Swal.fire({
        title: '회원가입 성공',
        text: 'Success',
        type: 'success',
        confirmButtonText: 'Cool'
      });
      this.props.history.push('/login');
    }
    // else if (state.isEqualId === false){
    // Swal.fire({
    //   title: 'Error',
    //   text: '아이디가 중복입니다.',
    //   type: 'error',
    //   confirmButtonText: 'Cool'
    // });
    // } 
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
    Swal.fire({
      title: '회원가입을 취소하시겠습니까?',
      text: 'really?',
      type: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
    }).then((result) => {
      if (result.value) {
        this.props.history.push('/login');
      }
    });
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