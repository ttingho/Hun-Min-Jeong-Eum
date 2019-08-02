import React, { Component, Fragment } from 'react';
import styles from './TeacherContainer.scss';
import classNames from 'classnames/bind';
import profile from '../../../images/Icon/user.png';
import SubjectContents from '../../../components/Main/MainContents/SubjectContents';

const cx = classNames.bind(styles);

class TeacherContainer extends Component {
  render () {
    return (
      <Fragment>
        <div className={ cx('MainTeacher') }>
          <div className={ cx('MainTeacher-Header') }>
            <img className={ cx('MainTeacher-Header-ProfileImg') } src={ profile } alt='profile' />
            <span className={ cx('MainTeacher-Header-UserName') }>추명호 선생님</span>
            <span className={ cx('MainTeacher-Header-Button') }>필기 작성 하기</span>
            <span className={ cx('MainTeacher-Header-Button') }>로그아웃</span>
            <span className={ cx('MainTeacher-Header-Made') }>Made By 나랏말싸미</span>
          </div>
          <SubjectContents />
        </div>
      </Fragment>
    );
  }
}

export default TeacherContainer;