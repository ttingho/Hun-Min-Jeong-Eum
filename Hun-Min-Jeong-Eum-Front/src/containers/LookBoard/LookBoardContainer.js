import React, { Component } from 'react';
import LookBoard from 'components/LookBoard/LookBoard';
import { withRouter } from 'react-router-dom';

class LookBoardContainer extends Component {
  constructor (props){
    super(props);
    this.state = {
      whatColor: 'black'
    };
  }

  goingBack = () => {
    this.props.history.push('/');
  }

  changingColor = e => {
    const colorType = e.target.id;
    console.log(colorType);
    this.setState({
      whatColor: e.target.id
    });
    console.log('스테이트', this.state.whatColor);
  }

  render () {
    return (
      <div>
        <LookBoard
          goingBack={this.goingBack}
          changingColor={this.changingColor}
          colorType={this.state.whatColor}
          // imageSrc={this.props.image}
          // soundTxt={this.props.soundTxt}
        >
        </LookBoard>
      </div>
    );
  }
}

export default withRouter(LookBoardContainer);