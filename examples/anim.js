webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(10);


/***/ },

/***/ 10:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	__webpack_require__(11);
	
	var _react = __webpack_require__(15);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactColorsPicker = __webpack_require__(16);
	
	var _reactColorsPicker2 = _interopRequireDefault(_reactColorsPicker);
	
	function changeHandler(colors) {
	  console.log(colors);
	}
	
	_react2['default'].render(_react2['default'].createElement(
	  'div',
	  { style: { margin: '20px 20px 20px', textAlign: 'center' } },
	  _react2['default'].createElement(_reactColorsPicker2['default'], {
	    animation: 'slide-up',
	    defaultColor: '#36c',
	    onChange: changeHandler,
	    trigger: _react2['default'].createElement('span', { className: 'react-colorpicker-trigger' })
	  })
	), document.getElementById('__react-content'));

/***/ }

});
//# sourceMappingURL=anim.js.map