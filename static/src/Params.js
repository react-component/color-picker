'use es6';

import React from 'react';
import Colr from 'colr';

const colr = new Colr();
const modesMap = ['RGB', 'HSB', 'HSL'];

export default class Params extends React.Component {

  constructor(props) {
    super(props);

    const color = colr.fromHsvObject(props.hsv);

    // 管理 input 的状态
    this.state = {
      mode: props.mode,
      color: color,
      hex: color.toHex().substr(1),
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
      const color = colr.fromHsvObject(nextProps.hsv);
      this.setState({
        hex: color.toHex().substr(1),
        color,
      });
    }
  }

  onHexHandler(event) {
    const value = event.target.value;
    let color = null;
    try {
      color = Colr.fromHex(value);
    } catch (e) {
      /* eslint no-empty:0 */
    }

    if (color !== null) {
      this.setState({
        color,
        hex: value,
      });
      this.props.onChange(color.toHsvObject(), false);
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
      hex: color.toHex().substr(1),
      color,
    });
    this.props.onChange(color.toHsvObject(), false);
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
      color = colr.fromRgbArray(colorChannel);
      break;
    case 'HSB' :
      color = colr.fromHsvArray(colorChannel);
      break;
    case 'HSL' :
      color = colr.fromHslArray(colorChannel);
      break;
    default:
      color = colr.fromRgbArray(colorChannel);
    }
    return color;
  }

  getPrefixCls() {
    return this.props.rootPrefixCls + '-params';
  }

  getColorChannel(colrInstance, mode) {
    const color = colrInstance || this.state.color;
    const colorMode = mode || this.state.mode;
    let result;
    switch (colorMode) {
    case 'RGB' :
      result = color.toRgbArray();
      break;
    case 'HSB' :
      result = color.toHsvArray();
      break;
    case 'HSL' :
      result = color.toHslArray();
      break;
    default:
      result = color.toRgbArray();
    }
    return result;
  }

  render() {
    const prefixCls = this.getPrefixCls();
    const colorChannel = this.getColorChannel();
    return (
      <div className={prefixCls}>
        <div className={prefixCls + '-' + ('input')}>
          <input
            className={prefixCls + '-' + ('hex')}
            type="text"
            maxLength="6"
            onChange={this.onHexHandler}
            value={this.state.hex.toUpperCase()}
            />
          <input type="number" ref="channel_0"
                 value={colorChannel[0]}
                 onChange={this.onColorChannelChange.bind(null, 0)}/>
          <input type="number" ref="channel_1"
                 value={colorChannel[1]}
                 onChange={this.onColorChannelChange.bind(null, 1)}/>
          <input type="number" ref="channel_2"
                 value={colorChannel[2]}
                 onChange={this.onColorChannelChange.bind(null, 2)}/>
          <input type="number"
                 value={this.props.alpha}
                 onChange={this.onAlphaHandler}/>
        </div>
        <div className={prefixCls + '-' + ('lable')}>
           <label className={prefixCls + '-' + ('lable-hex')}>Hex</label>
           <label className={prefixCls + '-' + ('lable-number')}
            onClick={this.onModeChange}
           >
            {this.state.mode[0]}
           </label>
           <label className={prefixCls + '-' + ('lable-number')}
            onClick={this.onModeChange}
           >
            {this.state.mode[1]}
           </label>
           <label className={prefixCls + '-' + ('lable-number')}
            onClick={this.onModeChange}
           >
            {this.state.mode[2]}
           </label>
           <label className={prefixCls + '-' + ('lable-alpha')}>A</label>
        </div>
      </div>
    );
  }
}

Params.propTypes = {
  onChange: React.PropTypes.func,
  hsv: React.PropTypes.object,
  alpha: React.PropTypes.number,
  rootPrefixCls: React.PropTypes.string,
  onAlphaChange: React.PropTypes.func,
  mode: React.PropTypes.oneOf(modesMap),
};

Params.defaultProps = {
  mode: modesMap[0],
};
