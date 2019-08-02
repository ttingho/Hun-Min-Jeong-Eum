import React, { Fragment } from 'react';
import styles from './MainTeacher.scss';
import classNames from 'classnames/bind';
import profile from '../../../images/Icon/user.png';
import MainContents from '../MainContents/SubjectContents';

const cx = classNames.bind(styles);

const MainTeacher = () => {
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
        <MainContents />
      </div>
    </Fragment>
  );
};

export default MainTeacher;