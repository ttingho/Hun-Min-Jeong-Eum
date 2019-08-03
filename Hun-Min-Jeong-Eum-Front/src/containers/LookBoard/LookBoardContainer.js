import React, { Component } from 'react';
import LookBoard from 'components/LookBoard/LookBoard';

class LookBoardContainer extends Component {
  constructor (props){
    super(props);
    this.state = {};
  }

  render () {
    return (
      <div>
        <LookBoard>
        </LookBoard>
      </div>
    );
  }
}

export default LookBoardContainer;