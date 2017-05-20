import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Colr from 'colr';
import addEventListener from 'rc-util/lib/Dom/addEventListener';

const colr = new Colr();

function rgbaColor(r, g, b, a) {
  return `rgba(${[r, g, b, a / 100].join(',')})`;
}

export default class Alpha extends React.Component {
  constructor(props) {
    super(props);
    const events = [
      'onMouseDown',
      'onDrag',
      'onDragEnd',
      'pointMoveTo',
      'getBackground',
    ];
    events.forEach(e => {
      this[e] = this[e].bind(this);
    });
  }

  componentWillUnmount() {
    this.removeListeners();
  }

  onMouseDown(e) {
    const x = e.clientX;
    const y = e.clientY;

    this.pointMoveTo({
      x, y,
    });

    this.dragListener = addEventListener(window, 'mousemove', this.onDrag);
    this.dragUpListener = addEventListener(window, 'mouseup', this.onDragEnd);
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
    this.removeListeners();
  }

  getBackground() {
    const { r, g, b } = colr.fromHsvObject(this.props.hsv).toRgbObject();
    const opacityGradient = `linear-gradient(to right, ${rgbaColor(r, g, b, 0)} , ${rgbaColor(r, g, b, 100)})`; // eslint-disable-line max-len
    return opacityGradient;
  }

  getPrefixCls() {
    return `${this.props.rootPrefixCls}-alpha`;
  }

  pointMoveTo(coords) {
    const rect = ReactDOM.findDOMNode(this).getBoundingClientRect();
    const width = rect.width;
    let left = coords.x - rect.left;

    left = Math.max(0, left);
    left = Math.min(left, width);

    const alpha = Math.floor(left / width * 100);

    this.props.onChange(alpha);
  }

  removeListeners() {
    if (this.dragListener) {
      this.dragListener.remove();
      this.dragListener = null;
    }
    if (this.dragUpListener) {
      this.dragUpListener.remove();
      this.dragUpListener = null;
    }
  }

  render() {
    const prefixCls = this.getPrefixCls();
    return (
      <div className={prefixCls}>
        <div
          ref="bg"
          className={`${prefixCls}-bg`}
          style={{ background: this.getBackground() }}
        />
        <span style={{ left: `${this.props.alpha}%` }}/>

        <div
          className={`${prefixCls}-handler`}
          onMouseDown={this.onMouseDown}
        />
      </div>
    );
  }
}

Alpha.propTypes = {
  hsv: PropTypes.object,
  onChange: PropTypes.func,
  rootPrefixCls: PropTypes.string,
  alpha: PropTypes.number,
};
