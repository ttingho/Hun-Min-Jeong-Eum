import React, { Component, Fragment } from 'react';
import styles from './SubjectCard.scss';
import classNames from 'classnames/bind';
import { observer, inject } from 'mobx-react';
import { action } from 'mobx';

const cx = classNames.bind(styles);

@inject('store')
@observer
class SubjectCard extends Component {
  async componentDidMount () {
    const { store } = this.props;
    await store.MCCS.changeContents();
  }
  @action
  ClickContents = () => {
    this.props.store.MCCS.changeContents();
  };
  render () {
    return (
      <Fragment>
        <div className={ cx('SubjectCard') } onClick={ this.ClickContents }>
          <span className={ cx('SubjectCard-Title') }>{ this.props.SubjectTitle.Subject }</span>
        </div>
      </Fragment>
    );
  }
}

export default SubjectCard;