import React, { PropTypes }from 'react';
import ReactDOM from 'react-dom';
import Trigger from 'rc-trigger';
import ColorPickerPanel from './Panel';
import placements from './placements';

function refFn(field, component) {
  this[field] = component;
}

function prevent(e) {
  e.preventDefault();
}

export default class ColorPicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      color: props.color || props.defaultColor,
      alpha: props.alpha === undefined ? props.defaultAlpha : props.alpha,
      open: false,
    };

    const events = [
      'onTriggerClick',
      'onChange',
      'onBlur',
      'getPickerElement',
      'getRootDOMNode',
      'getTriggerDOMNode',
    ];

    events.forEach(e => {
      this[e] = this[e].bind(this);
    });

    this.savePickerPanelRef = refFn.bind(this, 'pickerPanelInstance');
    this.saveTriggerRef = refFn.bind(this, 'triggerInstance');
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.color) {
      this.setState({
        color: nextProps.color,
      });
    }
    if (nextProps.alpha) {
      this.setState({
        alpha: nextProps.alpha,
      });
    }
  }

  onTriggerClick() {
    this.setState({
      open: !this.state.open,
    });
  }

  onChange(colors) {
    this.setState({
      color: colors.color,
      alpha: colors.alpha,
    });
    this.props.onChange(colors);
  }

  onBlur() {
    this.setState({
      open: false,
    });
  }


  getPickerElement() {
    // const state = this.state;

    return (
        <ColorPickerPanel
        ref={this.savePickerPanelRef}
        defaultColor={this.state.color}
        alpha={this.state.alpha}
        prefixCls={this.props.prefixCls + '-panel'}
        onChange={this.onChange}
        onBlur={this.onBlur}
        mode={this.props.mode}
      />
    );
  }

  getRootDOMNode() {
    return ReactDOM.findDOMNode(this);
  }

  getTriggerDOMNode() {
    return ReactDOM.findDOMNode(this.triggerInstance);
  }

  render() {
    const props = this.props;
    const state = this.state;
    const classes = [props.prefixCls];
    if (state.open) {
      classes.push(props.prefixCls + '-open');
    }

    let trigger = props.trigger;

    if (trigger) {
      trigger = React.cloneElement(trigger, {
        ref: this.saveTriggerRef,
        unselectable: true,
        style: {
          opacity: this.state.alpha / 100,
          backgroundColor: this.state.color,
        },
        onClick: this.onTriggerClick,
        onMouseDown: prevent,
      });
    }

    const {
      prefixCls,
      placement,
      style,
      getCalendarContainer,
      align,
      animation,
      disabled,
      transitionName} = props;

    return (
      <span className={classes.join(' ')}>
        <Trigger popup={this.getPickerElement()}
                 popupAlign={align}
                 builtinPlacements={placements}
                 popupPlacement={placement}
                 action={disabled ? [] : ['click']}
                 destroyPopupOnHide
                 getPopupContainer={getCalendarContainer}
                 popupStyle={style}
                 popupAnimation={animation}
                 popupTransitionName={transitionName}
                 popupVisible={state.open}
                 onPopupVisibleChange={this.onVisibleChange}
                 prefixCls={prefixCls}>
          {trigger}
        </Trigger>
      </span>
    );
  }
}

ColorPicker.propTypes = {
  defaultColor: PropTypes.string,
  defaultAlpha: PropTypes.number,
  color: PropTypes.string,
  alpha: PropTypes.number,
  onChange: PropTypes.func,
  prefixCls: PropTypes.string.isRequired,
  trigger: PropTypes.node.isRequired,
  mode: PropTypes.string,
  placement: PropTypes.any,
  style: PropTypes.object,
  align: PropTypes.object,
};

ColorPicker.defaultProps = {
  defaultColor: '#F00',
  defaultHsv: null,
  defaultAlpha: 100,
  onChange() {
  },
  prefixCls: 'react-colorpicker',
  trigger: <span className="react-colorpicker-trigger"></span>,
  placement: 'bottomRight',
  style: {},
  align: {},
};
