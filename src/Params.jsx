'use strict';

const React = require('react');
const Colr = require('colr');
const store = require('store');

let prefixClsFn = require('./utils/prefixClsFn');

let colr = new Colr();

// @see https://github.com/stayradiated/colr-convert/blob/master/index.js
// convert a charcode to a hex val
function hexVal (c) {
  return (
    c < 58 ? c - 48 : // 0 - 9
    c < 71 ? c - 55 : // A - F
    c - 87            // a - f
  );
}
function validationHex(hex) {
  let i = hex[0] === '#' ? 1 : 0;
  let len = hex.length;

  if (len - i < 3) {
    return false;
  }

  let r, g, b;

  let h1 = hexVal(hex.charCodeAt(0 + i));
  let h2 = hexVal(hex.charCodeAt(1 + i));
  let h3 = hexVal(hex.charCodeAt(2 + i));

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

class Params extends React.Component{
  constructor(props) {
    super(props);
    let index = store.get('react-colors-picker-index') || 0;
    let modes = ['rgb', 'hsv', 'hsl'];
    let mode = modes[index];

    let colors = this.formatHex(props.defaultColor);

    this.state = {
      modes: modes,
      index: index,
      mode: mode,
      prefixCls: props.prefixCls,
      colors: colors,
      hex: props.defaultColor.substr(1),
      alpha: props.alpha
    };

    this.prefixClsFn = prefixClsFn.bind(this);

    let events = [
      'formatHex',
      'formatRgb',
      'formatHsv',
      'formatHsl',
      '_chagneColorsFromHex',
      '_chagneColorsFromRgb',
      '_chagneColorsFromHsv',
      '_chagneColorsFromHsl',
      'handlerHexChange',
      'handlerAlphaChange',
      'getRgbFromKey',
      'getHsvFromKey',
      'getHslFromKey',
      'handlerKeyPress',
      'handlerRGBChange',
      'handlerHSVChange',
      'handlerHSLChange',
      'handlerModeChange'
    ];

    events.forEach(e => {
      this[e] = this[e].bind(this);
    });
  }

  componentWillReceiveProps(nextProps) {
    // 此方法需要对详细的属性做过滤, 不能单一的统一处理
    // 父级元素的任意属性关联都可以触发, 曾经我以为是单个独自触发的
    if (nextProps.defaultColor !== this.props.defaultColor) {
      let colors = this.formatHex(nextProps.defaultColor);
      this.setState({
        hex: nextProps.defaultColor.substr(1),
        colors
      });
    }

    if (nextProps.alpha !== this.props.alpha) {
      this.setState({
        alpha: nextProps.alpha
      });
    }
  }

  getRgbFromKey(key) {
    let mode = this.state.mode;
    return this.state.colors[mode][key];
  }

  getHsvFromKey(key) {
    let mode = this.state.mode;
    return this.state.colors[mode][key];
  }

  getHslFromKey(key) {
    let mode = this.state.mode;
    return this.state.colors[mode][key];
  }

  formatHex(hex) {
    let colors = colr.fromHex(hex);
    let rgb = colors.toRgbObject();
    let hsv = colors.toHsvObject();
    let hsl = colors.toHslObject();
    return {rgb, hsv, hsl, hex};
  }

  formatRgb(rgb) {
    let colors = colr.fromRgbObject(rgb);
    let hex = colors.toHex();
    let hsv = colors.toHsvObject();
    let hsl = colors.toHslObject();
    return {rgb, hsv, hsl, hex};
  }

  formatHsv(hsv) {
    let colors = colr.fromHsvObject(hsv);
    let hex = colors.toHex();
    let rgb = colors.toRgbObject();
    let hsl = colors.toHslObject();
    return {rgb, hsv, hsl, hex};
  }

  formatHsl(hsl) {
    let colors = colr.fromHslObject(hsl);
    let hex = colors.toHex();
    let rgb = colors.toRgbObject();
    let hsv = colors.toHsvObject();
    return {rgb, hsv, hsl, hex};
  }

  handlerHexChange(event) {
    let value = event.target.value;
    this.setState({hex: value});
  }

  handlerKeyPress(event) {
    let hex = event.target.value;
    let keycode = event.charCode;

    if (hex.length > 2 && keycode === 13 && validationHex(hex)) {
      this.props.onHexChange('#' + hex);
      this._chagneColorsFromHex('#' + hex);
    }
  }

  handlerAlphaChange(event) {
    this.setState({alpha: event.target.value});
    this.props.onAlphaChange(parseInt(event.target.value));
  }

  handlerRGBChange(type, event) {
    let value = event.target.value;
    let RGB = this.state.colors[this.state.mode];
    RGB[type] = parseInt(value);
    this._chagneColorsFromRgb(RGB);
  }

  handlerHSVChange(type, event) {
    let value = event.target.value;
    let HSV = this.state.colors[this.state.mode];
    HSV[type] = parseInt(value);
    this._chagneColorsFromHsv(HSV);
  }

  handlerHSLChange(type, event) {
    let value = event.target.value;
    let HSL = this.state.colors[this.state.mode];
    HSL[type] = parseInt(value);
    this._chagneColorsFromHsl(HSL);
  }

  handlerModeChange() {
    let index = this.state.index;
    index = (index + 1) % 3;
    let mode = this.state.modes[index];
    store.set('react-colors-picker-index', index);
    this.setState({
      index,
      mode
    });
  }

  _chagneColorsFromHex(hex) {
    let newColors = this.formatHex(hex);
    this.props.onHexChange(hex);
    this.setState({
      colors: newColors,
      hex: hex.substr(1)
    });
  }

  _chagneColorsFromRgb(rgb) {
    let newColors = this.formatRgb(rgb);
    this.props.onHexChange(newColors.hex);
    this.setState({
      colors: newColors,
      hex: newColors.hex.substr(1)
    });
  }

  _chagneColorsFromHsv(hsv) {
    let newColors = this.formatHsv(hsv);
    this.props.onHexChange(newColors.hex);
    this.setState({
      colors: newColors,
      hex: newColors.hex.substr(1)
    });
  }

  _chagneColorsFromHsl(hsl) {
    let newColors = this.formatHsl(hsl);
    this.props.onHexChange(newColors.hex);
    this.setState({
      colors: newColors,
      hex: newColors.hex.substr(1)
    });
  }

  render() {
    return (
      <div className={this.props.prefixCls}>
        {this.state.mode === 'rgb' &&
        <div className={this.prefixClsFn('input')}>
          <input
            className={this.prefixClsFn('hex')}
            type='text'
            maxLength='6'
            onChange={this.handlerHexChange}
            onKeyPress={this.handlerKeyPress}
            value={this.state.hex}
          />
          <input type='number'
            min={0}
            max={255}
            value={this.getRgbFromKey('r')}
            onChange={this.handlerRGBChange.bind(null, 'r')} />
          <input type='number'
            min={0}
            max={255}
            value={this.getRgbFromKey('g')}
            onChange={this.handlerRGBChange.bind(null, 'g')} />
          <input type='number'
            min={0}
            max={255}
            value={this.getRgbFromKey('b')}
            onChange={this.handlerRGBChange.bind(null, 'b')} />
          <input type='number'
            min={0}
            max={100}
            speed={1}
            value={this.state.alpha}
            onChange={this.handlerAlphaChange} />
        </div>
        }
        {this.state.mode === 'rgb' &&
        <div className={this.prefixClsFn('lable')}>
          <label className={this.prefixClsFn('lable-hex')}>Hex</label>
          <label className={this.prefixClsFn('lable-number')}
            onClick={this.handlerModeChange}>R</label>
          <label className={this.prefixClsFn('lable-number')}
            onClick={this.handlerModeChange}>G</label>
          <label className={this.prefixClsFn('lable-number')}
            onClick={this.handlerModeChange}>B</label>
          <label className={this.prefixClsFn('lable-alpha')}>A</label>
        </div>
        }
        {this.state.mode === 'hsv' &&
        <div className={this.prefixClsFn('input')}>
          <input
            className={this.prefixClsFn('hex')}
            type='text'
            maxLength='6'
            onChange={this.handlerHexChange}
            onKeyPress={this.handlerKeyPress}
            value={this.state.hex}
          />
          <input type='number'
            min={0}
            max={360}
            value={this.getHsvFromKey('h')}
            onChange={this.handlerHSVChange.bind(null, 'h')} />
          <input type='number'
            min={0}
            max={100}
            value={this.getHsvFromKey('s')}
            onChange={this.handlerHSVChange.bind(null, 's')} />
          <input type='number'
            min={0}
            max={100}
            value={this.getHsvFromKey('v')}
            onChange={this.handlerHSVChange.bind(null, 'v')} />
          <input type='number'
            min={0}
            max={100}
            speed={1}
            value={this.state.alpha}
            onChange={this.handlerAlphaChange} />
        </div>
        }
        {this.state.mode === 'hsv' &&
        <div className={this.prefixClsFn('lable')}>
          <label className={this.prefixClsFn('lable-hex')}>Hex</label>
          <label className={this.prefixClsFn('lable-number')}
            onClick={this.handlerModeChange}>H</label>
          <label className={this.prefixClsFn('lable-number')}
            onClick={this.handlerModeChange}>S</label>
          <label className={this.prefixClsFn('lable-number')}
            onClick={this.handlerModeChange}>B</label>
          <label className={this.prefixClsFn('lable-alpha')}>A</label>
        </div>
        }
        {this.state.mode === 'hsl' &&
        <div className={this.prefixClsFn('input')}>
          <input
            className={this.prefixClsFn('hex')}
            type='text'
            maxLength='6'
            onChange={this.handlerHexChange}
            onKeyPress={this.handlerKeyPress}
            value={this.state.hex}
          />
          <input type='number'
            min={0}
            max={360}
            value={this.getHslFromKey('h')}
            onChange={this.handlerHSLChange.bind(null, 'h')} />
          <input type='number'
            min={0}
            max={100}
            value={this.getHslFromKey('s')}
            onChange={this.handlerHSLChange.bind(null, 's')} />
          <input type='number'
            min={0}
            max={100}
            value={this.getHslFromKey('l')}
            onChange={this.handlerHSLChange.bind(null, 'l')} />
          <input type='number'
            min={0}
            max={100}
            speed={1}
            value={this.state.alpha}
            onChange={this.handlerAlphaChange} />
        </div>
        }
        {this.state.mode === 'hsl' &&
        <div className={this.prefixClsFn('lable')}>
          <label className={this.prefixClsFn('lable-hex')}>Hex</label>
          <label className={this.prefixClsFn('lable-number')}
            onClick={this.handlerModeChange}>H</label>
          <label className={this.prefixClsFn('lable-number')}
            onClick={this.handlerModeChange}>S</label>
          <label className={this.prefixClsFn('lable-number')}
            onClick={this.handlerModeChange}>L</label>
          <label className={this.prefixClsFn('lable-alpha')}>A</label>
        </div>
        }
      </div>
    );
  }
}

Params.propTypes = {
  prefixCls: React.PropTypes.string,
  defaultColor: React.PropTypes.string,
  alpha: React.PropTypes.number,
  onAlphaChange: React.PropTypes.func,
  onHexChange: React.PropTypes.func
};

Params.defaultProps = {
  prefixCls: 'react-colors-picker-params',
  defaultColor: '#ff0000',
  alpha: 100,
  onAlphaChange() {},
  onHexChange() {}
};

module.exports = Params;
