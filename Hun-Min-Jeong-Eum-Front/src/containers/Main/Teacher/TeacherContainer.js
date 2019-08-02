import React, { Component, Fragment } from 'react';
import styles from './TeacherContainer.scss';
import classNames from 'classnames/bind';
import profile from '../../../images/Icon/user.png';
import SubjectContents from '../../../components/Main/MainContents/SubjectContents';
import TakeNoteContents from '../../../components/Main/MainContents/TakeNoteContents';

const cx = classNames.bind(styles);

class TeacherContainer extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isContents: true,
      SubjectData: [
        { Subject: '국어' },
        { Subject: '수학' },
        { Subject: '사회' },
        { Subject: '과학' },
        { Subject: '영어' },
        { Subject: '미술' }
      ]
    };
  }

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
          {
            this.state.isContents === true ? <SubjectContents SubjectData={ this.state.SubjectData } /> : <TakeNoteContents />
          }
        </div>
      </Fragment>
    );
  }
}

export default TeacherContainer;