'use strict';

import React from 'react';
import Align from 'rc-align';
import rcUtil from 'rc-util';
import Animate from 'rc-animate';
let toFragment = rcUtil.Children.mapSelf;

import Picker from './Picker';
import prefixClsFn from './utils/prefixClsFn';

const refFn = function(field, component) {
  this[field] = component;
};

function prevent(e) {
  e.preventDefault();
}

export default class ColorPicker extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      prefixCls: props.prefixCls,
      defaultColor: props.defaultColor,
      open: false,
      style: {
        position: 'absolute',
        zIndex: 100
      }
    };

    this.prefixClsFn = prefixClsFn.bind(this);
    let events = [
      'getAlign',
      'triggerClickHandler',
      'handlerChange',
      'handlerBlur',
      'getPickerElement',
      'getRootDOMNode',
      'getTriggerDOMNode',
      'getTransitionName'
    ];

    events.forEach(e => {
      this[e] = this[e].bind(this);
    });

    this.savePickerRef = refFn.bind(this, 'pickerInstance');
    this.saveTriggerRef = refFn.bind(this, 'triggerInstance');
  }

  componentDidMount() {
    this.componentDidUpdate();
  }

  // 在组件的更新已经同步到 DOM 中之后立刻被调用
  componentDidUpdate(prevProps, prevState) {
    prevState = prevState || {};
    let state = this.state;
    if (state.open && !prevState.open) {
      React.findDOMNode(this.pickerInstance).focus();
    }
  }

  getAlign(orient) {
    let points = ['tl', 'bl'];
    let offset = [0, 5];
    if (orient.indexOf('top') !== -1 && orient.indexOf('left') !== -1) {
      points = ['tl', 'bl'];
    } else if (orient.indexOf('top') !== -1 && orient.indexOf('right') !== -1) {
      points = ['tr', 'br'];
    } else if (orient.indexOf('bottom') !== -1 && orient.indexOf('left') !== -1) {
      points = ['bl', 'tl'];
      offset = [0, -5];
    } else if (orient.indexOf('bottom') !== -1 && orient.indexOf('right') !== -1) {
      points = ['br', 'tr'];
      offset = [0, -5];
    }

    var adjustOrientOnCalendarOverflow = this.props.adjustOrientOnCalendarOverflow;

    return {
      points: points,
      offset: offset,
      overflow: {
        adjustX: adjustOrientOnCalendarOverflow,
        adjustY: adjustOrientOnCalendarOverflow
      }
    };
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

  getTransitionName() {
    var props = this.props;
    var transitionName = props.transitionName;
    if (!transitionName && props.animation) {
      transitionName = `${props.prefixCls}-${props.animation}`;
    }
    return transitionName;
  }

  getPickerElement() {
    let state = this.state;
    let pickerElement = React.cloneElement(<Picker />, {
      ref: function(component) {
        this.savePickerRef(component);
      }.bind(this),
      defaultColor: this.props.defaultColor,
      onChange: this.handlerChange,
      onBlur: this.handlerBlur
    });

    let orient = this.props.orient;

    return <Animate
            component=''
            exclusive={true}
            animateMount={true}
            showProp="pickerOpen"
            transitionName={this.getTransitionName()}
          >
            <Align target={this.getTriggerDOMNode}
              key="picker"
              monitorWindowResize={true}
              disabled={!state.open}
              pickerOpen={state.open}
              align={this.getAlign(orient)}>
                {pickerElement}
            </Align>
          </Animate>;
  }

  getRootDOMNode() {
    return React.findDOMNode(this);
  }

  getTriggerDOMNode() {
    return React.findDOMNode(this.triggerInstance);
  }

  render() {
    let props = this.props;
    let classes = [props.prefixCls];
    if (this.state.open) {
      classes.push(props.prefixCls + '-open');
    }

    let trigger = props.trigger;

    if (trigger) {
      trigger = React.cloneElement(trigger, {
        ref: function(component) {
          this.saveTriggerRef(component);
        }.bind(this),
        unselectable: true,
        style: {
          backgroundColor: this.state.defaultColor
        },
        onClick: this.triggerClickHandler,
        onMouseDown: prevent // 阻止MouseDown触发, 引起 picker blur
      });
    }

    let picker;

    this.haveOpened = this.haveOpened || this.state.open;

    if (this.haveOpened) {
      picker = this.getPickerElement();
    }

    return (
      <span className={classes.join(' ')}>
        {toFragment([picker, trigger])}
      </span>
    );
  }
}

import typeColor from './utils/validationColor';

ColorPicker.propTypes = {
  adjustOrientOnCalendarOverflow: React.PropTypes.bool,
  animation: React.PropTypes.string,
  defaultColor: typeColor,
  orient: React.PropTypes.arrayOf(
    React.PropTypes.oneOf(['left', 'top', 'right', 'bottom'])
  ),
  onChange: React.PropTypes.func,
  prefixCls: React.PropTypes.string.isRequired,
  trigger: React.PropTypes.node.isRequired

};

ColorPicker.defaultProps = {
  adjustOrientOnCalendarOverflow: true,
  defaultColor: '#F00',
  orient: ['top', 'left'],
  onChange() {},
  prefixCls: 'react-colorpicker',
  trigger: <span className='react-colorpicker-trigger'></span>
};
