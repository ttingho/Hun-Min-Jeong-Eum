import React, { Component, Fragment } from 'react';
import styles from './TeacherContainer.scss';
import classNames from 'classnames/bind';
import profile from '../../../images/Icon/user.png';
import SubjectContents from '../../../components/Main/MainContents/SubjectContents';
import TakeNoteContents from '../../../components/Main/MainContents/TakeNoteContents';
import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';

const cx = classNames.bind(styles);

@inject('store')
@observer
class TeacherContainer extends Component {
  constructor (props) {
    super(props);
    this.state = {
      SubjectData: [
        { Subject: '국어' },
        { Subject: '수학' },
        { Subject: '사회' },
        { Subject: '과학' },
        { Subject: '영어' },
        { Subject: '미술' }
      ],
      TakeNoteData: [
        { Subject: '수학 필기', writeTime: '2019.07.30', classInfo: '2학년 2반' },
        { Subject: '수학 필기', writeTime: '2019.07.29', classInfo: '2학년 5반' },
        { Subject: '수학 필기', writeTime: '2019.07.29', classInfo: '2학년 1반' },
        { Subject: '수학 필기', writeTime: '2019.07.27', classInfo: '2학년 1반' },
        { Subject: '수학 필기', writeTime: '2019.07.27', classInfo: '2학년 3반' },
        { Subject: '수학 필기', writeTime: '2019.07.26', classInfo: '2학년 4반' }
      ],
      MainMember: true
    };
  }
  OnClickLogOut = () => {
    localStorage.removeItem('token');
    this.props.history.push('/login');
  }
  OnClickWriteBoard = () => {
    this.props.history.push('/WriteBoard');
  }
  render () {
    return (
      <Fragment>
        <div className={ cx('MainTeacher') }>
          <div className={ cx('MainTeacher-Header') }>
            <img className={ cx('MainTeacher-Header-ProfileImg') } src={ profile } alt='profile' />
            <span className={ cx('MainTeacher-Header-UserName') }>{ this.props.store.user.userData.data.name } 선생님</span>
            <span className={ cx('MainTeacher-Header-Button') } onClick={ this.OnClickWriteBoard }>필기 작성 하기</span>
            <span className={ cx('MainTeacher-Header-Button') } onClick={ this.OnClickLogOut }>로그아웃</span>
            <span className={ cx('MainTeacher-Header-Made') }>Made By 나랏말싸미</span>
          </div>
          {
            this.props.store.MCCS.isContents === true ? <SubjectContents SubjectData={ this.state.SubjectData } MainMember={ this.state.MainMember } /> : <TakeNoteContents TakeNoteData={ this.state.TakeNoteData } MainMember={ this.state.MainMember } />
          }
        </div>
      </Fragment>
    );
  }
}

export default withRouter(TeacherContainer);