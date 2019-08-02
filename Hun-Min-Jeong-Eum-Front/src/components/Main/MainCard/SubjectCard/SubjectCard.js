import React, { Fragment } from 'react';
import styles from './SubjectCard.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const SubjectCard = (SubjectTitle) => {
  return (
    <Fragment>
      <div className={ cx('SubjectCard') }>
        <span className={ cx('SubjectCard-Title') }>{ SubjectTitle.SubjectTitle.Subject }</span>
      </div>
    </Fragment>
  );
};

export default SubjectCard;