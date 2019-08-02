import React, { Fragment } from 'react';
import styles from './TakeNoteContents.scss';
import classNames from 'classnames/bind';
import { IconContext } from 'react-icons';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import TakeNoteCard from '../../MainCard/TakeNoteCard';

const cx = classNames.bind(styles);
const arrowColor = '#30BFB1';

const TakeNoteContents = (TakeNoteData) => {
  return (
    <Fragment>
      <div className={ cx('TakeNoteContents') }>
        <div className={ cx('TakeNoteContents-Content') }>
          <div className={ cx('TakeNoteContents-Content-Subject') }>
            수학 필기
            <IconContext.Provider value={{ color: arrowColor, size: '3rem', className: 'arrowButton' }}>
              <FaArrowAltCircleLeft />
            </IconContext.Provider>
          </div>
        </div>
        <div className={ cx('TakeNoteContents-TakeNoteList') }>
          {
            TakeNoteData &&
            TakeNoteData.map((TakeNote, i) => {
              return (
                <TakeNoteCard TakeNote={ TakeNote.Subject } key={ i } />
              );
            })
          }
        </div>
      </div>
    </Fragment>
  );
};

export default TakeNoteContents;