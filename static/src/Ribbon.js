'use es6';

import React from 'react';
import ReactDOM from 'react-dom';
import {extend} from 'underscore';

export default class Ribbon extends React.Component {
  constructor(props) {
    super(props);

    const events = [
      'onMouseDown',
      'onDrag',
      'onDragEnd',
      'pointMoveTo',
      '_setHuePosition',
    ];
    events.forEach(e => {
      if (this[e]) {
        this[e] = this[e].bind(this);
      }
    });
  }

  onMouseDown(e) {
    const x = e.clientX;
    const y = e.clientY;

    this.pointMoveTo({
      x, y,
    });

    this.dragListener = window.addEventListener(window, 'mousemove', this.onDrag);
    this.dragUpListener = window.addEventListener(window, 'mouseup', this.onDragEnd);
  }

  onDrag(e) {
    const x = e.clientX;
    const y = e.clientY;
    this.pointMoveTo({
      x, y,
    });
  }

  onDragEnd(e) {
    const x = e.clientX;
    const y = e.clientY;
    this.pointMoveTo({
      x, y,
    });
    if (this.dragListener) {
      this.dragListener.remove();
      this.dragListener = null;
    }
    if (this.dragUpListener) {
      this.dragUpListener.remove();
      this.dragUpListener = null;
    }
  }

  getPrefixCls() {
    return this.props.rootPrefixCls + '-ribbon';
  }

  pointMoveTo(coords) {
    const rect = ReactDOM.findDOMNode(this).getBoundingClientRect();
    const width = rect.width;
    let left = coords.x - rect.left;
    left = Math.max(0, left);
    left = Math.min(left, width);
    const huePercent = left / width;
    const hue = huePercent * 360;
    // 新的对象, 避免引用
    const hsv = extend({}, this.props.hsv, {
      h: hue,
    });
    this.props.onChange(hsv);
  }

  render() {
    const prefixCls = this.getPrefixCls();
    const HSV = this.props.hsv;
    const hue = HSV.h;
    const per = hue / 360 * 100;
    return (
      <div className={prefixCls}>
        <span ref="point" style={{left: per + '%'}}></span>

        <div
          className={prefixCls + '-' + ('handler')}
          onMouseDown={this.onMouseDown}
          ></div>
      </div>
    );
  }
}

Ribbon.propTypes = {
  rootPrefixCls: React.PropTypes.string,
  hsv: React.PropTypes.object,
  onChange: React.PropTypes.func,
};
