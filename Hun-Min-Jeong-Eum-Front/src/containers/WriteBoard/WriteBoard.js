import React, { Component, Fragment } from 'react';
import style from './WriteBoard.scss';
import classNames from 'classnames/bind';
import { IconContext } from 'react-icons';
import { MdClose, MdPhotoSizeSelectActual, MdBrush, MdFileDownload, MdUndo } from 'react-icons/md';
import CanvasDraw from 'react-canvas-draw';
// import {SketchField, Tools} from 'react-sketch';
import { withRouter } from 'react-router-dom';

const cx = classNames.bind(style);

class WriteBoard extends Component {
  constructor (props) {
    super(props);
    this.state = {
      colorPick: '#FFFFFF',
      BackImg: 'http://image.news1.kr/system/photos/2018/8/29/3274576/article.jpg'
    };
  }
  onChangeColor = (e) => {
    this.setState({
      colorPick: e.target.value
    });
  }
  onChangeUndo = () => {
    this.saveableCanvas.undo();
  }
  onClickMainPage = () => {
    this.props.history.push('/');
  }
  render () {
    return (
      <Fragment>
        <div className={ cx('WriteBoard') }>
          <div className={ cx('WriteBoard-Header') }>
            <IconContext.Provider value={{ color: 'white', size: '3rem', className: 'MdButton' }}>
              <MdClose onClick={ this.onClickMainPage } />
            </IconContext.Provider>
            <IconContext.Provider value={{ color: 'white', size: '3rem', className: 'MdButton' }}>
              <MdPhotoSizeSelectActual />
            </IconContext.Provider>
            <IconContext.Provider value={{ color: 'white', size: '3rem', className: 'MdButton' }}>
              <MdUndo onClick={() => {
                this.saveableCanvas.undo();
              }} />
            </IconContext.Provider>
            <div className={ cx('draw') }>
              <IconContext.Provider value={{ color: this.state.colorPick, size: '3rem', className: 'MdButton' }}>
                <MdBrush />
              </IconContext.Provider>
              <div className={ cx('ColorPicker') }>
                <input className={ cx('color1') } type='button' value='#000000' onClick={ this.onChangeColor } />
                <input className={ cx('color2') } type='button' value='#FF0000' onClick={ this.onChangeColor } />
                <input className={ cx('color3') } type='button' value='#5A5AFF' onClick={ this.onChangeColor } />
                <input className={ cx('color4') } type='button' value='#FFC81E' onClick={ this.onChangeColor } />
                <input className={ cx('color5') } type='button' value='#FFFFFF' onClick={ this.onChangeColor } />
              </div>
            </div>
            <IconContext.Provider value={{ color: 'white', size: '3rem', className: 'MdButton' }}>
              <MdFileDownload />
            </IconContext.Provider>
          </div>
          <div className={ cx('WriteBoard-Contents') }>
            <CanvasDraw
              brushRadius={ 5 }
              brushColor={ this.state.colorPick }
              catenaryColor={ this.state.colorPick }
              canvasWidth={ 1900 }
              canvasHeight={ 850 }
              hideGrid={ true }
              imgSrc={ this.state.BackImg }
              ref={canvasDraw => (this.loadableCanvas = canvasDraw)}
            />
            {/* <SketchField
              width={ 1900 }
              height={ 850 }
              tool={ Tools.Pencil }
              lineColor={ this.state.colorPick }
              lineWidth={ 5 }
              imageFormat={ this.state.BackImg }
            /> */}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default withRouter(WriteBoard);