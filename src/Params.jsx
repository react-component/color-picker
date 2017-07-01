import React from 'react';
import PropTypes from 'prop-types';
import tinycolor from 'tinycolor2';
import cx from 'classnames';

const modesMap = ['RGB', 'HSB', 'HSL'];

const conversionPercentage = (value = 0) => {
  if (value <= 1) {
    return Math.floor(Math.min(100, value * 100));
  }
  return value;
};

export default class Params extends React.Component {

  constructor(props) {
    super(props);

    const color = tinycolor(props.hsv);

    // 管理 input 的状态
    this.state = {
      mode: props.mode,
      color, // instanceof tinycolor
      hex: color.toHex(),
    };

    const events = [
      'onHexHandler',
      'onAlphaHandler',
      'onColorChannelChange',
      'onModeChange',
      'getChannelInRange',
      'getColorByChannel',
    ];

    events.forEach(e => {
      if (this[e]) {
        this[e] = this[e].bind(this);
      }
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.hsv !== this.props.hsv) {
      const color = tinycolor(nextProps.hsv);
      this.setState({
        hex: color.toHex(),
        color,
      });
    }
  }

  onHexHandler(event) {
    const value = event.target.value;
    let color = null;
    try {
      color = tinycolor(value);
    } catch (e) {
      /* eslint no-empty:0 */
    }

    if (color !== null) {
      this.setState({
        color,
        hex: value,
      });
      this.props.onChange(color.toHsv(), false);
    } else {
      this.setState({
        hex: value,
      });
    }
  }

  onModeChange() {
    let mode = this.state.mode;
    const modeIndex = (modesMap.indexOf(mode) + 1) % modesMap.length;
    const state = this.state;

    mode = modesMap[modeIndex];
    const colorChannel = this.getColorChannel(state.color, mode);
    this.setState({
      mode,
      colorChannel,
    });
  }

  onAlphaHandler(event) {
    let alpha = parseInt(event.target.value, 10);
    if (isNaN(alpha)) {
      alpha = 0;
    }
    alpha = Math.max(0, alpha);
    alpha = Math.min(alpha, 100);

    this.setState({
      alpha,
    });

    this.props.onAlphaChange(alpha);
  }

  onColorChannelChange(index, event) {
    const value = this.getChannelInRange(event.target.value, index);
    const colorChannel = this.getColorChannel();

    colorChannel[index] = value;

    const color = this.getColorByChannel(colorChannel);

    this.setState({
      hex: color.toHex(),
      color,
    });
    this.props.onChange(color.toHsv(), false);
  }

  getChannelInRange(value, index) {
    const channelMap = {
      RGB: [[0, 255], [0, 255], [0, 255]],
      HSB: [[0, 360], [0, 100], [0, 100]],
      HSL: [[0, 360], [0, 100], [0, 100]],
    };
    const mode = this.state.mode;
    const range = channelMap[mode][index];
    let result = parseInt(value, 10);
    if (isNaN(result)) {
      result = 0;
    }
    result = Math.max(range[0], result);
    result = Math.min(result, range[1]);
    return result;
  }

  getColorByChannel(colorChannel) {
    const colorMode = this.state.mode;
    let color;
    switch (colorMode) {
      case 'RGB' :
        color = tinycolor(colorChannel);
        break;
      case 'HSB' :
        color = tinycolor(colorChannel);
        break;
      case 'HSL' :
        color = tinycolor(colorChannel);
        break;
      default:
        color = tinycolor(colorChannel);
    }
    return color;
  }

  getPrefixCls() {
    return `${this.props.rootPrefixCls}-params`;
  }

  getColorChannel(colrInstance, mode) {
    const color = colrInstance || this.state.color;
    const colorMode = mode || this.state.mode;
    let result;
    switch (colorMode) {
      case 'RGB' :
        result = color.toRgb();
        break;
      case 'HSB' :
        result = color.toHsv();
        break;
      case 'HSL' :
        result = color.toHsl();
        break;
      default:
        result = color.toRgb();
    }
    return result;
  }

  render() {
    const prefixCls = this.getPrefixCls();
    const colorChannel = this.getColorChannel();
    const { enableAlpha } = this.props;
    let { mode } = this.state;

    mode = mode.toLowerCase();

    if (mode === 'hsb') {
      mode = 'hsv';
    }

    const paramsClasses = cx({
      [prefixCls]: true,
      [`${prefixCls}-has-alpha`]: enableAlpha,
    });

    return (
      <div className={paramsClasses}>
        <div className={`${prefixCls}-input`}>
          <input
            className={`${prefixCls}-hex`}
            type="text"
            maxLength="6"
            onChange={this.onHexHandler}
            value={this.state.hex.toUpperCase()}
          />
          <input type="number" ref="channel_0"
            value={colorChannel[mode[0]]}
            onChange={this.onColorChannelChange.bind(null, 0)}
          />
          <input type="number" ref="channel_1"
            value={conversionPercentage(colorChannel[mode[1]])}
            onChange={this.onColorChannelChange.bind(null, 1)}
          />
          <input type="number" ref="channel_2"
            value={conversionPercentage(colorChannel[mode[2]])}
            onChange={this.onColorChannelChange.bind(null, 2)}
          />
          {enableAlpha &&
            <input type="number"
              value={this.props.alpha}
              onChange={this.onAlphaHandler}
            />
          }
        </div>
        <div className={`${prefixCls}-lable`}>
          <label className={`${prefixCls}-lable-hex`}>Hex</label>
          <label className={`${prefixCls}-lable-number`}
            onClick={this.onModeChange}
          >
            {mode[0]}
          </label>
          <label className={`${prefixCls}-lable-number`}
            onClick={this.onModeChange}
          >
            {mode[1]}
          </label>
          <label className={`${prefixCls}-lable-number`}
            onClick={this.onModeChange}
          >
            {mode[2]}
          </label>
          {enableAlpha && <label className={`${prefixCls}-lable-alpha`}>A</label>}
        </div>
      </div>
    );
  }
}

Params.propTypes = {
  alpha: PropTypes.number,
  enableAlpha: PropTypes.bool,
  hsv: PropTypes.object,
  mode: PropTypes.oneOf(modesMap),
  onAlphaChange: PropTypes.func,
  onChange: PropTypes.func,
  rootPrefixCls: PropTypes.string,
};

Params.defaultProps = {
  mode: modesMap[0],
  enableAlpha: true,
};
