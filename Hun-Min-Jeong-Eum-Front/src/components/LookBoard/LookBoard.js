import React from 'react';
import './LookBoard.scss';
import CanvasDraw from 'react-canvas-draw';

const LookBoard = ({ goingBack, changingColor, colorType }) => {
  return (
    <div className="LookBoard">
      <div className="LookBoard--content">
        <CanvasDraw 
          loadTimeOffset={5}
          lazyRadius={0}
          brushRadius={5}
          brushColor="#ff0000"
          catenaryColor="#ff0000"
          gridColor="#ffffff"
          hideGrid={true}
          canvasWidth={1812}
          canvasHeight={1007}
          disabled={false}
          imgSrc="https://cdnweb01.wikitree.co.kr/webdata/editor/201509/25/img_20150925174425_85b00840.jpg"
          saveData={null}
          immediateLoading={false}
          // {
          // ...(() => {
          //   if (colorType === 'black'){
          //     <CanvasDraw
          //       brushColor="#000000"
          //       catenaryColor="#000000"
          //     />;
          //   } else if (colorType === 'red'){
          //     <CanvasDraw
          //       brushColor="#ff0000"
          //       catenaryColor="#ff0000"
          //     />;
          //   } else if (colorType === 'blue'){
          //     <CanvasDraw
          //       brushColor="#0000ff"
          //       catenaryColor="#0000ff"
          //     />;
          //   }
          // })
          // }
        >
        </CanvasDraw>
      </div>
      <div className="LookBoard--equipBar">
        <button className="LookBoard--equipBar--pencil" name="parentButton"></button>
        <button className="LookBoard--equipBar--highlighter" name="parentButton"></button>
        <button className="LookBoard--equipBar--eraser" name="parentButton"></button>
        <div className="LookBoard--equipBar--colorButtons">
          <button className="LookBoard--equipBar--colorButtons--choosedColor" name="choosed"></button>
          <div className="LookBoard--equipBar--colorButtons--choosingButtons">
            <button className="LookBoard--equipBar--colorButtons--choosingButtons--black" name="choosing" id="black" onClick={(e) => changingColor(e)}></button>
            <button className="LookBoard--equipBar--colorButtons--choosingButtons--red" name="choosing" id="red" onClick={(e) => changingColor(e)}></button>
            <button className="LookBoard--equipBar--colorButtons--choosingButtons--blue" name="choosing" id="blue" onClick={(e) => changingColor(e)}></button>
          </div>
        </div>
        <button className="LookBoard--equipBar--goBack" onClick={goingBack} ></button>
        <button className="LookBoard--equipBar--saveButton"></button>
      </div>
    </div>
  );
};

export default LookBoard;