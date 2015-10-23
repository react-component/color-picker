import React from 'react';
import ReactDOM from 'react-dom';
import Align from 'rc-align';
import rcUtil from 'rc-util';
import Animate from 'rc-animate';
const toFragment = rcUtil.Children.mapSelf;
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
      'getAlign',
      'onTriggerClick',
      'onChange',
      'onBlur',
      'getPickerElement',
      'getRootDOMNode',
      'getTriggerDOMNode',
      'getTransitionName',
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

  onAlign(node) {
    // focus after align
    if (node !== document.activeElement && !rcUtil.Dom.contains(node, document.activeElement)) {
      node.focus();
    }
  }

  getTransitionName() {
    const props = this.props;
    let transitionName = props.transitionName;
    if (!transitionName && props.animation) {
      transitionName = `${props.prefixCls}-${props.animation}`;
    }
    return transitionName;
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

    const adjustOrientOnPickerOverflow = this.props.adjustOrientOnPickerOverflow;

    return {
      points: points,
      offset: offset,
      overflow: {
        adjustX: adjustOrientOnPickerOverflow,
        adjustY: adjustOrientOnPickerOverflow,
      },
    };
  }

  getPickerElement() {
    const state = this.state;
    const pickerPanelElement = (<ColorPickerPanel
        ref={this.savePickerPanelRef}
        defaultColor={this.state.color}
        alpha={this.state.alpha}
        prefixCls={this.props.prefixCls + '-panel'}
        onChange={this.onChange}
        onBlur={this.onBlur}
        mode={this.props.mode}
      />);

    const orient = this.props.orient;

    return (<Animate
      component=""
      exclusive
      animateMount
      showProp="pickerOpen"
      transitionName={this.getTransitionName()}
      >
      <Align target={this.getTriggerDOMNode}
             key="picker"
             onAlign={this.onAlign}
             monitorWindowResize
             disabled={!state.open}
             pickerOpen={state.open}
             align={this.getAlign(orient)}>
        {pickerPanelElement}
      </Align>
    </Animate>);
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

ColorPicker.propTypes = {
  adjustOrientOnPickerOverflow: React.PropTypes.bool,
  animation: React.PropTypes.string,
  orient: React.PropTypes.arrayOf(
    React.PropTypes.oneOf(['left', 'top', 'right', 'bottom'])
  ),
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
  adjustOrientOnPickerOverflow: true,
  defaultColor: '#F00',
  defaultHsv: null,
  defaultAlpha: 100,
  orient: ['top', 'left'],
  onChange() {
  },
  prefixCls: 'react-colorpicker',
  trigger: <span className="react-colorpicker-trigger"></span>,
};
