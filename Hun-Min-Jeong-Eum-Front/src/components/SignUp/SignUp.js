import React from 'react';
import './SignUp.scss';

const SignUp = ({ isTeacher, changeType }) => {
  return (
    <div className="SignUp">
      <p className="SignUp--title">회원가입</p>
      <div className="SignUp--body">
        <div className="SignUp--body--buttons">
          <button className="SignUp--body--buttons--teacherButton" name="teacher" onClick={(e) => changeType(e)}></button>
          <button className="SignUp--body--buttons--studentButton" name="student" onClick={(e) => changeType(e)}></button>
        </div>
        {
          isTeacher ===  true ? (
            <div className="SignUp--body--teacher">
              <p>선생님</p>
            </div> 
          )
            : (
              <div className="SignUp--body--student">
                <p>학생</p>
              </div>
            )
        }
        
      </div>
    </div>
  );
};

export default SignUp;