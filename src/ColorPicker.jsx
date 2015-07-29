'use strict';

import React from 'react';
import Trigger from './Trigger';
import Picker from './Picker';
import DOM from './utils/dom';
import prefixClsFn from './utils/prefixClsFn';
import core from 'core-js';

const refFn = function(field, component) {
  this[field] = component;
};

export default class ColorPicker extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      prefixCls: props.prefixCls,
      defaultColor: props.defaultColor,
      open: props.open,
      style: {
        position: 'absolute',
        zIndex: 100
      }
    };

    this.prefixClsFn = prefixClsFn.bind(this);
    let events = [
      'triggerClickHandler',
      'handlerChange',
      'handlerBlur',
      'getPickerElement'
    ];

    events.forEach(e => {
      this[e] = this[e].bind(this);
    });

    this.savePickerRef = refFn.bind(this, 'pickerInstance');
  }

  componentDidMount() {
    this.componentDidUpdate();
  }

  // 在组件的更新已经同步到 DOM 中之后立刻被调用
  componentDidUpdate(prevProps, prevState) {
    prevState = prevState || {};
    var state = this.state;
    if (state.open && !prevState.open) {
      let offest = DOM.getAlign(
        React.findDOMNode(this.pickerInstance),
        React.findDOMNode(this.refs.trigger),
        this.props.align,
        [5, 0]
      );
      let styleObj = core.Object.assign(this.state.style, offest);
      this.pickerInstance.setState({
        style: styleObj
      });
      React.findDOMNode(this.pickerInstance).focus();
    }
  }

  triggerClickHandler() {
    this.setState({
      open: !this.state.open
    });
  }

  handlerChange(colors) {
    this.setState({
      defaultColor: colors.hex
    });
    this.props.onChange(colors);
  }

  handlerBlur() {
    this.setState({
      open: false
    });
  }

  getPickerElement() {
    return this.pickerElement || (this.pickerElement = React.cloneElement(<Picker />, {
      ref: function(component) {
        this.savePickerRef(component);
      }.bind(this),
      defaultColor: this.props.defaultColor,
      onChange: this.handlerChange,
      onBlur: this.handlerBlur
    }));
  }

  render() {
    let props = this.props;
    let picker = this.state.open ? this.getPickerElement() : this.pickerElement;

    let classes = [props.prefixCls];
    if (this.state.open) {
      classes.push(props.prefixCls + '-open');
    }

    return (
      <span className={classes.join(' ')}>
        <Trigger
          ref='trigger'
          defaultColor={this.state.defaultColor}
          onToggle={this.triggerClickHandler}
        />
        {picker}
      </span>
    );
  }
}

ColorPicker.propTypes = {
  prefixCls: React.PropTypes.string,
  open: React.PropTypes.bool,
  defaultColor: React.PropTypes.string,
  align: React.PropTypes.string,
  onChange: React.PropTypes.func
};

ColorPicker.defaultProps = {
  prefixCls: 'react-colorpicker',
  open: false,
  defaultColor: '#F00',
  align: 'right',
  onChange() {}
};
