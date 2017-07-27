import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import addEventListener from 'rc-util/lib/Dom/addEventListener';
import tinycolor from 'tinycolor2';

const WIDTH = 200;
const HEIGHT = 150;

export default class Board extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
    this.removeListeners();
    this.removeTouchListeners();
  }

  onBoardMouseDown = e => {
    const x = e.clientX;
    const y = e.clientY;
    this.pointMoveTo({
      x,
      y,
    });
    this.dragListener = addEventListener(window, 'mousemove', this.onBoardDrag);
    this.dragUpListener = addEventListener(window, 'mouseup', this.onBoardDragEnd);
  };

  onBoardTouchStart = e => {
    if (e.touches.length !== 1) {
      return;
    }

    const x = e.targetTouches[0].clientX;
    const y = e.targetTouches[0].clientY;
    this.pointMoveTo({
      x,
      y,
    });
    this.touchMoveListener = addEventListener(window, 'touchmove', this.onBoardTouchMove);
    this.touchEndListener = addEventListener(window, 'touchend', this.onBoardTouchEnd);
  };

  onBoardTouchMove = e => {
    if (e.preventDefault) {
      e.preventDefault();
    }

    const x = e.targetTouches[0].clientX;
    const y = e.targetTouches[0].clientY;
    this.pointMoveTo({
      x,
      y,
    });
  };

  onBoardTouchEnd = () => {
    this.removeTouchListeners();
  };

  onBoardDrag = e => {
    const x = e.clientX;
    const y = e.clientY;
    this.pointMoveTo({
      x,
      y,
    });
  };

  onBoardDragEnd = e => {
    const x = e.clientX;
    const y = e.clientY;
    this.pointMoveTo({
      x,
      y,
    });
    this.removeListeners();
  };

  getPrefixCls = () => {
    return `${this.props.rootPrefixCls}-board`;
  };

  removeTouchListeners = () => {
    if (this.touchMoveListener) {
      this.touchMoveListener.remove();
      this.touchMoveListener = null;
    }
    if (this.touchEndListener) {
      this.touchEndListener.remove();
      this.touchEndListener = null;
    }
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

  /**
   * 移动光标位置到
   * @param  {object} pos X Y 全局坐标点
   * @return {undefined}
   */
  pointMoveTo = pos => {
    const rect = ReactDOM.findDOMNode(this).getBoundingClientRect();
    let left = pos.x - rect.left;
    let top = pos.y - rect.top;

    left = Math.max(0, left);
    left = Math.min(left, WIDTH);
    top = Math.max(0, top);
    top = Math.min(top, HEIGHT);

    const hsv = this.props.color.toHsv();

    this.props.onChange(
      tinycolor({
        h: hsv.h,
        s: left / WIDTH,
        v: 1 - top / HEIGHT,
      }),
    );
  };

  render() {
    const prefixCls = this.getPrefixCls();
    const color = this.props.color;
    const hsv = color.toHsv();
    const hueHsv = {
      h: hsv.h,
      s: 1,
      v: 1,
    };
    const hueColor = tinycolor(hueHsv).toHexString();
    const x = hsv.s * WIDTH - 4;
    const y = (1 - hsv.v) * HEIGHT - 4;

    return (
      <div className={prefixCls}>
        <div className={`${prefixCls}-hsv`} style={{ backgroundColor: hueColor }}>
          <div className={`${prefixCls}-value`} />
          <div className={`${prefixCls}-saturation`} />
        </div>
        <span style={{ left: x, top: y }} />

        <div
          className={`${prefixCls}-handler`}
          onMouseDown={this.onBoardMouseDown}
          onTouchStart={this.onBoardTouchStart}
        />
      </div>
    );
  }
}

/**
 * hsv
 * h: range(1, 360)
 * s: range(0, 1)
 * v: range(0, 1)
 */

Board.propTypes = {
  color: PropTypes.object,
  onChange: PropTypes.func,
  rootPrefixCls: PropTypes.string,
};
