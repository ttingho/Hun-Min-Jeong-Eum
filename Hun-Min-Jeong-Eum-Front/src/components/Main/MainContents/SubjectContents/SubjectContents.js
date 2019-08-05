import React, { Component, Fragment } from 'react';
import styles from './SubjectContents.scss';
import classNames from 'classnames/bind';
import SubjectCard from '../../MainCard/SubjectCard';

const cx = classNames.bind(styles);

class SubjectContents extends Component {
  render () {
    const { SubjectData, MainMember } = this.props;
    const SubjectList = SubjectData;
    const MainColor = MainMember;
    return (
      <Fragment>
        <div className={ cx('SubjectContents') }>
          <div className={ cx('SubjectContents-Content') }>
            <div className={ cx('SubjectContents-Content', { SubjectT: MainColor, SubjectS: !MainColor }) }>과목</div>
          </div>
          <div className={ cx('SubjectContents-SubjectCardList') }>
            {
              SubjectList.map((Subject, i) => {
                return (
                  <SubjectCard SubjectTitle={ Subject } key={ i } />
                );
              })
            }
          </div>
        </div>
      </Fragment>
    );
  }
}

export default SubjectContents;