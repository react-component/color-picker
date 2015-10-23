webpackJsonp([3],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(206);


/***/ },

/***/ 206:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	__webpack_require__(2);
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(159);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactColorsPicker = __webpack_require__(160);
	
	var _reactColorsPicker2 = _interopRequireDefault(_reactColorsPicker);
	
	function changeHandler(colors) {
	  // console.log(colors);
	}
	
	_reactDom2['default'].render(_react2['default'].createElement(
	  'div',
	  { style: { margin: '20px 20px 20px', textAlign: 'center' } },
	  _react2['default'].createElement(_reactColorsPicker2['default'], {
	    defaultColor: '#36c',
	    onChange: changeHandler,
	    trigger: _react2['default'].createElement('span', { className: 'react-colorpicker-trigger' })
	  }),
	  _react2['default'].createElement('hr', null),
	  _react2['default'].createElement(_reactColorsPicker2['default'], {
	    defaultColor: '#F10',
	    onChange: changeHandler,
	    orient: ['top', 'right']
	  }),
	  _react2['default'].createElement(
	    'p',
	    null,
	    '^_^'
	  ),
	  _react2['default'].createElement(
	    'p',
	    null,
	    '^_^'
	  ),
	  _react2['default'].createElement(
	    'p',
	    null,
	    '^_^'
	  ),
	  _react2['default'].createElement(
	    'p',
	    null,
	    '^_^'
	  ),
	  _react2['default'].createElement(
	    'p',
	    null,
	    '^_^'
	  ),
	  _react2['default'].createElement(
	    'p',
	    null,
	    '^_^'
	  ),
	  _react2['default'].createElement(
	    'p',
	    null,
	    '^_^'
	  ),
	  _react2['default'].createElement(_reactColorsPicker2['default'], {
	    defaultColor: '#0F0',
	    onChange: changeHandler,
	    orient: ['bottom', 'right']
	  })
	), document.getElementById('__react-content'));

/***/ }

});
//# sourceMappingURL=simple.js.map