import React from 'react';
import PropTypes from 'prop-types';
import tinycolor from 'tinycolor2';
import cx from 'classnames';

const modesMap = ['RGB', 'HSB', 'HSL'];

export default class Params extends React.Component {
  constructor(props) {
    super(props);

    // 管理 input 的状态
    this.state = {
      mode: props.mode,
      hex: props.color.toHex(),
      color: props.color, // instanceof tinycolor
    };
  }

  componentWillReceiveProps(nextProps) {
    const { color: nextColor } = nextProps;
    const { color: prevColor } = this.props;
    // TODO compare color
    if (nextColor.toHex() !== prevColor.toHex()) {
      this.setState({
        color: nextColor,
        hex: nextColor.toHex(),
      });
    }
  }

  onHexHandler = event => {
    const hex = event.target.value;
    let color = null;
    try {
      // TODO check valid color
      color = tinycolor(hex);
    } catch (e) {
      /* eslint no-empty:0 */
    }

    if (color !== null) {
      this.setState({
        color,
        hex,
      });
      this.props.onChange(color, false);
    } else {
      this.setState({
        hex,
      });
    }
  };

  onModeChange = () => {
    let mode = this.state.mode;
    const modeIndex = (modesMap.indexOf(mode) + 1) % modesMap.length;
    const state = this.state;

    mode = modesMap[modeIndex];
    const colorChannel = this.getColorChannel(state.color, mode);

    this.setState({
      mode,
      colorChannel,
    });
  };

  onAlphaHandler = event => {
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
  };

  onColorChannelChange = (index, event) => {
    const value = this.getChannelInRange(event.target.value, index);
    const colorChannel = this.getColorChannel();
    const colorChannelPer = this.channelConversionPercentage(colorChannel);

    colorChannelPer[index] = value;

    const color = this.getColorByChannel(colorChannelPer);

    this.setState({
      hex: color.toHex(),
      color,
    });
    this.props.onChange(color.toHsv(), false);
  };

  getChannelInRange = (value, index) => {
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
  };

  getColorByChannel = colorChannel => {
    const { mode } = this.state;
    let colorInput;
    if (mode === 'HSB') {
      colorInput = {
        h: colorChannel[0],
        s: colorChannel[1] / 100,
        v: colorChannel[2] / 100,
      };
    } else if (mode === 'HSL') {
      colorInput = {
        h: colorChannel[0],
        s: colorChannel[1] / 100,
        l: colorChannel[2] / 100,
      };
    } else {
      colorInput = {
        r: colorChannel[0],
        g: colorChannel[1],
        b: colorChannel[2],
      };
    }

    return tinycolor(colorInput);
  };

  getPrefixCls = () => {
    return `${this.props.rootPrefixCls}-params`;
  };

  getColorChannel = (colrInstance, mode) => {
    const color = colrInstance || this.state.color;
    const colorMode = mode || this.state.mode;
    let result;

    if (colorMode === 'HSB') {
      const hsv = color.toHsv();
      result = [hsv.h, hsv.s, hsv.v];
    } else if (colorMode === 'HSL') {
      const hsl = color.toHsl();
      result = [hsl.h, hsl.s, hsl.l];
    } else {
      const rgb = color.toRgb();
      result = [rgb.r, rgb.g, rgb.b];
    }

    return result;
  };

  channelConversionPercentage = colorChannel => {
    const { mode } = this.state;
    if (mode !== 'RGB') {
      return [
        Math.round(colorChannel[0]),
        Math.round(colorChannel[1] * 100),
        Math.round(colorChannel[2] * 100),
      ];
    }
    return colorChannel;
  };

  render() {
    const prefixCls = this.getPrefixCls();
    const colorChannel = this.getColorChannel();
    const colorChannelPer = this.channelConversionPercentage(colorChannel);

    const { enableAlpha } = this.props;
    const { mode } = this.state;

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
          <input
            type="number"
            ref="channel_0"
            value={colorChannelPer[0]}
            onChange={this.onColorChannelChange.bind(null, 0)}
          />
          <input
            type="number"
            ref="channel_1"
            value={colorChannelPer[1]}
            onChange={this.onColorChannelChange.bind(null, 1)}
          />
          <input
            type="number"
            ref="channel_2"
            value={colorChannelPer[2]}
            onChange={this.onColorChannelChange.bind(null, 2)}
          />
          {enableAlpha &&
            <input type="number" value={this.props.alpha} onChange={this.onAlphaHandler} />}
        </div>
        <div className={`${prefixCls}-lable`}>
          <label className={`${prefixCls}-lable-hex`}>Hex</label>
          <label className={`${prefixCls}-lable-number`} onClick={this.onModeChange}>
            {mode[0]}
          </label>
          <label className={`${prefixCls}-lable-number`} onClick={this.onModeChange}>
            {mode[1]}
          </label>
          <label className={`${prefixCls}-lable-number`} onClick={this.onModeChange}>
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
  color: PropTypes.object,
  mode: PropTypes.oneOf(modesMap),
  onAlphaChange: PropTypes.func,
  onChange: PropTypes.func,
  rootPrefixCls: PropTypes.string,
};

Params.defaultProps = {
  mode: modesMap[0],
  enableAlpha: true,
};
