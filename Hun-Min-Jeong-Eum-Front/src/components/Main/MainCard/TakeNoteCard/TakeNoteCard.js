import React, { Component, Fragment } from 'react';
import styles from './TakeNoteCard.scss';
import classNames from 'classnames/bind';
import { observer, inject } from 'mobx-react';
import { action } from 'mobx';

const cx = classNames.bind(styles);

@inject('store')
@observer
class TakeNoteCard extends Component {
  // async componentDidMount () {
  //   const { store } = this.props;
  //   await store.MCCS.changeContents();
  // }
  @action
  ClickContents = () => {
    
  };
  render () {
    return (
      <Fragment>
        <div className={ cx('TakeNoteCard') } onClick={ this.ClickContents }>
          <span className={ cx('TakeNoteCard-WriteTime') }>{ this.props.TakeNote.writeTime }</span>
          <span className={ cx('TakeNoteCard-ClassInfo') }>{ this.props.TakeNote.classInfo }</span>
          <span className={ cx('TakeNoteCard-Title') }>{ this.props.TakeNote.Subject }</span>
        </div>
      </Fragment>
    );
  }
}

export default TakeNoteCard;