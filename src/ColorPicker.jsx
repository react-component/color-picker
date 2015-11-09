import React from 'react';
import ReactDOM from 'react-dom';
// import rcUtil from 'rc-util';
import Trigger from 'rc-trigger';
// const toFragment = rcUtil.Children.mapSelf;
import ColorPickerPanel from './Panel';

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
    const classes = [props.prefixCls];
    if (this.state.open) {
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

    let picker;

    this.haveOpened = this.haveOpened || this.state.open;

    // if (this.haveOpened) {
    picker = this.getPickerElement();
    // }

    return (
      <span className={classes.join(' ')}>
        <Trigger
          popupAlign={{
            points: ['tl', 'bl'],
            offset: [0, 3],
          }}
          action={['click']}
          popup={picker}
          // defaultPopupVisible={true}
          // popupVisible={true}
        >
          {trigger}
        </Trigger>
      </span>
    );
  }
}

ColorPicker.propTypes = {
  defaultColor: React.PropTypes.string,
  defaultAlpha: React.PropTypes.number,
  color: React.PropTypes.string,
  alpha: React.PropTypes.number,
  onChange: React.PropTypes.func,
  prefixCls: React.PropTypes.string.isRequired,
  trigger: React.PropTypes.node.isRequired,
  mode: React.PropTypes.string,
};

ColorPicker.defaultProps = {
  defaultColor: '#F00',
  defaultHsv: null,
  defaultAlpha: 100,
  onChange() {
  },
  prefixCls: 'react-colorpicker',
  trigger: <span className="react-colorpicker-trigger"></span>,
};
