webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(2);
	var React = __webpack_require__(6);
	var Picker = __webpack_require__(7).Picker;
	
	function onChange(obj) {
	  console.log(obj);
	}
	
	React.render(React.createElement(
	  'div',
	  null,
	  React.createElement(Picker, { defaultColor: '#468890', onChange: onChange })
	), document.getElementById('__react-content'));

/***/ }
]);
//# sourceMappingURL=picker.js.map