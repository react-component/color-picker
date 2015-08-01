'use strict';

import React from 'react';
import Colr from 'colr';
import event from 'eventlistener';
import prefixClsFn from './utils/prefixClsFn';

const colr = new Colr();

function rgbaColor(r, g, b, a) {
    return 'rgba(' + [r, g, b, a / 100].join(',') + ')';
  }

export default class Alpha extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      alpha: props.alpha,
      prefixCls: props.prefixCls,
      defaultColor: props.defaultColor,
      customColor: props.defaultColor
    };

    this.prefixClsFn = prefixClsFn.bind(this);

    let events = [
      'handleMouseDown',
      'handledDrag',
      'handledDragEnd',
      'pointMoveTo',
      'getBackground'
    ];
    events.forEach(e => {
      this[e] = this[e].bind(this);
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.customColor !== this.props.customColor) {
      this.setState({
        defaultColor: nextProps.customColor,
        customColor: nextProps.customColor
      });
    }
    if (nextProps.defaultColor !== this.props.defaultColor) {
      this.setState({
        defaultColor: nextProps.defaultColor,
        customColor: nextProps.defaultColor
      });
    }
    if (nextProps.alpha !== this.props.alpha) {
      this.setState({
        alpha: nextProps.alpha
      });
    }
  }

  getBackground() {
    let {r, g, b} = colr.fromHex(this.state.defaultColor).toRgbObject();
    let opacityGradient = 'linear-gradient(to right, ' +
      rgbaColor(r, g, b, 0) + ', ' +
      rgbaColor(r, g, b, 100) + ')';
    return opacityGradient;
  }

  pointMoveTo(coords) {
    let rect = React.findDOMNode(this).getBoundingClientRect();
    let width = rect.width;
    let left = coords.x - rect.left;

    left = Math.max(0, left);
    left = Math.min(left, width);

    let alpha = Math.floor(left / width * 100);

    this.setState({
      alpha: alpha
    });

    this.props.onAlphaChange(alpha);
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
        <div
          ref="bg"
          className={this.prefixClsFn('bg')}
          style={{background: this.getBackground()}}
        />
        <span ref="point" style={{left: this.state.alpha + '%'}} />
        <div
          className={this.prefixClsFn('handler')}
          onMouseDown={this.handleMouseDown}
        />
      </div>
    );
  }
}

let typeColor = require('./utils/validationColor');

Alpha.propTypes = {
  alpha: React.PropTypes.number,
  prefixCls: React.PropTypes.string,
  defaultColor: typeColor,
  customColor: typeColor,
  onAlphaChange: React.PropTypes.func
};

Alpha.defaultProps = {
  alpha: 100,
  prefixCls: 'react-colorpicker-alpha',
  defaultColor: '#f00',
  customColor: '#f00',
  onAlphaChange: function() {}
};
