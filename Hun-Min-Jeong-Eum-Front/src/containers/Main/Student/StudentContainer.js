import React, { Component, Fragment } from 'react';
import styles from './StudentContainer.scss';
import classNames from 'classnames/bind';
import profile from '../../../images/Icon/user.png';
import SubjectContents from '../../../components/Main/MainContents/SubjectContents';
import TakeNoteContents from '../../../components/Main/MainContents/TakeNoteContents';
import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';

const cx = classNames.bind(styles);

@inject('store')
@observer
class StudentContainer extends Component {
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
        { Subject: '과학 필기', writeTime: '2019.07.30', classInfo: '2학년 3반' },
        { Subject: '과학 필기', writeTime: '2019.07.29', classInfo: '2학년 3반' },
        { Subject: '과학 필기', writeTime: '2019.07.29', classInfo: '2학년 3반' },
        { Subject: '과학 필기', writeTime: '2019.07.27', classInfo: '2학년 3반' },
        { Subject: '과학 필기', writeTime: '2019.07.27', classInfo: '2학년 3반' },
        { Subject: '과학 필기', writeTime: '2019.07.26', classInfo: '2학년 3반' }
      ],
      MainMember: false
    };
  }
  OnClickLogOut = () => {
    localStorage.removeItem('token');
    this.props.history.push('/login');
  }
  render () {
    const { MCCS, user } = this.props.store;
    console.log(user.userData);
    return (
      <Fragment>
        <div className={ cx('MainStudent') }>
          <div className={ cx('MainStudent-Header') }>
            <img className={ cx('MainStudent-Header-ProfileImg') } src={ profile } alt='profile' />
            <span className={ cx('MainStudent-Header-UserName') }>{ user.userData.data.name } 학생</span>
            <span className={ cx('MainStudent-Header-ClassInfo') }>{ user.userData.data.school_grade }학년 { user.userData.data.school_class }반 { user.userData.data.school_num }번호</span>
            <span className={ cx('MainStudent-Header-Button') } onClick={ this.OnClickLogOut }>로그아웃</span>
            <span className={ cx('MainStudent-Header-Made') }>Made By 나랏말싸미</span>
          </div>
          {
            MCCS.isContents === true ? <SubjectContents SubjectData={ this.state.SubjectData } MainMember={ this.state.MainMember } /> : <TakeNoteContents TakeNoteData={ this.state.TakeNoteData } MainMember={this.state.MainMember } />
          }
        </div>
      </Fragment>
    );
  }
}

export default withRouter(StudentContainer);