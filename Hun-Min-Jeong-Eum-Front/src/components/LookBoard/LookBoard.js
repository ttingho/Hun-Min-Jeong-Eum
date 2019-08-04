import React from 'react';
import './LookBoard.scss';

const LookBoard = ({ goingBack }) => {
  return (
    <div className="LookBoard">
      <div className="LookBoard--content">
        들어갈 내용들ㅇㅂㅇ
      </div>
      <div className="LookBoard--equipBar">
        <button className="LookBoard--equipBar--pencil" name="parentButton"></button>
        <button className="LookBoard--equipBar--highlighter" name="parentButton"></button>
        <button className="LookBoard--equipBar--eraser" name="parentButton"></button>
        <div className="LookBoard--equipBar--colorButtons">
          <button className="LookBoard--equipBar--colorButtons--choosedColor" name="choosed"></button>
          <div className="LookBoard--equipBar--colorButtons--choosingButtons">
            <button className="LookBoard--equipBar--colorButtons--choosingButtons--black" name="choosing"></button>
            <button className="LookBoard--equipBar--colorButtons--choosingButtons--red" name="choosing"></button>
            <button className="LookBoard--equipBar--colorButtons--choosingButtons--blue" name="choosing"></button>
          </div>
        </div>
        <button className="LookBoard--equipBar--goBack" onClick={goingBack} ></button>
        <button className="LookBoard--equipBar--saveButton"></button>
      </div>
    </div>
  );
};

export default LookBoard;