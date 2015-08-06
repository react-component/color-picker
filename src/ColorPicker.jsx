import React from 'react';
import Align from 'rc-align';
import rcUtil from 'rc-util';
import Animate from 'rc-animate';
const toFragment = rcUtil.Children.mapSelf;
import ColorPickerPanel from './Panel';
import Colr from 'colr';

const colr = new Colr();

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
      hsv: props.hsv || props.hsv,
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
        hsv: null,
      });
    } else if (nextProps.hsv) {
      this.setState({
        color: null,
        hsv: nextProps.hsv,
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
    if (!this.props.color && this.props.hsv === undefined) {
      this.setState(colors.original);
    }
    if (this.props.alpha === undefined) {
      this.setState({alpha: colors.alpha});
    }
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
    const pickerPanelElement = (<ColorPickerPanel ref={this.savePickerPanelRef}
                                                  color={this.state.color}
                                                  alpha={this.state.alpha}
                                                  hsv={this.state.hsv}
                                                  prefixCls={this.props.prefixCls + '-panel'}
                                                  onChange={this.onChange}
                                                  onBlur={this.onBlur}
      />);

    const orient = this.props.orient;

    return (<Animate
      component=""
      exclusive={true}
      animateMount={true}
      showProp="pickerOpen"
      transitionName={this.getTransitionName()}
      >
      <Align target={this.getTriggerDOMNode}
             key="picker"
             onAlign={this.onAlign}
             monitorWindowResize={true}
             disabled={!state.open}
             pickerOpen={state.open}
             align={this.getAlign(orient)}>
        {pickerPanelElement}
      </Align>
    </Animate>);
  }

  getRootDOMNode() {
    return React.findDOMNode(this);
  }

  getTriggerDOMNode() {
    return React.findDOMNode(this.triggerInstance);
  }

  getHexColor() {
    const state = this.state;
    return state.color || colr.fromHsvObject(state.hsv).toHex();
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
          backgroundColor: this.getHexColor(),
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
  color: React.PropTypes.string,
  hsv: React.PropTypes.object,
  alpha: React.PropTypes.number,
  onChange: React.PropTypes.func,
  prefixCls: React.PropTypes.string.isRequired,
  trigger: React.PropTypes.node.isRequired,
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
