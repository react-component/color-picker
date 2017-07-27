import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import addEventListener from 'rc-util/lib/Dom/addEventListener';
import tinycolor from 'tinycolor2';

export default class Ribbon extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
    this.removeListeners();
  }

  onMouseDown = e => {
    const x = e.clientX;
    const y = e.clientY;

    this.pointMoveTo({
      x,
      y,
    });

    this.dragListener = addEventListener(window, 'mousemove', this.onDrag);
    this.dragUpListener = addEventListener(window, 'mouseup', this.onDragEnd);
  };

  onDrag = e => {
    const x = e.clientX;
    const y = e.clientY;
    this.pointMoveTo({
      x,
      y,
    });
  };

  onDragEnd = e => {
    const x = e.clientX;
    const y = e.clientY;
    this.pointMoveTo({
      x,
      y,
    });
    this.removeListeners();
  };

  getPrefixCls = () => {
    return `${this.props.rootPrefixCls}-ribbon`;
  };

  pointMoveTo = coords => {
    const rect = ReactDOM.findDOMNode(this).getBoundingClientRect();
    const width = rect.width;
    let left = coords.x - rect.left;
    left = Math.max(0, left);
    left = Math.min(left, width);

    const huePercent = left / width;
    const hue = huePercent * 360;
    const HSV = this.props.color.toHsv();

    this.props.onChange(
      tinycolor({
        ...HSV,
        h: hue,
      }),
    );
  };

  removeListeners = () => {
    if (this.dragListener) {
      this.dragListener.remove();
      this.dragListener = null;
    }
    if (this.dragUpListener) {
      this.dragUpListener.remove();
      this.dragUpListener = null;
    }
  };

  render() {
    const prefixCls = this.getPrefixCls();
    const HSV = this.props.color.toHsv();
    const hue = HSV.h;
    const per = hue / 360 * 100;
    return (
      <div className={prefixCls}>
        <span ref="point" style={{ left: `${per}%` }} />
        <div className={`${prefixCls}-handler`} onMouseDown={this.onMouseDown} />
      </div>
    );
  }
}

Ribbon.propTypes = {
  rootPrefixCls: PropTypes.string,
  color: PropTypes.object,
  onChange: PropTypes.func,
};
