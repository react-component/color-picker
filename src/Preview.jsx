import React from 'react';
import PropTypes from 'prop-types';

import Color from './helpers/color';

export default class Preview extends React.Component {
  onChange = e => {
    const value = e.target.value;
    const color = new Color(value);
    this.props.onChange(color);
    e.stopPropagation();
  };

  getPrefixCls = () => {
    return `${this.props.rootPrefixCls}-preview`;
  };

  render() {
    const prefixCls = this.getPrefixCls();
    const hex = this.props.color.toHexString();
    return (
      <div className={prefixCls}>
        <span
          style={{
            backgroundColor: hex,
            opacity: this.props.alpha / 100,
          }}
        />
        <input
          type="color"
          value={hex}
          onChange={this.onChange}
          onClick={this.props.onInputClick}
        />
      </div>
    );
  }
}

Preview.propTypes = {
  rootPrefixCls: PropTypes.string,
  color: PropTypes.object,
  alpha: PropTypes.number,
  onChange: PropTypes.func,
  onInputClick: PropTypes.func,
};
