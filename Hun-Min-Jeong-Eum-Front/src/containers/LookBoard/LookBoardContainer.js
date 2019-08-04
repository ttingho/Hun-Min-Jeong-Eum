import React, { Component } from 'react';
import LookBoard from 'components/LookBoard/LookBoard';
import { withRouter } from 'react-router-dom';

class LookBoardContainer extends Component {
  constructor (props){
    super(props);
    this.state = {};
  }

  goingBack = () => {
    this.props.history.push('');
  }

  render () {
    return (
      <div>
        <LookBoard
          goingBack={this.goingBack}
        >
        </LookBoard>
      </div>
    );
  }
}

export default withRouter(LookBoardContainer);