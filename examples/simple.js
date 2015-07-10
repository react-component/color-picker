webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(127);


/***/ },

/***/ 127:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(2);
	var React = __webpack_require__(6);
	var ColorPicker = __webpack_require__(7);
	
	function changeHandler(colors) {
	  console.log(colors);
	}
	
	React.render(React.createElement(
	  'div',
	  { style: { margin: 20, textAlign: 'center' } },
	  React.createElement(ColorPicker, { defaultColor: '#36c', onChange: changeHandler }),
	  React.createElement('hr', null),
	  React.createElement(ColorPicker, { defaultColor: '#894', align: 'left' })
	), document.getElementById('__react-content'));

/***/ }

});
//# sourceMappingURL=simple.js.map