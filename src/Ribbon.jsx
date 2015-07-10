'use strict';

import React from 'react';
import Colr from 'colr';
import event from 'eventlistener';
import prefixClsFn from './utils/prefixClsFn';

let colr = new Colr();

export default class Ribbon extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      prefixCls: props.prefixCls,
      defaultColor: props.defaultColor
    };

    this.prefixClsFn = prefixClsFn.bind(this);

    let events = [
      'handleMouseDown',
      'handledDrag',
      'handledDragEnd',
      'pointMoveTo',
      '_setHuePosition'
    ];
    events.forEach(e => {
      this[e] = this[e].bind(this);
    });
  }

  componentDidMount() {
    this._setHuePosition(this.state.defaultColor);
  }

  componentWillReceiveProps(nextProps) {
    // 接收 defaultColor 响应当前坐标位置
    if (nextProps.defaultColor !== this.props.defaultColor) {
      this._setHuePosition(nextProps.defaultColor);
    }
  }

  _setHuePosition(hex) {
    let HSV = colr.fromHex(hex).toHsvObject();
    let hue = HSV.h;
    let per = hue / 360 * 100;
    this.setState({
      huePercent: per
    });
  }

  pointMoveTo(coords) {
    let rect = React.findDOMNode(this).getBoundingClientRect();
    let width = rect.width;
    let left = coords.x - rect.left;

    left = Math.max(0, left);
    left = Math.min(left, width);

    let huePercent = left / width;
    let hue = huePercent * 360;

    huePercent = huePercent * 100;

    this.setState({
      huePercent: huePercent
    });

    this.props.onHexChange(hue);
  }

  handleMouseDown(e) {
    let x = e.clientX, y = e.clientY;

    this.pointMoveTo({
      x, y
    });

    event.add(window, 'mousemove', this.handledDrag);
    event.add(window, 'mouseup', this.handledDragEnd);
  }

  handledDrag(e) {
    let x = e.clientX, y = e.clientY;
    this.pointMoveTo({
      x, y
    });
  }

  handledDragEnd(e) {
    let x = e.clientX, y = e.clientY;
    this.pointMoveTo({
      x, y
    });
    event.remove(window, 'mousemove', this.handledDrag);
    event.remove(window, 'mouseup', this.handledDragEnd);
  }

  render() {
    return (
      <div className={this.props.prefixCls}>
        <span ref="point" style={{left: this.state.huePercent + '%'}}></span>
        <div
          className={this.prefixClsFn('handler')}
          onMouseDown={this.handleMouseDown}
        ></div>
      </div>
    );
  }
}

Ribbon.propTypes = {
  prefixCls: React.PropTypes.string,
  defaultColor: React.PropTypes.string,
  onHexChange: React.PropTypes.func
};

Ribbon.defaultProps = {
  prefixCls: 'react-colorpicker-ribbon',
  defaultColor: '#f00',
  onHexChange() {}
};

module.exports = Ribbon;
