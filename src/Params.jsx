import React from 'react';
import Colr from 'colr';
import store from 'store';

const colr = new Colr();
const modesMap = ['RGB', 'HSB', 'HSL'];

export default class Params extends React.Component {
  constructor(props) {
    super(props);
    this.modeIndex = store.get('react-colorspicker-mode') || 0;
    const mode = modesMap[this.modeIndex];

    const colorChannel = this.getColorChannel(props.color, mode);
    // 管理 input 的状态
    this.state = {
      mode: mode,
      hex: props.color.substr(1),
      colorChannel,
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
    if (nextProps.color !== this.props.color) {
      const colorChannel = this.getColorChannel(nextProps.color);
      this.setState({
        hex: nextProps.color.substr(1),
        colorChannel,
      });
    }
  }

  onHexHandler(event) {
    const value = event.target.value;
    let color = null;
    try {
      color = Colr.fromHex(value).toHex();
    } catch(e) {
      /* eslint no-empty:0 */
    }

    if (color !== null) {
      const colorChannel = this.getColorChannel(color);
      this.setState({
        hex: value,
        colorChannel,
      });
      this.props.onChange({
        color,
      }, false);
    } else {
      this.setState({
        hex: value,
      });
    }
  }

  onModeChange() {
    this.modeIndex = (this.modeIndex + 1) % modesMap.length;
    const state = this.state;
    const mode = modesMap[this.modeIndex];
    const colorChannel = this.getColorChannel(state.color, mode);
    store.set('react-colorspicker-mode', this.modeIndex);
    this.setState({
      mode,
      colorChannel,
    });
  }

  onAlphaHandler(event) {
    let alpha = parseInt(event.target.value, 10);
    if (isNaN(result)) {
      result = 0;
    }
    alpha = Math.max(0, result);
    alpha = Math.min(result, 100);

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
      hex: color.substr(1),
      colorChannel,
    });
    this.props.onChange({
      color,
    }, false);
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
    let result;
    switch (colorMode) {
    case 'RGB' :
      result = colr.fromRgbArray(colorChannel);
      break;
    case 'HSB' :
      result = colr.fromHsvArray(colorChannel);
      break;
    case 'HSL' :
      result = colr.fromHslArray(colorChannel);
      break;
    default:
      result = colr.fromRgbArray(colorChannel);
    }
    return result.toHex();
  }

  getPrefixCls() {
    return this.props.rootPrefixCls + '-params';
  }

  getColorChannel(color, mode) {
    const colors = colr.fromHex(color || this.state.hex);
    const colorMode = mode || this.state.mode;
    let result;
    switch (colorMode) {
    case 'RGB' :
      result = colors.toRgbArray();
      break;
    case 'HSB' :
      result = colors.toHsvArray();
      break;
    case 'HSL' :
      result = colors.toHslArray();
      break;
    default:
      result = colors.toRgbArray();
    }
    return result;
  }

  render() {
    const prefixCls = this.getPrefixCls();
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
                 value={this.state.colorChannel[0]}
                 onChange={this.onColorChannelChange.bind(null, 0)}/>
          <input type="number" ref="channel_1"
                 value={this.state.colorChannel[1]}
                 onChange={this.onColorChannelChange.bind(null, 1)}/>
          <input type="number" ref="channel_2"
                 value={this.state.colorChannel[2]}
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
  color: React.PropTypes.string,
  alpha: React.PropTypes.number,
  rootPrefixCls: React.PropTypes.string,
  onAlphaChange: React.PropTypes.func,
};
