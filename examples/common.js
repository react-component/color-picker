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
/******/ 		3:0
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
/******/ 			script.src = __webpack_require__.p + "" + chunkId + "." + ({"0":"picker","1":"simple","2":"simple-visible"}[chunkId]||chunkId) + ".js";
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
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./index.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./index.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, ".react-colors-picker {\n  width: 218px;\n  background-color: #fff;\n  box-sizing: border-box;\n  outline: none;\n}\n.react-colors-picker * {\n  box-sizing: border-box;\n}\n.react-colors-picker-open {\n  display: block;\n}\n.react-colors-picker-close {\n  display: none;\n}\n.react-colors-picker-panel {\n  position: relative;\n  border-radius: 4px;\n  box-shadow: 0 1px 5px #ccc;\n  border: 1px solid #ccc;\n  padding: 8px;\n}\n.react-colors-picker-wrap {\n  margin: 5px 0 0;\n  height: 30px;\n  width: 100%;\n  position: relative;\n}\n.react-colors-picker-wrap-preview {\n  position: absolute;\n  right: 0px;\n}\n.react-colors-picker-wrap-ribbon {\n  position: absolute;\n  left: 0px;\n  top: 0;\n  right: 35px;\n  height: 12.5px;\n}\n.react-colors-picker-wrap-alpha {\n  position: absolute;\n  left: 0px;\n  right: 35px;\n  bottom: 0;\n  height: 12.5px;\n}\n.react-colors-picker-trigger {\n  border: 1px solid #999;\n  display: inline-block;\n  padding: 2px;\n  border-radius: 2px;\n  font-size: 0px;\n  -moz-user-select: none;\n   -ms-user-select: none;\n       user-select: none;\n  -webkit-user-select: none;\n}\n.react-colors-picker-trigger span {\n  width: 20px;\n  height: 20px;\n  display: inline-block;\n  cursor: pointer;\n}\n.react-colors-picker-trigger-open {\n  box-shadow: 0px 0px 3px #999;\n}\n.react-colors-picker-preview {\n  height: 30px;\n  width: 30px;\n  overflow: hidden;\n  border-radius: 2px;\n  background-image: url('data:image/png;base64,R0lGODdhCgAKAPAAAOXl5f///ywAAAAACgAKAEACEIQdqXt9GxyETrI279OIgwIAOw==');\n  background-repeat: repeat;\n}\n.react-colors-picker-preview span {\n  display: block;\n  height: 100%;\n  box-shadow: 0 0 2px #808080 inset;\n  border-radius: 2px;\n}\n.react-colors-picker-board {\n  position: relative;\n  font-size: 0;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.react-colors-picker-board span {\n  position: absolute;\n  border-radius: 10px;\n  border: 1px solid #fff;\n  width: 9px;\n  height: 9px;\n  left: -999px;\n  top: -999px;\n  box-shadow: 0 0 1px rgba(120, 120, 120, 0.7);\n  z-index: 2;\n}\n.react-colors-picker-board-hsv {\n  width: 200px;\n  height: 150px;\n  position: relative;\n  z-index: 1;\n  border-radius: 2px;\n}\n.react-colors-picker-board-saturation {\n  border-radius: 2px;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  z-index: 2;\n  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMSAxIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48bGluZWFyR3JhZGllbnQgaWQ9Imxlc3NoYXQtZ2VuZXJhdGVkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9InJnYigwLDAsMCkiIHN0b3Atb3BhY2l0eT0iMCIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzAwMDAwMCIgc3RvcC1vcGFjaXR5PSIxIi8+PC9saW5lYXJHcmFkaWVudD48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSJ1cmwoI2xlc3NoYXQtZ2VuZXJhdGVkKSIgLz48L3N2Zz4=);\n  background-image: -webkit-linear-gradient(top, transparent 0%, #000000 100%);\n  background-image: linear-gradient(to bottom, transparent 0%, #000000 100%);\n}\n.react-colors-picker-board-lightness {\n  border-radius: 2px;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  z-index: 1;\n  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMSAxIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48bGluZWFyR3JhZGllbnQgaWQ9Imxlc3NoYXQtZ2VuZXJhdGVkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNmZmZmZmYiIHN0b3Atb3BhY2l0eT0iMSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0icmdiKDAsMCwwKSIgc3RvcC1vcGFjaXR5PSIwIi8+PC9saW5lYXJHcmFkaWVudD48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSJ1cmwoI2xlc3NoYXQtZ2VuZXJhdGVkKSIgLz48L3N2Zz4=);\n  background-image: -webkit-linear-gradient(left, #ffffff 0%, transparent 100%);\n  background-image: linear-gradient(to right, #ffffff 0%, transparent 100%);\n}\n.react-colors-picker-board-handler {\n  box-shadow: 0 0 2px #808080 inset;\n  border-radius: 2px;\n  cursor: crosshair;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 3;\n}\n.react-colors-picker-ribbon {\n  position: relative;\n  height: 100%;\n  border-radius: 2px;\n  box-shadow: 0 0 2px #808080 inset;\n  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMSAxIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48bGluZWFyR3JhZGllbnQgaWQ9Imxlc3NoYXQtZ2VuZXJhdGVkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNmZjAwMDAiIHN0b3Atb3BhY2l0eT0iMSIvPjxzdG9wIG9mZnNldD0iMTAlIiBzdG9wLWNvbG9yPSIjZmY5OTAwIiBzdG9wLW9wYWNpdHk9IjEiLz48c3RvcCBvZmZzZXQ9IjIwJSIgc3RvcC1jb2xvcj0iI2NkZmYwMCIgc3RvcC1vcGFjaXR5PSIxIi8+PHN0b3Agb2Zmc2V0PSIzMCUiIHN0b3AtY29sb3I9IiMzNWZmMDAiIHN0b3Atb3BhY2l0eT0iMSIvPjxzdG9wIG9mZnNldD0iNDAlIiBzdG9wLWNvbG9yPSIjMDBmZjY2IiBzdG9wLW9wYWNpdHk9IjEiLz48c3RvcCBvZmZzZXQ9IjUwJSIgc3RvcC1jb2xvcj0iIzAwZmZmZCIgc3RvcC1vcGFjaXR5PSIxIi8+PHN0b3Agb2Zmc2V0PSI2MCUiIHN0b3AtY29sb3I9IiMwMDY2ZmYiIHN0b3Atb3BhY2l0eT0iMSIvPjxzdG9wIG9mZnNldD0iNzAlIiBzdG9wLWNvbG9yPSIjMzIwMGZmIiBzdG9wLW9wYWNpdHk9IjEiLz48c3RvcCBvZmZzZXQ9IjgwJSIgc3RvcC1jb2xvcj0iI2NkMDBmZiIgc3RvcC1vcGFjaXR5PSIxIi8+PHN0b3Agb2Zmc2V0PSI5MCUiIHN0b3AtY29sb3I9IiNmZjAwOTkiIHN0b3Atb3BhY2l0eT0iMSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iI2ZmMDAwMCIgc3RvcC1vcGFjaXR5PSIxIi8+PC9saW5lYXJHcmFkaWVudD48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSJ1cmwoI2xlc3NoYXQtZ2VuZXJhdGVkKSIgLz48L3N2Zz4=);\n  background-image: -webkit-linear-gradient(left, #ff0000 0%, #ff9900 10%, #cdff00 20%, #35ff00 30%, #00ff66 40%, #00fffd 50%, #0066ff 60%, #3200ff 70%, #cd00ff 80%, #ff0099 90%, #ff0000 100%);\n  background-image: linear-gradient(to right, #ff0000 0%, #ff9900 10%, #cdff00 20%, #35ff00 30%, #00ff66 40%, #00fffd 50%, #0066ff 60%, #3200ff 70%, #cd00ff 80%, #ff0099 90%, #ff0000 100%);\n}\n.react-colors-picker-ribbon span {\n  position: absolute;\n  top: 0;\n  height: 100%;\n  width: 4px;\n  border: 1px solid #000000;\n  padding: 1px 0;\n  margin-left: -2px;\n  background-color: #fff;\n  border-radius: 3px;\n}\n.react-colors-picker-ribbon-handler {\n  position: absolute;\n  width: 104%;\n  height: 100%;\n  left: -2%;\n  cursor: pointer;\n}\n.react-colors-picker-alpha {\n  position: relative;\n  height: 100%;\n  border-radius: 2px;\n  background-image: url('data:image/png;base64,R0lGODdhCgAKAPAAAOXl5f///ywAAAAACgAKAEACEIQdqXt9GxyETrI279OIgwIAOw==');\n  background-repeat: repeat;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.react-colors-picker-alpha-bg {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  border-radius: 2px;\n  box-shadow: 0 0 2px #808080 inset;\n}\n.react-colors-picker-alpha span {\n  position: absolute;\n  top: 0;\n  height: 100%;\n  width: 4px;\n  border: 1px solid #000000;\n  padding: 1px 0;\n  margin-left: -2px;\n  background-color: #fff;\n  border-radius: 3px;\n}\n.react-colors-picker-alpha-handler {\n  position: absolute;\n  width: 104%;\n  height: 100%;\n  left: -2%;\n  cursor: pointer;\n}\n.react-colors-picker-params {\n  font-size: 12px;\n}\n.react-colors-picker-params-input {\n  overflow: hidden;\n  padding: 2px 0;\n}\n.react-colors-picker-params input {\n  -webkit-user-select: text;\n     -moz-user-select: text;\n      -ms-user-select: text;\n          user-select: text;\n  text-align: center;\n  padding: 1px;\n  margin: 0;\n  float: left;\n  border-radius: 2px;\n  border: 1px solid #CACACA;\n  font-family: 'Helvetica Neue', Helvetica, sans-serif;\n}\n.react-colors-picker-params-hex {\n  width: 52px;\n}\n.react-colors-picker-params input[type=number] {\n  margin-left: 5px;\n  width: 32px;\n}\n.react-colors-picker-params input[type=number]::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n}\n.react-colors-picker-params-lable {\n  padding: 2px 0;\n  height: 22px;\n  line-height: 18px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.react-colors-picker-params-lable label {\n  float: left;\n  text-align: center;\n}\n.react-colors-picker-params-lable-hex {\n  width: 52px;\n}\n.react-colors-picker-params-lable-number,\n.react-colors-picker-params-lable-alpha {\n  margin-left: 5px;\n  width: 32px;\n}\n.react-colors-picker-params-lable-number:hover {\n  border-radius: 2px;\n  background-color: #eee;\n  box-shadow: 0 0 0 1px #ccc inset;\n  cursor: pointer;\n}\n", ""]);
	
	// exports


