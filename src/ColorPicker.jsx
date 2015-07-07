'use strict';

import React from 'react';
import Trigger from './Trigger';
import Picker from './Picker';
import DOM from './utils/dom';
import prefixClsFn from './utils/prefixClsFn';

const extend = function (target, source) {
  for (let i in source) {
    if (!target.hasOwnProperty(i)) {
      target[i] = source[i];
    }
  }
  return target;
};

export default class ColorPicker extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      rootPrefixCls: props.rootPrefixCls,
      defaultColor: props.defaultColor,
      visible: props.visible,
      style: {
        position: 'absolute',
        zIndex: 100
      }
    };

    this.prefixClsFn = prefixClsFn.bind(this);
    let events = [
      'triggerClickHandler',
      'handlerChange',
      'handlerBlur'
    ];

    events.forEach(e => {
      this[e] = this[e].bind(this);
    });
  }

  componentDidMount() {
    if (this.state.visible) {
      let offest = DOM.getAlign(
        React.findDOMNode(this.refs.picker),
        React.findDOMNode(this.refs.trigger),
        this.props.align,
        [5, 0]
      );
      var styleObj = extend(this.state.style, offest);
      this.setState({
        style: styleObj
      });
    }
  }

  triggerClickHandler() {
    let offest = DOM.getAlign(
        React.findDOMNode(this.refs.picker),
        React.findDOMNode(this.refs.trigger),
        this.props.align,
        [5, 0]
    );

    extend(this.state.style, offest);

    this.refs.picker.toggle();
  }

  handlerChange(colors) {
    this.setState({
      defaultColor: colors.hex
    });
    this.props.onChange(colors);
  }

  handlerBlur() {
    this.refs.picker.hide();
  }

  render() {
    return (
      <div>
        <Trigger
          ref='trigger'
          defaultColor={this.state.defaultColor}
          onToggle={this.triggerClickHandler}
        />
        <Picker
          ref='picker'
          defaultColor={this.state.defaultColor}
          style={this.state.style}
          visible={this.state.visible}
          onChange={this.handlerChange}
          onBlur={this.handlerBlur}
        />
      </div>
    );
  }
}

ColorPicker.propTypes = {
  rootPrefixCls: React.PropTypes.string,
  visible: React.PropTypes.bool,
  defaultColor: React.PropTypes.string,
  align: React.PropTypes.string,
  onChange: React.PropTypes.func
};

ColorPicker.defaultProps = {
  rootPrefixCls: 'react-colors-picker',
  visible: false,
  defaultColor: '#F00',
  align: 'right',
  onChange() {}
};
