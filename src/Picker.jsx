'use strict';

import React from 'react';
// 色板
import Board from './Board';
import Preview from './Preview';
import Ribbon from './Ribbon';
import Alpha from './Alpha';
import Params from './Params';
import prefixClsFn from './utils/prefixClsFn';

export default class Picker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      defaultColor: props.defaultColor,
      selectColor: props.defaultColor,
      customColor: props.defaultColor,
      prefixCls: props.prefixCls,
      style: props.style
    };

    this.prefixClsFn = prefixClsFn.bind(this);

    let events = [
      '_onChange',
      '_onHueChange',
      '_onHexChange',
      '_onAlphaChange',
      'handleFocus',
      'handlerBlur'
    ];
    // bind methods
    events.forEach(m => {
      this[m] = this[m].bind(this);
    });
  }

  /**
   * 颜色选取发生改变的回调
   * @param {object} colorsObj 回调的返回值
   * @param {string} colorsObj.hex 颜色的16进制 eg: #FFFFFF
   * @param {object} colorsObj.rgb RGB对应的数值
   * @param {object} colorsObj.hsv HSV对应的数值
   * @param {object} colorsObj.hsl HSL对应的数值
   * @return {undefined}
   */

  _onChange(colorsObj) {
    this.setState({
      selectColor: colorsObj.hex
    });

    if (typeof this.props.onChange === 'function') {
      this.props.onChange(colorsObj);
    }
  }

  _onHueChange(hue) {
    this.setState({hue});
  }

  _onHexChange(hex) {
    this.setState({
      defaultColor: hex,
      customColor: hex
    });
  }

  _onAlphaChange(alpha) {
    this.setState({
      alpha
    });
  }

  handleFocus() {
    if (this._blurTimer) {
      clearTimeout(this._blurTimer);
      this._blurTimer = null;
    } else {
      this.props.onFocus();
    }
  }

  handlerBlur() {
    if (this._blurTimer) {
      clearTimeout(this._blurTimer);
    }
    this._blurTimer = setTimeout(()=> {
      this.props.onBlur();
    }, 100);
  }

  render() {
    return (
      <div
        className={this.props.prefixCls}
        style={this.state.style}
        onFocus={this.handleFocus}
        onBlur={this.handlerBlur}
        tabIndex='0'
      >
        <div className={this.prefixClsFn('panel')}>
          <Board
            alpha={this.state.alpha}
            hue={this.state.hue}
            defaultColor={this.state.defaultColor}
            onChange={this._onChange}
          />
          <div className={this.prefixClsFn('wrap')}>
            <div className={this.prefixClsFn('wrap-ribbon')}>
              <Ribbon
                defaultColor={this.state.defaultColor}
                onHexChange={this._onHueChange}
              />
            </div>
            <div className={this.prefixClsFn('wrap-alpha')}>
              <Alpha
                alpha={this.state.alpha}
                defaultColor={this.state.selectColor}
                customColor={this.state.customColor}
                onAlphaChange={this._onAlphaChange}
              />
            </div>
            <div className={this.prefixClsFn('wrap-preview')}>
              <Preview
                alpha={this.state.alpha}
                defaultColor={this.state.selectColor}
                customColor={this.state.customColor}
              />
            </div>
          </div>
          <div className={this.prefixClsFn('wrap')} style={{height: 40, marginTop: 6}}>
            <Params
              defaultColor={this.state.selectColor}
              alpha={this.state.alpha}
              onAlphaChange={this._onAlphaChange}
              onHexChange={this._onHexChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

Picker.propTypes = {
  prefixCls: React.PropTypes.string,
  defaultColor: React.PropTypes.string,
  style: React.PropTypes.object,
  onChange: React.PropTypes.func,
  onFocus: React.PropTypes.func,
  onBlur: React.PropTypes.func
};

Picker.defaultProps = {
  prefixCls: 'react-colorpicker-picker',
  defaultColor: '#ff0000',
  style: {},
  onChange() {},
  onFocus() {},
  onBlur() {}
};
