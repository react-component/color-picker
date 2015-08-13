import Colr from 'colr';
import React from 'react';
import rcUtil from 'rc-util';

const colr = new Colr();

const WIDTH = 200;
const HEIGHT = 150;

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    const events = [
      'onBoardMouseDown',
      'onBoardDrag',
      'onBoardDragEnd',
    ];
    events.forEach((m)=> {
      this[m] = this[m].bind(this);
    });
  }

  onBoardMouseDown(e) {
    const x = e.clientX;
    const y = e.clientY;
    this.pointMoveTo({
      x,
      y,
    });
    this.dragListener = rcUtil.Dom.addEventListener(window, 'mousemove', this.onBoardDrag);
    this.dragUpListener = rcUtil.Dom.addEventListener(window, 'mouseup', this.onBoardDragEnd);
  }

  onBoardDrag(e) {
    const x = e.clientX;
    const y = e.clientY;
    this.pointMoveTo({
      x,
      y,
    });
  }

  onBoardDragEnd(e) {
    const x = e.clientX;
    const y = e.clientY;
    this.pointMoveTo({
      x,
      y,
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
    return this.props.rootPrefixCls + '-board';
  }

  render() {
    const prefixCls = this.getPrefixCls();
    const hsv = this.props.hsv;
    const hueHsv = [hsv.h, 100, 100];
    const hueColor = colr.fromHsvArray(hueHsv).toHex();
    const x = hsv.s / 100 * WIDTH - 4;
    const y = (1 - hsv.v / 100) * HEIGHT - 4;
    return (
      <div className={prefixCls}>
        <div className={prefixCls + '-' + ('hsv')} style={{backgroundColor: hueColor}}>
          <div className={prefixCls + '-' + ('value')}/>
          <div className={prefixCls + '-' + ('saturation')}/>
        </div>
        <span style={{left: x, top: y}}/>

        <div
          className={prefixCls + '-' + ('handler')}
          onMouseDown={this.onBoardMouseDown}
          />
      </div>
    );
  }

  /**
   * 移动光标位置到
   * @param  {object} pos X Y 全局坐标点
   * @return {undefined}
   */
  pointMoveTo(pos) {
    const rect = React.findDOMNode(this).getBoundingClientRect();
    let left = pos.x - rect.left;
    let top = pos.y - rect.top;

    left = Math.max(0, left);
    left = Math.min(left, WIDTH);
    top = Math.max(0, top);
    top = Math.min(top, HEIGHT);

    const hsv = {
      h: this.props.hsv.h,
      s: parseInt(left / WIDTH * 100, 10),
      v: parseInt((1 - top / HEIGHT) * 100, 10),
    };
    this.props.onChange(hsv);
  }
}


Board.propTypes = {
  hsv: React.PropTypes.object,
  onChange: React.PropTypes.func,
  rootPrefixCls: React.PropTypes.string,
};
