import React from 'react';
import Colr from 'colr';

const colr = new Colr();

export default class Preview extends React.Component {
  getPrefixCls() {
    return this.props.rootPrefixCls + '-preview';
  }

  render() {
    const prefixCls = this.getPrefixCls();
    const hex = colr.fromHsvObject(this.props.hsv).toHex();
    return (
      <div className={prefixCls}>
        <span style={{backgroundColor: hex, opacity: this.props.alpha / 100}}></span>
      </div>
    );
  }
}

Preview.propTypes = {
  rootPrefixCls: React.PropTypes.string,
  hsv: React.PropTypes.object,
  alpha: React.PropTypes.number,
};
