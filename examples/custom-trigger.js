webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(232);


/***/ },

/***/ 232:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	__webpack_require__(2);
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(35);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _rcColorPicker = __webpack_require__(174);
	
	var _rcColorPicker2 = _interopRequireDefault(_rcColorPicker);
	
	function changeHandler(colors) {
	  console.log(colors);
	}
	
	_reactDom2['default'].render(_react2['default'].createElement(
	  'div',
	  { style: { textAlign: 'center' } },
	  _react2['default'].createElement(
	    _rcColorPicker2['default'],
	    {
	      color: '#36c',
	      onChange: changeHandler
	    },
	    _react2['default'].createElement(
	      'span',
	      { className: 'react-custom-trigger' },
	      'choose color'
	    )
	  )
	), document.getElementById('__react-content'));

/***/ }

});
//# sourceMappingURL=custom-trigger.js.map