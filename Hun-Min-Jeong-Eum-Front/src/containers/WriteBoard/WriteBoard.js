import React, { Component } from 'react';
import './WriteBoard.scss';
import cancle from '../../images/Icon/cancle.png';
import bring from '../../images/Icon/bring.png';
import pen from '../../images/Icon/pen.png';
import highlight from '../../images/Icon/highlight.png';
import eraser from '../../images/Icon/eraser.png';
import save from '../../images/Icon/save.png';
import Canvas from '../Canvas';

class WriteBoard extends Component {
  render () {
    return (
      <div className="WriteBoard">
        <div className="WriteBoard-header">
          <img className="WriteBoard-header-cancle" src={cancle} alt=""/>
          <img className="WriteBoard-header-bring" src={bring} alt=""/>
          <div className="WriteBoard-header-tools">
            <img className="WriteBoard-header-tools-pen" src={pen} alt=""/>
            <img className="WriteBoard-header-tools-highlight" src={highlight} alt=""/>
            <img className="WriteBoard-header-tools-eraser" src={eraser} alt=""/>
            <div className="WriteBoard-header-tools-Color">
              <div className="WriteBoard-header-tools-Color-current">
                <div className="WriteBoard-header-tools-Color-current-detail"></div>
              </div>
              <div className="WriteBoard-header-tools-Color-black"></div>
              <div className="WriteBoard-header-tools-Color-red"></div>
              <div className="WriteBoard-header-tools-Color-blue"></div>
            </div>
          </div>
          <img className="WriteBoard-header-save" src={save} alt=""/>
        </div>
        <div className="WriteBoard-contents">
          <div className="WriteBoard-contents-box">
            <Canvas />
          </div>
        </div>
      </div>
    );
  }
}

export default WriteBoard;