/***/ },
/* 4 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}
	
	function createLinkElement() {
		var linkElement = document.createElement("link");
		var head = getHeadElement();
		linkElement.rel = "stylesheet";
		head.appendChild(linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement();
			update = updateLink.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(8);
	module.exports.Picker = __webpack_require__(11);
	module.exports.Trigger = __webpack_require__(9);

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	})();
	
	var _get = function get(_x, _x2, _x3) {
	  var _again = true;_function: while (_again) {
	    var object = _x,
	        property = _x2,
	        receiver = _x3;desc = parent = getter = undefined;_again = false;if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
	      var parent = Object.getPrototypeOf(object);if (parent === null) {
	        return undefined;
	      } else {
	        _x = parent;_x2 = property;_x3 = receiver;_again = true;continue _function;
	      }
	    } else if ('value' in desc) {
	      return desc.value;
	    } else {
	      var getter = desc.get;if (getter === undefined) {
	        return undefined;
	      }return getter.call(receiver);
	    }
	  }
	};
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError('Cannot call a class as a function');
	  }
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== 'function' && superClass !== null) {
	    throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) subClass.__proto__ = superClass;
	}
	
	var _react = __webpack_require__(6);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Trigger = __webpack_require__(9);
	
	var _Trigger2 = _interopRequireDefault(_Trigger);
	
	var _Picker = __webpack_require__(11);
	
	var _Picker2 = _interopRequireDefault(_Picker);
	
	var _utilsDom = __webpack_require__(22);
	
	var _utilsDom2 = _interopRequireDefault(_utilsDom);
	
	var _utilsPrefixClsFn = __webpack_require__(10);
	
	var _utilsPrefixClsFn2 = _interopRequireDefault(_utilsPrefixClsFn);
	
	var extend = function extend(target, source) {
	  for (var i in source) {
	    if (!target.hasOwnProperty(i)) {
	      target[i] = source[i];
	    }
	  }
	  return target;
	};
	
	var ColorPicker = (function (_React$Component) {
	  function ColorPicker(props) {
	    var _this = this;
	
	    _classCallCheck(this, ColorPicker);
	
	    _get(Object.getPrototypeOf(ColorPicker.prototype), 'constructor', this).call(this, props);
	
	    this.state = {
	      rootPrefixCls: props.rootPrefixCls,
	      defaultColor: props.defaultColor,
	      visible: props.visible,
	      style: {
	        position: 'absolute',
	        zIndex: 100
	      }
	    };
	
	    this.prefixClsFn = _utilsPrefixClsFn2['default'].bind(this);
	    var events = ['triggerClickHandler', 'handlerChange', 'handlerBlur'];
	
	    events.forEach(function (e) {
	      _this[e] = _this[e].bind(_this);
	    });
	  }
	
	  _inherits(ColorPicker, _React$Component);
	
	  _createClass(ColorPicker, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      if (this.state.visible) {
	        var offest = _utilsDom2['default'].getAlign(_react2['default'].findDOMNode(this.refs.picker), _react2['default'].findDOMNode(this.refs.trigger), this.props.align, [5, 0]);
	        var styleObj = extend(this.state.style, offest);
	        this.setState({
	          style: styleObj
	        });
	      }
	    }
	  }, {
	    key: 'triggerClickHandler',
	    value: function triggerClickHandler() {
	      var offest = _utilsDom2['default'].getAlign(_react2['default'].findDOMNode(this.refs.picker), _react2['default'].findDOMNode(this.refs.trigger), this.props.align, [5, 0]);
	
	      extend(this.state.style, offest);
	
	      this.refs.picker.toggle();
	    }
	  }, {
	    key: 'handlerChange',
	    value: function handlerChange(colors) {
	      this.setState({
	        defaultColor: colors.hex
	      });
	      this.props.onChange(colors);
	    }
	  }, {
	    key: 'handlerBlur',
	    value: function handlerBlur() {
	      this.refs.picker.hide();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement('div', null, _react2['default'].createElement(_Trigger2['default'], {
	        ref: 'trigger',
	        defaultColor: this.state.defaultColor,
	        onToggle: this.triggerClickHandler }), _react2['default'].createElement(_Picker2['default'], {
	        ref: 'picker',
	        defaultColor: this.state.defaultColor,
	        style: this.state.style,
	        visible: this.state.visible,
	        onChange: this.handlerChange,
	        onBlur: this.handlerBlur }));
	    }
	  }]);
	
	  return ColorPicker;
	})(_react2['default'].Component);
	
	exports['default'] = ColorPicker;
	
	ColorPicker.propTypes = {
	  rootPrefixCls: _react2['default'].PropTypes.string,
	  visible: _react2['default'].PropTypes.bool,
	  defaultColor: _react2['default'].PropTypes.string,
	  align: _react2['default'].PropTypes.string,
	  onChange: _react2['default'].PropTypes.func
	};
	
	ColorPicker.defaultProps = {
	  rootPrefixCls: 'react-colors-picker',
	  visible: false,
	  defaultColor: '#F00',
	  align: 'right',
	  onChange: function onChange() {}
	};
	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	})();
	
	var _get = function get(_x, _x2, _x3) {
	  var _again = true;_function: while (_again) {
	    var object = _x,
	        property = _x2,
	        receiver = _x3;desc = parent = getter = undefined;_again = false;if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
	      var parent = Object.getPrototypeOf(object);if (parent === null) {
	        return undefined;
	      } else {
	        _x = parent;_x2 = property;_x3 = receiver;_again = true;continue _function;
	      }
	    } else if ('value' in desc) {
	      return desc.value;
	    } else {
	      var getter = desc.get;if (getter === undefined) {
	        return undefined;
	      }return getter.call(receiver);
	    }
	  }
	};
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError('Cannot call a class as a function');
	  }
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== 'function' && superClass !== null) {
	    throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) subClass.__proto__ = superClass;
	}
	
	var _react = __webpack_require__(6);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utilsPrefixClsFn = __webpack_require__(10);
	
	var _utilsPrefixClsFn2 = _interopRequireDefault(_utilsPrefixClsFn);
	
	var Trigger = (function (_React$Component) {
	  function Trigger(props) {
	    _classCallCheck(this, Trigger);
	
	    _get(Object.getPrototypeOf(Trigger.prototype), 'constructor', this).call(this, props);
	
	    this.state = {
	      prefixCls: props.prefixCls,
	      defaultColor: props.defaultColor
	    };
	
	    this.prefixClsFn = _utilsPrefixClsFn2['default'].bind(this);
	    this.handlerClick = this.handlerClick.bind(this);
	  }
	
	  _inherits(Trigger, _React$Component);
	
	  _createClass(Trigger, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      this.setState({
	        defaultColor: nextProps.defaultColor
	      });
	    }
	  }, {
	    key: 'handlerClick',
	    value: function handlerClick() {
	      this.props.onToggle();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement('div', { className: this.props.prefixCls, onClick: this.handlerClick }, _react2['default'].createElement('span', { style: { backgroundColor: this.state.defaultColor } }));
	    }
	  }]);
	
	  return Trigger;
	})(_react2['default'].Component);
	
	exports['default'] = Trigger;
	
	Trigger.propTypes = {
	  prefixCls: _react2['default'].PropTypes.string,
	  defaultColor: _react2['default'].PropTypes.string,
	  onToggle: _react2['default'].PropTypes.func
	};
	
	Trigger.defaultProps = {
	  prefixCls: 'react-colors-picker-trigger',
	  defaultColor: '#f00',
	  onToggle: function onToggle() {}
	};
	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function () {
	  var prefixCls = this.state.prefixCls;
	  var args = Array.prototype.slice.call(arguments, 0);
	  return args.map(function (s) {
	    return prefixCls + '-' + s;
	  }).join(' ');
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	})();
	
	var _get = function get(_x, _x2, _x3) {
	  var _again = true;_function: while (_again) {
	    var object = _x,
	        property = _x2,
	        receiver = _x3;desc = parent = getter = undefined;_again = false;if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
	      var parent = Object.getPrototypeOf(object);if (parent === null) {
	        return undefined;
	      } else {
	        _x = parent;_x2 = property;_x3 = receiver;_again = true;continue _function;
	      }
	    } else if ('value' in desc) {
	      return desc.value;
	    } else {
	      var getter = desc.get;if (getter === undefined) {
	        return undefined;
	      }return getter.call(receiver);
	    }
	  }
	};
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError('Cannot call a class as a function');
	  }
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== 'function' && superClass !== null) {
	    throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) subClass.__proto__ = superClass;
	}
	
	var _react = __webpack_require__(6);
	
	var _react2 = _interopRequireDefault(_react);
	
	// 色板
	
	var _Board = __webpack_require__(12);
	
	var _Board2 = _interopRequireDefault(_Board);
	
	var _Preview = __webpack_require__(16);
	
	var _Preview2 = _interopRequireDefault(_Preview);
	
	var _Ribbon = __webpack_require__(17);
	
	var _Ribbon2 = _interopRequireDefault(_Ribbon);
	
	var _Alpha = __webpack_require__(18);
	
	var _Alpha2 = _interopRequireDefault(_Alpha);
	
	var _Params = __webpack_require__(19);
	
	var _Params2 = _interopRequireDefault(_Params);
	
	var _utilsPrefixClsFn = __webpack_require__(10);
	
	var _utilsPrefixClsFn2 = _interopRequireDefault(_utilsPrefixClsFn);
	
	var Picker = (function (_React$Component) {
	  function Picker(props) {
	    var _this = this;
	
	    _classCallCheck(this, Picker);
	
	    _get(Object.getPrototypeOf(Picker.prototype), 'constructor', this).call(this, props);
	
	    this.state = {
	      defaultColor: props.defaultColor,
	      selectColor: props.defaultColor,
	      customColor: props.defaultColor,
	      visible: props.visible,
	      prefixCls: props.prefixCls,
	      style: props.style
	    };
	
	    this.prefixClsFn = _utilsPrefixClsFn2['default'].bind(this);
	
	    var events = ['toggleClassName', 'toggle', '_onChange', '_onHueChange', '_onHexChange', '_onAlphaChange', 'handleFocus', 'handlerBlur'];
	    // bind methods
	    events.forEach(function (m) {
	      _this[m] = _this[m].bind(_this);
	    });
	  }
	
	  _inherits(Picker, _React$Component);
	
	  _createClass(Picker, [{
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps, prevState) {
	      if (!prevState.visible) {
	        // 如果从 false 切换过来则聚焦
	        _react2['default'].findDOMNode(this).focus();
	      }
	    }
	  }, {
	    key: '_onChange',
	
	    /**
	     * 颜色选取发生改变的回调
	     * @param {object} colorsObj 回调的返回值
	     * @param {string} colorsObj.hex 颜色的16进制 eg: #FFFFFF
	     * @param {object} colorsObj.rgb RGB对应的数值
	     * @param {object} colorsObj.hsv HSV对应的数值
	     * @param {object} colorsObj.hsl HSL对应的数值
	     * @return {undefined}
	     */
	    value: function _onChange(colorsObj) {
	      this.setState({
	        selectColor: colorsObj.hex
	      });
	
	      if (typeof this.props.onChange === 'function') {
	        this.props.onChange(colorsObj);
	      }
	    }
	  }, {
	    key: '_onHueChange',
	    value: function _onHueChange(hue) {
	      this.setState({ hue: hue });
	    }
	  }, {
	    key: '_onHexChange',
	    value: function _onHexChange(hex) {
	      this.setState({
	        defaultColor: hex,
	        customColor: hex
	      });
	    }
	  }, {
	    key: '_onAlphaChange',
	    value: function _onAlphaChange(alpha) {
	      this.setState({
	        alpha: alpha
	      });
	    }
	  }, {
	    key: 'handleFocus',
	    value: function handleFocus() {
	      if (this._blurTimer) {
	        clearTimeout(this._blurTimer);
	        this._blurTimer = null;
	      } else {
	        this.props.onFocus();
	      }
	    }
	  }, {
	    key: 'handlerBlur',
	    value: function handlerBlur() {
	      var _this2 = this;
	
	      if (this._blurTimer) {
	        clearTimeout(this._blurTimer);
	      }
	      this._blurTimer = setTimeout(function () {
	        _this2.props.onBlur();
	      }, 100);
	    }
	  }, {
	    key: 'toggle',
	
	    /**
	     * 切换显示状态
	     * @param  {boolean} val 是否战士
	     * @return {undefined}
	     */
	    value: function toggle(callback) {
	      this.setState({
	        visible: !this.state.visible
	      }, callback);
	    }
	  }, {
	    key: 'hide',
	    value: function hide(callback) {
	      this.setState({
	        visible: false
	      }, callback);
	    }
	  }, {
	    key: 'show',
	    value: function show(callback) {
	      this.setState({
	        visible: true
	      }, callback);
	    }
	  }, {
	    key: 'toggleClassName',
	    value: function toggleClassName() {
	      var name = this.state.visible ? 'open' : 'close';
	      return this.prefixClsFn(name);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement('div', {
	        className: this.props.prefixCls + ' ' + this.toggleClassName(),
	        style: this.state.style,
	        onFocus: this.handleFocus,
	        onBlur: this.handlerBlur,
	        tabIndex: '0'
	      }, _react2['default'].createElement('div', { className: this.prefixClsFn('panel') }, _react2['default'].createElement(_Board2['default'], {
	        alpha: this.state.alpha,
	        hue: this.state.hue,
	        defaultColor: this.state.defaultColor,
	        onChange: this._onChange }), _react2['default'].createElement('div', { className: this.prefixClsFn('wrap') }, _react2['default'].createElement('div', { className: this.prefixClsFn('wrap-ribbon') }, _react2['default'].createElement(_Ribbon2['default'], {
	        defaultColor: this.state.defaultColor,
	        onHexChange: this._onHueChange })), _react2['default'].createElement('div', { className: this.prefixClsFn('wrap-alpha') }, _react2['default'].createElement(_Alpha2['default'], {
	        alpha: this.state.alpha,
	        defaultColor: this.state.selectColor,
	        customColor: this.state.customColor,
	        onAlphaChange: this._onAlphaChange })), _react2['default'].createElement('div', { className: this.prefixClsFn('wrap-preview') }, _react2['default'].createElement(_Preview2['default'], {
	        alpha: this.state.alpha,
	        defaultColor: this.state.selectColor,
	        customColor: this.state.customColor }))), _react2['default'].createElement('div', { className: this.prefixClsFn('wrap'), style: { height: 40, marginTop: 6 } }, _react2['default'].createElement(_Params2['default'], {
	        defaultColor: this.state.selectColor,
	        alpha: this.state.alpha,
	        onAlphaChange: this._onAlphaChange,
	        onHexChange: this._onHexChange }))));
	    }
	  }]);
	
	  return Picker;
	})(_react2['default'].Component);
	
	exports['default'] = Picker;
	
	Picker.propTypes = {
	  visible: _react2['default'].PropTypes.bool,
	  prefixCls: _react2['default'].PropTypes.string,
	  defaultColor: _react2['default'].PropTypes.string,
	  style: _react2['default'].PropTypes.object,
	  onChange: _react2['default'].PropTypes.func,
	  onFocus: _react2['default'].PropTypes.func,
	  onBlur: _react2['default'].PropTypes.func
	};
	
	Picker.defaultProps = {
	  visible: true,
	  prefixCls: 'react-colors-picker',
	  defaultColor: '#ff0000',
	  style: {},
	  onChange: function onChange() {},
	  onFocus: function onFocus() {},
	  onBlur: function onBlur() {}
	};
	module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	})();
	
	var _get = function get(_x, _x2, _x3) {
	  var _again = true;_function: while (_again) {
	    var object = _x,
	        property = _x2,
	        receiver = _x3;desc = parent = getter = undefined;_again = false;if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
	      var parent = Object.getPrototypeOf(object);if (parent === null) {
	        return undefined;
	      } else {
	        _x = parent;_x2 = property;_x3 = receiver;_again = true;continue _function;
	      }
	    } else if ('value' in desc) {
	      return desc.value;
	    } else {
	      var getter = desc.get;if (getter === undefined) {
	        return undefined;
	      }return getter.call(receiver);
	    }
	  }
	};
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError('Cannot call a class as a function');
	  }
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== 'function' && superClass !== null) {
	    throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) subClass.__proto__ = superClass;
	}
	
	var _colr = __webpack_require__(13);
	
	var _colr2 = _interopRequireDefault(_colr);
	
	var _react = __webpack_require__(6);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _eventlistener = __webpack_require__(15);
	
	var _eventlistener2 = _interopRequireDefault(_eventlistener);
	
	var _utilsPrefixClsFn = __webpack_require__(10);
	
	var _utilsPrefixClsFn2 = _interopRequireDefault(_utilsPrefixClsFn);
	
	var colr = new _colr2['default']();
	
	var width = 200;
	var height = 150;
	
	var Board = (function (_React$Component) {
	  function Board(props) {
	    var _this = this;
	
	    _classCallCheck(this, Board);
	
	    _get(Object.getPrototypeOf(Board.prototype), 'constructor', this).call(this, props);
	
	    var HSV = colr.fromHex(props.defaultColor).toHsvObject();
	
	    this.HSV = HSV;
	
	    var hueHsv = [HSV.h, 100, 100];
	    var hueColor = colr.fromHsvArray(hueHsv).toHex();
	
	    var x = HSV.s / 100 * width - 4;
	    var y = (1 - HSV.v / 100) * height - 4;
	
	    this.state = {
	      hueColor: hueColor,
	      x: x,
	      y: y,
	      defaultColor: props.defaultColor,
	      hue: props.hue,
	      alpha: props.alpha,
	      prefixCls: props.prefixCls
	    };
	
	    this.prefixClsFn = _utilsPrefixClsFn2['default'].bind(this);
	    var events = ['handleBoardMouseDown', 'handleBoardDrag', 'handleBoardDragEnd', 'pointMoveTo', '_updateBackgroundColor', '_onChange', '_drawBoard'];
	    // bind methods
	    events.forEach(function (m) {
	      _this[m] = _this[m].bind(_this);
	    });
	
	    this._cacheColors = {};
	  }
	
	  _inherits(Board, _React$Component);
	
	  _createClass(Board, [{
	    key: 'componentWillUpdate',
	    value: function componentWillUpdate(nextProps) {
	      if (nextProps.defaultColor !== this.props.defaultColor) {
	        this._drawBoard(nextProps.defaultColor);
	      }
	      if (nextProps.hue !== this.props.hue) {
	        this._updateBackgroundColor(nextProps.hue);
	      }
	      if (nextProps.alpha !== this.props.alpha) {
	        this.setState({
	          alpha: nextProps.alpha
	        });
	      }
	    }
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      if (nextState.x !== this.state.x) {
	        return true;
	      }
	      if (nextState.y !== this.state.y) {
	        return true;
	      }
	      if (nextProps.hue !== this.props.hue) {
	        return true;
	      }
	      if (nextProps.alpha !== this.props.alpha) {
	        return true;
	      }
	      if (nextProps.defaultColor !== this.props.defaultColor) {
	        return true;
	      }
	      return false;
	    }
	  }, {
	    key: 'handleBoardMouseDown',
	    value: function handleBoardMouseDown(e) {
	      var x = e.clientX,
	          y = e.clientY;
	      this.pointMoveTo({
	        x: x, y: y
	      });
	      _eventlistener2['default'].add(window, 'mousemove', this.handleBoardDrag);
	      _eventlistener2['default'].add(window, 'mouseup', this.handleBoardDragEnd);
	    }
	  }, {
	    key: 'handleBoardDrag',
	    value: function handleBoardDrag(e) {
	      var x = e.clientX,
	          y = e.clientY;
	      this.pointMoveTo({
	        x: x, y: y
	      });
	    }
	  }, {
	    key: 'handleBoardDragEnd',
	    value: function handleBoardDragEnd(e) {
	      var x = e.clientX,
	          y = e.clientY;
	      this.pointMoveTo({
	        x: x, y: y
	      });
	      _eventlistener2['default'].remove(window, 'mousemove', this.handleBoardDrag);
	      _eventlistener2['default'].remove(window, 'mouseup', this.handleBoardDragEnd);
	    }
	  }, {
	    key: 'pointMoveTo',
	
	    /**
	     * 移动光标位置到
	     * @param  {object} pos X Y 全局坐标点
	     * @return {undefined}
	     */
	    value: function pointMoveTo(pos) {
	      var rect = _react2['default'].findDOMNode(this).getBoundingClientRect();
	      var left = pos.x - rect.left;
	      var top = pos.y - rect.top;
	
	      left = Math.max(0, left);
	      left = Math.min(left, width);
	      top = Math.max(0, top);
	      top = Math.min(top, height);
	
	      var x = left - 4;
	      var y = top - 4;
	
	      this.setState({ x: x, y: y });
	
	      var hsv = {
	        h: this.HSV.h,
	        s: parseInt(left / width * 100),
	        v: parseInt((1 - top / height) * 100)
	      };
	      var colorObject = this.getColorsFromHsv(hsv);
	      this.HSV = colorObject.hsv;
	
	      this._onChange(colorObject);
	    }
	  }, {
	    key: 'getColorsFromHsv',
	    value: function getColorsFromHsv(oHsv) {
	      var color = colr.fromHsvObject(oHsv);
	      var hex = color.toHex();
	      var rgb = color.toRgbObject();
	      var hsv = color.toHsvObject();
	      var hsl = color.toHslObject();
	      var rgba = color.toRgbArray();
	      rgba.push(this.state.alpha / 100);
	      rgba = 'rbga(' + rgba.join(',') + ')';
	      return {
	        hex: hex, rgb: rgb, hsv: hsv, hsl: hsl, rgba: rgba
	      };
	    }
	  }, {
	    key: '_drawBoard',
	    value: function _drawBoard(hex) {
	      var HSV = colr.fromHex(hex).toHsvObject();
	      // 计算起始坐标
	      this.HSV = HSV;
	      this.setState({
	        hex: HSV.h
	      });
	      var x = HSV.s / 100 * width - 4;
	      var y = (1 - HSV.v / 100) * height - 4;
	
	      this.setState({ x: x, y: y });
	
	      this._rendderHueColor(HSV.h);
	      return HSV;
	    }
	  }, {
	    key: '_rendderHueColor',
	    value: function _rendderHueColor(hue) {
	      var hsv = [hue, 100, 100];
	      var rgb = colr.fromHsvArray(hsv).toHex();
	      this.setState({
	        hueColor: rgb
	      });
	    }
	  }, {
	    key: '_updateBackgroundColor',
	    value: function _updateBackgroundColor(hue) {
	      this._rendderHueColor(hue);
	      var hsv = { h: hue, s: this.HSV.s, v: this.HSV.v };
	      var colorObject = this.getColorsFromHsv(hsv);
	      this.HSV = colorObject.hsv;
	      if (this.props.onChange) {
	        this.props.onChange(colorObject);
	      }
	    }
	  }, {
	    key: '_onChange',
	    value: function _onChange(colors) {
	      if (colors.hex === this._cacheColors.hex) {
	        return false;
	      }
	      this._cacheColors = colors;
	
	      if (this.props.onChange) {
	        this.props.onChange(colors);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement('div', { className: this.props.prefixCls }, _react2['default'].createElement('div', { className: this.prefixClsFn('hsv'), style: { backgroundColor: this.state.hueColor } }, _react2['default'].createElement('div', { className: this.prefixClsFn('saturation') }), _react2['default'].createElement('div', { className: this.prefixClsFn('lightness') })), _react2['default'].createElement('span', { ref: 'point', style: { 'left': this.state.x, 'top': this.state.y } }), _react2['default'].createElement('div', {
	        className: this.prefixClsFn('handler'),
	        onMouseDown: this.handleBoardMouseDown }));
	    }
	  }]);
	
	  return Board;
	})(_react2['default'].Component);
	
	exports['default'] = Board;
	
	Board.propTypes = {
	  defaultColor: _react2['default'].PropTypes.string,
	  alpha: _react2['default'].PropTypes.number,
	  hue: _react2['default'].PropTypes.number,
	  prefixCls: _react2['default'].PropTypes.string
	};
	
	Board.defaultProps = {
	  defaultColor: '#F00',
	  alpha: 100,
	  hue: 0,
	  prefixCls: 'react-colors-picker-board'
	};
	module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	
	/*
	 * DEPENDENCIES
	 */
	
	var convert = __webpack_require__(14);
	
	
	/*
	 * CONSTRUCTOR
	 */
	
	function Colr () {
	  if ((this instanceof Colr) === false) { return new Colr(); }
	  this._ = {};
	}
	
	
	/*
	 * STATIC METHODS
	 */
	
	Colr.fromHex = function (hex) {
	  return (new Colr()).fromHex(hex);
	};
	
	Colr.fromGrayscale = function (value) {
	  return (new Colr()).fromGrayscale(value);
	};
	
	Colr.fromRgb = function (r, g, b) {
	  return (new Colr()).fromRgb(r, g, b);
	};
	
	Colr.fromRgbArray = function (arr) {
	  return (new Colr()).fromRgb(arr[0], arr[1], arr[2]);
	};
	
	Colr.fromRgbObject = function (obj) {
	  return (new Colr()).fromRgb(obj.r, obj.g, obj.b);
	};
	Colr.fromHsl = function (h, s, l) {
	  return (new Colr()).fromHsl(h, s, l);
	};
	
	Colr.fromHslArray = function (arr) {
	  return (new Colr()).fromHsl(arr[0], arr[1], arr[2]);
	};
	
	Colr.fromHslObject = function (obj) {
	  return (new Colr()).fromHsl(obj.h, obj.s, obj.l);
	};
	
	Colr.fromHsv = function (h, s, v) {
	  return (new Colr()).fromHsv(h, s, v);
	};
	
	Colr.fromHsvArray = function (arr) {
	  return (new Colr()).fromHsv(arr[0], arr[1], arr[2]);
	};
	
	Colr.fromHsvObject = function (obj) {
	  return (new Colr()).fromHsv(obj.h, obj.s, obj.v);
	};
	
	
	/*
	 * IMPORTERS
	 */
	
	// HEX
	
	Colr.prototype.fromHex = function (input) {
	  var value = convert.hex.rgb(input);
	  this._ = { rgb: value };
	  return this;
	};
	
	// GRAYSCALE
	
	Colr.prototype.fromGrayscale = function (input) {
	  input = clampByte(input);
	  var value = convert.grayscale.rgb(input);
	  this._ = { rgb: value };
	  return this;
	};
	
	// RGB
	
	Colr.prototype.fromRgb = function (r, g, b) {
	  if (typeof(r) !== 'number' || typeof(g) !== 'number' || typeof(b) !== 'number') {
	    throw new Error('Arguments must be numbers');
	  }
	  var value = clampRgb(r, g, b);
	  this._ = { rgb: value };
	  return this;
	};
	
	Colr.prototype.fromRgbArray = function (arr) {
	  return this.fromRgb(arr[0], arr[1], arr[2]);
	};
	
	Colr.prototype.fromRgbObject = function (obj) {
	  return this.fromRgb(obj.r, obj.g, obj.b);
	};
	
	// HSL
	
	Colr.prototype.fromHsl = function (h, s, l) {
	  if (typeof(h) !== 'number' || typeof(s) !== 'number' || typeof(l) !== 'number') {
	    throw new Error('Arguments must be numbers');
	  }
	  this._ = { hsl: clampHsx(h, s, l) };
	  return this;
	};
	
	Colr.prototype.fromHslArray = function (arr) {
	  return this.fromHsl(arr[0], arr[1], arr[2]);
	};
	
	Colr.prototype.fromHslObject = function (obj) {
	  return this.fromHsl(obj.h, obj.s, obj.l);
	};
	
	// HSV
	
	Colr.prototype.fromHsv = function (h, s, v) {
	  if (typeof(h) !== 'number' || typeof(s) !== 'number' || typeof(v) !== 'number') {
	    throw new Error('Arguments must be numbers');
	  }
	  this._ = { hsv: clampHsx(h, s, v) };
	  return this;
	};
	
	Colr.prototype.fromHsvArray = function (arr) {
	  return this.fromHsv(arr[0], arr[1], arr[2]);
	};
	
	Colr.prototype.fromHsvObject = function (obj) {
	  return this.fromHsv(obj.h, obj.s, obj.v);
	};
	
	
	/*
	 * EXPORTERS
	 */
	
	// HEX
	
	Colr.prototype.toHex = function () {
	  var cached = this._.hex;
	  if (cached !== undefined) { return cached; }
	
	  var input;
	  var cachedFrom = this._.rgb;
	
	  if (cachedFrom !== undefined) { input = cachedFrom; }
	  else { input = this.toRawRgbArray(); }
	
	  input[0] = Math.round(input[0]);
	  input[1] = Math.round(input[1]);
	  input[2] = Math.round(input[2]);
	
	  var value = convert.rgb.hex(input);
	  this._.hex = value;
	
	  return value;
	};
	
	// GRAYSCALE
	
	Colr.prototype.toGrayscale = function () {
	  var cached = this._.grayscale;
	  if (cached !== undefined) { return cached; }
	
	  var input;
	  var cachedFrom = this._.rgb;
	
	  if (cachedFrom !== undefined) { input = cachedFrom; }
	  else { input = this.toRawRgbArray(); }
	
	  var value = convert.rgb.grayscale(input);
	  this._.grayscale = value;
	  return value;
	};
	
	// RGB
	
	Colr.prototype.toRawRgbArray = function () {
	  var cached = this._.rgb;
	  if (cached !== undefined) { return cached; }
	
	  var value;
	
	  if ((value = this._.hsv) !== undefined) {
	    value = convert.hsv.rgb(value);
	  } else if ((value = this._.hsl) !== undefined) {
	    value = convert.hsl.rgb(value);
	  } else {
	    throw new Error('No data to convert');
	  }
	
	  this._.rgb = value;
	  return value;
	};
	
	Colr.prototype.toRawRgbObject = function () {
	  var arr = this.toRawRgbArray();
	  return { r: arr[0], g: arr[1], b: arr[2] };
	};
	
	Colr.prototype.toRgbArray = function () {
	  var arr = this.toRawRgbArray();
	  return [ Math.round(arr[0]), Math.round(arr[1]), Math.round(arr[2]) ];
	};
	
	Colr.prototype.toRgbObject = function () {
	  var arr = this.toRgbArray();
	  return { r: arr[0], g: arr[1], b: arr[2] };
	};
	
	// HSL
	
	Colr.prototype.toRawHslArray = function () {
	  var cached = this._.hsl;
	  if (cached !== undefined) { return cached; }
	
	  var value;
	
	  if ((value = this._.hsv) !== undefined) {
	    value = convert.hsv.hsl(value);
	  } else if ((value = this._.rgb) !== undefined) {
	    value = convert.rgb.hsl(value);
	  } else {
	    throw new Error('No data to convert');
	  }
	
	  this._.hsl = value;
	  return value;
	};
	
	Colr.prototype.toRawHslObject = function () {
	  var arr = this.toRawHslArray();
	  return { h: arr[0], s: arr[1], l: arr[2] };
	};
	
	Colr.prototype.toHslArray = function () {
	  var arr = this.toRawHslArray();
	  return [ Math.round(arr[0]), Math.round(arr[1]), Math.round(arr[2]) ];
	};
	
	Colr.prototype.toHslObject = function () {
	  var arr = this.toHslArray();
	  return { h: arr[0], s: arr[1], l: arr[2] };
	};
	
	// HSV
	
	Colr.prototype.toRawHsvArray = function () {
	  var cached = this._.hsv;
	  if (cached !== undefined) { return cached; }
	
	  var value;
	
	  if ((value = this._.hsl) !== undefined) {
	    value = convert.hsl.hsv(value);
	  } else if ((value = this._.rgb) !== undefined) {
	    value = convert.rgb.hsv(value);
	  } else {
	    throw new Error('No data to convert');
	  }
	
	  this._.hsv = value;
	  return value;
	};
	
	Colr.prototype.toRawHsvObject = function () {
	  var arr = this.toRawHsvArray();
	  return { h: arr[0], s: arr[1], v: arr[2] };
	};
	
	Colr.prototype.toHsvArray = function () {
	  var arr = this.toRawHsvArray();
	  return [ Math.round(arr[0]), Math.round(arr[1]), Math.round(arr[2]) ];
	};
	
	Colr.prototype.toHsvObject = function () {
	  var arr = this.toHsvArray();
	  return { h: arr[0], s: arr[1], v: arr[2] };
	};
	
	
	/*
	 * MODIFIERS
	 */
	
	Colr.prototype.lighten = function (amount) {
	  var hsl = this.toRawHslArray();
	  hsl[2] = clampPercentage(hsl[2] + amount);
	  this._ = { hsl: hsl };
	  return this;
	};
	
	Colr.prototype.darken = function (amount) {
	  var hsl = this.toRawHslArray();
	  hsl[2] = clampPercentage(hsl[2] - amount);
	  this._ = { hsl: hsl };
	  return this;
	};
	
	/*
	 * MISC
	 */
	
	Colr.prototype.clone = function () {
	  var colr = new Colr();
	  colr._.hex = this._.hex;
	  colr._.grayscale = this._.grayscale;
	
	  if (this._.rgb !== undefined) {
	    colr._.rgb = this._.rgb.slice(0);
	  }
	  if (this._.hsv !== undefined) {
	    colr._.hsv = this._.hsv.slice(0);
	  }
	  if (this._.hsl !== undefined) {
	    colr._.hsl = this._.hsl.slice(0);
	  }
	
	  return colr;
	};
	
	/*
	 * UTILS
	 */
	
	function clampPercentage (val) {
	  return Math.max(Math.min(val, 100), 0);
	}
	
	function clampByte (byte) {
	  return Math.max(Math.min(byte, 255), 0);
	}
	
	function clampRgb (r, g, b) {
	  return [
	    Math.max(Math.min(r, 255), 0),
	    Math.max(Math.min(g, 255), 0),
	    Math.max(Math.min(b, 255), 0),
	  ];
	}
	
	function clampHsx (h, s, x) {
	  return [
	    Math.max(Math.min(h, 360), 0),
	    Math.max(Math.min(s, 100), 0),
	    Math.max(Math.min(x, 100), 0),
	  ];
	}
	
	
	module.exports = Colr;


