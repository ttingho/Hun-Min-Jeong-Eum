import React, { Component, Fragment } from 'react';
import StudentContainer from './Student';
import TeacherContainer from './Teacher';
import { observer, inject } from 'mobx-react';

@inject('store')
@observer
class MainPageContainer extends Component {
  render () {
    return (
      <Fragment>
        {
          this.props.store.user.userData.data.is_teacher ? <TeacherContainer /> : <StudentContainer />
        }
      </Fragment>
    )
  }
}

export default MainPageContainer;