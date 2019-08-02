import React, { Fragment } from 'react';
import styles from './SubjectContents.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const SubjectContents = () => {
  return (
    <Fragment>
      <div className={ cx('SubjectContents') }>
        <div className={ cx('SubjectContents-Content') }>
          <div className={ cx('SubjectContents-Content-Subject') }>과목</div>
        </div>
      </div>
    </Fragment>
  );
};

export default SubjectContents;