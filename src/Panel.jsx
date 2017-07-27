import React from 'react';
import PropTypes from 'prop-types';
import tinycolor from 'tinycolor2';

import Board from './Board';
import Preview from './Preview';
import Ribbon from './Ribbon';
import Alpha from './Alpha';
import Params from './Params';

import cx from 'classnames';

function noop() {}

export default class Panel extends React.Component {
  constructor(props) {
    super(props);

    const color = tinycolor(props.color || props.defaultColor);

    const alpha = typeof props.alpha === 'undefined'
      ? props.defaultAlpha
      : Math.min(props.alpha, props.defaultAlpha);

    this.state = {
      color,
      alpha,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.color) {
      const color = tinycolor(nextProps.color);
      this.setState({
        color,
      });
    }
    if (nextProps.alpha !== undefined) {
      this.setState({
        alpha: nextProps.alpha,
      });
    }
  }

  /**
   * color change
   * @param  {Object}  color      tinycolor instance
   * @param  {Boolean} syncParams Sync to <Params />
   */
  onChange = (color, syncParams = true) => {
    this.setState({ color });

    // TODO change
  };

  onSystemColorPickerOpen = e => {
    // only work with broswer which support color input
    if (e.target.type === 'color') {
      this.systemColorPickerOpen = true;
    }
  };

  onAlphaChange = alpha => {
    if (this.props.alpha === undefined) {
      this.setState({
        alpha,
      });
    }
    this.props.onChange({
      color: this.state.color,
      alpha,
    });
  };

  onFocus = () => {
    if (this._blurTimer) {
      clearTimeout(this._blurTimer);
      this._blurTimer = null;
    } else {
      this.props.onFocus();
    }
  };

  onBlur = () => {
    if (this._blurTimer) {
      clearTimeout(this._blurTimer);
    }
    this._blurTimer = setTimeout(() => {
      // if is system color picker open, then stop run blur
      if (this.systemColorPickerOpen) {
        this.systemColorPickerOpen = false;
        return;
      }

      this.props.onBlur();
    }, 100);
  };

  render() {
    const { prefixCls, enableAlpha } = this.props;
    const { color, alpha } = this.state;

    const wrapClasses = cx({
      [`${prefixCls}-wrap`]: true,
      [`${prefixCls}-wrap-has-alpha`]: enableAlpha,
    });

    return (
      <div
        className={[prefixCls, this.props.className].join(' ')}
        style={this.props.style}
        onFocus={this.onFocus}
        onBlur={this.onBlur}
        tabIndex="0"
      >
        <div className={`${prefixCls}-inner`}>
          <Board rootPrefixCls={prefixCls} color={color} onChange={this.onChange} />
          <div className={wrapClasses}>
            <div className={`${prefixCls}-wrap-ribbon`}>
              <Ribbon rootPrefixCls={prefixCls} color={color} onChange={this.onChange} />
            </div>
            {enableAlpha &&
              <div className={`${prefixCls}-wrap-alpha`}>
                <Alpha
                  rootPrefixCls={prefixCls}
                  alpha={alpha}
                  color={color}
                  onChange={this.onAlphaChange}
                />
              </div>}
            <div className={`${prefixCls}-wrap-preview`}>
              <Preview
                rootPrefixCls={prefixCls}
                alpha={alpha}
                onChange={this.onChange}
                onInputClick={this.onSystemColorPickerOpen}
                color={color}
              />
            </div>
          </div>
          <div className={`${prefixCls}-wrap`} style={{ height: 40, marginTop: 6 }}>
            <Params
              rootPrefixCls={prefixCls}
              color={color}
              alpha={alpha}
              onAlphaChange={this.onAlphaChange}
              onChange={this.onChange}
              mode={this.props.mode}
              enableAlpha={this.props.enableAlpha}
            />
          </div>
        </div>
      </div>
    );
  }
}

import typeColor from './utils/validationColor';

Panel.propTypes = {
  alpha: PropTypes.number,
  className: PropTypes.string,
  color: typeColor, // Hex string
  defaultAlpha: PropTypes.number,
  defaultColor: typeColor, // Hex string
  enableAlpha: PropTypes.bool,
  mode: PropTypes.oneOf(['RGB', 'HSL', 'HSB']),
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  prefixCls: PropTypes.string,
  style: PropTypes.object,
};

Panel.defaultProps = {
  className: '',
  defaultAlpha: 100,
  defaultColor: '#ff0000',
  enableAlpha: true,
  mode: 'RGB',
  onBlur: noop,
  onChange: noop,
  onFocus: noop,
  prefixCls: 'rc-color-picker-panel',
  style: {},
};
