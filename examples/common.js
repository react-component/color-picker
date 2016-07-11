/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, callbacks = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				callbacks.push.apply(callbacks, installedChunks[chunkId]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			modules[moduleId] = moreModules[moduleId];
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules);
/******/ 		while(callbacks.length)
/******/ 			callbacks.shift().call(null, __webpack_require__);
/******/ 		if(moreModules[0]) {
/******/ 			installedModules[0] = 0;
/******/ 			return __webpack_require__(0);
/******/ 		}
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// "0" means "already loaded"
/******/ 	// Array means "loading", array contains callbacks
/******/ 	var installedChunks = {
/******/ 		4:0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId, callback) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return callback.call(null, __webpack_require__);
/******/
/******/ 		// an array means "currently loading".
/******/ 		if(installedChunks[chunkId] !== undefined) {
/******/ 			installedChunks[chunkId].push(callback);
/******/ 		} else {
/******/ 			// start chunk loading
/******/ 			installedChunks[chunkId] = [callback];
/******/ 			var head = document.getElementsByTagName('head')[0];
/******/ 			var script = document.createElement('script');
/******/ 			script.type = 'text/javascript';
/******/ 			script.charset = 'utf-8';
/******/ 			script.async = true;
/******/
/******/ 			script.src = __webpack_require__.p + "" + chunkId + "." + ({"0":"anim","1":"custom-trigger","2":"panel","3":"simple"}[chunkId]||chunkId) + ".js";
/******/ 			head.appendChild(script);
/******/ 		}
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(4);

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(5);
	module.exports.Panel = __webpack_require__(6);

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-dom\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _rcTrigger = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"rc-trigger\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _rcTrigger2 = _interopRequireDefault(_rcTrigger);
	
	var _Panel = __webpack_require__(6);
	
	var _Panel2 = _interopRequireDefault(_Panel);
	
	var _placements = __webpack_require__(13);
	
	var _placements2 = _interopRequireDefault(_placements);
	
	function refFn(field, component) {
	  this[field] = component;
	}
	
	function prevent(e) {
	  e.preventDefault();
	}
	
	var ColorPicker = (function (_React$Component) {
	  _inherits(ColorPicker, _React$Component);
	
	  function ColorPicker(props) {
	    var _this = this;
	
	    _classCallCheck(this, ColorPicker);
	
	    _get(Object.getPrototypeOf(ColorPicker.prototype), 'constructor', this).call(this, props);
	
	    this.state = {
	      color: props.color || props.defaultColor,
	      alpha: props.alpha || props.defaultAlpha,
	      open: false
	    };
	
	    var events = ['onTriggerClick', 'onChange', 'onBlur', 'getPickerElement', 'getRootDOMNode', 'getTriggerDOMNode', 'onVisibleChange', 'setOpen', 'open', 'close', 'focus'];
	
	    events.forEach(function (e) {
	      _this[e] = _this[e].bind(_this);
	    });
	
	    this.savePickerPanelRef = refFn.bind(this, 'pickerPanelInstance');
	    this.saveTriggerRef = refFn.bind(this, 'triggerInstance');
	  }
	
	  _createClass(ColorPicker, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (nextProps.color) {
	        this.setState({
	          color: nextProps.color
	        });
	      }
	      if (nextProps.alpha) {
	        this.setState({
	          alpha: nextProps.alpha
	        });
	      }
	    }
	  }, {
	    key: 'onTriggerClick',
	    value: function onTriggerClick() {
	      this.setState({
	        open: !this.state.open
	      });
	    }
	  }, {
	    key: 'onChange',
	    value: function onChange(colors) {
	      this.setState({
	        color: colors.color,
	        alpha: colors.alpha
	      });
	      this.props.onChange(colors);
	    }
	  }, {
	    key: 'onBlur',
	    value: function onBlur() {
	      this.setState({
	        open: false
	      });
	    }
	  }, {
	    key: 'onVisibleChange',
	    value: function onVisibleChange(open) {
	      var _this2 = this;
	
	      this.setOpen(open, function () {
	        if (open) {
	          _reactDom2['default'].findDOMNode(_this2.pickerPanelInstance).focus();
	        }
	      });
	    }
	  }, {
	    key: 'setOpen',
	    value: function setOpen(open, callback) {
	      var _props = this.props;
	      var onOpen = _props.onOpen;
	      var onClose = _props.onClose;
	
	      if (this.state.open !== open) {
	        this.setState({
	          open: open
	        }, callback);
	        var _event = {
	          open: open
	        };
	        if (open) {
	          onOpen(_event);
	        } else {
	          onClose(_event);
	        }
	      }
	    }
	  }, {
	    key: 'getRootDOMNode',
	    value: function getRootDOMNode() {
	      return _reactDom2['default'].findDOMNode(this);
	    }
	  }, {
	    key: 'getTriggerDOMNode',
	    value: function getTriggerDOMNode() {
	      return _reactDom2['default'].findDOMNode(this.triggerInstance);
	    }
	  }, {
	    key: 'getPickerElement',
	    value: function getPickerElement() {
	      // const state = this.state;
	      return _react2['default'].createElement(_Panel2['default'], {
	        ref: this.savePickerPanelRef,
	        defaultColor: this.state.color,
	        alpha: this.state.alpha,
	        prefixCls: this.props.prefixCls + '-panel',
	        onChange: this.onChange,
	        onBlur: this.onBlur,
	        mode: this.props.mode
	      });
	    }
	  }, {
	    key: 'open',
	    value: function open(callback) {
	      this.setOpen(true, callback);
	    }
	  }, {
	    key: 'close',
	    value: function close(callback) {
	      this.setOpen(false, callback);
	    }
	  }, {
	    key: 'focus',
	    value: function focus() {
	      if (!this.state.open) {
	        _reactDom2['default'].findDOMNode(this).focus();
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var props = this.props;
	      var state = this.state;
	      var classes = [props.prefixCls + '-wrap'];
	      if (state.open) {
	        classes.push(props.prefixCls + '-open');
	      }
	
	      var children = props.children;
	
	      if (children) {
	        children = _react2['default'].cloneElement(children, {
	          ref: this.saveTriggerRef,
	          unselectable: true,
	          style: {
	            opacity: this.state.alpha / 100,
	            backgroundColor: this.state.color
	          },
	          onClick: this.onTriggerClick,
	          onMouseDown: prevent
	        });
	      }
	
	      var prefixCls = props.prefixCls;
	      var placement = props.placement;
	      var style = props.style;
	      var getCalendarContainer = props.getCalendarContainer;
	      var align = props.align;
	      var animation = props.animation;
	      var disabled = props.disabled;
	      var transitionName = props.transitionName;
	
	      return _react2['default'].createElement(
	        'div',
	        { className: classes.join(' ') },
	        _react2['default'].createElement(
	          _rcTrigger2['default'],
	          {
	            popup: this.getPickerElement(),
	            popupAlign: align,
	            builtinPlacements: _placements2['default'],
	            popupPlacement: placement,
	            action: disabled ? [] : ['click'],
	            destroyPopupOnHide: true,
	            getPopupContainer: getCalendarContainer,
	            popupStyle: style,
	            popupAnimation: animation,
	            popupTransitionName: transitionName,
	            popupVisible: state.open,
	            onPopupVisibleChange: this.onVisibleChange,
	            prefixCls: prefixCls },
	          children
	        )
	      );
	    }
	  }]);
	
	  return ColorPicker;
	})(_react2['default'].Component);
	
	exports['default'] = ColorPicker;
	
	ColorPicker.propTypes = {
	  defaultColor: _react.PropTypes.string,
	  defaultAlpha: _react.PropTypes.number,
	  // can custom
	  color: _react.PropTypes.string,
	  alpha: _react.PropTypes.number,
	  onChange: _react.PropTypes.func,
	  onOpen: _react.PropTypes.func,
	  onClose: _react.PropTypes.func,
	  prefixCls: _react.PropTypes.string.isRequired,
	  children: _react.PropTypes.node.isRequired,
	  mode: _react.PropTypes.oneOf(['RGB', 'HSL', 'HSB']),
	  placement: _react.PropTypes.oneOf(['topLeft', 'topRight', 'bottomLeft', 'bottomRight']),
	  style: _react.PropTypes.object
	};
	
	ColorPicker.defaultProps = {
	  defaultColor: '#F00',
	  defaultAlpha: 100,
	  onChange: function onChange() {},
	  onOpen: function onOpen() {},
	  onClose: function onClose() {},
	  prefixCls: 'rc-color-picker',
	  children: _react2['default'].createElement('span', { className: 'rc-color-picker-trigger' }),
	  placement: 'topLeft',
	  style: {}
	};
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _react2 = _interopRequireDefault(_react);
	
	var _colr = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"colr\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _colr2 = _interopRequireDefault(_colr);
	
	var _Board = __webpack_require__(7);
	
	var _Board2 = _interopRequireDefault(_Board);
	
	var _Preview = __webpack_require__(8);
	
	var _Preview2 = _interopRequireDefault(_Preview);
	
	var _Ribbon = __webpack_require__(9);
	
	var _Ribbon2 = _interopRequireDefault(_Ribbon);
	
	var _Alpha = __webpack_require__(10);
	
	var _Alpha2 = _interopRequireDefault(_Alpha);
	
	var _Params = __webpack_require__(11);
	
	var _Params2 = _interopRequireDefault(_Params);
	
	var _utilsValidationColor = __webpack_require__(12);
	
	var _utilsValidationColor2 = _interopRequireDefault(_utilsValidationColor);
	
	function noop() {}
	
	var colr = new _colr2['default']();
	
	var Panel = (function (_React$Component) {
	  _inherits(Panel, _React$Component);
	
	  function Panel(props) {
	    var _this = this;
	
	    _classCallCheck(this, Panel);
	
	    _get(Object.getPrototypeOf(Panel.prototype), 'constructor', this).call(this, props);
	
	    var color = props.color || props.defaultColor;
	    var hsv = colr.fromHex(color).toHsvObject();
	
	    this.state = {
	      paramsHsv: hsv,
	      hsv: hsv,
	      alpha: props.alpha || props.defaultAlpha
	    };
	
	    var events = ['onChange', 'onAlphaChange', 'onFocus', 'onBlur', 'onSystemColorPickerOpen'];
	    // bind methods
	    events.forEach(function (m) {
	      _this[m] = _this[m].bind(_this);
	    });
	  }
	
	  _createClass(Panel, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (nextProps.color) {
	        var hsv = colr.fromHex(nextProps.color).toHsvObject();
	        this.setState({
	          hsv: hsv
	        });
	      }
	      if (nextProps.alpha !== undefined) {
	        this.setState({
	          alpha: nextProps.alpha
	        });
	      }
	    }
	  }, {
	    key: 'onChange',
	    value: function onChange(hsvObject) {
	      var syncParams = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];
	
	      var hsv = hsvObject;
	      var state = {
	        hsv: hsv
	      };
	      if (syncParams) {
	        state.paramsHsv = hsv;
	      }
	      this.setState(state);
	
	      var ret = {
	        color: this.getHexColor(hsv),
	        hsv: hsv,
	        alpha: this.state.alpha
	      };
	      this.props.onChange(ret);
	    }
	  }, {
	    key: 'onSystemColorPickerOpen',
	    value: function onSystemColorPickerOpen(e) {
	      // only work with broswer which support color input
	      if (e.target.type === 'color') {
	        this.systemColorPickerOpen = true;
	      }
	    }
	  }, {
	    key: 'onAlphaChange',
	    value: function onAlphaChange(alpha) {
	      if (this.props.alpha === undefined) {
	        this.setState({
	          alpha: alpha
	        });
	      }
	      this.props.onChange({
	        color: this.getHexColor(),
	        hsv: this.state.hsv,
	        alpha: alpha
	      });
	    }
	  }, {
	    key: 'onFocus',
	    value: function onFocus() {
	      if (this._blurTimer) {
	        clearTimeout(this._blurTimer);
	        this._blurTimer = null;
	      } else {
	        this.props.onFocus();
	      }
	    }
	  }, {
	    key: 'onBlur',
	    value: function onBlur() {
	      var _this2 = this;
	
	      if (this._blurTimer) {
	        clearTimeout(this._blurTimer);
	      }
	      this._blurTimer = setTimeout(function () {
	        // if is system color picker open, then stop run blur
	        if (_this2.systemColorPickerOpen) {
	          _this2.systemColorPickerOpen = false;
	          return;
	        }
	
	        _this2.props.onBlur();
	      }, 100);
	    }
	  }, {
	    key: 'getHexColor',
	    value: function getHexColor(hsv) {
	      return colr.fromHsvObject(hsv || this.state.hsv).toHex();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var prefixCls = this.props.prefixCls;
	      var hsv = this.state.hsv;
	      var alpha = this.state.alpha;
	      return _react2['default'].createElement(
	        'div',
	        {
	          className: prefixCls,
	          style: this.props.style,
	          onFocus: this.onFocus,
	          onBlur: this.onBlur,
	          tabIndex: '0'
	        },
	        _react2['default'].createElement(
	          'div',
	          { className: prefixCls + '-' + 'inner' },
	          _react2['default'].createElement(_Board2['default'], {
	            rootPrefixCls: prefixCls,
	            hsv: hsv,
	            onChange: this.onChange
	          }),
	          _react2['default'].createElement(
	            'div',
	            { className: prefixCls + '-' + 'wrap' },
	            _react2['default'].createElement(
	              'div',
	              { className: prefixCls + '-' + 'wrap-ribbon' },
	              _react2['default'].createElement(_Ribbon2['default'], {
	                rootPrefixCls: prefixCls,
	                hsv: hsv,
	                onChange: this.onChange
	              })
	            ),
	            _react2['default'].createElement(
	              'div',
	              { className: prefixCls + '-' + 'wrap-alpha' },
	              _react2['default'].createElement(_Alpha2['default'], {
	                rootPrefixCls: prefixCls,
	                alpha: alpha,
	                hsv: hsv,
	                onChange: this.onAlphaChange
	              })
	            ),
	            _react2['default'].createElement(
	              'div',
	              { className: prefixCls + '-' + 'wrap-preview' },
	              _react2['default'].createElement(_Preview2['default'], {
	                rootPrefixCls: prefixCls,
	                alpha: alpha,
	                onChange: this.onChange,
	                onInputClick: this.onSystemColorPickerOpen,
	                hsv: hsv
	              })
	            )
	          ),
	          _react2['default'].createElement(
	            'div',
	            { className: prefixCls + '-' + 'wrap', style: { height: 40, marginTop: 6 } },
	            _react2['default'].createElement(_Params2['default'], {
	              rootPrefixCls: prefixCls,
	              hsv: this.state.paramsHsv,
	              alpha: alpha,
	              onAlphaChange: this.onAlphaChange,
	              onChange: this.onChange,
	              mode: this.props.mode
	            })
	          )
	        )
	      );
	    }
	  }]);
	
	  return Panel;
	})(_react2['default'].Component);
	
	exports['default'] = Panel;
	
	Panel.propTypes = {
	  defaultAlpha: _react.PropTypes.number,
	  defaultColor: _utilsValidationColor2['default'],
	  // can custom
	  prefixCls: _react.PropTypes.string,
	  color: _utilsValidationColor2['default'],
	  alpha: _react.PropTypes.number,
	  style: _react.PropTypes.object,
	  onChange: _react.PropTypes.func,
	  onFocus: _react.PropTypes.func,
	  onBlur: _react.PropTypes.func,
	  mode: _react.PropTypes.oneOf(['RGB', 'HSL', 'HSB'])
	};
	
	Panel.defaultProps = {
	  prefixCls: 'rc-color-picker-panel',
	  defaultColor: '#ff0000',
	  defaultAlpha: 100,
	  style: {},
	  onChange: noop,
	  onFocus: noop,
	  onBlur: noop,
	  mode: 'RGB'
	};
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _colr = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"colr\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _colr2 = _interopRequireDefault(_colr);
	
	var _react = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-dom\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _rcUtil = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"rc-util\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _rcUtil2 = _interopRequireDefault(_rcUtil);
	
	var colr = new _colr2['default']();
	
	var WIDTH = 200;
	var HEIGHT = 150;
	
	var Board = (function (_React$Component) {
	  _inherits(Board, _React$Component);
	
	  function Board(props) {
	    var _this = this;
	
	    _classCallCheck(this, Board);
	
	    _get(Object.getPrototypeOf(Board.prototype), 'constructor', this).call(this, props);
	    var events = ['onBoardMouseDown', 'onBoardDrag', 'onBoardDragEnd'];
	    events.forEach(function (m) {
	      _this[m] = _this[m].bind(_this);
	    });
	  }
	
	  _createClass(Board, [{
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.removeListeners();
	    }
	  }, {
	    key: 'onBoardMouseDown',
	    value: function onBoardMouseDown(e) {
	      var x = e.clientX;
	      var y = e.clientY;
	      this.pointMoveTo({
	        x: x,
	        y: y
	      });
	      this.dragListener = _rcUtil2['default'].Dom.addEventListener(window, 'mousemove', this.onBoardDrag);
	      this.dragUpListener = _rcUtil2['default'].Dom.addEventListener(window, 'mouseup', this.onBoardDragEnd);
	    }
	  }, {
	    key: 'onBoardDrag',
	    value: function onBoardDrag(e) {
	      var x = e.clientX;
	      var y = e.clientY;
	      this.pointMoveTo({
	        x: x,
	        y: y
	      });
	    }
	  }, {
	    key: 'onBoardDragEnd',
	    value: function onBoardDragEnd(e) {
	      var x = e.clientX;
	      var y = e.clientY;
	      this.pointMoveTo({
	        x: x,
	        y: y
	      });
	      this.removeListeners();
	    }
	  }, {
	    key: 'getPrefixCls',
	    value: function getPrefixCls() {
	      return this.props.rootPrefixCls + '-board';
	    }
	  }, {
	    key: 'removeListeners',
	    value: function removeListeners() {
	      if (this.dragListener) {
	        this.dragListener.remove();
	        this.dragListener = null;
	      }
	      if (this.dragUpListener) {
	        this.dragUpListener.remove();
	        this.dragUpListener = null;
	      }
	    }
	
	    /**
	     * 移动光标位置到
	     * @param  {object} pos X Y 全局坐标点
	     * @return {undefined}
	     */
	  }, {
	    key: 'pointMoveTo',
	    value: function pointMoveTo(pos) {
	      var rect = _reactDom2['default'].findDOMNode(this).getBoundingClientRect();
	      var left = pos.x - rect.left;
	      var top = pos.y - rect.top;
	
	      left = Math.max(0, left);
	      left = Math.min(left, WIDTH);
	      top = Math.max(0, top);
	      top = Math.min(top, HEIGHT);
	
	      var hsv = {
	        h: this.props.hsv.h,
	        s: parseInt(left / WIDTH * 100, 10),
	        v: parseInt((1 - top / HEIGHT) * 100, 10)
	      };
	      this.props.onChange(hsv);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var prefixCls = this.getPrefixCls();
	      var hsv = this.props.hsv;
	      var hueHsv = [hsv.h, 100, 100];
	      var hueColor = colr.fromHsvArray(hueHsv).toHex();
	      var x = hsv.s / 100 * WIDTH - 4;
	      var y = (1 - hsv.v / 100) * HEIGHT - 4;
	      return _react2['default'].createElement(
	        'div',
	        { className: prefixCls },
	        _react2['default'].createElement(
	          'div',
	          { className: prefixCls + '-' + 'hsv', style: { backgroundColor: hueColor } },
	          _react2['default'].createElement('div', { className: prefixCls + '-' + 'value' }),
	          _react2['default'].createElement('div', { className: prefixCls + '-' + 'saturation' })
	        ),
	        _react2['default'].createElement('span', { style: { left: x, top: y } }),
	        _react2['default'].createElement('div', {
	          className: prefixCls + '-' + 'handler',
	          onMouseDown: this.onBoardMouseDown
	        })
	      );
	    }
	  }]);
	
	  return Board;
	})(_react2['default'].Component);
	
	exports['default'] = Board;
	
	Board.propTypes = {
	  hsv: _react2['default'].PropTypes.object,
	  onChange: _react2['default'].PropTypes.func,
	  rootPrefixCls: _react2['default'].PropTypes.string
	};
	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _react2 = _interopRequireDefault(_react);
	
	var _colr = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"colr\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _colr2 = _interopRequireDefault(_colr);
	
	var colr = new _colr2['default']();
	
	var Preview = (function (_React$Component) {
	  _inherits(Preview, _React$Component);
	
	  function Preview() {
	    _classCallCheck(this, Preview);
	
	    _get(Object.getPrototypeOf(Preview.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(Preview, [{
	    key: 'onChange',
	    value: function onChange(e) {
	      var value = e.target.value;
	      var color = colr.fromHex(value);
	      this.props.onChange(color.toHsvObject());
	      e.stopPropagation();
	    }
	  }, {
	    key: 'getPrefixCls',
	    value: function getPrefixCls() {
	      return this.props.rootPrefixCls + '-preview';
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var prefixCls = this.getPrefixCls();
	      var hex = colr.fromHsvObject(this.props.hsv).toHex();
	      return _react2['default'].createElement(
	        'div',
	        { className: prefixCls },
	        _react2['default'].createElement('span', { style: { backgroundColor: hex, opacity: this.props.alpha / 100 } }),
	        _react2['default'].createElement('input', {
	          type: 'color',
	          value: hex,
	          onChange: this.onChange.bind(this),
	          onClick: this.props.onInputClick
	        })
	      );
	    }
	  }]);
	
	  return Preview;
	})(_react2['default'].Component);
	
	exports['default'] = Preview;
	
	Preview.propTypes = {
	  rootPrefixCls: _react2['default'].PropTypes.string,
	  hsv: _react2['default'].PropTypes.object,
	  alpha: _react2['default'].PropTypes.number,
	  onChange: _react2['default'].PropTypes.func,
	  onInputClick: _react2['default'].PropTypes.func
	};
	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-dom\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _rcUtil = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"rc-util\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _rcUtil2 = _interopRequireDefault(_rcUtil);
	
	var Ribbon = (function (_React$Component) {
	  _inherits(Ribbon, _React$Component);
	
	  function Ribbon(props) {
	    var _this = this;
	
	    _classCallCheck(this, Ribbon);
	
	    _get(Object.getPrototypeOf(Ribbon.prototype), 'constructor', this).call(this, props);
	
	    var events = ['onMouseDown', 'onDrag', 'onDragEnd', 'pointMoveTo', '_setHuePosition'];
	    events.forEach(function (e) {
	      if (_this[e]) {
	        _this[e] = _this[e].bind(_this);
	      }
	    });
	  }
	
	  _createClass(Ribbon, [{
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.removeListeners();
	    }
	  }, {
	    key: 'onMouseDown',
	    value: function onMouseDown(e) {
	      var x = e.clientX;
	      var y = e.clientY;
	
	      this.pointMoveTo({
	        x: x, y: y
	      });
	
	      this.dragListener = _rcUtil2['default'].Dom.addEventListener(window, 'mousemove', this.onDrag);
	      this.dragUpListener = _rcUtil2['default'].Dom.addEventListener(window, 'mouseup', this.onDragEnd);
	    }
	  }, {
	    key: 'onDrag',
	    value: function onDrag(e) {
	      var x = e.clientX;
	      var y = e.clientY;
	      this.pointMoveTo({
	        x: x, y: y
	      });
	    }
	  }, {
	    key: 'onDragEnd',
	    value: function onDragEnd(e) {
	      var x = e.clientX;
	      var y = e.clientY;
	      this.pointMoveTo({
	        x: x, y: y
	      });
	      this.removeListeners();
	    }
	  }, {
	    key: 'getPrefixCls',
	    value: function getPrefixCls() {
	      return this.props.rootPrefixCls + '-ribbon';
	    }
	  }, {
	    key: 'pointMoveTo',
	    value: function pointMoveTo(coords) {
	      var rect = _reactDom2['default'].findDOMNode(this).getBoundingClientRect();
	      var width = rect.width;
	      var left = coords.x - rect.left;
	      left = Math.max(0, left);
	      left = Math.min(left, width);
	      var huePercent = left / width;
	      var hue = huePercent * 360;
	      // 新的对象, 避免引用
	      var hsv = _extends({}, this.props.hsv, {
	        h: hue
	      });
	      this.props.onChange(hsv);
	    }
	  }, {
	    key: 'removeListeners',
	    value: function removeListeners() {
	      if (this.dragListener) {
	        this.dragListener.remove();
	        this.dragListener = null;
	      }
	      if (this.dragUpListener) {
	        this.dragUpListener.remove();
	        this.dragUpListener = null;
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var prefixCls = this.getPrefixCls();
	      var HSV = this.props.hsv;
	      var hue = HSV.h;
	      var per = hue / 360 * 100;
	      return _react2['default'].createElement(
	        'div',
	        { className: prefixCls },
	        _react2['default'].createElement('span', { ref: 'point', style: { left: per + '%' } }),
	        _react2['default'].createElement('div', {
	          className: prefixCls + '-' + 'handler',
	          onMouseDown: this.onMouseDown
	        })
	      );
	    }
	  }]);
	
	  return Ribbon;
	})(_react2['default'].Component);
	
	exports['default'] = Ribbon;
	
	Ribbon.propTypes = {
	  rootPrefixCls: _react2['default'].PropTypes.string,
	  hsv: _react2['default'].PropTypes.object,
	  onChange: _react2['default'].PropTypes.func
	};
	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-dom\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _colr = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"colr\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _colr2 = _interopRequireDefault(_colr);
	
	var _rcUtil = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"rc-util\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _rcUtil2 = _interopRequireDefault(_rcUtil);
	
	var colr = new _colr2['default']();
	
	function rgbaColor(r, g, b, a) {
	  return 'rgba(' + [r, g, b, a / 100].join(',') + ')';
	}
	
	var Alpha = (function (_React$Component) {
	  _inherits(Alpha, _React$Component);
	
	  function Alpha(props) {
	    var _this = this;
	
	    _classCallCheck(this, Alpha);
	
	    _get(Object.getPrototypeOf(Alpha.prototype), 'constructor', this).call(this, props);
	    var events = ['onMouseDown', 'onDrag', 'onDragEnd', 'pointMoveTo', 'getBackground'];
	    events.forEach(function (e) {
	      _this[e] = _this[e].bind(_this);
	    });
	  }
	
	  _createClass(Alpha, [{
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.removeListeners();
	    }
	  }, {
	    key: 'onMouseDown',
	    value: function onMouseDown(e) {
	      var x = e.clientX;
	      var y = e.clientY;
	
	      this.pointMoveTo({
	        x: x, y: y
	      });
	
	      this.dragListener = _rcUtil2['default'].Dom.addEventListener(window, 'mousemove', this.onDrag);
	      this.dragUpListener = _rcUtil2['default'].Dom.addEventListener(window, 'mouseup', this.onDragEnd);
	    }
	  }, {
	    key: 'onDrag',
	    value: function onDrag(e) {
	      var x = e.clientX;
	      var y = e.clientY;
	      this.pointMoveTo({
	        x: x, y: y
	      });
	    }
	  }, {
	    key: 'onDragEnd',
	    value: function onDragEnd(e) {
	      var x = e.clientX;
	      var y = e.clientY;
	      this.pointMoveTo({
	        x: x, y: y
	      });
	      this.removeListeners();
	    }
	  }, {
	    key: 'getBackground',
	    value: function getBackground() {
	      var _colr$fromHsvObject$toRgbObject = colr.fromHsvObject(this.props.hsv).toRgbObject();
	
	      var r = _colr$fromHsvObject$toRgbObject.r;
	      var g = _colr$fromHsvObject$toRgbObject.g;
	      var b = _colr$fromHsvObject$toRgbObject.b;
	
	      var opacityGradient = 'linear-gradient(to right, ' + rgbaColor(r, g, b, 0) + ', ' + rgbaColor(r, g, b, 100) + ')';
	      return opacityGradient;
	    }
	  }, {
	    key: 'getPrefixCls',
	    value: function getPrefixCls() {
	      return this.props.rootPrefixCls + '-alpha';
	    }
	  }, {
	    key: 'pointMoveTo',
	    value: function pointMoveTo(coords) {
	      var rect = _reactDom2['default'].findDOMNode(this).getBoundingClientRect();
	      var width = rect.width;
	      var left = coords.x - rect.left;
	
	      left = Math.max(0, left);
	      left = Math.min(left, width);
	
	      var alpha = Math.floor(left / width * 100);
	
	      this.props.onChange(alpha);
	    }
	  }, {
	    key: 'removeListeners',
	    value: function removeListeners() {
	      if (this.dragListener) {
	        this.dragListener.remove();
	        this.dragListener = null;
	      }
	      if (this.dragUpListener) {
	        this.dragUpListener.remove();
	        this.dragUpListener = null;
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var prefixCls = this.getPrefixCls();
	      return _react2['default'].createElement(
	        'div',
	        { className: prefixCls },
	        _react2['default'].createElement('div', {
	          ref: 'bg',
	          className: prefixCls + '-' + 'bg',
	          style: { background: this.getBackground() }
	        }),
	        _react2['default'].createElement('span', { style: { left: this.props.alpha + '%' } }),
	        _react2['default'].createElement('div', {
	          className: prefixCls + '-' + 'handler',
	          onMouseDown: this.onMouseDown
	        })
	      );
	    }
	  }]);
	
	  return Alpha;
	})(_react2['default'].Component);
	
	exports['default'] = Alpha;
	
	Alpha.propTypes = {
	  hsv: _react2['default'].PropTypes.object,
	  onChange: _react2['default'].PropTypes.func,
	  rootPrefixCls: _react2['default'].PropTypes.string,
	  alpha: _react2['default'].PropTypes.number
	};
	module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _react2 = _interopRequireDefault(_react);
	
	var _colr = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"colr\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _colr2 = _interopRequireDefault(_colr);
	
	var colr = new _colr2['default']();
	var modesMap = ['RGB', 'HSB', 'HSL'];
	
	var Params = (function (_React$Component) {
	  _inherits(Params, _React$Component);
	
	  function Params(props) {
	    var _this = this;
	
	    _classCallCheck(this, Params);
	
	    _get(Object.getPrototypeOf(Params.prototype), 'constructor', this).call(this, props);
	
	    var color = colr.fromHsvObject(props.hsv);
	
	    // 管理 input 的状态
	    this.state = {
	      mode: props.mode,
	      color: color,
	      hex: color.toHex().substr(1)
	    };
	
	    var events = ['onHexHandler', 'onAlphaHandler', 'onColorChannelChange', 'onModeChange', 'getChannelInRange', 'getColorByChannel'];
	
	    events.forEach(function (e) {
	      if (_this[e]) {
	        _this[e] = _this[e].bind(_this);
	      }
	    });
	  }
	
	  _createClass(Params, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (nextProps.hsv !== this.props.hsv) {
	        var color = colr.fromHsvObject(nextProps.hsv);
	        this.setState({
	          hex: color.toHex().substr(1),
	          color: color
	        });
	      }
	    }
	  }, {
	    key: 'onHexHandler',
	    value: function onHexHandler(event) {
	      var value = event.target.value;
	      var color = null;
	      try {
	        color = _colr2['default'].fromHex(value);
	      } catch (e) {
	        /* eslint no-empty:0 */
	      }
	
	      if (color !== null) {
	        this.setState({
	          color: color,
	          hex: value
	        });
	        this.props.onChange(color.toHsvObject(), false);
	      } else {
	        this.setState({
	          hex: value
	        });
	      }
	    }
	  }, {
	    key: 'onModeChange',
	    value: function onModeChange() {
	      var mode = this.state.mode;
	      var modeIndex = (modesMap.indexOf(mode) + 1) % modesMap.length;
	      var state = this.state;
	
	      mode = modesMap[modeIndex];
	      var colorChannel = this.getColorChannel(state.color, mode);
	      this.setState({
	        mode: mode,
	        colorChannel: colorChannel
	      });
	    }
	  }, {
	    key: 'onAlphaHandler',
	    value: function onAlphaHandler(event) {
	      var alpha = parseInt(event.target.value, 10);
	      if (isNaN(alpha)) {
	        alpha = 0;
	      }
	      alpha = Math.max(0, alpha);
	      alpha = Math.min(alpha, 100);
	
	      this.setState({
	        alpha: alpha
	      });
	
	      this.props.onAlphaChange(alpha);
	    }
	  }, {
	    key: 'onColorChannelChange',
	    value: function onColorChannelChange(index, event) {
	      var value = this.getChannelInRange(event.target.value, index);
	      var colorChannel = this.getColorChannel();
	
	      colorChannel[index] = value;
	
	      var color = this.getColorByChannel(colorChannel);
	
	      this.setState({
	        hex: color.toHex().substr(1),
	        color: color
	      });
	      this.props.onChange(color.toHsvObject(), false);
	    }
	  }, {
	    key: 'getChannelInRange',
	    value: function getChannelInRange(value, index) {
	      var channelMap = {
	        RGB: [[0, 255], [0, 255], [0, 255]],
	        HSB: [[0, 360], [0, 100], [0, 100]],
	        HSL: [[0, 360], [0, 100], [0, 100]]
	      };
	      var mode = this.state.mode;
	      var range = channelMap[mode][index];
	      var result = parseInt(value, 10);
	      if (isNaN(result)) {
	        result = 0;
	      }
	      result = Math.max(range[0], result);
	      result = Math.min(result, range[1]);
	      return result;
	    }
	  }, {
	    key: 'getColorByChannel',
	    value: function getColorByChannel(colorChannel) {
	      var colorMode = this.state.mode;
	      var color = undefined;
	      switch (colorMode) {
	        case 'RGB':
	          color = colr.fromRgbArray(colorChannel);
	          break;
	        case 'HSB':
	          color = colr.fromHsvArray(colorChannel);
	          break;
	        case 'HSL':
	          color = colr.fromHslArray(colorChannel);
	          break;
	        default:
	          color = colr.fromRgbArray(colorChannel);
	      }
	      return color;
	    }
	  }, {
	    key: 'getPrefixCls',
	    value: function getPrefixCls() {
	      return this.props.rootPrefixCls + '-params';
	    }
	  }, {
	    key: 'getColorChannel',
	    value: function getColorChannel(colrInstance, mode) {
	      var color = colrInstance || this.state.color;
	      var colorMode = mode || this.state.mode;
	      var result = undefined;
	      switch (colorMode) {
	        case 'RGB':
	          result = color.toRgbArray();
	          break;
	        case 'HSB':
	          result = color.toHsvArray();
	          break;
	        case 'HSL':
	          result = color.toHslArray();
	          break;
	        default:
	          result = color.toRgbArray();
	      }
	      return result;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var prefixCls = this.getPrefixCls();
	      var colorChannel = this.getColorChannel();
	      return _react2['default'].createElement(
	        'div',
	        { className: prefixCls },
	        _react2['default'].createElement(
	          'div',
	          { className: prefixCls + '-' + 'input' },
	          _react2['default'].createElement('input', {
	            className: prefixCls + '-' + 'hex',
	            type: 'text',
	            maxLength: '6',
	            onChange: this.onHexHandler,
	            value: this.state.hex.toUpperCase()
	          }),
	          _react2['default'].createElement('input', { type: 'number', ref: 'channel_0',
	            value: colorChannel[0],
	            onChange: this.onColorChannelChange.bind(null, 0) }),
	          _react2['default'].createElement('input', { type: 'number', ref: 'channel_1',
	            value: colorChannel[1],
	            onChange: this.onColorChannelChange.bind(null, 1) }),
	          _react2['default'].createElement('input', { type: 'number', ref: 'channel_2',
	            value: colorChannel[2],
	            onChange: this.onColorChannelChange.bind(null, 2) }),
	          _react2['default'].createElement('input', { type: 'number',
	            value: this.props.alpha,
	            onChange: this.onAlphaHandler })
	        ),
	        _react2['default'].createElement(
	          'div',
	          { className: prefixCls + '-' + 'lable' },
	          _react2['default'].createElement(
	            'label',
	            { className: prefixCls + '-' + 'lable-hex' },
	            'Hex'
	          ),
	          _react2['default'].createElement(
	            'label',
	            { className: prefixCls + '-' + 'lable-number',
	              onClick: this.onModeChange
	            },
	            this.state.mode[0]
	          ),
	          _react2['default'].createElement(
	            'label',
	            { className: prefixCls + '-' + 'lable-number',
	              onClick: this.onModeChange
	            },
	            this.state.mode[1]
	          ),
	          _react2['default'].createElement(
	            'label',
	            { className: prefixCls + '-' + 'lable-number',
	              onClick: this.onModeChange
	            },
	            this.state.mode[2]
	          ),
	          _react2['default'].createElement(
	            'label',
	            { className: prefixCls + '-' + 'lable-alpha' },
	            'A'
	          )
	        )
	      );
	    }
	  }]);
	
	  return Params;
	})(_react2['default'].Component);
	
	exports['default'] = Params;
	
	Params.propTypes = {
	  onChange: _react2['default'].PropTypes.func,
	  hsv: _react2['default'].PropTypes.object,
	  alpha: _react2['default'].PropTypes.number,
	  rootPrefixCls: _react2['default'].PropTypes.string,
	  onAlphaChange: _react2['default'].PropTypes.func,
	  mode: _react2['default'].PropTypes.oneOf(modesMap)
	};
	
	Params.defaultProps = {
	  mode: modesMap[0]
	};
	module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function validationColor(props, propName, componentName) {
	  if (props[propName] && !/^#[0-9a-fA-F]{3,6}$/.test(props[propName])) {
	    return new Error(componentName + '.props.' + propName + ' Validation failed!');
	  }
	};

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var autoAdjustOverflow = {
	  adjustX: 1,
	  adjustY: 1
	};
	
	var targetOffset = [0, 0];
	
	var placements = {
	  topLeft: {
	    points: ['bl', 'tl'],
	    overflow: autoAdjustOverflow,
	    offset: [0, -5],
	    targetOffset: targetOffset
	  },
	  topRight: {
	    points: ['br', 'tr'],
	    overflow: autoAdjustOverflow,
	    offset: [0, -5],
	    targetOffset: targetOffset
	  },
	  bottomLeft: {
	    points: ['tl', 'bl'],
	    overflow: autoAdjustOverflow,
	    offset: [0, 5],
	    targetOffset: targetOffset
	  },
	  bottomRight: {
	    points: ['tr', 'br'],
	    overflow: autoAdjustOverflow,
	    offset: [0, 5],
	    targetOffset: targetOffset
	  }
	};
	
	exports['default'] = placements;
	module.exports = exports['default'];

/***/ }
/******/ ]);
//# sourceMappingURL=common.js.map