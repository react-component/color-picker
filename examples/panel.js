webpackJsonp([2],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(170);


/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(2);
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(14);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _rcColorPicker = __webpack_require__(29);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function onChange(obj) {
	  console.log(obj);
	}
	
	_reactDom2.default.render(_react2.default.createElement(
	  'div',
	  { style: { backgroundColor: '#ddd', padding: 20 } },
	  _react2.default.createElement(_rcColorPicker.Panel, { enableAlpha: false, color: '#345679', onChange: onChange, mode: 'RGB' }),
	  _react2.default.createElement('hr', null),
	  _react2.default.createElement(_rcColorPicker.Panel, { alpha: 80, color: '#477898', onChange: onChange, mode: 'HSB' })
	), document.getElementById('__react-content'));

/***/ })

});
//# sourceMappingURL=panel.js.map