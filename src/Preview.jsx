import React from 'react';

export default class Preview extends React.Component {
  getPrefixCls() {
    return this.props.rootPrefixCls + '-preview';
  }

  render() {
    const prefixCls = this.getPrefixCls();
    return (
      <div className={prefixCls}>
        <span style={{backgroundColor: this.props.color, opacity: this.props.alpha / 100}}></span>
      </div>
    );
  }
}

Preview.propTypes = {
  rootPrefixCls: React.PropTypes.string,
  color: React.PropTypes.string,
  alpha: React.PropTypes.number,
};