/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = {
	  grayscale: {
	    rgb: grayscale2rgb
	  },
	  hex: {
	    rgb: hex2rgb,
	  },
	  rgb: {
	    hsl: rgb2hsl,
	    hsv: rgb2hsv,
	    hex: rgb2hex,
	    grayscale: rgb2grayscale
	  },
	  hsl: {
	    rgb: hsl2rgb,
	    hsv: hsl2hsv,
	  },
	  hsv: {
	    rgb: hsv2rgb,
	    hsl: hsv2hsl,
	  },
	};
	
	// convert a charcode to a hex val
	function hexVal (c) {
	  return (
	    c < 58 ? c - 48 : // 0 - 9
	    c < 71 ? c - 55 : // A - F
	    c - 87            // a - f
	  );
	}
	
	function hex2rgb (hex) {
	  var i = hex[0] === '#' ? 1 : 0;
	  var len = hex.length;
	
	  if (len - i < 3) {
	    throw new Error('hex input must be at least three chars long');
	  }
	
	  var r, g, b;
	
	  var h1 = hexVal(hex.charCodeAt(0+i));
	  var h2 = hexVal(hex.charCodeAt(1+i));
	  var h3 = hexVal(hex.charCodeAt(2+i));
	
	  if (len - i >= 6) {
	    r = (h1 << 4) + h2;
	    g = (h3 << 4) + hexVal(hex.charCodeAt(3+i));
	    b = (hexVal(hex.charCodeAt(4+i)) << 4) + hexVal(hex.charCodeAt(5+i));
	  } else {
	    r = (h1 << 4) + h1;
	    g = (h2 << 4) + h2;
	    b = (h3 << 4) + h3;
	  }
	
	  if (r < 0 || r > 255 || g < 0 || g > 255 || b < 0 || b > 255) {
	    throw new Error('hex input is invalid');
	  }
	
	  return [r, g, b];
	}
	
	
	function rgb2hex (rgb) {
	  return '#' + (
	    '000000' +
	    ((rgb[0] << 16) +
	     (rgb[1] << 8) +
	      rgb[2]
	    ).toString(16)
	  ).slice(-6);
	}
	
	function rgb2hsl (rgb) {
	  var r = rgb[0] / 255;
	  var g = rgb[1] / 255;
	  var b = rgb[2] / 255;
	
	  var min = Math.min(r, g, b);
	  var max = Math.max(r, g, b);
	  var delta = max - min;
	  var h, s, l;
	
	  if (max === min) {
	    h = 0;
	  } else if (r === max) {
	    h = (g - b) / delta;
	  } else if (g === max) {
	    h = 2 + (b - r) / delta;
	  } else if (b === max) {
	    h = 4 + (r - g) / delta;
	  }
	
	  h = Math.min(h * 60, 360);
	
	  if (h < 0) {
	    h += 360;
	  }
	
	  l = (min + max) / 2;
	
	  if (max === min) {
	    s = 0;
	  } else if (l <= 0.5) {
	    s = delta / (max + min);
	  } else {
	    s = delta / (2 - max - min);
	  }
	
	  return [h, s * 100, l * 100];
	}
	
	function rgb2hsv(rgb) {
	  var r = rgb[0];
	  var g = rgb[1];
	  var b = rgb[2];
	  var min = Math.min(r, g, b);
	  var max = Math.max(r, g, b);
	  var delta = max - min;
	  var h, s, v;
	
	  if (max === 0) {
	    s = 0;
	  } else {
	    s = delta / max * 100;
	  }
	
	  if (max === min) {
	    h = 0;
	  } else if (r === max) {
	    h = (g - b) / delta;
	  } else if (g === max) {
	    h = 2 + (b - r) / delta;
	  } else if (b === max) {
	    h = 4 + (r - g) / delta;
	  }
	
	  h = Math.min(h * 60, 360);
	
	  if (h < 0) {
	    h += 360;
	  }
	
	  v = (max / 255) * 100;
	
	  return [h, s, v];
	}
	
	function hsl2rgb (hsl) {
	  var h = hsl[0] / 360;
	  var s = hsl[1] / 100;
	  var l = hsl[2] / 100;
	
	  var r, g, b;
	
	  if (s === 0) { // monochrome
	    r = g = b = l;
	
	  } else {
	    var q = l < 0.5 ? l * (s + 1) : l + s - l * s;
	    var p = 2 * l - q;
	    var t;
	
	    // red
	    t = h + 1/3;
	    if      (t < 0) { t += 1; }
	    else if (t > 1) { t -= 1; }
	    if      (t < 1/6)  { r = p + (q - p) * t * 6; }
	    else if (t < 1/2 ) { r = q; }
	    else if (t < 2/3 ) { r = p + (q - p) * (2/3 - t) * 6; }
	    else               { r = p; }
	
	    // green
	    t = h;
	    if      (t < 0) { t += 1; }
	    else if (t > 1) { t -= 1; }
	    if      (t < 1/6)  { g = p + (q - p) * t * 6; }
	    else if (t < 1/2 ) { g = q; }
	    else if (t < 2/3 ) { g = p + (q - p) * (2/3 - t) * 6; }
	    else               { g = p; }
	
	    // blue
	    t = h - 1/3;
	    if      (t < 0) { t += 1; }
	    else if (t > 1) { t -= 1; }
	    if      (t < 1/6)  { b = p + (q - p) * t * 6; }
	    else if (t < 1/2 ) { b = q; }
	    else if (t < 2/3 ) { b = p + (q - p) * (2/3 - t) * 6; }
	    else               { b = p; }
	  }
	
	  return [r * 255, g * 255, b * 255];
	}
	
	function hsl2hsv(hsl) {
	  var h = hsl[0];
	  var s = hsl[1] / 100;
	  var l = hsl[2] / 100;
	  var sv, v;
	
	  if (s === 0) {
	    return [h, 0, l * 100];
	  }
	
	  if (l === 0) {
	    return [h, 0, 0];
	  }
	
	  l *= 2;
	  s *= (l <= 1) ? l : 2 - l;
	  v = (l + s) / 2;
	  sv = (2 * s) / (l + s);
	  return [h, sv * 100, v * 100];
	}
	
	function hsv2rgb(hsv) {
	  var h = hsv[0] / 60;
	  var s = hsv[1] / 100;
	  var v = hsv[2] / 100;
	
	  var hi = Math.floor(h) % 6;
	
	  var f = h - Math.floor(h);
	  var p = 255 * v * (1 - s);
	  var q = 255 * v * (1 - (s * f));
	  var t = 255 * v * (1 - (s * (1 - f)));
	      v = 255 * v;
	
	  switch(hi) {
	    case 0:
	      return [v, t, p];
	    case 1:
	      return [q, v, p];
	    case 2:
	      return [p, v, t];
	    case 3:
	      return [p, q, v];
	    case 4:
	      return [t, p, v];
	    case 5:
	      return [v, p, q];
	  }
	}
	
	function hsv2hsl(hsv) {
	  var h = hsv[0];
	  var s = hsv[1] / 100;
	  var v = hsv[2] / 100;
	  var sl, l;
	
	  if (s === 0) {
	    return [h, 0, v * 100];
	  }
	
	  if (v === 0) {
	    return [h, 0, 0];
	  }
	
	  l = (2 - s) * v;
	  sl = s * v;
	  sl /= (l <= 1) ? l : 2 - l;
	  l /= 2;
	  return [h, sl * 100, l * 100];
	}
	
	function grayscale2rgb (value) {
	  return [value, value, value];
	}
	
	function rgb2grayscale (rgb) {
	  return (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
	}


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(root,factory){
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof exports === 'object') {
	        module.exports = factory();
	    } else {
	        root.eventListener = factory();
	  }
	}(this, function () {
		function wrap(standard, fallback) {
			return function (el, evtName, listener, useCapture) {
				if (el[standard]) {
					el[standard](evtName, listener, useCapture);
				} else if (el[fallback]) {
					el[fallback]('on' + evtName, listener);
				}
			}
		}
	
	    return {
			add: wrap('addEventListener', 'attachEvent'),
			remove: wrap('removeEventListener', 'detachEvent')
		};
	}));

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	})();
	
	var _get = function get(_x, _x2, _x3) {
	  var _again = true;_function: while (_again) {
	    var object = _x,
	        property = _x2,
	        receiver = _x3;desc = parent = getter = undefined;_again = false;if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
	      var parent = Object.getPrototypeOf(object);if (parent === null) {
	        return undefined;
	      } else {
	        _x = parent;_x2 = property;_x3 = receiver;_again = true;continue _function;
	      }
	    } else if ('value' in desc) {
	      return desc.value;
	    } else {
	      var getter = desc.get;if (getter === undefined) {
	        return undefined;
	      }return getter.call(receiver);
	    }
	  }
	};
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError('Cannot call a class as a function');
	  }
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== 'function' && superClass !== null) {
	    throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) subClass.__proto__ = superClass;
	}
	
	var _react = __webpack_require__(6);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utilsPrefixClsFn = __webpack_require__(10);
	
	var _utilsPrefixClsFn2 = _interopRequireDefault(_utilsPrefixClsFn);
	
	var Preview = (function (_React$Component) {
	  function Preview(props) {
	    _classCallCheck(this, Preview);
	
	    _get(Object.getPrototypeOf(Preview.prototype), 'constructor', this).call(this, props);
	
	    this.state = {
	      prefixCls: props.prefixCls,
	      alpha: props.alpha,
	      defaultColor: props.defaultColor,
	      customColor: props.customColor
	    };
	
	    this.prefixClsFn = _utilsPrefixClsFn2['default'].bind(this);
	  }
	
	  _inherits(Preview, _React$Component);
	
	  _createClass(Preview, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (nextProps.defaultColor !== this.props.defaultColor) {
	        this.setState({
	          defaultColor: nextProps.defaultColor,
	          customColor: nextProps.defaultColor
	        });
	      }
	      if (nextProps.customColor !== this.props.customColor) {
	        this.setState({
	          defaultColor: nextProps.customColor,
	          customColor: nextProps.customColor
	        });
	      }
	      if (nextProps.alpha !== this.props.alpha) {
	        this.setState({
	          alpha: nextProps.alpha
	        });
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement('div', { className: this.props.prefixCls }, _react2['default'].createElement('span', { style: { backgroundColor: this.state.defaultColor, opacity: this.state.alpha / 100 } }));
	    }
	  }]);
	
	  return Preview;
	})(_react2['default'].Component);
	
	exports['default'] = Preview;
	
	Preview.propTypes = {
	  prefixCls: _react2['default'].PropTypes.string,
	  alpha: _react2['default'].PropTypes.number,
	  defaultColor: _react2['default'].PropTypes.string,
	  customColor: _react2['default'].PropTypes.string
	};
	
	Preview.defaultProps = {
	  prefixCls: 'react-colors-picker-preview',
	  alpha: 100,
	  defaultColor: '#f00', // 背景颜色 响应来自  board 面板的选取颜色
	  customColor: '#f00' // 背景颜色  响应来自用户的输入颜色
	};
	module.exports = exports['default'];

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	})();
	
	var _get = function get(_x, _x2, _x3) {
	  var _again = true;_function: while (_again) {
	    var object = _x,
	        property = _x2,
	        receiver = _x3;desc = parent = getter = undefined;_again = false;if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
	      var parent = Object.getPrototypeOf(object);if (parent === null) {
	        return undefined;
	      } else {
	        _x = parent;_x2 = property;_x3 = receiver;_again = true;continue _function;
	      }
	    } else if ('value' in desc) {
	      return desc.value;
	    } else {
	      var getter = desc.get;if (getter === undefined) {
	        return undefined;
	      }return getter.call(receiver);
	    }
	  }
	};
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError('Cannot call a class as a function');
	  }
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== 'function' && superClass !== null) {
	    throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) subClass.__proto__ = superClass;
	}
	
	var _react = __webpack_require__(6);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _colr = __webpack_require__(13);
	
	var _colr2 = _interopRequireDefault(_colr);
	
	var _eventlistener = __webpack_require__(15);
	
	var _eventlistener2 = _interopRequireDefault(_eventlistener);
	
	var _utilsPrefixClsFn = __webpack_require__(10);
	
	var _utilsPrefixClsFn2 = _interopRequireDefault(_utilsPrefixClsFn);
	
	var colr = new _colr2['default']();
	
	var Ribbon = (function (_React$Component) {
	  function Ribbon(props) {
	    var _this = this;
	
	    _classCallCheck(this, Ribbon);
	
	    _get(Object.getPrototypeOf(Ribbon.prototype), 'constructor', this).call(this, props);
	    this.state = {
	      prefixCls: props.prefixCls,
	      defaultColor: props.defaultColor
	    };
	
	    this.prefixClsFn = _utilsPrefixClsFn2['default'].bind(this);
	
	    var events = ['handleMouseDown', 'handledDrag', 'handledDragEnd', 'pointMoveTo', '_setHuePosition'];
	    events.forEach(function (e) {
	      _this[e] = _this[e].bind(_this);
	    });
	  }
	
	  _inherits(Ribbon, _React$Component);
	
	  _createClass(Ribbon, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this._setHuePosition(this.state.defaultColor);
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      // 接收 defaultColor 响应当前坐标位置
	      if (nextProps.defaultColor !== this.props.defaultColor) {
	        this._setHuePosition(nextProps.defaultColor);
	      }
	    }
	  }, {
	    key: '_setHuePosition',
	    value: function _setHuePosition(hex) {
	      var HSV = colr.fromHex(hex).toHsvObject();
	      var hue = HSV.h;
	      var per = hue / 360 * 100;
	      this.setState({
	        huePercent: per
	      });
	    }
	  }, {
	    key: 'pointMoveTo',
	    value: function pointMoveTo(coords) {
	      var rect = _react2['default'].findDOMNode(this).getBoundingClientRect();
	      var width = rect.width;
	      var left = coords.x - rect.left;
	
	      left = Math.max(0, left);
	      left = Math.min(left, width);
	
	      var huePercent = left / width;
	      var hue = huePercent * 360;
	
	      huePercent = huePercent * 100;
	
	      this.setState({
	        huePercent: huePercent
	      });
	
	      this.props.onHexChange(hue);
	    }
	  }, {
	    key: 'handleMouseDown',
	    value: function handleMouseDown(e) {
	      var x = e.clientX,
	          y = e.clientY;
	
	      this.pointMoveTo({
	        x: x, y: y
	      });
	
	      _eventlistener2['default'].add(window, 'mousemove', this.handledDrag);
	      _eventlistener2['default'].add(window, 'mouseup', this.handledDragEnd);
	    }
	  }, {
	    key: 'handledDrag',
	    value: function handledDrag(e) {
	      var x = e.clientX,
	          y = e.clientY;
	      this.pointMoveTo({
	        x: x, y: y
	      });
	    }
	  }, {
	    key: 'handledDragEnd',
	    value: function handledDragEnd(e) {
	      var x = e.clientX,
	          y = e.clientY;
	      this.pointMoveTo({
	        x: x, y: y
	      });
	      _eventlistener2['default'].remove(window, 'mousemove', this.handledDrag);
	      _eventlistener2['default'].remove(window, 'mouseup', this.handledDragEnd);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement('div', { className: this.props.prefixCls }, _react2['default'].createElement('span', { ref: 'point', style: { left: this.state.huePercent + '%' } }), _react2['default'].createElement('div', {
	        className: this.prefixClsFn('handler'),
	        onMouseDown: this.handleMouseDown
	      }));
	    }
	  }]);
	
	  return Ribbon;
	})(_react2['default'].Component);
	
	exports['default'] = Ribbon;
	
	Ribbon.propTypes = {
	  prefixCls: _react2['default'].PropTypes.string,
	  defaultColor: _react2['default'].PropTypes.string,
	  onHexChange: _react2['default'].PropTypes.func
	};
	
	Ribbon.defaultProps = {
	  prefixCls: 'react-colors-picker-ribbon',
	  defaultColor: '#f00',
	  onHexChange: function onHexChange() {}
	};
	
	module.exports = Ribbon;
	module.exports = exports['default'];

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	})();
	
	var _get = function get(_x, _x2, _x3) {
	  var _again = true;_function: while (_again) {
	    var object = _x,
	        property = _x2,
	        receiver = _x3;desc = parent = getter = undefined;_again = false;if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
	      var parent = Object.getPrototypeOf(object);if (parent === null) {
	        return undefined;
	      } else {
	        _x = parent;_x2 = property;_x3 = receiver;_again = true;continue _function;
	      }
	    } else if ('value' in desc) {
	      return desc.value;
	    } else {
	      var getter = desc.get;if (getter === undefined) {
	        return undefined;
	      }return getter.call(receiver);
	    }
	  }
	};
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError('Cannot call a class as a function');
	  }
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== 'function' && superClass !== null) {
	    throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) subClass.__proto__ = superClass;
	}
	
	var _react = __webpack_require__(6);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _colr = __webpack_require__(13);
	
	var _colr2 = _interopRequireDefault(_colr);
	
	var _eventlistener = __webpack_require__(15);
	
	var _eventlistener2 = _interopRequireDefault(_eventlistener);
	
	var _utilsPrefixClsFn = __webpack_require__(10);
	
	var _utilsPrefixClsFn2 = _interopRequireDefault(_utilsPrefixClsFn);
	
	var colr = new _colr2['default']();
	
	function rgbaColor(r, g, b, a) {
	  return 'rgba(' + [r, g, b, a / 100].join(',') + ')';
	}
	
	var Alpha = (function (_React$Component) {
	  function Alpha(props) {
	    var _this = this;
	
	    _classCallCheck(this, Alpha);
	
	    _get(Object.getPrototypeOf(Alpha.prototype), 'constructor', this).call(this, props);
	    this.state = {
	      alpha: props.alpha,
	      prefixCls: props.prefixCls,
	      defaultColor: props.defaultColor,
	      customColor: props.defaultColor
	    };
	
	    this.prefixClsFn = _utilsPrefixClsFn2['default'].bind(this);
	
	    var events = ['handleMouseDown', 'handledDrag', 'handledDragEnd', 'pointMoveTo', 'getBackground'];
	    events.forEach(function (e) {
	      _this[e] = _this[e].bind(_this);
	    });
	  }
	
	  _inherits(Alpha, _React$Component);
	
	  _createClass(Alpha, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (nextProps.customColor !== this.props.customColor) {
	        this.setState({
	          defaultColor: nextProps.customColor,
	          customColor: nextProps.customColor
	        });
	      }
	      if (nextProps.defaultColor !== this.props.defaultColor) {
	        this.setState({
	          defaultColor: nextProps.defaultColor,
	          customColor: nextProps.defaultColor
	        });
	      }
	      if (nextProps.alpha !== this.props.alpha) {
	        this.setState({
	          alpha: nextProps.alpha
	        });
	      }
	    }
	  }, {
	    key: 'getBackground',
	    value: function getBackground() {
	      var _colr$fromHex$toRgbObject = colr.fromHex(this.state.defaultColor).toRgbObject();
	
	      var r = _colr$fromHex$toRgbObject.r;
	      var g = _colr$fromHex$toRgbObject.g;
	      var b = _colr$fromHex$toRgbObject.b;
	
	      var opacityGradient = 'linear-gradient(to right, ' + rgbaColor(r, g, b, 0) + ', ' + rgbaColor(r, g, b, 100) + ')';
	      return opacityGradient;
	    }
	  }, {
	    key: 'pointMoveTo',
	    value: function pointMoveTo(coords) {
	      var rect = _react2['default'].findDOMNode(this).getBoundingClientRect();
	      var width = rect.width;
	      var left = coords.x - rect.left;
	
	      left = Math.max(0, left);
	      left = Math.min(left, width);
	
	      var alpha = Math.floor(left / width * 100);
	
	      this.setState({
	        alpha: alpha
	      });
	
	      this.props.onAlphaChange(alpha);
	    }
	  }, {
	    key: 'handleMouseDown',
	    value: function handleMouseDown(e) {
	      var x = e.clientX,
	          y = e.clientY;
	
	      this.pointMoveTo({
	        x: x, y: y
	      });
	
	      _eventlistener2['default'].add(window, 'mousemove', this.handledDrag);
	      _eventlistener2['default'].add(window, 'mouseup', this.handledDragEnd);
	    }
	  }, {
	    key: 'handledDrag',
	    value: function handledDrag(e) {
	      var x = e.clientX,
	          y = e.clientY;
	      this.pointMoveTo({
	        x: x, y: y
	      });
	    }
	  }, {
	    key: 'handledDragEnd',
	    value: function handledDragEnd(e) {
	      var x = e.clientX,
	          y = e.clientY;
	      this.pointMoveTo({
	        x: x, y: y
	      });
	      _eventlistener2['default'].remove(window, 'mousemove', this.handledDrag);
	      _eventlistener2['default'].remove(window, 'mouseup', this.handledDragEnd);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement('div', { className: this.props.prefixCls }, _react2['default'].createElement('div', {
	        ref: 'bg',
	        className: this.prefixClsFn('bg'),
	        style: { background: this.getBackground() } }), _react2['default'].createElement('span', { ref: 'point', style: { left: this.state.alpha + '%' } }), _react2['default'].createElement('div', {
	        className: this.prefixClsFn('handler'),
	        onMouseDown: this.handleMouseDown }));
	    }
	  }]);
	
	  return Alpha;
	})(_react2['default'].Component);
	
	exports['default'] = Alpha;
	
	Alpha.defaultProps = {
	  alpha: 100,
	  prefixCls: 'react-colors-picker-alpha',
	  defaultColor: '#f00',
	  customColor: '#f00',
	  onAlphaChange: function onAlphaChange() {}
	};
	module.exports = exports['default'];

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	})();
	
	var _get = function get(_x, _x2, _x3) {
	  var _again = true;_function: while (_again) {
	    var object = _x,
	        property = _x2,
	        receiver = _x3;desc = parent = getter = undefined;_again = false;if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
	      var parent = Object.getPrototypeOf(object);if (parent === null) {
	        return undefined;
	      } else {
	        _x = parent;_x2 = property;_x3 = receiver;_again = true;continue _function;
	      }
	    } else if ('value' in desc) {
	      return desc.value;
	    } else {
	      var getter = desc.get;if (getter === undefined) {
	        return undefined;
	      }return getter.call(receiver);
	    }
	  }
	};
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError('Cannot call a class as a function');
	  }
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== 'function' && superClass !== null) {
	    throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) subClass.__proto__ = superClass;
	}
	
	var _react = __webpack_require__(6);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _colr = __webpack_require__(13);
	
	var _colr2 = _interopRequireDefault(_colr);
	
	var _store = __webpack_require__(20);
	
	var _store2 = _interopRequireDefault(_store);
	
	var _utilsPrefixClsFn = __webpack_require__(10);
	
	var _utilsPrefixClsFn2 = _interopRequireDefault(_utilsPrefixClsFn);
	
	var colr = new _colr2['default']();
	
	// @see https://github.com/stayradiated/colr-convert/blob/master/index.js
	// convert a charcode to a hex val
	function hexVal(c) {
	  return c < 58 ? c - 48 : // 0 - 9
	  c < 71 ? c - 55 : // A - F
	  c - 87 // a - f
	  ;
	}
	function validationHex(hex) {
	  var i = hex[0] === '#' ? 1 : 0;
	  var len = hex.length;
	
	  if (len - i < 3) {
	    return false;
	  }
	
	  var r = undefined,
	      g = undefined,
	      b = undefined;
	
	  var h1 = hexVal(hex.charCodeAt(0 + i));
	  var h2 = hexVal(hex.charCodeAt(1 + i));
	  var h3 = hexVal(hex.charCodeAt(2 + i));
	
	  if (len - i >= 6) {
	    r = (h1 << 4) + h2;
	    g = (h3 << 4) + hexVal(hex.charCodeAt(3 + i));
	    b = (hexVal(hex.charCodeAt(4 + i)) << 4) + hexVal(hex.charCodeAt(5 + i));
	  } else {
	    r = (h1 << 4) + h1;
	    g = (h2 << 4) + h2;
	    b = (h3 << 4) + h3;
	  }
	
	  if (r < 0 || r > 255 || g < 0 || g > 255 || b < 0 || b > 255) {
	    return false;
	  }
	
	  return true;
	}
	
	var Params = (function (_React$Component) {
	  function Params(props) {
	    var _this = this;
	
	    _classCallCheck(this, Params);
	
	    _get(Object.getPrototypeOf(Params.prototype), 'constructor', this).call(this, props);
	    var index = _store2['default'].get('react-colors-picker-index') || 0;
	    var modes = ['rgb', 'hsv', 'hsl'];
	    var mode = modes[index];
	
	    var colors = this.formatHex(props.defaultColor);
	
	    this.state = {
	      modes: modes,
	      index: index,
	      mode: mode,
	      prefixCls: props.prefixCls,
	      colors: colors,
	      hex: props.defaultColor.substr(1),
	      alpha: props.alpha
	    };
	
	    this.prefixClsFn = _utilsPrefixClsFn2['default'].bind(this);
	
	    var events = ['formatHex', 'formatRgb', 'formatHsv', 'formatHsl', '_chagneColorsFromHex', '_chagneColorsFromRgb', '_chagneColorsFromHsv', '_chagneColorsFromHsl', 'handlerHexChange', 'handlerAlphaChange', 'getRgbFromKey', 'getHsvFromKey', 'getHslFromKey', 'handlerKeyPress', 'handlerRGBChange', 'handlerHSVChange', 'handlerHSLChange', 'handlerModeChange'];
	
	    events.forEach(function (e) {
	      _this[e] = _this[e].bind(_this);
	    });
	  }
	
	  _inherits(Params, _React$Component);
	
	  _createClass(Params, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      // 此方法需要对详细的属性做过滤, 不能单一的统一处理
	      // 父级元素的任意属性关联都可以触发, 曾经我以为是单个独自触发的
	      if (nextProps.defaultColor !== this.props.defaultColor) {
	        var colors = this.formatHex(nextProps.defaultColor);
	        this.setState({
	          hex: nextProps.defaultColor.substr(1),
	          colors: colors
	        });
	      }
	
	      if (nextProps.alpha !== this.props.alpha) {
	        this.setState({
	          alpha: nextProps.alpha
	        });
	      }
	    }
	  }, {
	    key: 'getRgbFromKey',
	    value: function getRgbFromKey(key) {
	      var mode = this.state.mode;
	      return this.state.colors[mode][key];
	    }
	  }, {
	    key: 'getHsvFromKey',
	    value: function getHsvFromKey(key) {
	      var mode = this.state.mode;
	      return this.state.colors[mode][key];
	    }
	  }, {
	    key: 'getHslFromKey',
	    value: function getHslFromKey(key) {
	      var mode = this.state.mode;
	      return this.state.colors[mode][key];
	    }
	  }, {
	    key: 'formatHex',
	    value: function formatHex(hex) {
	      var colors = colr.fromHex(hex);
	      var rgb = colors.toRgbObject();
	      var hsv = colors.toHsvObject();
	      var hsl = colors.toHslObject();
	      return { rgb: rgb, hsv: hsv, hsl: hsl, hex: hex };
	    }
	  }, {
	    key: 'formatRgb',
	    value: function formatRgb(rgb) {
	      var colors = colr.fromRgbObject(rgb);
	      var hex = colors.toHex();
	      var hsv = colors.toHsvObject();
	      var hsl = colors.toHslObject();
	      return { rgb: rgb, hsv: hsv, hsl: hsl, hex: hex };
	    }
	  }, {
	    key: 'formatHsv',
	    value: function formatHsv(hsv) {
	      var colors = colr.fromHsvObject(hsv);
	      var hex = colors.toHex();
	      var rgb = colors.toRgbObject();
	      var hsl = colors.toHslObject();
	      return { rgb: rgb, hsv: hsv, hsl: hsl, hex: hex };
	    }
	  }, {
	    key: 'formatHsl',
	    value: function formatHsl(hsl) {
	      var colors = colr.fromHslObject(hsl);
	      var hex = colors.toHex();
	      var rgb = colors.toRgbObject();
	      var hsv = colors.toHsvObject();
	      return { rgb: rgb, hsv: hsv, hsl: hsl, hex: hex };
	    }
	  }, {
	    key: 'handlerHexChange',
	    value: function handlerHexChange(event) {
	      var value = event.target.value;
	      this.setState({ hex: value });
	    }
	  }, {
	    key: 'handlerKeyPress',
	    value: function handlerKeyPress(event) {
	      var hex = event.target.value;
	      var keycode = event.charCode;
	
	      if (hex.length > 2 && keycode === 13 && validationHex(hex)) {
	        this.props.onHexChange('#' + hex);
	        this._chagneColorsFromHex('#' + hex);
	      }
	    }
	  }, {
	    key: 'handlerAlphaChange',
	    value: function handlerAlphaChange(event) {
	      this.setState({ alpha: event.target.value });
	      this.props.onAlphaChange(parseInt(event.target.value));
	    }
	  }, {
	    key: 'handlerRGBChange',
	    value: function handlerRGBChange(type, event) {
	      var value = event.target.value;
	      var RGB = this.state.colors[this.state.mode];
	      RGB[type] = parseInt(value);
	      this._chagneColorsFromRgb(RGB);
	    }
	  }, {
	    key: 'handlerHSVChange',
	    value: function handlerHSVChange(type, event) {
	      var value = event.target.value;
	      var HSV = this.state.colors[this.state.mode];
	      HSV[type] = parseInt(value);
	      this._chagneColorsFromHsv(HSV);
	    }
	  }, {
	    key: 'handlerHSLChange',
	    value: function handlerHSLChange(type, event) {
	      var value = event.target.value;
	      var HSL = this.state.colors[this.state.mode];
	      HSL[type] = parseInt(value);
	      this._chagneColorsFromHsl(HSL);
	    }
	  }, {
	    key: 'handlerModeChange',
	    value: function handlerModeChange() {
	      var index = this.state.index;
	      index = (index + 1) % 3;
	      var mode = this.state.modes[index];
	      _store2['default'].set('react-colors-picker-index', index);
	      this.setState({
	        index: index,
	        mode: mode
	      });
	    }
	  }, {
	    key: '_chagneColorsFromHex',
	    value: function _chagneColorsFromHex(hex) {
	      var newColors = this.formatHex(hex);
	      this.props.onHexChange(hex);
	      this.setState({
	        colors: newColors,
	        hex: hex.substr(1)
	      });
	    }
	  }, {
	    key: '_chagneColorsFromRgb',
	    value: function _chagneColorsFromRgb(rgb) {
	      var newColors = this.formatRgb(rgb);
	      this.props.onHexChange(newColors.hex);
	      this.setState({
	        colors: newColors,
	        hex: newColors.hex.substr(1)
	      });
	    }
	  }, {
	    key: '_chagneColorsFromHsv',
	    value: function _chagneColorsFromHsv(hsv) {
	      var newColors = this.formatHsv(hsv);
	      this.props.onHexChange(newColors.hex);
	      this.setState({
	        colors: newColors,
	        hex: newColors.hex.substr(1)
	      });
	    }
	  }, {
	    key: '_chagneColorsFromHsl',
	    value: function _chagneColorsFromHsl(hsl) {
	      var newColors = this.formatHsl(hsl);
	      this.props.onHexChange(newColors.hex);
	      this.setState({
	        colors: newColors,
	        hex: newColors.hex.substr(1)
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement('div', { className: this.props.prefixCls }, this.state.mode === 'rgb' && _react2['default'].createElement('div', { className: this.prefixClsFn('input') }, _react2['default'].createElement('input', {
	        className: this.prefixClsFn('hex'),
	        type: 'text',
	        maxLength: '6',
	        onChange: this.handlerHexChange,
	        onKeyPress: this.handlerKeyPress,
	        value: this.state.hex }), _react2['default'].createElement('input', { type: 'number',
	        min: 0,
	        max: 255,
	        value: this.getRgbFromKey('r'),
	        onChange: this.handlerRGBChange.bind(null, 'r') }), _react2['default'].createElement('input', { type: 'number',
	        min: 0,
	        max: 255,
	        value: this.getRgbFromKey('g'),
	        onChange: this.handlerRGBChange.bind(null, 'g') }), _react2['default'].createElement('input', { type: 'number',
	        min: 0,
	        max: 255,
	        value: this.getRgbFromKey('b'),
	        onChange: this.handlerRGBChange.bind(null, 'b') }), _react2['default'].createElement('input', { type: 'number',
	        min: 0,
	        max: 100,
	        speed: 1,
	        value: this.state.alpha,
	        onChange: this.handlerAlphaChange })), this.state.mode === 'rgb' && _react2['default'].createElement('div', { className: this.prefixClsFn('lable') }, _react2['default'].createElement('label', { className: this.prefixClsFn('lable-hex') }, 'Hex'), _react2['default'].createElement('label', { className: this.prefixClsFn('lable-number'),
	        onClick: this.handlerModeChange }, 'R'), _react2['default'].createElement('label', { className: this.prefixClsFn('lable-number'),
	        onClick: this.handlerModeChange }, 'G'), _react2['default'].createElement('label', { className: this.prefixClsFn('lable-number'),
	        onClick: this.handlerModeChange }, 'B'), _react2['default'].createElement('label', { className: this.prefixClsFn('lable-alpha') }, 'A')), this.state.mode === 'hsv' && _react2['default'].createElement('div', { className: this.prefixClsFn('input') }, _react2['default'].createElement('input', {
	        className: this.prefixClsFn('hex'),
	        type: 'text',
	        maxLength: '6',
	        onChange: this.handlerHexChange,
	        onKeyPress: this.handlerKeyPress,
	        value: this.state.hex }), _react2['default'].createElement('input', { type: 'number',
	        min: 0,
	        max: 360,
	        value: this.getHsvFromKey('h'),
	        onChange: this.handlerHSVChange.bind(null, 'h') }), _react2['default'].createElement('input', { type: 'number',
	        min: 0,
	        max: 100,
	        value: this.getHsvFromKey('s'),
	        onChange: this.handlerHSVChange.bind(null, 's') }), _react2['default'].createElement('input', { type: 'number',
	        min: 0,
	        max: 100,
	        value: this.getHsvFromKey('v'),
	        onChange: this.handlerHSVChange.bind(null, 'v') }), _react2['default'].createElement('input', { type: 'number',
	        min: 0,
	        max: 100,
	        speed: 1,
	        value: this.state.alpha,
	        onChange: this.handlerAlphaChange })), this.state.mode === 'hsv' && _react2['default'].createElement('div', { className: this.prefixClsFn('lable') }, _react2['default'].createElement('label', { className: this.prefixClsFn('lable-hex') }, 'Hex'), _react2['default'].createElement('label', { className: this.prefixClsFn('lable-number'),
	        onClick: this.handlerModeChange }, 'H'), _react2['default'].createElement('label', { className: this.prefixClsFn('lable-number'),
	        onClick: this.handlerModeChange }, 'S'), _react2['default'].createElement('label', { className: this.prefixClsFn('lable-number'),
	        onClick: this.handlerModeChange }, 'B'), _react2['default'].createElement('label', { className: this.prefixClsFn('lable-alpha') }, 'A')), this.state.mode === 'hsl' && _react2['default'].createElement('div', { className: this.prefixClsFn('input') }, _react2['default'].createElement('input', {
	        className: this.prefixClsFn('hex'),
	        type: 'text',
	        maxLength: '6',
	        onChange: this.handlerHexChange,
	        onKeyPress: this.handlerKeyPress,
	        value: this.state.hex }), _react2['default'].createElement('input', { type: 'number',
	        min: 0,
	        max: 360,
	        value: this.getHslFromKey('h'),
	        onChange: this.handlerHSLChange.bind(null, 'h') }), _react2['default'].createElement('input', { type: 'number',
	        min: 0,
	        max: 100,
	        value: this.getHslFromKey('s'),
	        onChange: this.handlerHSLChange.bind(null, 's') }), _react2['default'].createElement('input', { type: 'number',
	        min: 0,
	        max: 100,
	        value: this.getHslFromKey('l'),
	        onChange: this.handlerHSLChange.bind(null, 'l') }), _react2['default'].createElement('input', { type: 'number',
	        min: 0,
	        max: 100,
	        speed: 1,
	        value: this.state.alpha,
	        onChange: this.handlerAlphaChange })), this.state.mode === 'hsl' && _react2['default'].createElement('div', { className: this.prefixClsFn('lable') }, _react2['default'].createElement('label', { className: this.prefixClsFn('lable-hex') }, 'Hex'), _react2['default'].createElement('label', { className: this.prefixClsFn('lable-number'),
	        onClick: this.handlerModeChange }, 'H'), _react2['default'].createElement('label', { className: this.prefixClsFn('lable-number'),
	        onClick: this.handlerModeChange }, 'S'), _react2['default'].createElement('label', { className: this.prefixClsFn('lable-number'),
	        onClick: this.handlerModeChange }, 'L'), _react2['default'].createElement('label', { className: this.prefixClsFn('lable-alpha') }, 'A')));
	    }
	  }]);
	
	  return Params;
	})(_react2['default'].Component);
	
	exports['default'] = Params;
	
	Params.propTypes = {
	  prefixCls: _react2['default'].PropTypes.string,
	  defaultColor: _react2['default'].PropTypes.string,
	  alpha: _react2['default'].PropTypes.number,
	  onAlphaChange: _react2['default'].PropTypes.func,
	  onHexChange: _react2['default'].PropTypes.func
	};
	
	Params.defaultProps = {
	  prefixCls: 'react-colors-picker-params',
	  defaultColor: '#ff0000',
	  alpha: 100,
	  onAlphaChange: function onAlphaChange() {},
	  onHexChange: function onHexChange() {}
	};
	module.exports = exports['default'];

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {;(function(win){
		var store = {},
			doc = win.document,
			localStorageName = 'localStorage',
			scriptTag = 'script',
			storage
	
		store.disabled = false
		store.version = '1.3.17'
		store.set = function(key, value) {}
		store.get = function(key, defaultVal) {}
		store.has = function(key) { return store.get(key) !== undefined }
		store.remove = function(key) {}
		store.clear = function() {}
		store.transact = function(key, defaultVal, transactionFn) {
			if (transactionFn == null) {
				transactionFn = defaultVal
				defaultVal = null
			}
			if (defaultVal == null) {
				defaultVal = {}
			}
			var val = store.get(key, defaultVal)
			transactionFn(val)
			store.set(key, val)
		}
		store.getAll = function() {}
		store.forEach = function() {}
	
		store.serialize = function(value) {
			return JSON.stringify(value)
		}
		store.deserialize = function(value) {
			if (typeof value != 'string') { return undefined }
			try { return JSON.parse(value) }
			catch(e) { return value || undefined }
		}
	
		// Functions to encapsulate questionable FireFox 3.6.13 behavior
		// when about.config::dom.storage.enabled === false
		// See https://github.com/marcuswestin/store.js/issues#issue/13
		function isLocalStorageNameSupported() {
			try { return (localStorageName in win && win[localStorageName]) }
			catch(err) { return false }
		}
	
		if (isLocalStorageNameSupported()) {
			storage = win[localStorageName]
			store.set = function(key, val) {
				if (val === undefined) { return store.remove(key) }
				storage.setItem(key, store.serialize(val))
				return val
			}
			store.get = function(key, defaultVal) {
				var val = store.deserialize(storage.getItem(key))
				return (val === undefined ? defaultVal : val)
			}
			store.remove = function(key) { storage.removeItem(key) }
			store.clear = function() { storage.clear() }
			store.getAll = function() {
				var ret = {}
				store.forEach(function(key, val) {
					ret[key] = val
				})
				return ret
			}
			store.forEach = function(callback) {
				for (var i=0; i<storage.length; i++) {
					var key = storage.key(i)
					callback(key, store.get(key))
				}
			}
		} else if (doc.documentElement.addBehavior) {
			var storageOwner,
				storageContainer
			// Since #userData storage applies only to specific paths, we need to
			// somehow link our data to a specific path.  We choose /favicon.ico
			// as a pretty safe option, since all browsers already make a request to
			// this URL anyway and being a 404 will not hurt us here.  We wrap an
			// iframe pointing to the favicon in an ActiveXObject(htmlfile) object
			// (see: http://msdn.microsoft.com/en-us/library/aa752574(v=VS.85).aspx)
			// since the iframe access rules appear to allow direct access and
			// manipulation of the document element, even for a 404 page.  This
			// document can be used instead of the current document (which would
			// have been limited to the current path) to perform #userData storage.
			try {
				storageContainer = new ActiveXObject('htmlfile')
				storageContainer.open()
				storageContainer.write('<'+scriptTag+'>document.w=window</'+scriptTag+'><iframe src="/favicon.ico"></iframe>')
				storageContainer.close()
				storageOwner = storageContainer.w.frames[0].document
				storage = storageOwner.createElement('div')
			} catch(e) {
				// somehow ActiveXObject instantiation failed (perhaps some special
				// security settings or otherwse), fall back to per-path storage
				storage = doc.createElement('div')
				storageOwner = doc.body
			}
			var withIEStorage = function(storeFunction) {
				return function() {
					var args = Array.prototype.slice.call(arguments, 0)
					args.unshift(storage)
					// See http://msdn.microsoft.com/en-us/library/ms531081(v=VS.85).aspx
					// and http://msdn.microsoft.com/en-us/library/ms531424(v=VS.85).aspx
					storageOwner.appendChild(storage)
					storage.addBehavior('#default#userData')
					storage.load(localStorageName)
					var result = storeFunction.apply(store, args)
					storageOwner.removeChild(storage)
					return result
				}
			}
	
			// In IE7, keys cannot start with a digit or contain certain chars.
			// See https://github.com/marcuswestin/store.js/issues/40
			// See https://github.com/marcuswestin/store.js/issues/83
			var forbiddenCharsRegex = new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]", "g")
			function ieKeyFix(key) {
				return key.replace(/^d/, '___$&').replace(forbiddenCharsRegex, '___')
			}
			store.set = withIEStorage(function(storage, key, val) {
				key = ieKeyFix(key)
				if (val === undefined) { return store.remove(key) }
				storage.setAttribute(key, store.serialize(val))
				storage.save(localStorageName)
				return val
			})
			store.get = withIEStorage(function(storage, key, defaultVal) {
				key = ieKeyFix(key)
				var val = store.deserialize(storage.getAttribute(key))
				return (val === undefined ? defaultVal : val)
			})
			store.remove = withIEStorage(function(storage, key) {
				key = ieKeyFix(key)
				storage.removeAttribute(key)
				storage.save(localStorageName)
			})
			store.clear = withIEStorage(function(storage) {
				var attributes = storage.XMLDocument.documentElement.attributes
				storage.load(localStorageName)
				for (var i=0, attr; attr=attributes[i]; i++) {
					storage.removeAttribute(attr.name)
				}
				storage.save(localStorageName)
			})
			store.getAll = function(storage) {
				var ret = {}
				store.forEach(function(key, val) {
					ret[key] = val
				})
				return ret
			}
			store.forEach = withIEStorage(function(storage, callback) {
				var attributes = storage.XMLDocument.documentElement.attributes
				for (var i=0, attr; attr=attributes[i]; ++i) {
					callback(attr.name, store.deserialize(storage.getAttribute(attr.name)))
				}
			})
		}
	
		try {
			var testKey = '__storejs__'
			store.set(testKey, testKey)
			if (store.get(testKey) != testKey) { store.disabled = true }
			store.remove(testKey)
		} catch(e) {
			store.disabled = true
		}
		store.enabled = !store.disabled
	
		if (typeof module != 'undefined' && module.exports && this.module !== module) { module.exports = store }
		else if (true) { !(__WEBPACK_AMD_DEFINE_FACTORY__ = (store), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) }
		else { win.store = store }
	
	})(Function('return this')());
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(21)(module)))

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(23);
	
	function getRegion(node) {
	  var offset = undefined,
	      w = undefined,
	      h = undefined;
	  if (!utils.isWindow(node) && node.nodeType !== 9) {
	    offset = utils.offset(node);
	    w = utils.outerWidth(node);
	    h = utils.outerHeight(node);
	  } else {
	    var win = utils.getWindow(node);
	    offset = {
	      left: utils.getWindowScrollLeft(win),
	      top: utils.getWindowScrollTop(win)
	    };
	    w = utils.viewportWidth(win);
	    h = utils.viewportHeight(win);
	  }
	  offset.width = w;
	  offset.height = h;
	  return offset;
	}
	
	function getAlignOffset(targetRegion, referRegion, align, offset) {
	  var x = undefined,
	      y = undefined;
	
	  x = referRegion.left;
	  y = referRegion.top;
	
	  if (align === 'right') {
	    x += referRegion.width;
	  } else if (align === 'left') {
	    x -= targetRegion.width + offset[0] * 2;
	  }
	
	  return {
	    left: x + offset[0],
	    top: y + offset[1]
	  };
	}
	
	function getAlign(targetNode, referNode, align) {
	  var offset = arguments[3] === undefined ? [0, 0] : arguments[3];
	
	  var referRegion = getRegion(referNode);
	  var targetRegion = getRegion(targetNode);
	  return getAlignOffset(targetRegion, referRegion, align, offset);
	}
	
	module.exports = {
	  getRegion: getRegion, getAlign: getAlign
	};

