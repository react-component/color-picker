import React from 'react';
import PropTypes from 'prop-types';
import Colr from 'colr';

const colr = new Colr();

export default class Preview extends React.Component {
  onChange(e) {
    const value = e.target.value;
    const color = colr.fromHex(value);
    this.props.onChange(color.toHsvObject());
    e.stopPropagation();
  }

  getPrefixCls() {
    return `${this.props.rootPrefixCls}-preview`;
  }

  render() {
    const prefixCls = this.getPrefixCls();
    const hex = colr.fromHsvObject(this.props.hsv).toHex();
    return (
      <div className={prefixCls}>
        <span style={{
          backgroundColor: hex,
          opacity: this.props.alpha / 100 }}
        />
        <input
          type="color"
          value={hex}
          onChange={this.onChange.bind(this)}
          onClick={this.props.onInputClick}
        />
      </div>
    );
  }
}

Preview.propTypes = {
  rootPrefixCls: PropTypes.string,
  hsv: PropTypes.object,
  alpha: PropTypes.number,
  onChange: PropTypes.func,
  onInputClick: PropTypes.func,
};
