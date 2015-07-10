'use strict';

import React from 'react';
import prefixClsFn from './utils/prefixClsFn';

export default class Trigger extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      prefixCls: props.prefixCls,
      defaultColor: props.defaultColor
    };

    this.prefixClsFn = prefixClsFn.bind(this);
    this.handlerClick = this.handlerClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      defaultColor: nextProps.defaultColor
    });
  }

  handlerClick() {
    this.props.onToggle();
  }

  render() {
    return (
      <div className={this.props.prefixCls} onClick={this.handlerClick}>
        <span style={{backgroundColor: this.state.defaultColor}} />
      </div>
    );
  }
}

Trigger.propTypes = {
  prefixCls: React.PropTypes.string,
  defaultColor: React.PropTypes.string,
  onToggle: React.PropTypes.func
};

Trigger.defaultProps = {
  prefixCls: 'react-colorpicker-trigger',
  defaultColor: '#f00',
  onToggle() {}
};
