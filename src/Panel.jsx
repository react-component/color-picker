import React from 'react';
import Colr from 'colr';
import Board from './Board';
import Preview from './Preview';
import Ribbon from './Ribbon';
import Alpha from './Alpha';
import Params from './Params';
import assign from 'object-assign';

function noop() {
}

const colr = new Colr();

export default class Panel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      paramsColor: props.color || props.defaultColor,
      color: props.color || props.defaultColor,
      hsv: props.hsv || props.defaultHsv,
      alpha: props.defaultAlpha,
    };

    if (props.alpha !== undefined) {
      this.state.alpha = props.alpha;
    }

    this.state.hsv = this.getHsvColor();

    const events = [
      'onChange',
      'onChangeByParams',
      'onAlphaChange',
      'onFocus',
      'onBlur',
    ];
    // bind methods
    events.forEach(m => {
      this[m] = this[m].bind(this);
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.color) {
      this.setState({
        color: nextProps.color,
        hsv: null,
      });
    } else if (nextProps.hsv) {
      this.setState({
        hsv: nextProps.hsv,
        color: null,
      });
    }
    if (nextProps.alpha !== undefined) {
      this.setState({
        alpha: nextProps.alpha,
      });
    }
  }

  onChangeByParams(colorsObj) {
    const props = this.props;
    const state = assign({
      color: null,
      hsv: null,
    }, colorsObj);
    const ret = {
      color: this.getHexColor(colorsObj),
      hsv: this.getHsvColor(colorsObj),
      // original: state,
      alpha: this.state.alpha,
    };
    if (!props.color && !this.props.hsv) {
      this.setState(state);
    }
    this.props.onChange(ret);
  }

  onChange(colorsObj) {
    const props = this.props;
    const color = this.getHexColor(colorsObj);
    const state = assign({
      paramsColor: color,
      color: null,
      hsv: null,
    }, colorsObj);
    const ret = {
      color: color,
      hsv: this.getHsvColor(colorsObj),
      // original: state,
      alpha: this.state.alpha,
    };
    if (!props.color && !this.props.hsv) {
      this.setState(state);
    }
    this.props.onChange(ret);
  }

  onAlphaChange(alpha) {
    if (this.props.alpha === undefined) {
      this.setState({
        alpha,
      });
    }
    this.props.onChange({
      color: this.getHexColor(),
      hsv: this.getHsvColor(),
      // original: {
      //   color: this.state.color || null,
      //   hsv: this.state.hsv || null,
      // },
      alpha,
    });
  }

  onFocus() {
    if (this._blurTimer) {
      clearTimeout(this._blurTimer);
      this._blurTimer = null;
    } else {
      this.props.onFocus();
    }
  }

  onBlur() {
    if (this._blurTimer) {
      clearTimeout(this._blurTimer);
    }
    this._blurTimer = setTimeout(()=> {
      this.props.onBlur();
    }, 100);
  }

  getHexColor(data) {
    const state = data || this.state;
    return state.color || colr.fromHsvObject(state.hsv).toHex();
  }

  getHsvColor(data) {
    const state = data || this.state;
    return state.hsv || colr.fromHex(state.color).toHsvObject();
  }

  render() {
    const prefixCls = this.props.prefixCls;
    const hsvColor = this.getHsvColor();
    const hexColor = this.getHexColor();
    const alpha = this.state.alpha;
    return (
      <div
        className={prefixCls}
        style={this.props.style}
        onFocus={this.onFocus}
        onBlur={this.onBlur}
        tabIndex="0"
        >
        <div className={prefixCls + '-' + ('inner')}>
          <Board
            rootPrefixCls={prefixCls}
            hsv={hsvColor}
            onChange={this.onChange}
            />

          <div className={prefixCls + '-' + ('wrap')}>
            <div className={prefixCls + '-' + ('wrap-ribbon')}>
              <Ribbon
                rootPrefixCls={prefixCls}
                hsv={hsvColor}
                onChange={this.onChange}
                />
            </div>
            <div className={prefixCls + '-' + ('wrap-alpha')}>
              <Alpha
                rootPrefixCls={prefixCls}
                alpha={alpha}
                color={hexColor}
                onChange={this.onAlphaChange}
                />
            </div>
            <div className={prefixCls + '-' + ('wrap-preview')}>
              <Preview
                rootPrefixCls={prefixCls}
                alpha={alpha}
                color={hexColor}
                />
            </div>
          </div>
          <div className={prefixCls + '-' + ('wrap')} style={{height: 40, marginTop: 6}}>
            <Params
              rootPrefixCls={prefixCls}
              color={this.state.paramsColor}
              alpha={alpha}
              onAlphaChange={this.onAlphaChange}
              onChange={this.onChangeByParams}
              />
          </div>
        </div>
      </div>
    );
  }
}

import typeColor from './utils/validationColor';

Panel.propTypes = {
  prefixCls: React.PropTypes.string,
  color: typeColor,
  hsv: React.PropTypes.object,
  alpha: React.PropTypes.number,
  style: React.PropTypes.object,
  onChange: React.PropTypes.func,
  onFocus: React.PropTypes.func,
  onBlur: React.PropTypes.func,
};

Panel.defaultProps = {
  prefixCls: 'react-colorpicker-panel',
  defaultHsv: null,
  defaultColor: '#ff0000',
  defaultAlpha: 100,
  style: {},
  onChange: noop,
  onFocus: noop,
  onBlur: noop,
};
