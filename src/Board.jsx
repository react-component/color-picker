'use strict';
import Colr from 'colr';
import React from 'react';
import event from 'eventlistener';
import prefixClsFn from './utils/prefixClsFn';

let colr = new Colr();

const width = 200;
const height = 150;

export default class Board extends React.Component {
  constructor(props) {
    super(props);

    let HSV = colr.fromHex(props.defaultColor).toHsvObject();

    this.HSV = HSV;

    let hueHsv = [HSV.h, 100, 100];
    let hueColor = colr.fromHsvArray(hueHsv).toHex();

    let x = HSV.s / 100 * width - 4;
    let y = (1 - HSV.v / 100) * height - 4;

    this.state = {
      hueColor,
      x,
      y,
      defaultColor: props.defaultColor,
      hue: props.hue,
      alpha: props.alpha,
      prefixCls: props.prefixCls
    };

    this.prefixClsFn = prefixClsFn.bind(this);
    let events = [
      'handleBoardMouseDown',
      'handleBoardDrag',
      'handleBoardDragEnd',
      'pointMoveTo',
      '_updateBackgroundColor',
      '_onChange',
      '_drawBoard'
    ];
    // bind methods
    events.forEach(m => {
      this[m] = this[m].bind(this);
    });

    this._cacheColors = {};
  }

  componentWillUpdate(nextProps) {
    if (nextProps.defaultColor !== this.props.defaultColor) {
      this._drawBoard(nextProps.defaultColor);
    }
    if (nextProps.hue !== this.props.hue) {
      this._updateBackgroundColor(nextProps.hue);
    }
    if (nextProps.alpha !== this.props.alpha) {
      this.setState({
        alpha: nextProps.alpha
      });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.x !== this.state.x) {
      return true;
    }
    if (nextState.y !== this.state.y) {
      return true;
    }
    if (nextProps.hue !== this.props.hue) {
      return true;
    }
    if (nextProps.alpha !== this.props.alpha) {
      return true;
    }
    if (nextProps.defaultColor !== this.props.defaultColor) {
      return true;
    }
    return false;
  }

  handleBoardMouseDown(e) {
    let x = e.clientX, y = e.clientY;
    this.pointMoveTo({
      x, y
    });
    event.add(window, 'mousemove', this.handleBoardDrag);
    event.add(window, 'mouseup', this.handleBoardDragEnd);
  }

  handleBoardDrag(e) {
    let x = e.clientX, y = e.clientY;
    this.pointMoveTo({
      x, y
    });
  }

  handleBoardDragEnd(e) {
    let x = e.clientX, y = e.clientY;
    this.pointMoveTo({
      x, y
    });
    event.remove(window, 'mousemove', this.handleBoardDrag);
    event.remove(window, 'mouseup', this.handleBoardDragEnd);
  }
  /**
   * 移动光标位置到
   * @param  {object} pos X Y 全局坐标点
   * @return {undefined}
   */
  pointMoveTo(pos) {
    let rect = React.findDOMNode(this).getBoundingClientRect();
    let left = pos.x - rect.left;
    let top = pos.y - rect.top;

    left = Math.max(0, left);
    left = Math.min(left, width);
    top = Math.max(0, top);
    top = Math.min(top, height);

    let x = left - 4;
    let y = top - 4;

    this.setState({x, y});

    let hsv = {
      h: this.HSV.h,
      s: parseInt(left / width * 100),
      v: parseInt((1 - top / height) * 100)
    };
    let colorObject = this.getColorsFromHsv(hsv);
    this.HSV = colorObject.hsv;

    this._onChange(colorObject);
  }

  getColorsFromHsv(oHsv) {
    let color = colr.fromHsvObject(oHsv);
    let hex = color.toHex();
    let rgb = color.toRgbObject();
    let hsv = color.toHsvObject();
    let hsl = color.toHslObject();
    let rgba = color.toRgbArray();
    rgba.push(this.state.alpha / 100);
    rgba = 'rbga(' + rgba.join(',') + ')';
    return {
      hex, rgb, hsv, hsl, rgba
    };
  }

  _drawBoard(hex) {
    let HSV = colr.fromHex(hex).toHsvObject();
    // 计算起始坐标
    this.HSV = HSV;
    this.setState({
      hex: HSV.h
    });
    let x = HSV.s / 100 * width - 4;
    let y = (1 - HSV.v / 100) * height - 4;

    this.setState({x, y});

    this._rendderHueColor(HSV.h);
    return HSV;
  }

  _rendderHueColor(hue) {
    let hsv = [hue, 100, 100];
    let rgb = colr.fromHsvArray(hsv).toHex();
    this.setState({
      hueColor: rgb
    });
  }

  _updateBackgroundColor(hue) {
    this._rendderHueColor(hue);
    let hsv = {h: hue, s: this.HSV.s, v: this.HSV.v};
    let colorObject = this.getColorsFromHsv(hsv);
    this.HSV = colorObject.hsv;
    if (this.props.onChange) {
      this.props.onChange(colorObject);
    }
  }

  _onChange(colors) {
    if (colors.hex === this._cacheColors.hex) {
      return false;
    }
    this._cacheColors = colors;

    if (this.props.onChange) {
      this.props.onChange(colors);
    }
  }

  render() {
    return (
      <div className={this.props.prefixCls}>
        <div className={this.prefixClsFn('hsv')} style={{backgroundColor: this.state.hueColor}}>
          <div className={this.prefixClsFn('value')}/>
          <div className={this.prefixClsFn('saturation')}/>
        </div>
        <span ref='point' style={{'left': this.state.x, 'top': this.state.y}} />
        <div
          className={this.prefixClsFn('handler')}
          onMouseDown={this.handleBoardMouseDown}
        />
      </div>
    );
  }
}
import typeColor from './utils/validationColor';
Board.propTypes = {
  defaultColor: typeColor,
  alpha: React.PropTypes.number,
  hue: React.PropTypes.number,
  prefixCls: React.PropTypes.string
};

Board.defaultProps = {
  defaultColor: '#F00',
  alpha: 100,
  hue: 0,
  prefixCls: 'react-colorpicker-board'
};
