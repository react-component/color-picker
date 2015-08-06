import React from 'react';
import Colr from 'colr';

const colr = new Colr();

// @see https://github.com/stayradiated/colr-convert/blob/master/index.js
// convert a charcode to a hex val
function hexVal(c) {
  if (c < 58) {
    return c - 48;
  } else if (c < 71) {
    return c - 55;
  }
  return c - 87;
}
function validationHex(hex) {
  const i = hex[0] === '#' ? 1 : 0;
  const len = hex.length;

  if (len - i < 3) {
    return false;
  }

  let r;
  let g;
  let b;

  const h1 = hexVal(hex.charCodeAt(0 + i));
  const h2 = hexVal(hex.charCodeAt(1 + i));
  const h3 = hexVal(hex.charCodeAt(2 + i));

  if (len - i >= 6) {
    r = (h1 << 4) + h2;
    g = (h3 << 4) + hexVal(hex.charCodeAt(3 + i));
    b = (hexVal(hex.charCodeAt(4 + i)) << 4) + hexVal(hex.charCodeAt(5 + i));
  } else {
    r = (h1 << 4) + h1;
    g = (h2 << 4) + h2;
    b = (h3 << 4) + h3;
  }

  if (r < 0 || r > 255 || g < 0 || g > 255 || b < 0 || b > 255) {
    return false;
  }

  return true;
}

export default class Params extends React.Component {
  constructor(props) {
    super(props);
    const events = [
      'formatHex',
      'formatRgb',
      'formatHsv',
      'formatHsl',
      '_chagneColorsFromHex',
      '_chagneColorsFromRgb',
      '_chagneColorsFromHsv',
      '_chagneColorsFromHsl',
      'onHexChange',
      'onAlphaChange',
      'getRgbFromKey',
      'getHsvFromKey',
      'getHslFromKey',
      'onKeyPress',
      'onRGBChange',
      'onHSVChange',
      'onHSLChange',
      'onModeChange',
    ];

    events.forEach(e => {
      if (this[e]) {
        this[e] = this[e].bind(this);
      }
    });
  }

  onHexChange(event) {
    const color = event.target.value;
    this.props.onChange({
      color,
    });
  }

  onKeyPress(event) {
    const hex = event.target.value;
    const keycode = event.charCode;

    if (hex.length > 2 && keycode === 13 && validationHex(hex)) {
      this.props.onChange({color: hex});
    }
  }

  onAlphaChange(event) {
    this.setState({alpha: event.target.value});
    this.props.onAlphaChange(parseInt(event.target.value, 10));
  }

  onRGBChange(type, event) {
    const value = event.target.value;
    const rgb = this.getRgb();
    rgb[type] = parseInt(value, 10);
    const colors = colr.fromRgbObject(rgb);
    const color = colors.toHex();
    this.props.onChange({
      color,
    });
  }

  getPrefixCls() {
    return this.props.rootPrefixCls + '-params';
  }

  getRgb() {
    const colors = colr.fromHex(this.props.color);
    return colors.toRgbObject();
  }

  render() {
    const rgb = this.getRgb();
    const prefixCls = this.getPrefixCls();
    return (
      <div className={prefixCls}>
        <div className={prefixCls + '-' + ('input')}>
          <input
            className={prefixCls + '-' + ('hex')}
            type="text"
            maxLength="6"
            onChange={this.onHexChange}
            onKeyPress={this.onKeyPress}
            value={this.props.color}
            />
          <input type="number"
                 min={0}
                 max={255}
                 value={rgb.r}
                 onChange={this.onRGBChange.bind(null, 'r')}/>
          <input type="number"
                 min={0}
                 max={255}
                 value={rgb.g}
                 onChange={this.onRGBChange.bind(null, 'g')}/>
          <input type="number"
                 min={0}
                 max={255}
                 value={rgb.b}
                 onChange={this.onRGBChange.bind(null, 'b')}/>
          <input type="number"
                 min={0}
                 max={100}
                 speed={1}
                 value={this.props.alpha}
                 onChange={this.onAlphaChange}/>
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
