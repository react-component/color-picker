'use strict';

const React = require('react');
let prefixClsFn = require('./utils/prefixClsFn');

class Preview extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      prefixCls: props.prefixCls,
      alpha: props.alpha,
      defaultColor: props.defaultColor,
      customColor: props.customColor
    };

    this.prefixClsFn = prefixClsFn.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.defaultColor !== this.props.defaultColor) {
      this.setState({
        defaultColor: nextProps.defaultColor,
        customColor: nextProps.defaultColor
      });
    }
    if (nextProps.customColor !== this.props.customColor) {
      this.setState({
        defaultColor: nextProps.customColor,
        customColor: nextProps.customColor
      });
    }
    if (nextProps.alpha !== this.props.alpha) {
      this.setState({
        alpha: nextProps.alpha
      });
    }
  }

  render() {
    return (
      <div className={this.props.prefixCls}>
        <span style={{backgroundColor: this.state.defaultColor, opacity: this.state.alpha / 100}}></span>
      </div>
    );
  }
}

Preview.propTypes = {
  prefixCls: React.PropTypes.string,
  alpha: React.PropTypes.number,
  defaultColor: React.PropTypes.string,
  customColor: React.PropTypes.string
};

Preview.defaultProps = {
  prefixCls: 'react-colors-picker-preview',
  alpha: 100,
  defaultColor: '#f00', // 背景颜色 响应来自  board 面板的选取颜色
  customColor: '#f00' // 背景颜色  响应来自用户的输入颜色
};

module.exports = Preview;
