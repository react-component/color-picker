webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(15);


/***/ },

/***/ 15:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"rc-color-picker/assets/index.less\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _react = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-dom\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _rcColorPicker = __webpack_require__(3);
	
	function onChange(obj) {
	  console.log(obj);
	}
	
	_reactDom2['default'].render(_react2['default'].createElement(
	  'div',
	  null,
	  _react2['default'].createElement(_rcColorPicker.Panel, { color: '#468890', onChange: onChange, mode: 'HSL' })
	), document.getElementById('__react-content'));

/***/ }

});
//# sourceMappingURL=panel.js.map