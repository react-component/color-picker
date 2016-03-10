'use es6';

import React, { PropTypes }from 'react';
import ReactDOM from 'react-dom';
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
      alpha: props.alpha || props.defaultAlpha,
      open: false,
    };

    const events = [
      'onTriggerClick',
      'onChange',
      'onBlur',
      'getPickerElement',
      'getRootDOMNode',
      'getTriggerDOMNode',
      'onVisibleChange',
      'setOpen',
      'open',
      'close',
      'focus',
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
    /* LB - need to refer if blur stuff is still applicable after we removed Trigger component
    this.setState({
      open: false,
    });*/
  }

  onVisibleChange(open) {
    this.setOpen(open, () => {
      if (open) {
        ReactDOM.findDOMNode(this.pickerPanelInstance).focus();
      }
    });
  }

  setOpen(open, callback) {
    const {onOpen, onClose} = this.props;
    if (this.state.open !== open) {
      this.setState({
        open: open,
      }, callback);
      const event = {
        open: open,
      };
      if (open) {
        onOpen(event);
      } else {
        onClose(event);
      }
    }
  }

  getRootDOMNode() {
    return ReactDOM.findDOMNode(this);
  }

  getTriggerDOMNode() {
    return ReactDOM.findDOMNode(this.triggerInstance);
  }

  getPickerElement() {
    // const state = this.state;
    return (
        <ColorPickerPanel
        ref={this.savePickerPanelRef}
        defaultColor={this.state.color}
        includeAlpha={this.props.includeAlpha}
        hexOnly={this.props.hexOnly}
        alpha={this.state.alpha}
        prefixCls={this.props.prefixCls + '-panel'}
        onChange={this.onChange}
        onBlur={this.onBlur}
        mode={this.props.mode}
      />
    );
  }

  open(callback) {
    this.setOpen(true, callback);
  }

  close(callback) {
    this.setOpen(false, callback);
  }

  focus() {
    if (!this.state.open) {
      ReactDOM.findDOMNode(this).focus();
    }
  }

  render() {
    const props = this.props;
    const state = this.state;
    const classes = [props.prefixCls];
    if (state.open) {
      classes.push(props.prefixCls + '-open');
    }
    if (this.props.includeAlpha) {
      classes.push('with-alpha');
    }
    if (this.props.hexOnly) {
      classes.push('hex-only');
    }

    return (
      <span className={classes.join(' ')}>
        {this.getPickerElement()}
      </span>
    );
  }
}

ColorPicker.propTypes = {
  defaultColor: PropTypes.string,
  defaultAlpha: PropTypes.number,
  // can custom
  color: PropTypes.string,
  alpha: PropTypes.number,
  onChange: PropTypes.func,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  prefixCls: PropTypes.string.isRequired,
  trigger: PropTypes.node.isRequired,
  mode: PropTypes.oneOf(['RGB', 'HSL', 'HSB']),
  placement: PropTypes.oneOf(['topLeft', 'topRight', 'bottomLeft', 'bottomRight']),
  style: PropTypes.object,
};

ColorPicker.defaultProps = {
  defaultColor: '#F00',
  includeAlpha: false,
  hexOnly: true,
  defaultAlpha: 100,
  onChange() {},
  onOpen() {},
  onClose() {},
  prefixCls: 'react-colorpicker',
  trigger: <span className="react-colorpicker-trigger"></span>,
  placement: 'topLeft',
  style: {},
};
