import React, { Component, Fragment } from 'react';
import styles from './TakeNoteContents.scss';
import classNames from 'classnames/bind';
import { IconContext } from 'react-icons';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import TakeNoteCard from '../../MainCard/TakeNoteCard';
import { observer, inject } from 'mobx-react';
import { action } from 'mobx';

const cx = classNames.bind(styles);

@inject('store')
@observer
class TakeNoteContents extends Component {
  @action
  ClickContents = () => {
    this.props.store.MCCS.changeContents();
  };
  render () {
    const { TakeNoteData, MainMember } = this.props;
    const TakeNoteList = TakeNoteData;
    const arrowColor = MainMember === true ? '#30BFB1' : '#ABD948';
    return (
      <Fragment>
        <div className={ cx('TakeNoteContents') }>
          <div className={ cx('TakeNoteContents-Content') }>
            <div className={ cx('TakeNoteContents-Content', { SubjectT: MainMember, SubjectS: !MainMember }) }>
              과학 필기
              <IconContext.Provider value={{ color: arrowColor, size: '3rem', className: 'arrowButton' }}>
                <FaArrowAltCircleLeft onClick={ this.ClickContents } />
              </IconContext.Provider>
            </div>
          </div>
          <div className={ cx('TakeNoteContents-TakeNoteCardList') }>
            {
              TakeNoteList.map((TakeNote, i) => {
                return (
                  <TakeNoteCard TakeNote={ TakeNote } key={ i } />
                );
              })
            }
          </div>
        </div>
      </Fragment>
    );
  }
}

export default TakeNoteContents;