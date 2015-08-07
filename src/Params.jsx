import React from 'react';
import Colr from 'colr';

const colr = new Colr();

function numberRange(value, min, max) {
  let result = parseInt(value, 10);
  if (isNaN(result)) {
    result = 0;
  }
  result = Math.max(min, result);
  result = Math.min(result, max);

  return value;
}

export default class Params extends React.Component {
  constructor(props) {
    super(props);

    const colorChannel = this.getColorChannel();

    // 管理 input 的状态
    this.state = {
      hex: props.color.substr(1),
      colorChannel,
    };

    const events = [
      'onHexHandler',
      'onAlphaHandler',
      'onColorChannelChange',
      'onModeChange',
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
      });
    } else {
      this.setState({
        hex: value,
      });
    }
  }

  onAlphaHandler(event) {
    const alpha = numberRange(event.target.value, 0, 100);

    this.setState({
      alpha,
    });

    this.props.onAlphaChange(alpha);
  }

  onColorChannelChange(index, event) {
    const value = numberRange(event.target.value, 0, 255);
    const colorChannel = this.getColorChannel();

    colorChannel[index] = value;

    const color = colr.fromRgbArray(colorChannel).toHex();
    this.setState({
      hex: color.substr(1),
      colorChannel,
    });
    this.props.onChange({
      color,
    });
  }

  getPrefixCls() {
    return this.props.rootPrefixCls + '-params';
  }

  getColorChannel(color) {
    const colors = colr.fromHex(color || this.props.color);
    return colors.toRgbArray();
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
            value={this.state.hex}
            />
          <input type="number"
                 value={this.state.colorChannel[0]}
                 onChange={this.onColorChannelChange.bind(null, 0)}/>
          <input type="number"
                 value={this.state.colorChannel[1]}
                 onChange={this.onColorChannelChange.bind(null, 1)}/>
          <input type="number"
                 value={this.state.colorChannel[2]}
                 onChange={this.onColorChannelChange.bind(null, 2)}/>
          <input type="number"
                 value={this.props.alpha}
                 onChange={this.onAlphaHandler}/>
        </div>
        <div className={prefixCls + '-' + ('lable')}>
           <label className={prefixCls + '-' + ('lable-hex')}>Hex</label>
           <label className={prefixCls + '-' + ('lable-number')}>R</label>
           <label className={prefixCls + '-' + ('lable-number')}>G</label>
           <label className={prefixCls + '-' + ('lable-number')}>B</label>
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
