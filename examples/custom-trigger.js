webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(43);


/***/ },

/***/ 43:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	__webpack_require__(2);
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactColorsPicker = __webpack_require__(4);
	
	var _reactColorsPicker2 = _interopRequireDefault(_reactColorsPicker);
	
	function changeHandler(colors) {
	  console.log(colors);
	}
	
	_react2['default'].render(_react2['default'].createElement(
	  'div',
	  { style: { textAlign: 'center' } },
	  _react2['default'].createElement(_reactColorsPicker2['default'], {
	    defaultColor: '#36c',
	    onChange: changeHandler,
	    trigger: _react2['default'].createElement(
	      'span',
	      { className: 'react-custom-trigger' },
	      'choose color'
	    )
	  })
	), document.getElementById('__react-content'));

/***/ }

});
//# sourceMappingURL=custom-trigger.js.map