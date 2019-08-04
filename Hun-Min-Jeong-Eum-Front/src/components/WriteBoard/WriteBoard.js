import React, { Component } from 'react';
import './WriteBoard.scss';
import cancle from "../../images/Icon/cancle.png";
import bring from "../../images/Icon/bring.png";
import pen from "../../images/Icon/pen.png";
import highlight from "../../images/Icon/highlight.png";
import eraser from "../../images/Icon/eraser.png";
import save from "../../images/Icon/save.png";
import bringExample from "../../images/Icon/bringExample.png";


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
            <img className="WriteBoard-contents-box-textbook" src={bringExample} alt=""/>
            <div className="WriteBoard-contents-box-memo">
              <pre className="WriteBoard-contents-box-memo-inner">
                <p>여기서 while은</p>
                <p>시간을 나타내는</p>
                <p>접속사로 ~ 할 때</p>
                <p>라는 의미를 가진다.</p>
                <br/>
                <p>heritage의 뜻은</p>
                <p>세습, 재산, 상속</p>
                <p>등이 있다.</p>
              </pre>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WriteBoard;