/***/ },
/* 23 */
/***/ function(module, exports) {

	'use strict';
	
	var RE_NUM = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source;
	
	var getComputedStyleX;
	if (typeof window !== 'undefined') {
	  getComputedStyleX = window.getComputedStyle ? _getComputedStyle : _getComputedStyleIE;
	}
	
	function css(el, name, value) {
	  if (typeof name === 'object') {
	    for (var i in name) {
	      css(el, i, name[i]);
	    }
	    return undefined;
	  }
	  if (typeof value !== 'undefined') {
	    if (typeof value === 'number') {
	      value = value + 'px';
	    }
	    el.style[name] = value;
	    return undefined;
	  } else {
	    return getComputedStyleX(el, name);
	  }
	}
	
	function getClientPosition(elem) {
	  var box, x, y;
	  var doc = elem.ownerDocument;
	  var body = doc.body;
	  var docElem = doc && doc.documentElement;
	  // 根据 GBS 最新数据，A-Grade Browsers 都已支持 getBoundingClientRect 方法，不用再考虑传统的实现方式
	  box = elem.getBoundingClientRect();
	
	  // 注：jQuery 还考虑减去 docElem.clientLeft/clientTop
	  // 但测试发现，这样反而会导致当 html 和 body 有边距/边框样式时，获取的值不正确
	  // 此外，ie6 会忽略 html 的 margin 值，幸运地是没有谁会去设置 html 的 margin
	
	  x = box.left;
	  y = box.top;
	
	  // In IE, most of the time, 2 extra pixels are added to the top and left
	  // due to the implicit 2-pixel inset border.  In IE6/7 quirks mode and
	  // IE6 standards mode, this border can be overridden by setting the
	  // document element's border to zero -- thus, we cannot rely on the
	  // offset always being 2 pixels.
	
	  // In quirks mode, the offset can be determined by querying the body's
	  // clientLeft/clientTop, but in standards mode, it is found by querying
	  // the document element's clientLeft/clientTop.  Since we already called
	  // getClientBoundingRect we have already forced a reflow, so it is not
	  // too expensive just to query them all.
	
	  // ie 下应该减去窗口的边框吧，毕竟默认 absolute 都是相对窗口定位的
	  // 窗口边框标准是设 documentElement ,quirks 时设置 body
	  // 最好禁止在 body 和 html 上边框 ，但 ie < 9 html 默认有 2px ，减去
	  // 但是非 ie 不可能设置窗口边框，body html 也不是窗口 ,ie 可以通过 html,body 设置
	  // 标准 ie 下 docElem.clientTop 就是 border-top
	  // ie7 html 即窗口边框改变不了。永远为 2
	  // 但标准 firefox/chrome/ie9 下 docElem.clientTop 是窗口边框，即使设了 border-top 也为 0
	
	  x -= docElem.clientLeft || body.clientLeft || 0;
	  y -= docElem.clientTop || body.clientTop || 0;
	
	  return { left: x, top: y };
	}
	
	function getScroll(w, top) {
	  var ret = w['page' + (top ? 'Y' : 'X') + 'Offset'];
	  var method = 'scroll' + (top ? 'Top' : 'Left');
	  if (typeof ret !== 'number') {
	    var d = w.document;
	    //ie6,7,8 standard mode
	    ret = d.documentElement[method];
	    if (typeof ret !== 'number') {
	      //quirks mode
	      ret = d.body[method];
	    }
	  }
	  return ret;
	}
	
	function getScrollLeft(w) {
	  return getScroll(w);
	}
	
	function getScrollTop(w) {
	  return getScroll(w, true);
	}
	
	function getOffset(el) {
	  var pos = getClientPosition(el);
	  var doc = el.ownerDocument;
	  var w = doc.defaultView || doc.parentWindow;
	  pos.left += getScrollLeft(w);
	  pos.top += getScrollTop(w);
	  return pos;
	}
	function _getComputedStyle(elem, name, computedStyle) {
	  var val = '';
	  var d = elem.ownerDocument;
	
	  // https://github.com/kissyteam/kissy/issues/61
	  if (computedStyle = computedStyle || d.defaultView.getComputedStyle(elem, null)) {
	    val = computedStyle.getPropertyValue(name) || computedStyle[name];
	  }
	
	  return val;
	}
	
	var _RE_NUM_NO_PX = new RegExp('^(' + RE_NUM + ')(?!px)[a-z%]+$', 'i');
	var RE_POS = /^(top|right|bottom|left)$/,
	    CURRENT_STYLE = 'currentStyle',
	    RUNTIME_STYLE = 'runtimeStyle',
	    LEFT = 'left',
	    PX = 'px';
	
	function _getComputedStyleIE(elem, name) {
	  // currentStyle maybe null
	  // http://msdn.microsoft.com/en-us/library/ms535231.aspx
	  var ret = elem[CURRENT_STYLE] && elem[CURRENT_STYLE][name];
	
	  // 当 width/height 设置为百分比时，通过 pixelLeft 方式转换的 width/height 值
	  // 一开始就处理了! CUSTOM_STYLE.height,CUSTOM_STYLE.width ,cssHook 解决@2011-08-19
	  // 在 ie 下不对，需要直接用 offset 方式
	  // borderWidth 等值也有问题，但考虑到 borderWidth 设为百分比的概率很小，这里就不考虑了
	
	  // From the awesome hack by Dean Edwards
	  // http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291
	  // If we're not dealing with a regular pixel number
	  // but a number that has a weird ending, we need to convert it to pixels
	  // exclude left right for relativity
	  if (_RE_NUM_NO_PX.test(ret) && !RE_POS.test(name)) {
	    // Remember the original values
	    var style = elem.style,
	        left = style[LEFT],
	        rsLeft = elem[RUNTIME_STYLE][LEFT];
	
	    // prevent flashing of content
	    elem[RUNTIME_STYLE][LEFT] = elem[CURRENT_STYLE][LEFT];
	
	    // Put in the new values to get a computed value out
	    style[LEFT] = name === 'fontSize' ? '1em' : ret || 0;
	    ret = style.pixelLeft + PX;
	
	    // Revert the changed values
	    style[LEFT] = left;
	
	    elem[RUNTIME_STYLE][LEFT] = rsLeft;
	  }
	  return ret === '' ? 'auto' : ret;
	}
	
	// 设置 elem 相对 elem.ownerDocument 的坐标
	function setOffset(elem, offset) {
	  // set position first, in-case top/left are set even on static elem
	  if (css(elem, 'position') === 'static') {
	    elem.style.position = 'relative';
	  }
	
	  var old = getOffset(elem),
	      ret = {},
	      current,
	      key;
	
	  for (key in offset) {
	    current = parseFloat(css(elem, key)) || 0;
	    ret[key] = current + offset[key] - old[key];
	  }
	  css(elem, ret);
	}
	
	function each(arr, fn) {
	  for (var i = 0; i < arr.length; i++) {
	    fn(arr[i]);
	  }
	}
	
	function isBorderBoxFn(elem) {
	  return getComputedStyleX(elem, 'boxSizing') === 'border-box';
	}
	
	var BOX_MODELS = ['margin', 'border', 'padding'],
	    CONTENT_INDEX = -1,
	    PADDING_INDEX = 2,
	    BORDER_INDEX = 1,
	    MARGIN_INDEX = 0;
	
	function swap(elem, options, callback) {
	  var old = {},
	      style = elem.style,
	      name;
	
	  // Remember the old values, and insert the new ones
	  for (name in options) {
	    old[name] = style[name];
	    style[name] = options[name];
	  }
	
	  callback.call(elem);
	
	  // Revert the old values
	  for (name in options) {
	    style[name] = old[name];
	  }
	}
	
	function getPBMWidth(elem, props, which) {
	  var value = 0,
	      prop,
	      j,
	      i;
	  for (j = 0; j < props.length; j++) {
	    prop = props[j];
	    if (prop) {
	      for (i = 0; i < which.length; i++) {
	        var cssProp;
	        if (prop === 'border') {
	          cssProp = prop + which[i] + 'Width';
	        } else {
	          cssProp = prop + which[i];
	        }
	        value += parseFloat(getComputedStyleX(elem, cssProp)) || 0;
	      }
	    }
	  }
	  return value;
	}
	
	/**
	 * A crude way of determining if an object is a window
	 * @member util
	 */
	function isWindow(obj) {
	  // must use == for ie8
	  /*eslint eqeqeq:0*/
	  return obj != null && obj == obj.window;
	}
	
	var domUtils = {};
	
	each(['Width', 'Height'], function (name) {
	  domUtils['doc' + name] = function (refWin) {
	    var d = refWin.document;
	    return Math.max(
	    //firefox chrome documentElement.scrollHeight< body.scrollHeight
	    //ie standard mode : documentElement.scrollHeight> body.scrollHeight
	    d.documentElement['scroll' + name],
	    //quirks : documentElement.scrollHeight 最大等于可视窗口多一点？
	    d.body['scroll' + name], domUtils['viewport' + name](d));
	  };
	
	  domUtils['viewport' + name] = function (win) {
	    // pc browser includes scrollbar in window.innerWidth
	    var prop = 'client' + name,
	        doc = win.document,
	        body = doc.body,
	        documentElement = doc.documentElement,
	        documentElementProp = documentElement[prop];
	    // 标准模式取 documentElement
	    // backcompat 取 body
	    return doc.compatMode === 'CSS1Compat' && documentElementProp || body && body[prop] || documentElementProp;
	  };
	});
	
	/*
	 得到元素的大小信息
	 @param elem
	 @param name
	 @param {String} [extra]  'padding' : (css width) + padding
	 'border' : (css width) + padding + border
	 'margin' : (css width) + padding + border + margin
	 */
	function getWH(elem, name, extra) {
	  if (isWindow(elem)) {
	    return name === 'width' ? domUtils.viewportWidth(elem) : domUtils.viewportHeight(elem);
	  } else if (elem.nodeType === 9) {
	    return name === 'width' ? domUtils.docWidth(elem) : domUtils.docHeight(elem);
	  }
	  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'],
	      borderBoxValue = name === 'width' ? elem.offsetWidth : elem.offsetHeight;
	  var computedStyle = getComputedStyleX(elem);
	  var isBorderBox = isBorderBoxFn(elem, computedStyle);
	  var cssBoxValue = 0;
	  if (borderBoxValue == null || borderBoxValue <= 0) {
	    borderBoxValue = undefined;
	    // Fall back to computed then un computed css if necessary
	    cssBoxValue = getComputedStyleX(elem, name);
	    if (cssBoxValue == null || Number(cssBoxValue) < 0) {
	      cssBoxValue = elem.style[name] || 0;
	    }
	    // Normalize '', auto, and prepare for extra
	    cssBoxValue = parseFloat(cssBoxValue) || 0;
	  }
	  if (extra === undefined) {
	    extra = isBorderBox ? BORDER_INDEX : CONTENT_INDEX;
	  }
	  var borderBoxValueOrIsBorderBox = borderBoxValue !== undefined || isBorderBox;
	  var val = borderBoxValue || cssBoxValue;
	  if (extra === CONTENT_INDEX) {
	    if (borderBoxValueOrIsBorderBox) {
	      return val - getPBMWidth(elem, ['border', 'padding'], which, computedStyle);
	    } else {
	      return cssBoxValue;
	    }
	  } else if (borderBoxValueOrIsBorderBox) {
	    return val + (extra === BORDER_INDEX ? 0 : extra === PADDING_INDEX ? -getPBMWidth(elem, ['border'], which, computedStyle) : getPBMWidth(elem, ['margin'], which, computedStyle));
	  } else {
	    return cssBoxValue + getPBMWidth(elem, BOX_MODELS.slice(extra), which, computedStyle);
	  }
	}
	
	var cssShow = { position: 'absolute', visibility: 'hidden', display: 'block' };
	
	// fix #119 : https://github.com/kissyteam/kissy/issues/119
	function getWHIgnoreDisplay(elem) {
	  var val,
	      args = arguments;
	  // in case elem is window
	  // elem.offsetWidth === undefined
	  if (elem.offsetWidth !== 0) {
	    val = getWH.apply(undefined, args);
	  } else {
	    swap(elem, cssShow, function () {
	      val = getWH.apply(undefined, args);
	    });
	  }
	  return val;
	}
	
	each(['width', 'height'], function (name) {
	  var first = name.charAt(0).toUpperCase() + name.slice(1);
	  domUtils['outer' + first] = function (el, includeMargin) {
	    return el && getWHIgnoreDisplay(el, name, includeMargin ? MARGIN_INDEX : BORDER_INDEX);
	  };
	  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];
	
	  domUtils[name] = function (elem, val) {
	    if (val !== undefined) {
	      if (elem) {
	        var computedStyle = getComputedStyleX(elem);
	        var isBorderBox = isBorderBoxFn(elem);
	        if (isBorderBox) {
	          val += getPBMWidth(elem, ['padding', 'border'], which, computedStyle);
	        }
	        return css(elem, name, val);
	      }
	      return undefined;
	    }
	    return elem && getWHIgnoreDisplay(elem, name, CONTENT_INDEX);
	  };
	});
	
	function mix(to, from) {
	  for (var i in from) {
	    to[i] = from[i];
	  }
	  return to;
	}
	
	var utils = module.exports = {
	  getWindow: function getWindow(node) {
	    if (node && node.document && node.setTimeout) {
	      return node;
	    }
	    var doc = node.ownerDocument || node;
	    return doc.defaultView || doc.parentWindow;
	  },
	  offset: function offset(el, value) {
	    if (typeof value !== 'undefined') {
	      setOffset(el, value);
	    } else {
	      return getOffset(el);
	    }
	  },
	  isWindow: isWindow,
	  each: each,
	  css: css,
	  clone: function clone(obj) {
	    var i;
	    var ret = {};
	    for (i in obj) {
	      ret[i] = obj[i];
	    }
	    var overflow = obj.overflow;
	    if (overflow) {
	      for (i in obj) {
	        ret.overflow[i] = obj.overflow[i];
	      }
	    }
	    return ret;
	  },
	  mix: mix,
	  getWindowScrollLeft: function getWindowScrollLeft(w) {
	    return getScrollLeft(w);
	  },
	  getWindowScrollTop: function getWindowScrollTop(w) {
	    return getScrollTop(w);
	  },
	  merge: function merge() {
	    var ret = {};
	    for (var i = 0; i < arguments.length; i++) {
	      utils.mix(ret, arguments[i]);
	    }
	    return ret;
	  },
	  viewportWidth: 0,
	  viewportHeight: 0
	};
	
	mix(utils, domUtils);

/***/ }
/******/ ]);
//# sourceMappingURL=common.js.map