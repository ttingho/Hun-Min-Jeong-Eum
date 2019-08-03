import React from 'react';
import './SignUp.scss';

const SignUp = ({ isTeacher, changeType, checkOverlap, sendTeacherIdentity, sendStudentIdentity, handleChange, cancleSignUp }) => {
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
              <p className="SignUp--body--teacher--title">선생님</p>
              <div className="SignUp--body--teacher--inputElement">
                <label name="id">아이디</label>
                <input type="text" name="id" placeholder="아이디" onChange={(e) => handleChange(e)}/>
                <button onClick={checkOverlap}>중복체크</button>
              </div>
              <div className="SignUp--body--teacher--inputElement">
                <label>이름</label>
                <input type="text" name="name" placeholder="이름" onChange={(e) => handleChange(e)}/>
              </div>
              <div className="SignUp--body--teacher--inputElement">
                <label>비밀번호</label>
                <input type="password" name="pw" placeholder="비밀번호" onChange={(e) => handleChange(e)}/>
              </div>
              <div className="SignUp--body--teacher--inputElement">
                <label>비밀번호 확인</label>
                <input type="password" name="pwCheck" placeholder="비밀번호 확인" onChange={(e) => handleChange(e)}/>
              </div>
              <div className="SignUp--body--teacher--inputElement">
                <label>학교</label>
                <input type="text" name="school" placeholder="학교" onChange={(e) => handleChange(e)}/>
              </div>
              <div className="SignUp--body--teacher--inputElement">
                <label>과목</label>
                <input type="text" name="subject" placeholder="과목" onChange={(e) => handleChange(e)}/>
              </div>
              <div className="SignUp--body--teacher--buttons">
                <button onClick={cancleSignUp}>취소</button>
                <button onClick={sendTeacherIdentity}>회원가입</button>
              </div>
            </div> 
          )
            : (
              <div className="SignUp--body--student">
                <p className="SignUp--body--student--title">학생</p>
                <div className="SignUp--body--student--inputElement">
                  <label>아이디</label>
                  <input type="text" name="id" placeholder="아이디" onChange={(e) => handleChange(e)}/>
                  <button onClick={checkOverlap}>중복체크</button>
                </div>
                <div className="SignUp--body--student--inputElement">
                  <label>이름</label>
                  <input type="text" name="name" placeholder="이름" onChange={(e) => handleChange(e)}/>
                </div>
                <div className="SignUp--body--student--inputElement">
                  <label>비밀번호</label>
                  <input type="password" name="pw" placeholder="비밀번호" onChange={(e) => handleChange(e)}/>
                </div>
                <div className="SignUp--body--student--inputElement">
                  <label>비밀번호 확인</label>
                  <input type="password" name="pwCheck" placeholder="비밀번호 확인" onChange={(e) => handleChange(e)}/>
                </div>
                <div className="SignUp--body--student--inputElement">
                  <label>학교</label>
                  <input type="text" name="school" placeholder="학교" onChange={(e) => handleChange(e)}/>
                </div>
                <div className="SignUp--body--student--numbers">
                  <label>반<input type="text" name="class" placeholder="반" onChange={(e) => handleChange(e)}/></label>
                  <label>번호<input type="text" name="number" placeholder="번호" onChange={(e) => handleChange(e)}/></label>
                </div>
                <div className="SignUp--body--student--buttons">
                  <button onClick={cancleSignUp}>취소</button>
                  <button onClick={sendStudentIdentity}>회원가입</button>
                </div>
              </div>
            )
        }
      </div>
    </div>
  );
};

export default SignUp;