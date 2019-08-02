import React, { Fragment } from 'react';
import styles from './SubjectContents.scss';
import classNames from 'classnames/bind';
import SubjectCard from '../../MainCard/SubjectCard';

const cx = classNames.bind(styles);

const SubjectContents = (SubjectData) => {
  const SubjectList = SubjectData.SubjectData;
  return (
    <Fragment>
      <div className={ cx('SubjectContents') }>
        <div className={ cx('SubjectContents-Content') }>
          <div className={ cx('SubjectContents-Content-Subject') }>과목</div>
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
};

export default SubjectContents;