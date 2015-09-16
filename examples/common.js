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
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(12);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(14)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/Users/noyobo/home/github/react-colors-picker/node_modules/rc-tools/node_modules/css-loader/index.js?sourceMap!/Users/noyobo/home/github/react-colors-picker/node_modules/rc-tools/node_modules/less-loader/index.js?sourceMap!/Users/noyobo/home/github/react-colors-picker/assets/index.less", function() {
			var newContent = require("!!/Users/noyobo/home/github/react-colors-picker/node_modules/rc-tools/node_modules/css-loader/index.js?sourceMap!/Users/noyobo/home/github/react-colors-picker/node_modules/rc-tools/node_modules/less-loader/index.js?sourceMap!/Users/noyobo/home/github/react-colors-picker/assets/index.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	exports.push([module.id, ".react-colorpicker-panel-inner {\n  position: relative;\n  border-radius: 4px;\n  box-shadow: 0 1px 5px #ccc;\n  border: 1px solid #ccc;\n  padding: 8px;\n}\n.react-colorpicker-panel-wrap {\n  margin: 5px 0 0;\n  height: 30px;\n  width: 100%;\n  position: relative;\n}\n.react-colorpicker-panel-wrap-preview {\n  position: absolute;\n  right: 0px;\n}\n.react-colorpicker-panel-wrap-ribbon {\n  position: absolute;\n  left: 0px;\n  top: 0;\n  right: 35px;\n  height: 12.5px;\n}\n.react-colorpicker-panel-wrap-alpha {\n  position: absolute;\n  left: 0px;\n  right: 35px;\n  bottom: 0;\n  height: 12.5px;\n}\n.react-colorpicker-trigger {\n  border: 1px solid #999;\n  display: inline-block;\n  padding: 2px;\n  border-radius: 2px;\n  user-select: none;\n  width: 20px;\n  height: 20px;\n  cursor: pointer;\n  box-shadow: 0 0 0 2px #fff inset;\n}\n.react-colorpicker-trigger-open {\n  box-shadow: 0px 0px 3px #999;\n}\n.react-colorpicker-panel {\n  width: 218px;\n  background-color: #fff;\n  box-sizing: border-box;\n  outline: none;\n  z-index: 9;\n}\n.react-colorpicker-panel * {\n  box-sizing: border-box;\n}\n.react-colorpicker-panel-open {\n  display: block;\n}\n.react-colorpicker-panel-close {\n  display: none;\n}\n.react-colorpicker-panel-preview {\n  height: 30px;\n  width: 30px;\n  overflow: hidden;\n  border-radius: 2px;\n  box-shadow: 0 0 2px #808080 inset;\n  background-image: url('data:image/png;base64,R0lGODdhCgAKAPAAAOXl5f///ywAAAAACgAKAEACEIQdqXt9GxyETrI279OIgwIAOw==');\n}\n.react-colorpicker-panel-preview span,\n.react-colorpicker-panel-preview input[type=color] {\n  position: absolute;\n  display: block;\n  height: 100%;\n  width: 30px;\n  border-radius: 2px;\n}\n.react-colorpicker-panel-preview input[type=color] {\n  opacity: 0;\n}\n.react-colorpicker-panel-board {\n  position: relative;\n  font-size: 0;\n  user-select: none;\n}\n.react-colorpicker-panel-board span {\n  position: absolute;\n  border-radius: 10px;\n  border: 1px solid #fff;\n  width: 9px;\n  height: 9px;\n  left: -999px;\n  top: -999px;\n  box-shadow: 0 0 1px rgba(120, 120, 120, 0.7);\n  z-index: 2;\n}\n.react-colorpicker-panel-board-hsv {\n  width: 200px;\n  height: 150px;\n  position: relative;\n  z-index: 1;\n  border-radius: 2px;\n}\n.react-colorpicker-panel-board-value {\n  border-radius: 2px;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  z-index: 2;\n  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMSAxIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48bGluZWFyR3JhZGllbnQgaWQ9Imxlc3NoYXQtZ2VuZXJhdGVkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9InJnYigwLDAsMCkiIHN0b3Atb3BhY2l0eT0iMCIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzAwMDAwMCIgc3RvcC1vcGFjaXR5PSIxIi8+PC9saW5lYXJHcmFkaWVudD48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSJ1cmwoI2xlc3NoYXQtZ2VuZXJhdGVkKSIgLz48L3N2Zz4=);\n  background-image: -webkit-linear-gradient(top, transparent 0%, #000000 100%);\n  background-image: -moz-linear-gradient(top, transparent 0%, #000000 100%);\n  background-image: -o-linear-gradient(top, transparent 0%, #000000 100%);\n  background-image: linear-gradient(to bottom, transparent 0%, #000000 100%);\n}\n.react-colorpicker-panel-board-saturation {\n  border-radius: 2px;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  z-index: 1;\n  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMSAxIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48bGluZWFyR3JhZGllbnQgaWQ9Imxlc3NoYXQtZ2VuZXJhdGVkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNmZmZmZmYiIHN0b3Atb3BhY2l0eT0iMSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0icmdiKDAsMCwwKSIgc3RvcC1vcGFjaXR5PSIwIi8+PC9saW5lYXJHcmFkaWVudD48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSJ1cmwoI2xlc3NoYXQtZ2VuZXJhdGVkKSIgLz48L3N2Zz4=);\n  background-image: -webkit-linear-gradient(left, #ffffff 0%, transparent 100%);\n  background-image: -moz-linear-gradient(left, #ffffff 0%, transparent 100%);\n  background-image: -o-linear-gradient(left, #ffffff 0%, transparent 100%);\n  background-image: linear-gradient(to right, #ffffff 0%, transparent 100%);\n}\n.react-colorpicker-panel-board-handler {\n  box-shadow: 0 0 2px #808080 inset;\n  border-radius: 2px;\n  cursor: crosshair;\n  user-select: none;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 3;\n}\n.react-colorpicker-panel-ribbon {\n  position: relative;\n  height: 100%;\n  border-radius: 2px;\n  box-shadow: 0 0 2px #808080 inset;\n  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMSAxIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48bGluZWFyR3JhZGllbnQgaWQ9Imxlc3NoYXQtZ2VuZXJhdGVkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNmZjAwMDAiIHN0b3Atb3BhY2l0eT0iMSIvPjxzdG9wIG9mZnNldD0iMTAlIiBzdG9wLWNvbG9yPSIjZmY5OTAwIiBzdG9wLW9wYWNpdHk9IjEiLz48c3RvcCBvZmZzZXQ9IjIwJSIgc3RvcC1jb2xvcj0iI2NkZmYwMCIgc3RvcC1vcGFjaXR5PSIxIi8+PHN0b3Agb2Zmc2V0PSIzMCUiIHN0b3AtY29sb3I9IiMzNWZmMDAiIHN0b3Atb3BhY2l0eT0iMSIvPjxzdG9wIG9mZnNldD0iNDAlIiBzdG9wLWNvbG9yPSIjMDBmZjY2IiBzdG9wLW9wYWNpdHk9IjEiLz48c3RvcCBvZmZzZXQ9IjUwJSIgc3RvcC1jb2xvcj0iIzAwZmZmZCIgc3RvcC1vcGFjaXR5PSIxIi8+PHN0b3Agb2Zmc2V0PSI2MCUiIHN0b3AtY29sb3I9IiMwMDY2ZmYiIHN0b3Atb3BhY2l0eT0iMSIvPjxzdG9wIG9mZnNldD0iNzAlIiBzdG9wLWNvbG9yPSIjMzIwMGZmIiBzdG9wLW9wYWNpdHk9IjEiLz48c3RvcCBvZmZzZXQ9IjgwJSIgc3RvcC1jb2xvcj0iI2NkMDBmZiIgc3RvcC1vcGFjaXR5PSIxIi8+PHN0b3Agb2Zmc2V0PSI5MCUiIHN0b3AtY29sb3I9IiNmZjAwOTkiIHN0b3Atb3BhY2l0eT0iMSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iI2ZmMDAwMCIgc3RvcC1vcGFjaXR5PSIxIi8+PC9saW5lYXJHcmFkaWVudD48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSJ1cmwoI2xlc3NoYXQtZ2VuZXJhdGVkKSIgLz48L3N2Zz4=);\n  background-image: -webkit-linear-gradient(left, #ff0000 0%, #ff9900 10%, #cdff00 20%, #35ff00 30%, #00ff66 40%, #00fffd 50%, #0066ff 60%, #3200ff 70%, #cd00ff 80%, #ff0099 90%, #ff0000 100%);\n  background-image: -moz-linear-gradient(left, #ff0000 0%, #ff9900 10%, #cdff00 20%, #35ff00 30%, #00ff66 40%, #00fffd 50%, #0066ff 60%, #3200ff 70%, #cd00ff 80%, #ff0099 90%, #ff0000 100%);\n  background-image: -o-linear-gradient(left, #ff0000 0%, #ff9900 10%, #cdff00 20%, #35ff00 30%, #00ff66 40%, #00fffd 50%, #0066ff 60%, #3200ff 70%, #cd00ff 80%, #ff0099 90%, #ff0000 100%);\n  background-image: linear-gradient(to right, #ff0000 0%, #ff9900 10%, #cdff00 20%, #35ff00 30%, #00ff66 40%, #00fffd 50%, #0066ff 60%, #3200ff 70%, #cd00ff 80%, #ff0099 90%, #ff0000 100%);\n}\n.react-colorpicker-panel-ribbon span {\n  position: absolute;\n  top: 0;\n  height: 100%;\n  width: 4px;\n  border: 1px solid #000000;\n  padding: 1px 0;\n  margin-left: -2px;\n  background-color: #fff;\n  border-radius: 3px;\n}\n.react-colorpicker-panel-ribbon-handler {\n  position: absolute;\n  width: 104%;\n  height: 100%;\n  left: -2%;\n  cursor: pointer;\n}\n.react-colorpicker-panel-alpha {\n  position: relative;\n  height: 100%;\n  width: 100%;\n  border-radius: 2px;\n  background-image: url('data:image/png;base64,R0lGODdhCgAKAPAAAOXl5f///ywAAAAACgAKAEACEIQdqXt9GxyETrI279OIgwIAOw==');\n  background-repeat: repeat;\n  user-select: none;\n}\n.react-colorpicker-panel-alpha-bg {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  border-radius: 2px;\n  box-shadow: 0 0 2px #808080 inset;\n}\n.react-colorpicker-panel-alpha span {\n  position: absolute;\n  top: 0;\n  height: 100%;\n  width: 4px;\n  border: 1px solid #000000;\n  padding: 1px 0;\n  margin-left: -2px;\n  background-color: #fff;\n  border-radius: 3px;\n}\n.react-colorpicker-panel-alpha-handler {\n  position: absolute;\n  width: 104%;\n  height: 100%;\n  left: -2%;\n  cursor: pointer;\n}\n.react-colorpicker-panel-params {\n  font-size: 12px;\n}\n.react-colorpicker-panel-params-input {\n  overflow: hidden;\n  padding: 2px 0;\n}\n.react-colorpicker-panel-params input {\n  user-select: text;\n  text-align: center;\n  padding: 1px;\n  margin: 0;\n  float: left;\n  border-radius: 2px;\n  border: 1px solid #CACACA;\n  font-family: 'Helvetica Neue', Helvetica, sans-serif;\n}\n.react-colorpicker-panel-params-hex {\n  width: 52px;\n}\n.react-colorpicker-panel-params input[type=number] {\n  margin-left: 5px;\n  width: 32px;\n}\n.react-colorpicker-panel-params input[type=number]::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n}\n.react-colorpicker-panel-params-lable {\n  padding: 2px 0;\n  height: 22px;\n  line-height: 18px;\n  user-select: none;\n}\n.react-colorpicker-panel-params-lable label {\n  float: left;\n  text-align: center;\n}\n.react-colorpicker-panel-params-lable-hex {\n  width: 52px;\n}\n.react-colorpicker-panel-params-lable-number,\n.react-colorpicker-panel-params-lable-alpha {\n  margin-left: 5px;\n  width: 32px;\n}\n.react-colorpicker-panel-params-lable-number:hover {\n  border-radius: 2px;\n  background-color: #eee;\n  box-shadow: 0 0 0 1px #ccc inset;\n  cursor: pointer;\n}\n.react-colorpicker {\n  font-family: Arial, \"Hiragino Sans GB\", \"Microsoft Yahei\", \"Microsoft Sans Serif\", \"WenQuanYi Micro Hei\", sans-serif;\n}\n.react-colorpicker .react-colorpicker-panel {\n  display: none;\n  position: absolute;\n  left: -999px;\n  top: -999px;\n}\n.react-colorpicker-open .react-colorpicker-panel {\n  display: block;\n}\n.react-colorpicker-slide-up-enter {\n  animation-duration: 0.3s;\n  animation-fill-mode: both;\n  transform-origin: 0 0;\n  display: block !important;\n  opacity: 0;\n  animation-timing-function: cubic-bezier(0.08, 0.82, 0.17, 1);\n  animation-play-state: paused;\n}\n.react-colorpicker-slide-up-leave {\n  animation-duration: 0.3s;\n  animation-fill-mode: both;\n  transform-origin: 0 0;\n  display: block !important;\n  opacity: 1;\n  animation-timing-function: cubic-bezier(0.6, 0.04, 0.98, 0.34);\n  animation-play-state: paused;\n}\n.react-colorpicker-slide-up-enter.react-colorpicker-slide-up-enter-active {\n  animation-name: rcDropdownSlideUpIn;\n  animation-play-state: running;\n}\n.react-colorpicker-slide-up-leave.react-colorpicker-slide-up-leave-active {\n  animation-name: rcDropdownSlideUpOut;\n  animation-play-state: running;\n}\n@keyframes rcDropdownSlideUpIn {\n  0% {\n    opacity: 0;\n    transform-origin: 0% 0%;\n    transform: scaleY(0);\n  }\n  100% {\n    opacity: 1;\n    transform-origin: 0% 0%;\n    transform: scaleY(1);\n  }\n}\n@keyframes rcDropdownSlideUpOut {\n  0% {\n    opacity: 1;\n    transform-origin: 0% 0%;\n    transform: scaleY(1);\n  }\n  100% {\n    opacity: 0;\n    transform-origin: 0% 0%;\n    transform: scaleY(0);\n  }\n}\n", "", {"version":3,"sources":["Layout.less","Trigger.less","Panel.less","Preview.less","Board.less","lesshat.less","Ribbon.less","Alpha.less","Params.less","index.less"],"names":[],"mappings":"AAEA,CAAC,uBAAkB;EACjB,kBAAA;EACA,kBAAA;EACA,0BAAA;EACA,sBAAA;EACA,YAAA;;AAIF,CAAC,uBAAkB;EACjB,eAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;;AACA,CALD,uBAAkB,KAKhB;EACC,kBAAA;EACA,UAAA;;AAEF,CATD,uBAAkB,KAShB;EACC,kBAAA;EACA,SAAA;EACA,MAAA;EACA,WAAA;EACA,cAAA;;AAEF,CAhBD,uBAAkB,KAgBhB;EACC,kBAAA;EACA,SAAA;EACA,WAAA;EACA,SAAA;EACA,cAAA;;AC/BJ,CAAC,iBAAc;EACb,sBAAA;EACA,qBAAA;EACA,YAAA;EACA,kBAAA;EACA,iBAAA;EACA,WAAA;EACA,YAAA;EACA,eAAA;EACA,gCAAA;;AACA,CAVD,iBAAc,QAUZ;EACC,4BAAA;;ACZJ,CAAC,iBAAc;EACb,YAAA;EACA,sBAAA;EACA,sBAAA;EACA,aAAA;EACA,UAAA;;AALF,CAAC,iBAAc,MAMb;EACE,sBAAA;;AAEF,CATD,iBAAc,MASZ;EACC,cAAA;;AAEF,CAZD,iBAAc,MAYZ;EACC,aAAA;;ACbJ,CAAC,iBAAc;EACb,YAAA;EACA,WAAA;EACA,gBAAA;EACA,kBAAA;EACA,iCAAA;EACA,sBAAsB,6FAAtB;;AANF,CAAC,iBAAc,cAQb;AARF,CAAC,iBAAc,cASb,MAAK;EACH,kBAAA;EACA,cAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;;AAdJ,CAAC,iBAAc,cAgBb,MAAK;EACH,UAAA;;ACfJ,CAAC,iBAAc;EACb,kBAAA;EACA,YAAA;EACA,iBAAA;;AAHF,CAAC,iBAAc,YAKb;EACE,kBAAA;EACA,mBAAA;EACA,sBAAA;EACA,UAAA;EACA,WAAA;EACA,YAAA;EACA,WAAA;EACA,4CAAA;EACA,UAAA;;AAEF,CAhBD,iBAAc,YAgBZ;EACC,YAAA;EACA,aAAA;EACA,kBAAA;EACA,UAAA;EACA,kBAAA;;AAEF,CAvBD,iBAAc,YAuBZ;EACC,kBAAA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;EACA,OAAA;EACA,MAAA;EACA,UAAA;ECoMF,6oBAAA;EACA,4EAAA;EACA,yEAAA;EACA,uEAAA;EACA,0EAAA;;ADrMA,CAjCD,iBAAc,YAiCZ;EACC,kBAAA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;EACA,OAAA;EACA,MAAA;EACA,UAAA;EC0LF,6oBAAA;EACA,6EAAA;EACA,0EAAA;EACA,wEAAA;EACA,yEAAA;;AD3LA,CA3CD,iBAAc,YA2CZ;EACG,iCAAA;EACF,kBAAA;EACA,iBAAA;EACA,iBAAA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;EACA,UAAA;;AErDJ,CAAC,iBAAc;EACb,kBAAA;EACA,YAAA;EACA,kBAAA;EACA,iCAAA;ED8NA,i0CAAA;EACA,8LAAA;EACA,2LAAA;EACA,yLAAA;EACA,0LAAA;;ACtOF,CAAC,iBAAc,aAMb;EACE,kBAAA;EACA,MAAA;EACA,YAAA;EACA,UAAA;EACA,yBAAA;EACA,cAAA;EACA,iBAAA;EACA,sBAAA;EACA,kBAAA;;AAEF,CAjBD,iBAAc,aAiBZ;EACC,kBAAA;EACA,WAAA;EACA,YAAA;EACA,SAAA;EACA,eAAA;;ACxBJ,CAAC,iBAAc;EACb,kBAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,sBAAsB,6FAAtB;EACA,yBAAA;EACA,iBAAA;;AACA,CARD,iBAAc,YAQZ;EACC,kBAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,iCAAA;;AAbJ,CAAC,iBAAc,YAeb;EACE,kBAAA;EACA,MAAA;EACA,YAAA;EACA,UAAA;EACA,yBAAA;EACA,cAAA;EACA,iBAAA;EACA,sBAAA;EACA,kBAAA;;AAEF,CA1BD,iBAAc,YA0BZ;EACC,kBAAA;EACA,WAAA;EACA,YAAA;EACA,SAAA;EACA,eAAA;;AC/BJ,CAAC,iBAAc;EACb,eAAA;;AACA,CAFD,iBAAc,aAEZ;EACC,gBAAA;EACA,cAAA;;AAJJ,CAAC,iBAAc,aAMb;EACE,iBAAA;EACA,kBAAA;EACA,YAAA;EACA,SAAA;EACA,WAAA;EACA,kBAAA;EACA,yBAAA;EACA,aAAa,uCAAb;;AAEF,CAhBD,iBAAc,aAgBZ;EACC,WAAA;;AAjBJ,CAAC,iBAAc,aAmBb,MAAK;EACH,gBAAA;EACA,WAAA;;AACA,CAtBH,iBAAc,aAmBb,MAAK,aAGF;EACG,wBAAA;;AAIN,CA3BD,iBAAc,aA2BZ;EACC,cAAA;EACA,YAAA;EACA,iBAAA;EACA,iBAAA;;AAJF,CA3BD,iBAAc,aA2BZ,MAKC;EAAM,WAAA;EAAY,kBAAA;;AAClB,CAjCH,iBAAc,aA2BZ,MAME;EACC,WAAA;;AAEF,CApCH,iBAAc,aA2BZ,MASE;AAAS,CApCb,iBAAc,aA2BZ,MASY;EACT,gBAAA;EACA,WAAA;;AAEF,CAxCH,iBAAc,aA2BZ,MAaE,OAAO;EACN,kBAAA;EACA,sBAAA;EACA,gCAAA;EACA,eAAA;;ACjCN,CAAC;EACC,oBAAoB,oBAAoB,mBAAmB,wBAAwB,iCAAnF;;AADF,CAAC,iBAEC,EAAC,iBAAc;EACb,aAAA;EACA,kBAAA;EACA,YAAA;EACA,WAAA;;AAEF,CARD,iBAQE,KACC,EAAC,iBAAc;EACb,cAAA;;AAWJ,CArBD,iBAqBE;EANC,wBAAA;EACA,yBAAA;EACA,qBAAA;EACA,yBAAA;EAKA,UAAA;EACA,2BAA2B,iCAA3B;EACA,4BAAA;;AAGF,CA5BD,iBA4BE;EAbC,wBAAA;EACA,yBAAA;EACA,qBAAA;EACA,yBAAA;EAYA,UAAA;EACA,2BAA2B,mCAA3B;EACA,4BAAA;;AAGF,CAnCD,iBAmCE,eAAe,CAnCjB,iBAmCkB;EACf,mCAAA;EACA,6BAAA;;AAGF,CAxCD,iBAwCE,eAAe,CAxCjB,iBAwCkB;EACf,oCAAA;EACA,6BAAA;;AAGF;EACE;IACE,UAAA;IACA,uBAAA;IACA,WAAW,SAAX;;EAEF;IACE,UAAA;IACA,uBAAA;IACA,WAAW,SAAX;;;AAGJ;EACE;IACE,UAAA;IACA,uBAAA;IACA,WAAW,SAAX;;EAEF;IACE,UAAA;IACA,uBAAA;IACA,WAAW,SAAX","sourcesContent":["@prefixClassName: ~'@{prefixClass}-panel' ;\n\n.@{prefixClassName}-inner {\n  position: relative;\n  border-radius: 4px;\n  box-shadow: 0 1px 5px #ccc;\n  border: 1px solid #ccc;\n  padding: 8px;\n}\n\n\n.@{prefixClassName}-wrap{\n  margin: 5px 0 0;\n  height: 30px;\n  width: 100%;\n  position: relative;\n  &-preview{\n    position: absolute;\n    right: 0px;\n  }\n  &-ribbon{\n    position: absolute;\n    left: 0px;\n    top: 0;\n    right: 35px;\n    height: (30px - 5px) / 2;\n  }\n  &-alpha{\n    position: absolute;\n    left: 0px;\n    right: 35px;\n    bottom: 0;\n    height: (30px - 5px) / 2;\n  }\n}\n\n","\n.@{prefixClass}-trigger {\n  border: 1px solid #999;\n  display: inline-block;\n  padding: 2px;\n  border-radius: 2px;\n  user-select: none;\n  width: 20px;\n  height: 20px;\n  cursor: pointer;\n  box-shadow: 0 0 0 2px #fff inset;\n  &-open{\n    box-shadow: 0px 0px 3px #999;\n  }\n}\n",".@{prefixClass}-panel {\n  width: 200px + 18px;\n  background-color: #fff;\n  box-sizing: border-box;\n  outline: none;\n  z-index: 9;\n  * {\n    box-sizing: border-box;\n  }\n  &-open{\n    display: block;\n  }\n  &-close{\n    display: none;\n  }\n}\n",".@{prefixClass}-panel-preview {\n  height: 30px;\n  width: 30px;\n  overflow: hidden;\n  border-radius: 2px;\n  box-shadow: 0 0 2px #808080 inset;\n  background-image: url('data:image/png;base64,R0lGODdhCgAKAPAAAOXl5f///ywAAAAACgAKAEACEIQdqXt9GxyETrI279OIgwIAOw==');\n\n  span,\n  input[type=color] {\n    position: absolute;\n    display: block;\n    height: 100%;\n    width: 30px;\n    border-radius: 2px;\n  }\n  input[type=color] {\n    opacity: 0;\n  }\n}\n","@import '../../node_modules/lesshat/build/lesshat.less';\n\n.@{prefixClass}-panel-board {\n  position: relative;\n  font-size: 0;\n  user-select: none;\n\n  span {\n    position: absolute;\n    border-radius: 10px;\n    border: 1px solid #fff;\n    width: 9px;\n    height: 9px;\n    left: -999px;\n    top: -999px;\n    box-shadow: 0 0 1px rgba(120,120,120,.7);\n    z-index: 2;\n  }\n  &-hsv{\n    width: 200px;\n    height: 150px;\n    position: relative;\n    z-index: 1;\n    border-radius: 2px;\n  }\n  &-value{\n    border-radius: 2px;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    left: 0;\n    top: 0;\n    z-index: 2;\n    .background-image(linear-gradient(to bottom, transparent 0%, #000000 100%));\n  }\n  &-saturation{\n    border-radius: 2px;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    left: 0;\n    top: 0;\n    z-index: 1;\n    .background-image(linear-gradient(to right, #ffffff 0%, transparent 100%));\n  }\n  &-handler {\n      box-shadow: 0 0 2px #808080 inset;\n    border-radius: 2px;\n    cursor: crosshair;\n    user-select: none;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 3\n  }\n}\n","//  * =========================================================== *\n//  <                            LESSHat                          >\n//  * =========================================================== *\n//\n// Made with Energy drinks in Prague, Czech Republic.\n// Handcrafted by Petr Brzek, lesshat.com\n// Works great with CSS Hat csshat.com\n\n// version: v3.0.2 (2014-06-17)\n\n// TABLE OF MIXINS:\n\t// align-content\n\t// align-items\n\t// align-self\n\t// animation\n\t// animation-delay\n\t// animation-direction\n\t// animation-duration\n\t// animation-fill-mode\n\t// animation-iteration-count\n\t// animation-name\n\t// animation-play-state\n\t// animation-timing-function\n\t// appearance\n\t// backface-visibility\n\t// background-clip\n\t// background-image\n\t// background-origin\n\t// background-size\n\t// blur\n\t// border-bottom-left-radius\n\t// border-bottom-right-radius\n\t// border-image\n\t// border-radius\n\t// border-top-left-radius\n\t// border-top-right-radius\n\t// box-shadow\n\t// box-sizing\n\t// brightness\n\t// calc\n\t// column-count\n\t// column-gap\n\t// column-rule\n\t// column-width\n\t// columns\n\t// contrast\n\t// display\n\t// drop-shadow\n\t// filter\n\t// flex\n\t// flex-basis\n\t// flex-direction\n\t// flex-grow\n\t// flex-shrink\n\t// flex-wrap\n\t// font-face\n\t// grayscale\n\t// hue-rotate\n\t// hyphens\n\t// invert\n\t// justify-content\n\t// keyframes\n\t// opacity\n\t// order\n\t// perspective\n\t// perspective-origin\n\t// placeholder\n\t// rotate\n\t// rotate3d\n\t// rotateX\n\t// rotateY\n\t// rotateZ\n\t// saturate\n\t// scale\n\t// scale3d\n\t// scaleX\n\t// scaleY\n\t// scaleZ\n\t// selection\n\t// sepia\n\t// size\n\t// skew\n\t// skewX\n\t// skewY\n\t// transform\n\t// transform-origin\n\t// transform-style\n\t// transition\n\t// transition-delay\n\t// transition-duration\n\t// transition-property\n\t// transition-timing-function\n\t// translate\n\t// translate3d\n\t// translateX\n\t// translateY\n\t// translateZ\n\t// user-select\n\n.align-content(...) {\n  @process: ~`(function(r){return r=r||\"stretch\"})((function(){var r=\"@{arguments}\";return r=r.replace(/^\\[|\\]$/g,\"\")})())`;\n  @process_ms: ~`(function(t){return t=t||\"stretch\",\"flex-start\"==t?t=\"start\":\"flex-end\"==t?t=\"end\":\"space-between\"==t?t=\"justify\":\"space-around\"==t&&(t=\"distribute\"),t})((function(){var r=\"@{arguments}\";return r=r.replace(/^\\[|\\]$/g,\"\")})())`;\n  -webkit-align-content: @process;\n  -ms-flex-line-pack: @process_ms;\n  align-content: @process;\n}\n\n.align-items(...) {\n  @process_olderwebkit: ~`(function(t){return t=t||\"stretch\",\"flex-start\"==t?t=\"start\":\"flex-end\"==t&&(t=\"end\"),t})((function(){var e=\"@{arguments}\";return e=e.replace(/^\\[|\\]$/g,\"\")})())`;\n  @process_moz: ~`(function(t){return t=t||\"stretch\",\"flex-start\"==t?t=\"start\":\"flex-end\"==t&&(t=\"end\"),t})((function(){var t=\"@{arguments}\";return t=t.replace(/^\\[|\\]$/g,\"\")})())`;\n  @process: ~`(function(t){return t=t||\"stretch\"})((function(){var t=\"@{arguments}\";return t=t.replace(/^\\[|\\]$/g,\"\")})())`;\n  @process_ms: ~`(function(t){return t=t||\"stretch\",\"flex-start\"==t?t=\"start\":\"flex-end\"==t&&(t=\"end\"),t})((function(){var t=\"@{arguments}\";return t=t.replace(/^\\[|\\]$/g,\"\")})())`;\n  -webkit-box-align: @process_olderwebkit;\n  -moz-box-align: @process_moz;\n  -webkit-align-items: @process;\n  -ms-flex-align: @process_ms;\n  align-items: @process;\n}\n\n.align-self(...) {\n  @process: ~`(function(t){return t=t||\"auto\"})((function(){var t=\"@{arguments}\";return t=t.replace(/^\\[|\\]$/g,\"\")})())`;\n  @process_ms: ~`(function(t){return t=t||\"auto\",\"flex-start\"==t?t=\"start\":\"flex-end\"==t&&(t=\"end\"),t})((function(){var t=\"@{arguments}\";return t=t.replace(/^\\[|\\]$/g,\"\")})())`;\n  -webkit-align-self: @process;\n  -ms-flex-item-align: @process_ms;\n  align-self: @process;\n}\n\n.animation(...) {\n  @process: ~`(function(t){return t=t||\"none\",/^[^, ]*,/.test(t)&&(t=t.replace(/(?:,)(?![^(]*\\))/g,\"\")),t})((function(){var t=\"@{arguments}\";return t=t.replace(/^\\[|\\]$/g,\"\")})())`;\n  -webkit-animation: @process;\n  -moz-animation: @process;\n  -o-animation: @process;\n  animation: @process;\n}\n\n.animation-delay(...) {\n  @process: ~`(function(t){t=t||\"0\";var r=/(?:\\d)(?:ms|s)/gi,e=/(?:\\s|^)(\\.?\\d+\\.?\\d*)(?![^(]*\\)|\\w|%|\\.)/gi;return r.test(t)||\"0\"===t||(t=t.replace(e,function(t){return t+=parseFloat(t,10)>10?\"ms\":\"s\"})),t})((function(){var t=\"@{arguments}\";return t=t.replace(/^\\[|\\]$/g,\"\")})())`;\n  -webkit-animation-delay: @process;\n  -moz-animation-delay: @process;\n  -o-animation-delay: @process;\n  animation-delay: @process;\n}\n\n.animation-direction(...) {\n  @process: ~`(function(r){return r||\"normal\"})((function(){var r=\"@{arguments}\";return r=r.replace(/^\\[|\\]$/g,\"\")})())`;\n  -webkit-animation-direction: @process;\n  -moz-animation-direction: @process;\n  -o-animation-direction: @process;\n  animation-direction: @process;\n}\n\n.animation-duration(...) {\n  @process: ~`(function(r){r=r||\"0\";var t=/ms|s/gi,e=/(?:\\s|^)(\\.?\\d+\\.?\\d*)(?![^(]*\\)|\\w|%|\\.)/gi;return t.test(r)||\"0\"===r||(r=r.replace(e,function(r){return r+=parseFloat(r,10)>10?\"ms\":\"s\"})),r})((function(){var r=\"@{arguments}\";return r=r.replace(/^\\[|\\]$/g,\"\")})())`;\n  -webkit-animation-duration: @process;\n  -moz-animation-duration: @process;\n  -o-animation-duration: @process;\n  animation-duration: @process;\n}\n\n.animation-fill-mode(...) {\n  @process: ~`(function(r){return r||\"none\"})((function(){var r=\"@{arguments}\";return r=r.replace(/^\\[|\\]$/g,\"\")})())`;\n  -webkit-animation-fill-mode: @process;\n  -moz-animation-fill-mode: @process;\n  -o-animation-fill-mode: @process;\n  animation-fill-mode: @process;\n}\n\n.animation-iteration-count(...) {\n  @process: ~`(function(r){return r||\"0\"})((function(){var r=\"@{arguments}\";return r=r.replace(/^\\[|\\]$/g,\"\")})())`;\n  -webkit-animation-iteration-count: @process;\n  -moz-animation-iteration-count: @process;\n  -o-animation-iteration-count: @process;\n  animation-iteration-count: @process;\n}\n\n.animation-name(...) {\n  @process: ~`(function(r){return r||\"none\"})((function(){var r=\"@{arguments}\";return r=r.replace(/^\\[|\\]$/g,\"\")})())`;\n  -webkit-animation-name: @process;\n  -moz-animation-name: @process;\n  -o-animation-name: @process;\n  animation-name: @process;\n}\n\n.animation-play-state(...) {\n  @process: ~`(function(r){return r||\"running\"})((function(){var r=\"@{arguments}\";return r=r.replace(/^\\[|\\]$/g,\"\")})())`;\n  -webkit-animation-play-state: @process;\n  -moz-animation-play-state: @process;\n  -o-animation-play-state: @process;\n  animation-play-state: @process;\n}\n\n.animation-timing-function(...) {\n  @process: ~`(function(r){return r||\"ease\"})((function(){var r=\"@{arguments}\";return r=r.replace(/^\\[|\\]$/g,\"\")})())`;\n  -webkit-animation-timing-function: @process;\n  -moz-animation-timing-function: @process;\n  -o-animation-timing-function: @process;\n  animation-timing-function: @process;\n}\n\n.appearance(...) {\n  @process: ~`(function(r){return r||\"none\"})((function(){var r=\"@{arguments}\";return r=r.replace(/^\\[|\\]$/g,\"\")})())`;\n  -webkit-appearance: @process;\n  -moz-appearance: @process;\n  appearance: @process;\n}\n\n.backface-visibility(...) {\n  @process: ~`(function(r){return r||\"visible\"})((function(){var r=\"@{arguments}\";return r=r.replace(/^\\[|\\]$/g,\"\")})())`;\n  -webkit-backface-visibility: @process;\n  -moz-backface-visibility: @process;\n  -o-backface-visibility: @process;\n  -ms-backface-visibility: @process;\n  backface-visibility: @process;\n}\n\n.background-clip(...) {\n  @process: ~`(function(r){return r||\"border-box\"})((function(){var r=\"@{arguments}\";return r=r.replace(/^\\[|\\]$/g,\"\")})())`;\n  -webkit-background-clip: @process;\n  -moz-background-clip: @process;\n  background-clip: @process;\n}\n\n.background-image(...) {\n  @process_ms: ~`(function(t){function e(t){var e,r,n,a,s,i,u,o,g=\"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\",c=0,l=0,f=\"\",d=[];if(!t)return t;do e=t.charCodeAt(c++),r=t.charCodeAt(c++),n=t.charCodeAt(c++),o=e<<16|r<<8|n,a=63&o>>18,s=63&o>>12,i=63&o>>6,u=63&o,d[l++]=g.charAt(a)+g.charAt(s)+g.charAt(i)+g.charAt(u);while(c<t.length);f=d.join(\"\");var p=t.length%3;return(p?f.slice(0,p-3):f)+\"===\".slice(p||3)}if(t=t||8121991,8121991==t)return t;var r=/linear|radial/g.test(t)&&t.split(/,(?=\\s*(?:linear|radial|url))/g),n=[],a={\"to bottom\":'x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"',\"to left\":'x1=\"100%\" y1=\"0%\" x2=\"0%\" y2=\"0%\"',\"to top\":'x1=\"0%\" y1=\"100%\" x2=\"0%\" y2=\"0%\"',\"to right\":'x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\"',get\"top\"(){return this[\"to bottom\"]},get\"180deg\"(){return this[\"to bottom\"]},get\"right\"(){return this[\"to left\"]},get\"270deg\"(){return this[\"to left\"]},get\"bottom\"(){return this[\"to top\"]},get\"90deg\"(){return this[\"to right\"]},get\"0deg\"(){return this[\"to top\"]},get\"left\"(){return this[\"to right\"]},\"-45deg\":'x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\"',\"45deg\":'x1=\"0%\" y1=\"100%\" x2=\"100%\" y2=\"0%\"',\"ellipse at center\":'cx=\"50%\" cy=\"50%\" r=\"75%\"',get\"135deg\"(){return this[\"-45deg\"]}},s={uri_data:\"url(data:image/svg+xml;base64,\",xml:'<?xml version=\"1.0\" ?>',svg_start:'<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 1 1\" preserveAspectRatio=\"none\">',linear_gradient_start:'<linearGradient id=\"lesshat-generated\" gradientUnits=\"userSpaceOnUse\"',radial_gradient_start:'<radialGradient id=\"lesshat-generated\" gradientUnits=\"userSpaceOnUse\"',linear_gradient_end:\"</linearGradient>\",radial_gradient_end:\"</radialGradient>\",rect_linear:'<rect x=\"0\" y=\"0\" width=\"1\" height=\"1\" fill=\"url(#lesshat-generated)\" />',rect_radial:'<rect x=\"-50\" y=\"-50\" width=\"101\" height=\"101\" fill=\"url(#lesshat-generated)\" />',svg_end:\"</svg>\"};if(r.length){r.forEach(function(t){var e={};if(Object.keys(a).some(function(r){return t.indexOf(r)>=0?(e.svg_direction=a[r],!0):(e.svg_direction=!1,void 0)}),/linear/.test(t))e.svg_type=\"linear\";else if(/radial/.test(t))e.svg_type=\"radial\";else if(!/linear/.test(t)&&!/radial/.test(t))return e.url=t.trim(),e.svg_type=\"url\",e.svg_direction=!0,n.push(e),!1;var r=t.match(/rgb|#[a-zA-Z0-9]|hsl/g).length;e.svg_stops=[],t=t.replace(/transparent/g,\"rgba(0,0,0,0)\"),t.match(/#[a-zA-Z0-9]/g)&&t.match(/(#[a-zA-Z0-9]+)\\s*(\\d+%)?/g).forEach(function(t){t=t.split(\" \"),e.svg_stops.push('<stop offset=\"'+(t[1]||!1)+'\" stop-color=\"'+t[0]+'\" stop-opacity=\"1\"/>')}),t.match(/rgba?\\(\\d+,\\s*\\d+,\\s*\\d+(?:,\\s*(0|1|\\.\\d+|0\\.\\d+))?\\)/g)&&t.replace(/rgba?\\((\\d+,\\s*\\d+,\\s*\\d+)(?:,\\s*(0|1|\\.\\d+|0\\.\\d+))?\\)\\s*(\\d+%)?/g,function(t,r,n,a){e.svg_stops.push('<stop offset=\"'+(a||!1)+'\" stop-color=\"rgb('+r+')\" stop-opacity=\"'+(n||1)+'\"/>')}),t.match(/hsla?\\((\\d+,\\s*\\d+%,\\s*\\d+%),\\s*(0|1|\\.\\d+|0\\.\\d+)\\)/g)&&t.replace(/hsla?\\((\\d+,\\s*\\d+%,\\s*\\d+%),\\s*(0|1|\\.\\d+|0\\.\\d+)\\)\\s*(\\d+%)?/g,function(t,r,n,a){e.svg_stops.push('<stop offset=\"'+(a||!1)+'\" stop-color=\"hsl('+r+')\" stop-opacity=\"'+(n||1)+'\"/>')});var s=Math.floor(100/(r-1));e.svg_stops.forEach(function(t,r){/offset=\"false\"/.test(t)&&(e.svg_stops[r]=t.replace(/offset=\"false\"/,'offset=\"'+s*r+'%\"'))}),e.svg_stops.sort(function(t,e){return t=t.match(/offset=\"(\\d+)%\"/),e=e.match(/offset=\"(\\d+)%\"/),2==t.length&&2==e.length?t[1]-e[1]:void 0}),n.push(e)});var i=[],u=n.every(function(t){for(var e in t)if(0==t[e]||0==t[e].length)return!1;return!0});if(!u)return 8121991;n.forEach(function(t,e){(\"linear\"==t.svg_type||\"radial\"==t.svg_type)&&(i[e]=s.xml+s.svg_start),\"linear\"==t.svg_type?(i[e]+=s.linear_gradient_start+\" \"+t.svg_direction+\">\",t.svg_stops.forEach(function(t){i[e]+=t}),i[e]+=s.linear_gradient_end,i[e]+=s.rect_linear,i[e]+=s.svg_end):\"radial\"==t.svg_type?(i[e]+=s.radial_gradient_start+\" \"+t.svg_direction+\">\",t.svg_stops.forEach(function(t){i[e]+=t}),i[e]+=s.radial_gradient_end,i[e]+=s.rect_radial,i[e]+=s.svg_end):\"url\"==t.svg_type&&(i[e]=t.url)}),i.forEach(function(t,r){/<\\?xml version=\"1.0\" \\?>/g.test(t)&&(i[r]=s.uri_data+e(t)+\")\")}),t=i.join(\",\")}return t})((function(){var r=\"@{arguments}\";return r=r.replace(/^\\[|\\]$/g,\"\")})())`;\n  @process_webkit: ~`(function(t){if(t=t||8121991,8121991==t)return t;var e={\"to bottom\":\"top\",\"to left\":\"right\",\"to top\":\"bottom\",\"to right\":\"left\",\"ellipse at center\":\"center, ellipse cover\",\"circle closest-side\":\"center center, circle contain\",\"circle farthest-corner\":\"center center, circle cover\",\"circle farthest-side\":\"center center, circle cover\",\"ellipse closest-side\":\"center center, ellipse contain\",\"ellipse farthest-corner\":\"center center, ellipse cover\",\"ellipse farthest-side\":\"center center, ellipse cover\"},r=/(radial-gradient\\()([a-z- ]+)at\\s+(\\w+%?)\\s*(\\w*%?)/g,n=Object.keys(e);return n.some(function(n){return t.indexOf(n)>=0?(t=t.replace(new RegExp(n+\"(?![ a-z0-9])\",\"g\"),e[n]),!0):(r.test(t)&&(t=t.replace(r,function(t,e,r,n,a){return e.trim()+n.trim()+\" \"+a.trim()+\",\"+r.replace(/closest-side/g,\"contain\").replace(/farthest-corner/g,\"cover\").trim()})),void 0)}),t=t.replace(/(\\d+)\\s*deg/g,function(t,e){return 90-e+\"deg\"}).replace(/(linear|radial)-gradient/g,\"-webkit-$1-gradient\")})((function(){var t=\"@{arguments}\";return t=t.replace(/^\\[|\\]$/g,\"\")})())`;\n  @process_moz: ~`(function(e){if(e=e||8121991,8121991==e)return e;var t={\"to bottom\":\"top\",\"to left\":\"right\",\"to top\":\"bottom\",\"to right\":\"left\",\"ellipse at center\":\"center, ellipse cover\",\"circle closest-side\":\"center center, circle contain\",\"circle farthest-corner\":\"center center, circle cover\",\"circle farthest-side\":\"center center, circle cover\",\"ellipse closest-side\":\"center center, ellipse contain\",\"ellipse farthest-corner\":\"center center, ellipse cover\",\"ellipse farthest-side\":\"center center, ellipse cover\"},r=/(radial-gradient\\()([a-z- ]+)at\\s+(\\w+%?)\\s*(\\w*%?)/g,n=Object.keys(t);return n.some(function(n){return e.indexOf(n)>=0?(e=e.replace(new RegExp(n+\"(?![ a-z0-9])\",\"g\"),t[n]),!0):(r.test(e)&&(e=e.replace(r,function(e,t,r,n,a){return t.trim()+n.trim()+\" \"+a.trim()+\",\"+r.replace(/closest-side/g,\"contain\").replace(/farthest-corner/g,\"cover\").trim()})),void 0)}),e=e.replace(/(\\d+)\\s*deg/g,function(e,t){return 90-t+\"deg\"}).replace(/(linear|radial)-gradient/g,\"-moz-$1-gradient\")})((function(){var t=\"@{arguments}\";return t=t.replace(/^\\[|\\]$/g,\"\")})())`;\n  @process_opera: ~`(function(e){if(e=e||8121991,8121991==e)return e;var t={\"to bottom\":\"top\",\"to left\":\"right\",\"to top\":\"bottom\",\"to right\":\"left\",\"ellipse at center\":\"center, ellipse cover\",\"circle closest-side\":\"center center, circle contain\",\"circle farthest-corner\":\"center center, circle cover\",\"circle farthest-side\":\"center center, circle cover\",\"ellipse closest-side\":\"center center, ellipse contain\",\"ellipse farthest-corner\":\"center center, ellipse cover\",\"ellipse farthest-side\":\"center center, ellipse cover\"},r=/(radial-gradient\\()([a-z- ]+)at\\s+(\\w+%?)\\s*(\\w*%?)/g,n=Object.keys(t);return n.some(function(n){return e.indexOf(n)>=0?(e=e.replace(new RegExp(n+\"(?![ a-z0-9])\",\"g\"),t[n]),!0):(r.test(e)&&(e=e.replace(r,function(e,t,r,n,a){return t.trim()+n.trim()+\" \"+a.trim()+\",\"+r.replace(/closest-side/g,\"contain\").replace(/farthest-corner/g,\"cover\").trim()})),void 0)}),e=e.replace(/(\\d+)\\s*deg/g,function(e,t){return 90-t+\"deg\"}).replace(/(linear|radial)-gradient/g,\"-o-$1-gradient\")})((function(){var e=\"@{arguments}\";return e=e.replace(/^\\[|\\]$/g,\"\")})())`;\n  @process: ~`(function(e){if(e=e||8121991,8121991==e)return e;var t={top:\"to bottom\",right:\"to left\",bottom:\"to top\",left:\"to right\"},r=Object.keys(t);return r.some(function(r){return e.indexOf(r)>=0&&!new RegExp(\"to\\\\s+\"+r+\"|at\\\\s+\"+r,\"g\").test(e)?(e=e.replace(new RegExp(r),t[r]),!0):void 0}),e})((function(){var e=\"@{arguments}\";return e=e.replace(/^\\[|\\]$/g,\"\")})())`;\n  background-image: @process_ms;\n  background-image: @process_webkit;\n  background-image: @process_moz;\n  background-image: @process_opera;\n  background-image: @process;\n}\n\n.background-origin(...) {\n  @process: ~`(function(e){return e||\"padding-box\"})((function(){var e=\"@{arguments}\";return e=e.replace(/^\\[|\\]$/g,\"\")})())`;\n  -webkit-background-origin: @process;\n  -moz-background-origin: @process;\n  background-origin: @process;\n}\n\n.background-size(...) {\n  @process: ~`(function(e){e=e||\"auto auto\";var t=/\\d/gi,r=/(?:\\s|^)(\\.?\\d+\\.?\\d*)(?![^(]*\\)|\\w|%|\\.)/gi;return/^[^, ]*,/.test(e)&&(e=e.replace(/(?:,)(?![^(]*\\))/g,\"\")),t.test(e)&&(e=e.replace(r,function(e){return 0==e&&e||e+\"px\"})),e})((function(){var e=\"@{arguments}\";return e=e.replace(/^\\[|\\]$/g,\"\")})())`;\n  -webkit-background-size: @process;\n  -moz-background-size: @process;\n  background-size: @process;\n}\n\n.blur(...) {\n  @process: ~`(function(e){e=e||\"0\";var t=/\\d/gi,r=/(?:\\s|^)(\\.?\\d+\\.?\\d*)(?![^(]*\\)|\\w|%|\\.)/gi;return t.test(e)&&(e=e.replace(r,function(e){return 0==e&&e||e+\"px\"})),e})((function(){var e=\"@{arguments}\";return e=e.replace(/^\\[|\\]$/g,\"\")})())`;\n  -webkit-filter: blur(@process);\n  -moz-filter: blur(@process);\n  -ms-filter: blur(@process);\n  filter: blur(@process);\n}\n\n.border-bottom-left-radius(...) {\n  @process: ~`(function(e){e=e||\"0\";var t=/\\d/gi,r=/(?:\\s|^)(\\.?\\d+\\.?\\d*)(?![^(]*\\)|\\w|%|\\.)/gi;return/^[^, ]*,/.test(e)&&(e=e.replace(/(?:,)(?![^(]*\\))/g,\"\")),t.test(e)&&(e=e.replace(r,function(e){return 0==e&&e||e+\"px\"})),e})((function(){var e=\"@{arguments}\";return e=e.replace(/^\\[|\\]$/g,\"\")})())`;\n  -webkit-border-bottom-left-radius: @process; -webkit-background-clip: padding-box; \n  -moz-border-radius-bottomleft: @process; -moz-background-clip: padding; \n  border-bottom-left-radius: @process; background-clip: padding-box; \n}\n\n.border-bottom-right-radius(...) {\n  @process: ~`(function(e){e=e||\"0\";var t=/\\d/gi,r=/(?:\\s|^)(\\.?\\d+\\.?\\d*)(?![^(]*\\)|\\w|%|\\.)/gi;return/^[^, ]*,/.test(e)&&(e=e.replace(/(?:,)(?![^(]*\\))/g,\"\")),t.test(e)&&(e=e.replace(r,function(e){return 0==e&&e||e+\"px\"})),e})((function(){var e=\"@{arguments}\";return e=e.replace(/^\\[|\\]$/g,\"\")})())`;\n  -webkit-border-bottom-right-radius: @process; -webkit-background-clip: padding-box; \n  -moz-border-radius-bottomright: @process; -moz-background-clip: padding; \n  border-bottom-right-radius: @process; background-clip: padding-box; \n}\n\n.border-image(...) {\n  @process: ~`(function(e){return e=e||8121991,/^[^, ]*,/.test(e)&&(e=e.replace(/(?:,)(?![^(]*\\))/g,\"\")),e})((function(){var e=\"@{arguments}\";return e=e.replace(/^\\[|\\]$/g,\"\")})())`;\n  -webkit-border-image: @process;\n  -moz-border-image: @process;\n  -o-border-image: @process;\n  border-image: @process;\n}\n\n.border-radius(...) {\n  @process: ~`(function(e){e=e||\"0\";var t=/\\d/gi,r=/(?:\\s|^)(\\.?\\d+\\.?\\d*)(?![^(]*\\)|\\w|%|\\.)/gi;return/^[^, ]*,/.test(e)&&(e=e.replace(/(?:,)(?![^(]*\\))/g,\"\")),t.test(e)&&(e=e.replace(r,function(e){return 0==e&&e||e+\"px\"})),e})((function(){var e=\"@{arguments}\";return e=e.replace(/^\\[|\\]$/g,\"\")})())`;\n  -webkit-border-radius: @process; -webkit-background-clip: padding-box; \n  -moz-border-radius: @process; -moz-background-clip: padding; \n  border-radius: @process; background-clip: padding-box; \n}\n\n.border-top-left-radius(...) {\n  @process: ~`(function(e){e=e||\"0\";var t=/\\d/gi,r=/(?:\\s|^)(\\.?\\d+\\.?\\d*)(?![^(]*\\)|\\w|%|\\.)/gi;return/^[^, ]*,/.test(e)&&(e=e.replace(/(?:,)(?![^(]*\\))/g,\"\")),t.test(e)&&(e=e.replace(r,function(e){return 0==e&&e||e+\"px\"})),e})((function(){var e=\"@{arguments}\";return e=e.replace(/^\\[|\\]$/g,\"\")})())`;\n  -webkit-border-top-left-radius: @process; -webkit-background-clip: padding-box; \n  -moz-border-radius-topleft: @process; -moz-background-clip: padding; \n  border-top-left-radius: @process; background-clip: padding-box; \n}\n\n.border-top-right-radius(...) {\n  @process: ~`(function(e){e=e||\"0\";var t=/\\d/gi,r=/(?:\\s|^)(\\.?\\d+\\.?\\d*)(?![^(]*\\)|\\w|%|\\.)/gi;return/^[^, ]*,/.test(e)&&(e=e.replace(/(?:,)(?![^(]*\\))/g,\"\")),t.test(e)&&(e=e.replace(r,function(e){return 0==e&&e||e+\"px\"})),e})((function(){var e=\"@{arguments}\";return e=e.replace(/^\\[|\\]$/g,\"\")})())`;\n  -webkit-border-top-right-radius: @process; -webkit-background-clip: padding-box; \n  -moz-border-radius-topright: @process; -moz-background-clip: padding; \n  border-top-right-radius: @process; background-clip: padding-box; \n}\n\n.box-shadow(...) {\n  @process: ~`(function(e){e=e||\"0\";var t=/\\d/gi,r=/(?:\\s|^)(\\.?\\d+\\.?\\d*)(?![^(]*\\)|\\w|%|\\.)/gi;return/^[^, ]*,/.test(e)&&(e=e.replace(/(?:,)(?![^(]*\\))/g,\"\")),t.test(e)&&(e=e.replace(r,function(e){return 0==e&&e||e+\"px\"})),e})((function(){var e=\"@{arguments}\";return e=e.replace(/^\\[|\\]$/g,\"\")})())`;\n  -webkit-box-shadow: @process;\n  -moz-box-shadow: @process;\n  box-shadow: @process;\n}\n\n.box-sizing(...) {\n  @process: ~`(function(e){return e=e||\"content-box\"})((function(){var e=\"@{arguments}\";return e=e.replace(/^\\[|\\]$/g,\"\")})())`;\n  -webkit-box-sizing: @process;\n  -moz-box-sizing: @process;\n  box-sizing: @process;\n}\n\n.brightness(...) {\n  @process: ~`(function(e){return e=e||\"1\"})((function(){var e=\"@{arguments}\";return e=e.replace(/^\\[|\\]$/g,\"\")})())`;\n  -webkit-filter: brightness(@process);\n  -moz-filter: brightness(@process);\n  -ms-filter: brightness(@process);\n  filter: brightness(@process);\n}\n\n.calc(...) {\n  @process: ~`(function(e){function t(t,r){var a=\");\\n\",c=n.split(\",\"),i=c[0]+\":\"+t+\"(\"+(c[1].trim()||0)+a;\"start\"==r?e=\"0;\\n\"+i:e+=i}e=e||8121991;var r=\"@{state}\",n=e;if(8121991==e)return e;switch(r){case\"1\":t(\"-webkit-calc\",\"start\"),t(\"-moz-calc\"),t(\"calc\");break;case\"2\":t(\"-webkit-calc\",\"start\"),t(\"-moz-calc\");break;case\"3\":t(\"-webkit-calc\",\"start\"),t(\"calc\");break;case\"4\":t(\"-webkit-calc\",\"start\");break;case\"5\":t(\"-moz-calc\",\"start\"),t(\"calc\");break;case\"6\":t(\"-moz-calc\",\"start\");break;case\"7\":t(\"calc\",\"start\")}return e=e.replace(/;$/g,\"\")})((function(){var e=\"@{arguments}\";return e=e.replace(/^\\[|\\]$/g,\"\")})())`;\n  @state: 1; -lh-property: @process;\n\n}\n\n.column-count(...) {\n  @process: ~`(function(e){return e=e||\"auto\"})((function(){var e=\"@{arguments}\";return e=e.replace(/^\\[|\\]$/g,\"\")})())`;\n  -webkit-column-count: @process;\n  -moz-column-count: @process;\n  column-count: @process;\n}\n\n.column-gap(...) {\n  @process: ~`(function(e){e=e||\"normal\";var t=/\\d/gi,r=/(?:\\s|^)(\\.?\\d+\\.?\\d*)(?![^(]*\\)|\\w|%|\\.)/gi;return t.test(e)&&(e=e.replace(r,function(e){return 0==e&&e||e+\"px\"})),e})((function(){var e=\"@{arguments}\";return e=e.replace(/^\\[|\\]$/g,\"\")})())`;\n  -webkit-column-gap: @process;\n  -moz-column-gap: @process;\n  column-gap: @process;\n}\n\n.column-rule(...) {\n  @process: ~`(function(e){e=e||\"medium none black\";var t=/\\d/gi,r=/(?:\\s|^)(\\.?\\d+\\.?\\d*)(?![^(]*\\)|\\w|%|\\.)/gi;return/^[^, ]*,/.test(e)&&(e=e.replace(/(?:,)(?![^(]*\\))/g,\"\")),t.test(e)&&(e=e.replace(r,function(e){return 0==e&&e||e+\"px\"})),e})((function(){var e=\"@{arguments}\";return e=e.replace(/^\\[|\\]$/g,\"\")})())`;\n  -webkit-column-rule: @process;\n  -moz-column-rule: @process;\n  column-rule: @process;\n}\n\n.column-width(...) {\n  @process: ~`(function(e){e=e||\"auto\";var t=/\\d/gi,r=/(?:\\s|^)(\\.?\\d+\\.?\\d*)(?![^(]*\\)|\\w|%|\\.)/gi;return t.test(e)&&(e=e.replace(r,function(e){return 0==e&&e||e+\"px\"})),e})((function(){var e=\"@{arguments}\";return e=e.replace(/^\\[|\\]$/g,\"\")})())`;\n  -webkit-column-width: @process;\n  -moz-column-width: @process;\n  column-width: @process;\n}\n\n.columns(...) {\n  @process: ~`(function(e){e=e||\"auto auto\";var t=/^\\d+$/;return/^[^, ]*,/.test(e)&&(e=e.replace(/(?:,)(?![^(]*\\))/g,\"\"),e=e.split(\" \")),t.test(e[0])&&(e[0]=e[0]+\"px\"),e.join(\" \")})((function(){var e=\"@{arguments}\";return e=e.replace(/^\\[|\\]$/g,\"\")})())`;\n  -webkit-columns: @process;\n  -moz-columns: @process;\n  columns: @process;\n}\n\n.contrast(...) {\n  @process: ~`(function(e){e=e||\"100%\";var t=/\\d/gi,r=/(?:\\s|^)(\\.?\\d+\\.?\\d*)(?![^(]*\\)|\\w|%|\\.)/gi;return t.test(e)&&(e=e.replace(r,function(e){return 0==e&&e||e+\"%\"})),e})((function(){var e=\"@{arguments}\";return e=e.replace(/^\\[|\\]$/g,\"\")})())`;\n  -webkit-filter: ~\"contrast(@{process})\";\n  -moz-filter: ~\"contrast(@{process})\";\n  -ms-filter: ~\"contrast(@{process})\";\n  filter: ~\"contrast(@{process})\";\n}\n\n.display(...) {\n  @process_oldwebkit: ~`(function(e){return e=\"flex\"==e||\"inline-flex\"==e?\"-webkit-box\":8121991})((function(){var e=\"@{arguments}\";return e=e.replace(/^\\[|\\]$/g,\"\")})())`;\n  @process_moz: ~`(function(e){return e=\"flex\"==e||\"inline-flex\"==e?\"-moz-box\":8121991})((function(){var e=\"@{arguments}\";return e=e.replace(/^\\[|\\]$/g,\"\")})())`;\n  @process_webkit: ~`(function(e){return e=\"flex\"==e||\"inline-flex\"==e?\"-webkit-\"+e:8121991})((function(){var e=\"@{arguments}\";return e=e.replace(/^\\[|\\]$/g,\"\")})())`;\n  @process_ms: ~`(function(e){return e=\"flex\"==e?\"-ms-flexbox\":\"inline-flex\"==e?\"-ms-inline-flexbox\":8121991})((function(){var e=\"@{arguments}\";return e=e.replace(/^\\[|\\]$/g,\"\")})())`;\n  @process: ~`(function(e){return\"flex\"!=e&&\"inline-flex\"!=e&&(e=8121991),e})((function(){var e=\"@{arguments}\";return e=e.replace(/^\\[|\\]$/g,\"\")})())`;\n  display: @process_oldwebkit;\n  display: @process_moz;\n  display: @process_webkit;\n  display: @process_ms;\n  display: @process;\n}\n\n.drop-shadow(...) {\n  @process: ~`(function(e){if(e=e||8121991,8121991==e)return e;var t=/\\d/gi,r=/(?:\\s|^)(\\.?\\d+\\.?\\d*)(?![^(]*\\)|\\w|%|\\.)/gi;return/^[^, ]*,/.test(e)&&(e=e.replace(/(?:,)(?![^(]*\\))/g,\"\")),t.test(e)&&(e=e.replace(r,function(e){return 0==e&&e||e+\"px\"})),e})((function(){var e=\"@{arguments}\";return e=e.replace(/^\\[|\\]$/g,\"\")})())`;\n  -webkit-filter: drop-shadow(@process);\n  -moz-filter: drop-shadow(@process);\n  -ms-filter: drop-shadow(@process);\n  filter: drop-shadow(@process);\n}\n\n.filter(...) {\n  @process: ~`(function(e){return e=e||\"none\",/^[^, ]*,/.test(e)&&(e=e.replace(/(?:,)(?![^(]*\\))/g,\"\")),e})((function(){var e=\"@{arguments}\";return e=e.replace(/^\\[|\\]$/g,\"\")})())`;\n  -webkit-filter: @process;\n  -moz-filter: @process;\n  -ms-filter: @process;\n  filter: @process;\n}\n\n.flex(...) {\n  @process_olderwebkit: ~`(function(e){return/^\\d+/.test(e)?e=e.match(/^\\d+/)[0]:\"\"==e&&(e=\"0\"),e})((function(){var e=\"@{arguments}\";return e=e.replace(/^\\[|\\]$/g,\"\")})())`;\n  @process_moz: ~`(function(e){return/^\\d+/.test(e)?e=e.match(/^\\d+/)[0]:\"\"==e&&(e=\"0\"),e})((function(){var e=\"@{arguments}\";return e=e.replace(/^\\[|\\]$/g,\"\")})())`;\n  @process: ~`(function(e){return e=e||\"0 1 auto\",/^[^, ]*,/.test(e)&&(e=e.replace(/(?:,)(?![^(]*\\))/g,\"\")),e})((function(){var e=\"@{arguments}\";return e=e.replace(/^\\[|\\]$/g,\"\")})())`;\n  -webkit-box-flex: @process_olderwebkit;\n  -moz-box-flex: @process_moz;\n  -webkit-flex: @process;\n  -ms-flex: @process;\n  flex: @process;\n}\n\n.flex-basis(...) {\n  @process: ~`(function(e){e=e||\"auto\";var t=/\\d/gi,r=/(?:\\s|^)(\\.?\\d+\\.?\\d*)(?![^(]*\\)|\\w|%|\\.)/gi;return t.test(e)&&(e=e.replace(r,function(e){return 0==e&&e||e+\"px\"})),e})((function(){var e=\"@{arguments}\";return e=e.replace(/^\\[|\\]$/g,\"\")})())`;\n  -webkit-flex-basis: @process;\n  flex-basis: @process;\n}\n\n.flex-direction(...) {\n  @process_oldestwebkit: ~`(function(e){return e=\"row\"==e||\"column\"==e?\"normal\":\"row-reverse\"==e||\"column-reverse\"==e?\"reverse\":8121991})((function(){var e=\"@{arguments}\";return e=e.replace(/^\\[|\\]$/g,\"\")})())`;\n  @process_oldermoz: ~`(function(e){return e=\"row\"==e||\"column\"==e?\"normal\":\"row-reverse\"==e||\"column-reverse\"==e?\"reverse\":8121991})((function(){var e=\"@{arguments}\";return e=e.replace(/^\\[|\\]$/g,\"\")})())`;\n  @process_olderwebkit: ~`(function(e){return e=\"row\"==e||\"row-reverse\"==e?\"horizontal\":\"column\"==e||\"column-reverse\"==e?\"vertical\":8121991})((function(){var e=\"@{arguments}\";return e=e.replace(/^\\[|\\]$/g,\"\")})())`;\n  @process_moz: ~`(function(e){return e=\"row\"==e||\"row-reverse\"==e?\"horizontal\":\"column\"==e||\"column-reverse\"==e?\"vertical\":8121991})((function(){var e=\"@{arguments}\";return e=e.replace(/^\\[|\\]$/g,\"\")})())`;\n  @process: ~`(function(e){return e=e||\"row\"})((function(){var e=\"@{arguments}\";return e=e.replace(/^\\[|\\]$/g,\"\")})())`;\n  -webkit-box-direction: @process_oldestwebkit;\n  -moz-box-direction: @process_oldermoz;\n  -webkit-box-orient: @process_olderwebkit;\n  -moz-box-orient: @process_moz;\n  -webkit-flex-direction: @process;\n  -ms-flex-direction: @process;\n  flex-direction: @process;\n}\n\n.flex-grow(...) {\n  @process: ~`(function(e){return e=e||\"0\"})((function(){var e=\"@{arguments}\";return e=e.replace(/^\\[|\\]$/g,\"\")})())`;\n  -webkit-flex-grow: @process;\n  flex-grow: @process;\n}\n\n.flex-shrink(...) {\n  @process: ~`(function(e){return e=e||\"1\"})((function(){var e=\"@{arguments}\";return e=e.replace(/^\\[|\\]$/g,\"\")})())`;\n  -webkit-flex-shrink: @process;\n  flex-shrink: @process;\n}\n\n.flex-wrap(...) {\n  @process: ~`(function(e){return e=e||\"nowrap\"})((function(){var e=\"@{arguments}\";return e=e.replace(/^\\[|\\]$/g,\"\")})())`;\n  -webkit-flex-wrap: @process;\n  -ms-flex-wrap: @process;\n  flex-wrap: @process;\n}\n\n.font-face(@fontname, @fontfile, @fontweight:normal, @fontstyle:normal) {\n  font-family: \"@{fontname}\";\n  src: url(\"@{fontfile}.eot\");\n  src: url(\"@{fontfile}.eot?#iefix\") format(\"embedded-opentype\"),\n       url(\"@{fontfile}.woff\") format(\"woff\"),\n       url(\"@{fontfile}.ttf\") format(\"truetype\"),\n       url(\"@{fontfile}.svg#@{fontname}\") format(\"svg\");\n  font-weight: @fontweight;\n  font-style: @fontstyle;\n}\n\n.grayscale(...) {\n  @process: ~`(function(e){e=e||\"0\";var r=/\\d/gi,t=/(?:\\s|^)(\\.?\\d+\\.?\\d*)(?![^(]*\\)|\\w|%|\\.)/gi;return r.test(e)&&(e=e.replace(t,function(e){return 0==e&&e||e+\"%\"})),e})((function(){var e=\"@{arguments}\";return e=e.replace(/^\\[|\\]$/g,\"\")})())`;\n  -webkit-filter: grayscale(@process);\n  -moz-filter: grayscale(@process);\n  -ms-filter: grayscale(@process);\n  filter: grayscale(@process);\n}\n\n.hue-rotate(...) {\n  @process: ~`(function(e){e=e||\"0\";var r=/\\d/gi,t=/(?:\\s|^)(\\.?\\d+\\.?\\d*)(?![^(]*\\)|\\w|%|\\.)/gi;return r.test(e)&&(e=e.replace(t,function(e){return 0==e&&e||e+\"deg\"})),e})((function(){var e=\"@{arguments}\";return e=e.replace(/^\\[|\\]$/g,\"\")})())`;\n  -webkit-filter: hue-rotate(@process);\n  -moz-filter: hue-rotate(@process);\n  -ms-filter: hue-rotate(@process);\n  filter: hue-rotate(@process);\n}\n\n.hyphens(...) {\n  @process: ~`(function(e){return e=e||\"manual\"})((function(){var e=\"@{arguments}\";return e=e.replace(/^\\[|\\]$/g,\"\")})())`;\n  -webkit-hyphens: @process;\n  -moz-hyphens: @process;\n  -ms-hyphens: @process;\n  hyphens: @process;\n}\n\n.invert(...) {\n  @process: ~`(function(e){e=e||\"100%\";var r=/\\d/gi,t=/(?:\\s|^)(\\.?\\d+\\.?\\d*)(?![^(]*\\)|\\w|%|\\.)/gi;return r.test(e)&&(e=e.replace(t,function(e){return 0==e&&e||e+\"%\"})),e})((function(){var e=\"@{arguments}\";return e=e.replace(/^\\[|\\]$/g,\"\")})())`;\n  -webkit-filter: invert(@process);\n  -moz-filter: invert(@process);\n  -ms-filter: invert(@process);\n  filter: invert(@process);\n}\n\n.justify-content(...) {\n  @process_oldestWebkit: ~`(function(e){return e=e||\"start\",\"flex-start\"==e?e=\"start\":\"flex-end\"==e?e=\"end\":(\"space-between\"==e||\"space-around\"==e)&&(e=\"justify\"),e})((function(){var e=\"@{arguments}\";return e=e.replace(/^\\[|\\]$/g,\"\")})())`;\n  @process_moz: ~`(function(e){return e=e||\"start\",\"flex-start\"==e?e=\"start\":\"flex-end\"==e?e=\"end\":(\"space-between\"==e||\"space-around\"==e)&&(e=\"justify\"),e})((function(){var e=\"@{arguments}\";return e=e.replace(/^\\[|\\]$/g,\"\")})())`;\n  @process_ms: ~`(function(e){return e=e||\"start\",\"flex-start\"==e?e=\"start\":\"flex-end\"==e?e=\"end\":\"space-between\"==e?e=\"justify\":\"space-around\"==e&&(e=\"distribute\"),e})((function(){var e=\"@{arguments}\";return e=e.replace(/^\\[|\\]$/g,\"\")})())`;\n  @process: ~`(function(e){return e=e||\"flex-start\"})((function(){var e=\"@{arguments}\";return e=e.replace(/^\\[|\\]$/g,\"\")})())`;\n  -webkit-box-pack: @process_oldestWebkit;\n  -moz-box-pack: @process_moz;\n  -ms-flex-pack: @process_ms;\n  -webkit-justify-content: @process;\n  justify-content: @process;\n}\n\n.keyframes(...) {\n  @process: ~`(function(e){function r(r,t,c){var i=\"}\\n\",u=n.split(/(^[a-zA-Z0-9-]+),/g),s=t+\" \"+u[1]+\"{\",o=[\"-webkit-\",\"-moz-\",\"-ms-\",\"\"];c?a.forEach(function(r){-1!==e.indexOf(r)&&(u[2]=u[2].replace(new RegExp(r,\"g\"),function(e){return c+e}))}):u[2]=u[2].replace(/{([^}]+)}/g,function(e,r){var t=r.split(\";\");t.forEach(function(e,r){a.forEach(function(n){-1!==e.indexOf(n)&&(t[r]=\"\",o.forEach(function(a){t[r]+=e.trim().replace(new RegExp(n,\"g\"),function(e){return a+e})+\";\"}))})});var n=t.join(\";\").replace(/;;/g,\";\");return e.replace(r,n)}),s+=u[2]+i,\"start\"==r?e=\"0; } \\n\"+s:\"startend\"==r?e=\"0; } \\n\"+s.replace(i,\"\"):e+=\"end\"==r?s.replace(i,\"\"):s}e=e||8121991;var t=\"@{state}\",n=e;if(8121991==e)return e;var a=[\"animation\",\"transform\",\"filter\"];switch(t){case\"1\":r(\"start\",\"@-webkit-keyframes\",\"-webkit-\"),r(null,\"@-moz-keyframes\",\"-moz-\"),r(null,\"@-o-keyframes\",\"-o-\"),r(\"end\",\"@keyframes\");break;case\"2\":r(\"start\",\"@-webkit-keyframes\",\"-webkit-\"),r(null,\"@-moz-keyframes\",\"-moz-\"),r(\"end\",\"@keyframes\");break;case\"3\":r(\"start\",\"@-webkit-keyframes\",\"-webkit-\"),r(null,\"@-moz-keyframes\",\"-moz-\"),r(\"end\",\"@-o-keyframes\",\"-o-\");break;case\"4\":r(\"start\",\"@-webkit-keyframes\",\"-webkit-\"),r(null,\"@-o-keyframes\",\"-o-\"),r(\"end\",\"@keyframes\");break;case\"5\":r(\"start\",\"@-webkit-keyframes\",\"-webkit-\"),r(\"end\",\"@-moz-keyframes\",\"-moz-\");break;case\"6\":r(\"start\",\"@-webkit-keyframes\",\"-webkit-\"),r(\"end\",\"@-o-keyframes\",\"-o-\");break;case\"7\":r(\"start\",\"@-webkit-keyframes\",\"-webkit-\"),r(\"end\",\"@keyframes\");break;case\"8\":r(\"startend\",\"@-webkit-keyframes\",\"-webkit-\");break;case\"9\":r(\"start\",\"@-moz-keyframes\",\"-moz-\"),r(null,\"@-o-keyframes\",\"-o-\"),r(\"end\",\"@keyframes\");break;case\"10\":r(\"start\",\"@-moz-keyframes\",\"-moz-\"),r(\"end\",\"@-o-keyframes\",\"-o-\");break;case\"11\":r(\"start\",\"@-moz-keyframes\",\"-moz-\"),r(\"end\",\"@keyframes\");break;case\"12\":r(\"startend\",\"@-moz-keyframes\",\"-moz-\");break;case\"13\":r(\"start\",\"@-o-keyframes\",\"-o-\"),r(\"end\",\"@keyframes\");break;case\"14\":r(\"startend\",\"@-o-keyframes\",\"-o-\");break;case\"15\":r(\"startend\",\"@keyframes\")}return e})((function(){var e=\"@{arguments}\";return e=e.replace(/^\\[|\\]$/g,\"\")})())`;\n  @state: 1; lesshat-selector { -lh-property: @process; }\n\n\n\n}\n\n.opacity(...) {\n  @process_ms: ~`(function(e){return e=e||\"filter: alpha(opacity=100)\",\"alpha(opacity=\"+Math.floor(100*e)+\")\"})((function(){var e=\"@{arguments}\";return e=e.replace(/^\\[|\\]$/g,\"\")})())`;\n  @process: ~`(function(e){return e=e||\"1\"})((function(){var e=\"@{arguments}\";return e=e.replace(/^\\[|\\]$/g,\"\")})())`;\n   zoom: 1; filter: @process_ms;\n  -webkit-opacity: @process;\n  -moz-opacity: @process;\n  opacity: @process;\n}\n\n.order(...) {\n  @process: ~`(function(e){return e=e||\"0\"})((function(){var e=\"@{arguments}\";return e=e.replace(/^\\[|\\]$/g,\"\")})())`;\n  -webkit-box-ordinal-group: @process;\n  -moz-box-ordinal-group: @process;\n  -ms-flex-order: @process;\n  -webkit-order: @process;\n  order: @process;\n}\n\n.perspective(...) {\n  @process: ~`(function(e){e=e||\"none\";var r=/\\d/gi,t=/(?:\\s|^)(\\.?\\d+\\.?\\d*)(?![^(]*\\)|\\w|%|\\.)/gi;return r.test(e)&&(e=e.replace(t,function(e){return 0==e&&e||e+\"px\"})),e})((function(){var e=\"@{arguments}\";return e=e.replace(/^\\[|\\]$/g,\"\")})())`;\n  -webkit-perspective: @process;\n  -moz-perspective: @process;\n  perspective: @process;\n}\n\n.perspective-origin(...) {\n  @process: ~`(function(e){e=e||\"50% 50%\";var r=/\\d/gi,t=/(?:\\s|^)(\\.?\\d+\\.?\\d*)(?![^(]*\\)|\\w|%|\\.)/gi;return/^[^, ]*,/.test(e)&&(e=e.replace(/(?:,)(?![^(]*\\))/g,\"\")),r.test(e)&&(e=e.replace(t,function(e){return 0==e&&e||e+\"%\"})),e})((function(){var e=\"@{arguments}\";return e=e.replace(/^\\[|\\]$/g,\"\")})())`;\n  -webkit-perspective-origin: @process;\n  -moz-perspective-origin: @process;\n  perspective-origin: @process;\n}\n\n.placeholder(@color:#aaa, @element: 08121991) {\n  .inception (@arguments) when not (@element = 08121991) {\n    @{element}::-webkit-input-placeholder {\n       color: @color;\n    }\n    @{element}:-moz-placeholder {\n       color: @color;\n    }\n    @{element}::-moz-placeholder {\n       color: @color;\n    }\n    @{element}:-ms-input-placeholder {\n       color: @color;\n    }\n  }\n  .inception (@arguments) when (@element = 08121991) {\n    &::-webkit-input-placeholder {\n       color: @color;\n    }\n    &:-moz-placeholder {\n       color: @color;\n    }\n    &::-moz-placeholder {\n       color: @color;\n    }\n    &:-ms-input-placeholder {\n       color: @color;\n    }\n  }\n  .inception(@arguments);\n}\n\n.rotate(...) {\n  @process: ~`(function(e){e=e||\"0\";var r=/\\d/gi,t=/(?:\\s|^)(\\.?\\d+\\.?\\d*)(?![^(]*\\)|\\w|%|\\.)/gi;return r.test(e)&&(e=e.replace(t,function(e){return 0==e&&e||e+\"deg\"})),e})((function(){var e=\"@{arguments}\";return e=e.replace(/^\\[|\\]$/g,\"\")})())`;\n  -webkit-transform: rotate(@process);\n  -moz-transform: rotate(@process);\n  -o-transform: rotate(@process);\n  -ms-transform: rotate(@process);\n  transform: rotate(@process);\n}\n\n.rotate3d(...) {\n  @process: ~`(function(e){return e=e||\"0, 0, 0, 0\",e=e.replace(/,\\s*\\d+$/,function(e){return e+\"deg\"})})((function(){var e=\"@{arguments}\";return e=e.replace(/^\\[|\\]$/g,\"\")})())`;\n  -webkit-transform: rotate3d(@process);\n  -moz-transform: rotate3d(@process);\n  -o-transform: rotate3d(@process);\n  -ms-transform: rotate3d(@process);\n  transform: rotate3d(@process);\n}\n\n.rotateX(...) {\n  @process: ~`(function(e){e=e||\"0\";var r=/\\d/gi,t=/(?:\\s|^)(\\.?\\d+\\.?\\d*)(?![^(]*\\)|\\w|%|\\.)/gi;return r.test(e)&&(e=e.replace(t,function(e){return 0==e&&e||e+\"deg\"})),e})((function(){var e=\"@{arguments}\";return e=e.replace(/^\\[|\\]$/g,\"\")})())`;\n  -webkit-transform: rotateX(@process);\n  -moz-transform: rotateX(@process);\n  -o-transform: rotateX(@process);\n  -ms-transform: rotateX(@process);\n  transform: rotateX(@process);\n}\n\n.rotateY(...) {\n  @process: ~`(function(e){e=e||\"0\";var r=/\\d/gi,t=/(?:\\s|^)(\\.?\\d+\\.?\\d*)(?![^(]*\\)|\\w|%|\\.)/gi;return r.test(e)&&(e=e.replace(t,function(e){return 0==e&&e||e+\"deg\"})),e})((function(){var e=\"@{arguments}\";return e=e.replace(/^\\[|\\]$/g,\"\")})())`;\n  -webkit-transform: rotateY(@process);\n  -moz-transform: rotateY(@process);\n  -o-transform: rotateY(@process);\n  -ms-transform: rotateY(@process);\n  transform: rotateY(@process);\n}\n\n.rotateZ(...) {\n  @process: ~`(function(e){e=e||\"0\";var r=/\\d/gi,t=/(?:\\s|^)(\\.?\\d+\\.?\\d*)(?![^(]*\\)|\\w|%|\\.)/gi;return r.test(e)&&(e=e.replace(t,function(e){return 0==e&&e||e+\"deg\"})),e})((function(){var e=\"@{arguments}\";return e=e.replace(/^\\[|\\]$/g,\"\")})())`;\n  -webkit-transform: rotateZ(@process);\n  -moz-transform: rotateZ(@process);\n  -o-transform: rotateZ(@process);\n  -ms-transform: rotateZ(@process);\n  transform: rotateZ(@process);\n}\n\n.saturate(...) {\n  @process: ~`(function(e){e=e||\"100%\";var r=/\\d/gi,t=/(?:\\s|^)(\\.?\\d+\\.?\\d*)(?![^(]*\\)|\\w|%|\\.)/gi;return r.test(e)&&(e=e.replace(t,function(e){return 0==e&&e||e+\"%\"})),e})((function(){var e=\"@{arguments}\";return e=e.replace(/^\\[|\\]$/g,\"\")})())`;\n  -webkit-filter: ~\"saturate(@{process})\";\n  -moz-filter: ~\"saturate(@{process})\";\n  -ms-filter: ~\"saturate(@{process})\";\n  filter: ~\"saturate(@{process})\";\n}\n\n.scale(...) {\n  @process: ~`(function(e){return e=e||\"1\"})((function(){var e=\"@{arguments}\";return e=e.replace(/^\\[|\\]$/g,\"\")})())`;\n  -webkit-transform: scale(@process);\n  -moz-transform: scale(@process);\n  -o-transform: scale(@process);\n  -ms-transform: scale(@process);\n  transform: scale(@process);\n}\n\n.scale3d(...) {\n  @process: ~`(function(e){return e=e||\"1, 1, 1\"})((function(){var e=\"@{arguments}\";return e=e.replace(/^\\[|\\]$/g,\"\")})())`;\n  -webkit-transform: scale3d(@process);\n  -moz-transform: scale3d(@process);\n  -o-transform: scale3d(@process);\n  -ms-transform: scale3d(@process);\n  transform: scale3d(@process);\n}\n\n.scaleX(...) {\n  @process: ~`(function(e){return e=e||\"1\"})((function(){var e=\"@{arguments}\";return e=e.replace(/^\\[|\\]$/g,\"\")})())`;\n  -webkit-transform: scaleX(@process);\n  -moz-transform: scaleX(@process);\n  -o-transform: scaleX(@process);\n  -ms-transform: scaleX(@process);\n  transform: scaleX(@process);\n}\n\n.scaleY(...) {\n  @process: ~`(function(e){return e=e||\"1\"})((function(){var e=\"@{arguments}\";return e=e.replace(/^\\[|\\]$/g,\"\")})())`;\n  -webkit-transform: scaleY(@process);\n  -moz-transform: scaleY(@process);\n  -o-transform: scaleY(@process);\n  -ms-transform: scaleY(@process);\n  transform: scaleY(@process);\n}\n\n.scaleZ(...) {\n  @process: ~`(function(e){return e=e||\"1\"})((function(){var e=\"@{arguments}\";return e=e.replace(/^\\[|\\]$/g,\"\")})())`;\n  -webkit-transform: scaleZ(@process);\n  -moz-transform: scaleZ(@process);\n  -o-transform: scaleZ(@process);\n  -ms-transform: scaleZ(@process);\n  transform: scaleZ(@process);\n}\n\n.selection(...) {\n  @process: ~`(function(e){function r(r,t){var a=\"}\\n\",c=n.split(\",\"),u=(c[1]||\"\")+t+\"{\"+c[0]+a;\"start\"==r?e=\"0; } \\n\"+u:\"startend\"==r?e=\"0; } \\n\"+u.replace(a,\"\"):e+=\"end\"==r?u.replace(a,\"\"):u}e=e||8121991;var t=\"@{state}\",n=e;if(8121991==e)return e;switch(t){case\"1\":r(\"start\",\"::selection\"),r(\"end\",\"::-moz-selection\");break;case\"2\":r(\"startend\",\"::selection\");break;case\"3\":r(\"startend\",\"::-moz-selection\")}return e=e.replace(/;$/g,\"\")})((function(){var e=\"@{arguments}\";return e=e.replace(/^\\[|\\]$/g,\"\")})())`;\n  @state: 1; lesshat-selector { -lh-property: @process; }\n\n}\n\n.sepia(...) {\n  @process: ~`(function(e){e=e||\"100%\";var r=/\\d/gi,t=/(?:\\s|^)(\\.?\\d+\\.?\\d*)(?![^(]*\\)|\\w|%|\\.)/gi;return r.test(e)&&(e=e.replace(t,function(e){return 0==e&&e||e+\"%\"})),e})((function(){var e=\"@{arguments}\";return e=e.replace(/^\\[|\\]$/g,\"\")})())`;\n  -webkit-filter: sepia(@process);\n  -moz-filter: sepia(@process);\n  -ms-filter: sepia(@process);\n  filter: sepia(@process);\n}\n\n.size(@square) {\n  @unit: 'px';\n  .process(@square) when (ispixel(@square)), (isem(@square)), (ispercentage(@square)), (iskeyword(@square)) {\n    width: @square;\n    height: @square;\n  }\n\n  .process(@square) when not (ispixel(@square)) and not (isem(@square)) and not (ispercentage(@square)) and not (isstring(@square)) and not (iskeyword(@square)) {\n    width: ~`@{square} + @{unit}`;\n    height: ~`@{square} + @{unit}`;\n  }\n\n  .process(@square);\n\n}\n\n.size(@width, @height) {\n  @unit: 'px';\n  .process(@width, @height) when (ispixel(@width)), (isem(@width)), (ispercentage(@width)), (iskeyword(@width)) {\n    .kittens(@height) when (ispixel(@height)), (isem(@height)), (ispercentage(@height)), (iskeyword(@height)) {\n      width: @width;\n      height: @height;\n    }\n    .kittens(@height) when not (ispixel(@height)) and not (isem(@height)) and not (ispercentage(@height)) and not (iskeyword(@height)) {\n      width: @width;\n      height: ~`@{height} + @{unit}`;\n    }\n    .kittens(@height);\n  }\n\n  .process(@width, @height) when (ispixel(@height)), (isem(@height)), (ispercentage(@height)), (iskeyword(@height)) {\n    .kittens(@width) when (ispixel(@width)), (isem(@width)), (ispercentage(@width)), (iskeyword(@width)) {}\n    .kittens(@width) when not (ispixel(@width)) and not (isem(@width)) and not (ispercentage(@width)) and not (iskeyword(@width)) {\n      width: ~`@{width} + @{unit}`;\n      height: @height;\n    }\n    .kittens(@width);\n  }\n\n  .process(@width, @height) when not (ispixel(@width)) and not (isem(@width)) and not (ispercentage(@width)) and not (iskeyword(@width)) and not (ispixel(@height)) and not (isem(@height)) and not (ispercentage(@height)) and not (iskeyword(@height))  {\n    width: ~`@{width} + @{unit}`;\n    height: ~`@{height} + @{unit}`;\n  }\n\n  .process(@width, @height);\n\n}\n\n.skew(...) {\n  @process: ~`(function(e){e=e||\"0\";var r=/\\d/gi,t=/(?:\\s|^)(\\.?\\d+\\.?\\d*)(?![^(]*\\)|\\w|%|\\.)/gi;return r.test(e)&&(e=e.replace(t,function(e){return 0==e&&e||e+\"deg\"})),e})((function(){var e=\"@{arguments}\";return e=e.replace(/^\\[|\\]$/g,\"\")})())`;\n  -webkit-transform: skew(@process);\n  -moz-transform: skew(@process);\n  -o-transform: skew(@process);\n  -ms-transform: skew(@process);\n  transform: skew(@process);\n}\n\n.skewX(...) {\n  @process: ~`(function(e){e=e||\"0\";var r=/\\d/gi,t=/(?:\\s|^)(\\.?\\d+\\.?\\d*)(?![^(]*\\)|\\w|%|\\.)/gi;return r.test(e)&&(e=e.replace(t,function(e){return 0==e&&e||e+\"deg\"})),e})((function(){var e=\"@{arguments}\";return e=e.replace(/^\\[|\\]$/g,\"\")})())`;\n  -webkit-transform: skewX(@process);\n  -moz-transform: skewX(@process);\n  -o-transform: skewX(@process);\n  -ms-transform: skewX(@process);\n  transform: skewX(@process);\n}\n\n.skewY(...) {\n  @process: ~`(function(e){e=e||\"0\";var r=/\\d/gi,t=/(?:\\s|^)(\\.?\\d+\\.?\\d*)(?![^(]*\\)|\\w|%|\\.)/gi;return r.test(e)&&(e=e.replace(t,function(e){return 0==e&&e||e+\"deg\"})),e})((function(){var e=\"@{arguments}\";return e=e.replace(/^\\[|\\]$/g,\"\")})())`;\n  -webkit-transform: skewY(@process);\n  -moz-transform: skewY(@process);\n  -o-transform: skewY(@process);\n  -ms-transform: skewY(@process);\n  transform: skewY(@process);\n}\n\n.transform(...) {\n  @process: ~`(function(e){e=e||\"none\";var r={translate:\"px\",rotate:\"deg\",rotate3d:\"deg\",skew:\"deg\"};/^\\w*\\(?[a-z0-9.]*\\)?/.test(e)&&(e=e.replace(/(?:,)(?![^(]*\\))/g,\"\"));for(var t in r)e.indexOf(t)>=0&&(e=e.replace(new RegExp(t+\"[\\\\w]?\\\\([a-z0-9, %]*\\\\)\"),function(e){var n=/(\\d+\\.?\\d*)(?!\\w|%)/g;return\"rotate3d\"==t&&(n=/,\\s*\\d+$/),e.replace(n,function(e){return e+r[t]})}));return e})((function(){var e=\"@{arguments}\";return e=e.replace(/^\\[|\\]$/g,\"\")})())`;\n  -webkit-transform: @process;\n  -moz-transform: @process;\n  -o-transform: @process;\n  -ms-transform: @process;\n  transform: @process;\n}\n\n.transform-origin(...) {\n  @process: ~`(function(e){e=e||\"50% 50% 0\";var r=/\\d/gi,t=/(?:\\s|^)(\\.?\\d+\\.?\\d*)(?![^(]*\\)|\\w|%|\\.)/gi;return/^[^, ]*,/.test(e)&&(e=e.replace(/(?:,)(?![^(]*\\))/g,\"\")),r.test(e)&&(e=e.replace(t,function(e){return 0==e&&e||e+\"%\"})),e})((function(){var e=\"@{arguments}\";return e=e.replace(/^\\[|\\]$/g,\"\")})())`;\n  -webkit-transform-origin: @process;\n  -moz-transform-origin: @process;\n  -o-transform-origin: @process;\n  -ms-transform-origin: @process;\n  transform-origin: @process;\n}\n\n.transform-style(...) {\n  @process: ~`(function(e){return e=e||\"flat\"})((function(){var e=\"@{arguments}\";return e=e.replace(/^\\[|\\]$/g,\"\")})())`;\n  -webkit-transform-style: @process;\n  -moz-transform-style: @process;\n  -o-transform-style: @process;\n  -ms-transform-style: @process;\n  transform-style: @process;\n}\n\n.transition(...) {\n  @process_webkit: ~`(function(e){e=e||\"all 0 ease 0\";var r=[\"background-size\",\"border-radius\",\"border-bottom-left-radius\",\"border-bottom-right-radius\",\"border-top-left-radius\",\"border-top-right-radius\",\"box-shadow\",\"column\",\"transform\",\"filter\"],t=\"-webkit-\",n=/(?:\\d)(?:ms|s)/gi,a=/(?:\\s|^)(\\.?\\d+\\.?\\d*)(?![^(]*\\)|\\w|%)/gi;return/^[^, ]*,/.test(e)&&(e=e.replace(/(?:,)(?![^(]*\\))/g,\"\")),r.forEach(function(r){-1!==e.indexOf(r)&&(e=e.replace(new RegExp(r,\"g\"),function(e){return t+e}))}),n.test(e)||\"0\"===e||(e=e.replace(a,function(e){return e+=parseFloat(e,10)>10?\"ms\":\"s\"})),e})((function(){var e=\"@{arguments}\";return e=e.replace(/^\\[|\\]$/g,\"\")})())`;\n  @process_moz: ~`(function(e){e=e||\"all 0 ease 0\";var r=[\"background-size\",\"box-shadow\",\"column\",\"transform\",\"filter\"],t=\"-moz-\",n=/(?:\\d)(?:ms|s)/gi,a=/(?:\\s|^)(\\.?\\d+\\.?\\d*)(?![^(]*\\)|\\w|%)/gi;return/^[^, ]*,/.test(e)&&(e=e.replace(/(?:,)(?![^(]*\\))/g,\"\")),r.forEach(function(r){-1!==e.indexOf(r)&&(e=e.replace(new RegExp(r,\"g\"),function(e){return t+e}))}),n.test(e)||\"0\"===e||(e=e.replace(a,function(e){return e+=parseFloat(e,10)>10?\"ms\":\"s\"})),e})((function(){var e=\"@{arguments}\";return e=e.replace(/^\\[|\\]$/g,\"\")})())`;\n  @process_opera: ~`(function(e){e=e||\"all 0 ease 0\";var r=[\"transform\"],t=\"-o-\",n=/(?:\\d)(?:ms|s)/gi,a=/(?:\\s|^)(\\.?\\d+\\.?\\d*)(?![^(]*\\)|\\w|%)/gi;return/^[^, ]*,/.test(e)&&(e=e.replace(/(?:,)(?![^(]*\\))/g,\"\")),r.forEach(function(r){-1!==e.indexOf(r)&&(e=e.replace(new RegExp(r,\"g\"),function(e){return t+e}))}),n.test(e)||\"0\"===e||(e=e.replace(a,function(e){return e+=parseFloat(e,10)>10?\"ms\":\"s\"})),e})((function(){var e=\"@{arguments}\";return e=e.replace(/^\\[|\\]$/g,\"\")})())`;\n  @process: ~`(function(e){e=e||\"all 0 ease 0\";var r=[\"-webkit-\",\"-moz-\",\"-o-\",\"\"],t=[\"column\",\"transform\",\"filter\"],n=/(?:\\d)(?:ms|s)/gi,a=/(?:\\s|^)(\\.?\\d+\\.?\\d*)(?![^(]*\\)|\\w|%)/gi;/^[^, ]*,/.test(e)&&(e=e.replace(/(?:,)(?![^(]*\\))/g,\"\"));var c=e.split(/(?:,)(?![^(]*\\))/g);return c.forEach(function(e,n){t.forEach(function(t){-1!==e.indexOf(t)&&(c[n]=\"\",r.forEach(function(a,u){c[n]+=e.trim().replace(new RegExp(t,\"g\"),function(e){return a+e}),u<r.length-1&&(c[n]+=\",\")}))})}),e=c.join(\",\"),n.test(e)||\"0\"===e||(e=e.replace(a,function(e){return e+=parseFloat(e,10)>10?\"ms\":\"s\"})),e})((function(){var e=\"@{arguments}\";return e=e.replace(/^\\[|\\]$/g,\"\")})())`;\n  -webkit-transition: @process_webkit;\n  -moz-transition: @process_moz;\n  -o-transition: @process_opera;\n  transition: @process;\n}\n\n.transition-delay(...) {\n  @process: ~`(function(e){e=e||\"0\";var r=/(?:\\d)(?:ms|s)/gi,t=/(?:\\s|^)(\\.?\\d+\\.?\\d*)(?![^(]*\\)|\\w|%|\\.)/gi;return r.test(e)||\"0\"===e||(e=e.replace(t,function(e){return e+=parseFloat(e,10)>10?\"ms\":\"s\"})),e})((function(){var e=\"@{arguments}\";return e=e.replace(/^\\[|\\]$/g,\"\")})())`;\n  -webkit-transition-delay: @process;\n  -moz-transition-delay: @process;\n  -o-transition-delay: @process;\n  transition-delay: @process;\n}\n\n.transition-duration(...) {\n  @process: ~`(function(e){e=e||\"0\";var r=/ms|s/gi,t=/(?:\\s|^)(\\.?\\d+\\.?\\d*)(?![^(]*\\)|\\w|%|\\.)/gi;return r.test(e)||\"0\"===e||(e=e.replace(t,function(e){return e+=parseFloat(e,10)>10?\"ms\":\"s\"})),e})((function(){var e=\"@{arguments}\";return e=e.replace(/^\\[|\\]$/g,\"\")})())`;\n  -webkit-transition-duration: @process;\n  -moz-transition-duration: @process;\n  -o-transition-duration: @process;\n  transition-duration: @process;\n}\n\n.transition-property(...) {\n  @process_webkit: ~`(function(e){e=e||\"all\";var r=[\"background-size\",\"border-radius\",\"border-bottom-left-radius\",\"border-bottom-right-radius\",\"border-top-left-radius\",\"border-top-right-radius\",\"box-shadow\",\"column\",\"transform\",\"filter\"],t=\"-webkit-\";return r.forEach(function(r){-1!==e.indexOf(r)&&(e=e.replace(new RegExp(r,\"g\"),function(e){return t+e}))}),e})((function(){var e=\"@{arguments}\";return e=e.replace(/^\\[|\\]$/g,\"\")})())`;\n  @process_moz: ~`(function(e){e=e||\"all\";var r=[\"background-size\",\"box-shadow\",\"column\",\"transform\",\"filter\"],t=\"-moz-\";return r.forEach(function(r){-1!==e.indexOf(r)&&(e=e.replace(new RegExp(r,\"g\"),function(e){return t+e}))}),e})((function(){var e=\"@{arguments}\";return e=e.replace(/^\\[|\\]$/g,\"\")})())`;\n  @process_opera: ~`(function(e){e=e||\"all\";var r=[\"transform\"],t=\"-o-\";return r.forEach(function(r){-1!==e.indexOf(r)&&(e=e.replace(new RegExp(r,\"g\"),function(e){return t+e}))}),e})((function(){var e=\"@{arguments}\";return e=e.replace(/^\\[|\\]$/g,\"\")})())`;\n  @process: ~`(function(e){e=e||\"all\";var r=[\"-webkit-\",\"-moz-\",\"-o-\",\"\"],t=[\"column\",\"transform\",\"filter\"],n=e.split(/(?:,)(?![^(]*\\))/g);return n.forEach(function(e,a){t.forEach(function(t){-1!==e.indexOf(t)&&(n[a]=\"\",r.forEach(function(c,u){n[a]+=e.trim().replace(new RegExp(t,\"g\"),function(e){return c+e}),u<r.length-1&&(n[a]+=\",\")}))})}),e=n.join(\",\")})((function(){var e=\"@{arguments}\";return e=e.replace(/^\\[|\\]$/g,\"\")})())`;\n  -webkit-transition-property: @process_webkit;\n  -moz-transition-property: @process_moz;\n  -o-transition-property: @process_opera;\n  transition-property: @process;\n}\n\n.transition-timing-function(...) {\n  @process: ~`(function(e){return e=e||\"ease\"})((function(){var e=\"@{arguments}\";return e=e.replace(/^\\[|\\]$/g,\"\")})())`;\n  -webkit-transition-timing-function: @process;\n  -moz-transition-timing-function: @process;\n  -o-transition-timing-function: @process;\n  transition-timing-function: @process;\n}\n\n.translate(...) {\n  @process: ~`(function(e){e=e||\"0\";var r=/\\d/gi,t=/(?:\\s|^)(\\.?\\d+\\.?\\d*)(?![^(]*\\)|\\w|%|\\.)/gi;return r.test(e)&&(e=e.replace(t,function(e){return 0==e&&e||e+\"px\"})),e})((function(){var e=\"@{arguments}\";return e=e.replace(/^\\[|\\]$/g,\"\")})())`;\n  -webkit-transform: translate(@process);\n  -moz-transform: translate(@process);\n  -o-transform: translate(@process);\n  -ms-transform: translate(@process);\n  transform: translate(@process);\n}\n\n.translate3d(...) {\n  @process: ~`(function(e){e=e||\"0, 0, 0\";var r=/\\d/gi,t=/(?:\\s|^)(\\.?\\d+\\.?\\d*)(?![^(]*\\)|\\w|%|\\.)/gi;return r.test(e)&&(e=e.replace(t,function(e){return 0==e&&e||e+\"px\"})),e})((function(){var e=\"@{arguments}\";return e=e.replace(/^\\[|\\]$/g,\"\")})())`;\n  -webkit-transform: translate3d(@process);\n  -moz-transform: translate3d(@process);\n  -o-transform: translate3d(@process);\n  -ms-transform: translate3d(@process);\n  transform: translate3d(@process);\n}\n\n.translateX(...) {\n  @process: ~`(function(e){e=e||\"0\";var r=/\\d/gi,t=/(?:\\s|^)(\\.?\\d+\\.?\\d*)(?![^(]*\\)|\\w|%|\\.)/gi;return r.test(e)&&(e=e.replace(t,function(e){return 0==e&&e||e+\"px\"})),e})((function(){var e=\"@{arguments}\";return e=e.replace(/^\\[|\\]$/g,\"\")})())`;\n  -webkit-transform: translateX(@process);\n  -moz-transform: translateX(@process);\n  -o-transform: translateX(@process);\n  -ms-transform: translateX(@process);\n  transform: translateX(@process);\n}\n\n.translateY(...) {\n  @process: ~`(function(e){e=e||\"0\";var r=/\\d/gi,t=/(?:\\s|^)(\\.?\\d+\\.?\\d*)(?![^(]*\\)|\\w|%|\\.)/gi;return r.test(e)&&(e=e.replace(t,function(e){return 0==e&&e||e+\"px\"})),e})((function(){var e=\"@{arguments}\";return e=e.replace(/^\\[|\\]$/g,\"\")})())`;\n  -webkit-transform: translateY(@process);\n  -moz-transform: translateY(@process);\n  -o-transform: translateY(@process);\n  -ms-transform: translateY(@process);\n  transform: translateY(@process);\n}\n\n.translateZ(...) {\n  @process: ~`(function(e){e=e||\"0\";var r=/\\d/gi,t=/(?:\\s|^)(\\.?\\d+\\.?\\d*)(?![^(]*\\)|\\w|%|\\.)/gi;return r.test(e)&&(e=e.replace(t,function(e){return 0==e&&e||e+\"px\"})),e})((function(){var e=\"@{arguments}\";return e=e.replace(/^\\[|\\]$/g,\"\")})())`;\n  -webkit-transform: translateZ(@process);\n  -moz-transform: translateZ(@process);\n  -o-transform: translateZ(@process);\n  -ms-transform: translateZ(@process);\n  transform: translateZ(@process);\n}\n\n.user-select(...) {\n  @process: ~`(function(e){return e=e||\"auto\"})((function(){var e=\"@{arguments}\";return e=e.replace(/^\\[|\\]$/g,\"\")})())`;\n  -webkit-user-select: @process;\n  -moz-user-select: @process;\n  -ms-user-select: @process;\n  user-select: @process;\n}\n\n\n","@import '../../node_modules/lesshat/build/lesshat.less';\n\n.@{prefixClass}-panel-ribbon {\n  position: relative;\n  height: 100%;\n  border-radius: 2px;\n  box-shadow: 0 0 2px #808080 inset;\n  .background-image(linear-gradient(to right, #ff0000 0%, #ff9900 10%, #cdff00 20%, #35ff00 30%, #00ff66 40%, #00fffd 50%, #0066ff 60%, #3200ff 70%, #cd00ff 80%, #ff0099 90%, #ff0000 100%));\n  span{\n    position: absolute;\n    top: 0;\n    height: 100%;\n    width: 4px;\n    border: 1px solid #000000;\n    padding: 1px 0;\n    margin-left: -2px;\n    background-color: #fff;\n    border-radius: 3px;\n  }\n  &-handler{\n    position: absolute;\n    width: 104%;\n    height: 100%;\n    left: -2%;\n    cursor: pointer;\n  }\n}\n\n\n",".@{prefixClass}-panel-alpha {\n  position: relative;\n  height: 100%;\n  width: 100%;\n  border-radius: 2px;\n  background-image: url('data:image/png;base64,R0lGODdhCgAKAPAAAOXl5f///ywAAAAACgAKAEACEIQdqXt9GxyETrI279OIgwIAOw==');\n  background-repeat: repeat;\n  user-select: none;\n  &-bg{\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    border-radius: 2px;\n    box-shadow: 0 0 2px #808080 inset;\n  }\n  span{\n    position: absolute;\n    top: 0;\n    height: 100%;\n    width: 4px;\n    border: 1px solid #000000;\n    padding: 1px 0;\n    margin-left: -2px;\n    background-color: #fff;\n    border-radius: 3px;\n  }\n  &-handler{\n    position: absolute;\n    width: 104%;\n    height: 100%;\n    left: -2%;\n    cursor: pointer;\n  }\n}\n",".@{prefixClass}-panel-params {\n  font-size: 12px;\n  &-input{\n    overflow: hidden;\n    padding: 2px 0;\n  }\n  input{\n    user-select: text;\n    text-align: center;\n    padding: 1px;\n    margin: 0;\n    float: left;\n    border-radius: 2px;\n    border: 1px solid #CACACA;\n    font-family: 'Helvetica Neue', Helvetica, sans-serif;\n  }\n  &-hex{\n    width: 52px;\n  }\n  input[type=number]{\n    margin-left: 5px;\n    width: 32px;\n    &::-webkit-inner-spin-button {\n        -webkit-appearance: none;\n    }\n  }\n\n  &-lable{\n    padding: 2px 0;\n    height: 22px;\n    line-height: 18px;\n    user-select: none;\n    label{float:left; text-align: center;}\n    &-hex{\n      width: 52px;\n    }\n    &-number, &-alpha{\n      margin-left: 5px;\n      width: 32px;\n    }\n    &-number:hover{\n      border-radius: 2px;\n      background-color: #eee;\n      box-shadow: 0 0 0 1px #ccc inset;\n      cursor: pointer;\n    }\n  }\n}\n","@prefixClass: ~'react-colorpicker';\n\n@import 'index/Layout';\n@import 'index/Trigger';\n@import 'index/Panel';\n@import 'index/Preview';\n@import 'index/Board';\n@import 'index/Ribbon';\n@import 'index/Alpha';\n@import 'index/Params';\n\n.@{prefixClass}{\n  font-family: Arial, \"Hiragino Sans GB\", \"Microsoft Yahei\", \"Microsoft Sans Serif\", \"WenQuanYi Micro Hei\", sans-serif;\n  .@{prefixClass}-panel{\n    display: none;\n    position: absolute;\n    left: -999px;\n    top: -999px;\n  }\n  &-open{\n    .@{prefixClass}-panel{\n      display: block\n    }\n  }\n\n  .effect() {\n    animation-duration: 0.3s;\n    animation-fill-mode: both;\n    transform-origin: 0 0;\n    display: block !important;\n  }\n\n  &-slide-up-enter {\n    .effect();\n    opacity: 0;\n    animation-timing-function: cubic-bezier(0.08, 0.82, 0.17, 1);\n    animation-play-state: paused;\n  }\n\n  &-slide-up-leave {\n    .effect();\n    opacity: 1;\n    animation-timing-function: cubic-bezier(0.6, 0.04, 0.98, 0.34);\n    animation-play-state: paused;\n  }\n\n  &-slide-up-enter&-slide-up-enter-active {\n    animation-name: rcDropdownSlideUpIn;\n    animation-play-state: running;\n  }\n\n  &-slide-up-leave&-slide-up-leave-active {\n    animation-name: rcDropdownSlideUpOut;\n    animation-play-state: running;\n  }\n\n  @keyframes rcDropdownSlideUpIn {\n    0% {\n      opacity: 0;\n      transform-origin: 0% 0%;\n      transform: scaleY(0);\n    }\n    100% {\n      opacity: 1;\n      transform-origin: 0% 0%;\n      transform: scaleY(1);\n    }\n  }\n  @keyframes rcDropdownSlideUpOut {\n    0% {\n      opacity: 1;\n      transform-origin: 0% 0%;\n      transform: scaleY(1);\n    }\n    100% {\n      opacity: 0;\n      transform-origin: 0% 0%;\n      transform: scaleY(0);\n    }\n  }\n}\n"]}]);

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = function() {
		var list = [];
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
		return list;
	}

/***/ },
/* 14 */
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
		isIE9 = memoize(function() {
			return /msie 9\b/.test(window.navigator.userAgent.toLowerCase());
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
		// Force single-tag solution on IE9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isIE9();
	
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
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function () {
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
	
	function replaceText(source, id, replacement) {
		var boundaries = ["/** >>" + id + " **/", "/** " + id + "<< **/"];
		var start = source.lastIndexOf(boundaries[0]);
		var wrappedReplacement = replacement
			? (boundaries[0] + replacement + boundaries[1])
			: "";
		if (source.lastIndexOf(boundaries[0]) >= 0) {
			var end = source.lastIndexOf(boundaries[1]) + boundaries[1].length;
			return source.slice(0, start) + wrappedReplacement + source.slice(end);
		} else {
			return source + wrappedReplacement;
		}
	}
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(styleElement.styleSheet.cssText, index, css);
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
	
		if(sourceMap && typeof btoa === "function") {
			try {
				css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(JSON.stringify(sourceMap)) + " */";
				css = "@import url(\"data:text/css;base64," + btoa(css) + "\")";
			} catch(e) {}
		}
	
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


/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(17);

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(18);
	module.exports.Panel = __webpack_require__(42);

/***/ },
/* 18 */
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
	
	var _react = __webpack_require__(15);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _rcAlign = __webpack_require__(19);
	
	var _rcAlign2 = _interopRequireDefault(_rcAlign);
	
	var _rcUtil = __webpack_require__(23);
	
	var _rcUtil2 = _interopRequireDefault(_rcUtil);
	
	var _rcAnimate = __webpack_require__(35);
	
	var _rcAnimate2 = _interopRequireDefault(_rcAnimate);
	
	var _Panel = __webpack_require__(42);
	
	var _Panel2 = _interopRequireDefault(_Panel);
	
	var toFragment = _rcUtil2['default'].Children.mapSelf;
	
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
	      alpha: props.alpha === undefined ? props.defaultAlpha : props.alpha,
	      open: false
	    };
	
	    var events = ['getAlign', 'onTriggerClick', 'onChange', 'onBlur', 'getPickerElement', 'getRootDOMNode', 'getTriggerDOMNode', 'getTransitionName'];
	
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
	    key: 'onAlign',
	    value: function onAlign(node) {
	      // focus after align
	      if (node !== document.activeElement && !_rcUtil2['default'].Dom.contains(node, document.activeElement)) {
	        node.focus();
	      }
	    }
	  }, {
	    key: 'getTransitionName',
	    value: function getTransitionName() {
	      var props = this.props;
	      var transitionName = props.transitionName;
	      if (!transitionName && props.animation) {
	        transitionName = props.prefixCls + '-' + props.animation;
	      }
	      return transitionName;
	    }
	  }, {
	    key: 'getAlign',
	    value: function getAlign(orient) {
	      var points = ['tl', 'bl'];
	      var offset = [0, 5];
	      if (orient.indexOf('top') !== -1 && orient.indexOf('left') !== -1) {
	        points = ['tl', 'bl'];
	      } else if (orient.indexOf('top') !== -1 && orient.indexOf('right') !== -1) {
	        points = ['tr', 'br'];
	      } else if (orient.indexOf('bottom') !== -1 && orient.indexOf('left') !== -1) {
	        points = ['bl', 'tl'];
	        offset = [0, -5];
	      } else if (orient.indexOf('bottom') !== -1 && orient.indexOf('right') !== -1) {
	        points = ['br', 'tr'];
	        offset = [0, -5];
	      }
	
	      var adjustOrientOnPickerOverflow = this.props.adjustOrientOnPickerOverflow;
	
	      return {
	        points: points,
	        offset: offset,
	        overflow: {
	          adjustX: adjustOrientOnPickerOverflow,
	          adjustY: adjustOrientOnPickerOverflow
	        }
	      };
	    }
	  }, {
	    key: 'getPickerElement',
	    value: function getPickerElement() {
	      var state = this.state;
	      var pickerPanelElement = _react2['default'].createElement(_Panel2['default'], {
	        ref: this.savePickerPanelRef,
	        defaultColor: this.state.color,
	        alpha: this.state.alpha,
	        prefixCls: this.props.prefixCls + '-panel',
	        onChange: this.onChange,
	        onBlur: this.onBlur,
	        mode: this.props.mode
	      });
	
	      var orient = this.props.orient;
	
	      return _react2['default'].createElement(
	        _rcAnimate2['default'],
	        {
	          component: '',
	          exclusive: true,
	          animateMount: true,
	          showProp: 'pickerOpen',
	          transitionName: this.getTransitionName()
	        },
	        _react2['default'].createElement(
	          _rcAlign2['default'],
	          { target: this.getTriggerDOMNode,
	            key: 'picker',
	            onAlign: this.onAlign,
	            monitorWindowResize: true,
	            disabled: !state.open,
	            pickerOpen: state.open,
	            align: this.getAlign(orient) },
	          pickerPanelElement
	        )
	      );
	    }
	  }, {
	    key: 'getRootDOMNode',
	    value: function getRootDOMNode() {
	      return _react2['default'].findDOMNode(this);
	    }
	  }, {
	    key: 'getTriggerDOMNode',
	    value: function getTriggerDOMNode() {
	      return _react2['default'].findDOMNode(this.triggerInstance);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var props = this.props;
	      var classes = [props.prefixCls];
	      if (this.state.open) {
	        classes.push(props.prefixCls + '-open');
	      }
	
	      var trigger = props.trigger;
	
	      if (trigger) {
	        trigger = _react2['default'].cloneElement(trigger, {
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
	
	      var picker = undefined;
	
	      this.haveOpened = this.haveOpened || this.state.open;
	
	      if (this.haveOpened) {
	        picker = this.getPickerElement();
	      }
	
	      return _react2['default'].createElement(
	        'span',
	        { className: classes.join(' ') },
	        toFragment([picker, trigger])
	      );
	    }
	  }]);
	
	  return ColorPicker;
	})(_react2['default'].Component);
	
	exports['default'] = ColorPicker;
	
	ColorPicker.propTypes = {
	  adjustOrientOnPickerOverflow: _react2['default'].PropTypes.bool,
	  animation: _react2['default'].PropTypes.string,
	  orient: _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.oneOf(['left', 'top', 'right', 'bottom'])),
	  color: _react2['default'].PropTypes.string,
	  alpha: _react2['default'].PropTypes.number,
	  onChange: _react2['default'].PropTypes.func,
	  prefixCls: _react2['default'].PropTypes.string.isRequired,
	  trigger: _react2['default'].PropTypes.node.isRequired,
	  mode: _react2['default'].PropTypes.string
	};
	
	ColorPicker.defaultProps = {
	  adjustOrientOnPickerOverflow: true,
	  defaultColor: '#F00',
	  defaultHsv: null,
	  defaultAlpha: 100,
	  orient: ['top', 'left'],
	  onChange: function onChange() {},
	  prefixCls: 'react-colorpicker',
	  trigger: _react2['default'].createElement('span', { className: 'react-colorpicker-trigger' })
	};
	module.exports = exports['default'];

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// export this package's api
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _Align = __webpack_require__(20);
	
	var _Align2 = _interopRequireDefault(_Align);
	
	exports['default'] = _Align2['default'];
	module.exports = exports['default'];

/***/ },
/* 20 */
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
	
	var _react = __webpack_require__(15);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _domAlign = __webpack_require__(21);
	
	var _domAlign2 = _interopRequireDefault(_domAlign);
	
	var _rcUtil = __webpack_require__(23);
	
	var _rcUtil2 = _interopRequireDefault(_rcUtil);
	
	function isWindow(obj) {
	  /*eslint-disable eqeqeq */
	  return obj != null && obj == obj.window;
	  /*eslint-enable eqeqeq */
	}
	
	function buffer(fn, ms) {
	  var timer;
	  return function () {
	    if (timer) {
	      clearTimeout(timer);
	    }
	    timer = setTimeout(fn, ms);
	  };
	}
	
	var Align = (function (_React$Component) {
	  _inherits(Align, _React$Component);
	
	  function Align(props) {
	    _classCallCheck(this, Align);
	
	    _get(Object.getPrototypeOf(Align.prototype), 'constructor', this).apply(this, arguments);
	    this.handleWindowResize = this.handleWindowResize.bind(this);
	  }
	
	  _createClass(Align, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var props = this.props;
	      // if parent ref not attached .... use document.getElementById
	      if (!props.disabled) {
	        var source = _react2['default'].findDOMNode(this);
	        props.onAlign(source, (0, _domAlign2['default'])(source, props.target(), props.align));
	        if (props.monitorWindowResize) {
	          this.startMonitorWindowResize();
	        }
	      }
	    }
	  }, {
	    key: 'startMonitorWindowResize',
	    value: function startMonitorWindowResize() {
	      if (!this.resizeHandler) {
	        this.resizeHandler = _rcUtil2['default'].Dom.addEventListener(window, 'resize', buffer(this.handleWindowResize, this.props.monitorBufferTime));
	      }
	    }
	  }, {
	    key: 'stopMonitorWindowResize',
	    value: function stopMonitorWindowResize() {
	      if (this.resizeHandler) {
	        this.resizeHandler.remove();
	        this.resizeHandler = null;
	      }
	    }
	  }, {
	    key: 'handleWindowResize',
	    value: function handleWindowResize() {
	      var props = this.props;
	      if (!props.disabled) {
	        var source = _react2['default'].findDOMNode(this);
	        props.onAlign(source, (0, _domAlign2['default'])(source, props.target(), props.align));
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.stopMonitorWindowResize();
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps) {
	      var reAlign = false;
	      var props = this.props;
	      var currentTarget;
	
	      if (!props.disabled) {
	        if (prevProps.disabled || prevProps.align !== props.align) {
	          reAlign = true;
	          currentTarget = props.target();
	        } else {
	          var lastTarget = prevProps.target();
	          currentTarget = props.target();
	          if (isWindow(lastTarget) && isWindow(currentTarget)) {
	            reAlign = false;
	          } else if (lastTarget !== currentTarget) {
	            reAlign = true;
	          }
	        }
	      }
	
	      if (reAlign) {
	        var source = _react2['default'].findDOMNode(this);
	        props.onAlign(source, (0, _domAlign2['default'])(source, currentTarget, props.align));
	      }
	
	      if (props.monitorWindowResize && !props.disabled) {
	        this.startMonitorWindowResize();
	      } else {
	        this.stopMonitorWindowResize();
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2['default'].Children.only(this.props.children);
	    }
	  }]);
	
	  return Align;
	})(_react2['default'].Component);
	
	Align.defaultProps = {
	  target: function target() {
	    return window;
	  },
	  onAlign: function onAlign() {},
	  monitorBufferTime: 50,
	  monitorWindowResize: false,
	  disabled: false
	};
	
	Align.PropTypes = {
	  align: _react2['default'].PropTypes.object.isRequired,
	  target: _react2['default'].PropTypes.func,
	  onAlign: _react2['default'].PropTypes.func,
	  monitorBufferTime: _react2['default'].PropTypes.number,
	  monitorWindowResize: _react2['default'].PropTypes.bool,
	  disabled: _react2['default'].PropTypes.bool
	};
	
	exports['default'] = Align;
	module.exports = exports['default'];

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * align dom node flexibly
	 * @author yiminghe@gmail.com
	 */
	
	'use strict';
	
	var utils = __webpack_require__(22);
	
	// http://yiminghe.iteye.com/blog/1124720
	
	/**
	 * 获取 node 上的 align 对齐点 相对于页面的坐标
	 */
	
	function getAlignOffset(region, align) {
	  var V = align.charAt(0),
	      H = align.charAt(1),
	      w = region.width,
	      h = region.height,
	      x,
	      y;
	
	  x = region.left;
	  y = region.top;
	
	  if (V === 'c') {
	    y += h / 2;
	  } else if (V === 'b') {
	    y += h;
	  }
	
	  if (H === 'c') {
	    x += w / 2;
	  } else if (H === 'r') {
	    x += w;
	  }
	
	  return {
	    left: x,
	    top: y
	  };
	}
	
	/**
	 * 得到会导致元素显示不全的祖先元素
	 */
	
	function getOffsetParent(element) {
	  // ie 这个也不是完全可行
	  /*
	   <div style="width: 50px;height: 100px;overflow: hidden">
	   <div style="width: 50px;height: 100px;position: relative;" id="d6">
	   元素 6 高 100px 宽 50px<br/>
	   </div>
	   </div>
	   */
	  // element.offsetParent does the right thing in ie7 and below. Return parent with layout!
	  //  In other browsers it only includes elements with position absolute, relative or
	  // fixed, not elements with overflow set to auto or scroll.
	  //        if (UA.ie && ieMode < 8) {
	  //            return element.offsetParent;
	  //        }
	  // 统一的 offsetParent 方法
	  var doc = element.ownerDocument,
	      body = doc.body,
	      parent,
	      positionStyle = utils.css(element, 'position'),
	      skipStatic = positionStyle === 'fixed' || positionStyle === 'absolute';
	
	  if (!skipStatic) {
	    return element.nodeName.toLowerCase() === 'html' ? null : element.parentNode;
	  }
	
	  for (parent = element.parentNode; parent && parent !== body; parent = parent.parentNode) {
	    positionStyle = utils.css(parent, 'position');
	    if (positionStyle !== 'static') {
	      return parent;
	    }
	  }
	  return null;
	}
	
	/**
	 * 获得元素的显示部分的区域
	 */
	
	function getVisibleRectForElement(element) {
	  var visibleRect = {
	    left: 0,
	    right: Infinity,
	    top: 0,
	    bottom: Infinity
	  },
	      el = element,
	      scrollX,
	      scrollY,
	      winSize,
	      doc = element.ownerDocument,
	      win = doc.defaultView || doc.parentWindow,
	      body = doc.body,
	      documentElement = doc.documentElement;
	
	  // Determine the size of the visible rect by climbing the dom accounting for
	  // all scrollable containers.
	  while (el) {
	    // clientWidth is zero for inline block elements in ie.
	    if ((navigator.userAgent.indexOf('MSIE') === -1 || el.clientWidth !== 0) && (el !== body && el !== documentElement && utils.css(el, 'overflow') !== 'visible')) {
	      var pos = utils.offset(el);
	      // add border
	      pos.left += el.clientLeft;
	      pos.top += el.clientTop;
	      visibleRect.top = Math.max(visibleRect.top, pos.top);
	      visibleRect.right = Math.min(visibleRect.right,
	      // consider area without scrollBar
	      pos.left + el.clientWidth);
	      visibleRect.bottom = Math.min(visibleRect.bottom, pos.top + el.clientHeight);
	      visibleRect.left = Math.max(visibleRect.left, pos.left);
	    } else if (el === body || el === documentElement) {
	      break;
	    }
	    el = getOffsetParent(el);
	  }
	
	  // Clip by window's viewport.
	  scrollX = utils.getWindowScrollLeft(win);
	  scrollY = utils.getWindowScrollTop(win);
	  visibleRect.left = Math.max(visibleRect.left, scrollX);
	  visibleRect.top = Math.max(visibleRect.top, scrollY);
	  winSize = {
	    width: utils.viewportWidth(win),
	    height: utils.viewportHeight(win)
	  };
	  visibleRect.right = Math.min(visibleRect.right, scrollX + winSize.width);
	  visibleRect.bottom = Math.min(visibleRect.bottom, scrollY + winSize.height);
	  return visibleRect.top >= 0 && visibleRect.left >= 0 && visibleRect.bottom > visibleRect.top && visibleRect.right > visibleRect.left ? visibleRect : null;
	}
	
	function getElFuturePos(elRegion, refNodeRegion, points, offset) {
	  var xy, diff, p1, p2;
	
	  xy = {
	    left: elRegion.left,
	    top: elRegion.top
	  };
	
	  p1 = getAlignOffset(refNodeRegion, points[1]);
	  p2 = getAlignOffset(elRegion, points[0]);
	
	  diff = [p2.left - p1.left, p2.top - p1.top];
	
	  return {
	    left: xy.left - diff[0] + +offset[0],
	    top: xy.top - diff[1] + +offset[1]
	  };
	}
	
	function isFailX(elFuturePos, elRegion, visibleRect) {
	  return elFuturePos.left < visibleRect.left || elFuturePos.left + elRegion.width > visibleRect.right;
	}
	
	function isFailY(elFuturePos, elRegion, visibleRect) {
	  return elFuturePos.top < visibleRect.top || elFuturePos.top + elRegion.height > visibleRect.bottom;
	}
	
	function adjustForViewport(elFuturePos, elRegion, visibleRect, overflow) {
	  var pos = utils.clone(elFuturePos),
	      size = {
	    width: elRegion.width,
	    height: elRegion.height
	  };
	
	  if (overflow.adjustX && pos.left < visibleRect.left) {
	    pos.left = visibleRect.left;
	  }
	
	  // Left edge inside and right edge outside viewport, try to resize it.
	  if (overflow.resizeWidth && pos.left >= visibleRect.left && pos.left + size.width > visibleRect.right) {
	    size.width -= pos.left + size.width - visibleRect.right;
	  }
	
	  // Right edge outside viewport, try to move it.
	  if (overflow.adjustX && pos.left + size.width > visibleRect.right) {
	    // 保证左边界和可视区域左边界对齐
	    pos.left = Math.max(visibleRect.right - size.width, visibleRect.left);
	  }
	
	  // Top edge outside viewport, try to move it.
	  if (overflow.adjustY && pos.top < visibleRect.top) {
	    pos.top = visibleRect.top;
	  }
	
	  // Top edge inside and bottom edge outside viewport, try to resize it.
	  if (overflow.resizeHeight && pos.top >= visibleRect.top && pos.top + size.height > visibleRect.bottom) {
	    size.height -= pos.top + size.height - visibleRect.bottom;
	  }
	
	  // Bottom edge outside viewport, try to move it.
	  if (overflow.adjustY && pos.top + size.height > visibleRect.bottom) {
	    // 保证上边界和可视区域上边界对齐
	    pos.top = Math.max(visibleRect.bottom - size.height, visibleRect.top);
	  }
	
	  return utils.mix(pos, size);
	}
	
	function flip(points, reg, map) {
	  var ret = [];
	  utils.each(points, function (p) {
	    ret.push(p.replace(reg, function (m) {
	      return map[m];
	    }));
	  });
	  return ret;
	}
	
	function flipOffset(offset, index) {
	  offset[index] = -offset[index];
	  return offset;
	}
	
	function getRegion(node) {
	  var offset, w, h;
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
	
	/*
	 * align node
	 * @param {Element} node current dom node
	 * @param {Object} align align config
	 *
	 *    @example
	 *    {
	 *      node: null,         // 参考元素, falsy 或 window 为可视区域, 'trigger' 为触发元素, 其他为指定元素
	 *      points: ['cc','cc'], // ['tr', 'tl'] 表示 overlay 的 tr 与参考节点的 tl 对齐
	 *      offset: [0, 0]      // 有效值为 [n, m]
	 *    }
	 */
	function domAlign(el, refNode, align) {
	  var points = align.points;
	  var offset = align.offset;
	  var overflow = align.overflow;
	  offset = offset && [].concat(offset) || [0, 0];
	  overflow = overflow || {};
	  var newOverflowCfg = {};
	
	  var fail = 0;
	  // 当前节点可以被放置的显示区域
	  var visibleRect = getVisibleRectForElement(el);
	  // 当前节点所占的区域, left/top/width/height
	  var elRegion = getRegion(el);
	  // 参照节点所占的区域, left/top/width/height
	  var refNodeRegion = getRegion(refNode);
	  // 当前节点将要被放置的位置
	  var elFuturePos = getElFuturePos(elRegion, refNodeRegion, points, offset);
	  // 当前节点将要所处的区域
	  var newElRegion = utils.merge(elRegion, elFuturePos);
	
	  // 如果可视区域不能完全放置当前节点时允许调整
	  if (visibleRect && (overflow.adjustX || overflow.adjustY)) {
	    if (overflow.adjustX) {
	      // 如果横向不能放下
	      if (isFailX(elFuturePos, elRegion, visibleRect)) {
	        fail = 1;
	        // 对齐位置反下
	        points = flip(points, /[lr]/ig, {
	          l: 'r',
	          r: 'l'
	        });
	        // 偏移量也反下
	        offset = flipOffset(offset, 0);
	      }
	    }
	
	    if (overflow.adjustY) {
	      // 如果纵向不能放下
	      if (isFailY(elFuturePos, elRegion, visibleRect)) {
	        fail = 1;
	        // 对齐位置反下
	        points = flip(points, /[tb]/ig, {
	          t: 'b',
	          b: 't'
	        });
	        // 偏移量也反下
	        offset = flipOffset(offset, 1);
	      }
	    }
	
	    // 如果失败，重新计算当前节点将要被放置的位置
	    if (fail) {
	      elFuturePos = getElFuturePos(elRegion, refNodeRegion, points, offset);
	      utils.mix(newElRegion, elFuturePos);
	    }
	
	    // 检查反下后的位置是否可以放下了
	    // 如果仍然放不下只有指定了可以调整当前方向才调整
	    newOverflowCfg.adjustX = overflow.adjustX && isFailX(elFuturePos, elRegion, visibleRect);
	
	    newOverflowCfg.adjustY = overflow.adjustY && isFailY(elFuturePos, elRegion, visibleRect);
	
	    // 确实要调整，甚至可能会调整高度宽度
	    if (newOverflowCfg.adjustX || newOverflowCfg.adjustY) {
	      newElRegion = adjustForViewport(elFuturePos, elRegion, visibleRect, newOverflowCfg);
	    }
	  }
	
	  // https://github.com/kissyteam/kissy/issues/190
	  // http://localhost:8888/kissy/src/overlay/demo/other/relative_align/align.html
	  // 相对于屏幕位置没变，而 left/top 变了
	  // 例如 <div 'relative'><el absolute></div>
	  utils.offset(el, { left: newElRegion.left, top: newElRegion.top });
	
	  // need judge to in case set fixed with in css on height auto element
	  if (newElRegion.width !== elRegion.width) {
	    utils.css(el, 'width', el.width() + newElRegion.width - elRegion.width);
	  }
	
	  if (newElRegion.height !== elRegion.height) {
	    utils.css(el, 'height', el.height() + newElRegion.height - elRegion.height);
	  }
	
	  return {
	    points: points,
	    offset: offset,
	    overflow: newOverflowCfg
	  };
	}
	
	domAlign.__getOffsetParent = getOffsetParent;
	
	domAlign.__getVisibleRectForElement = getVisibleRectForElement;
	
	module.exports = domAlign;
	/**
	 *  2012-04-26 yiminghe@gmail.com
	 *   - 优化智能对齐算法
	 *   - 慎用 resizeXX
	 *
	 *  2011-07-13 yiminghe@gmail.com note:
	 *   - 增加智能对齐，以及大小调整选项
	 **/
	
	// body may have overflow set on it, yet we still get the entire
	// viewport. In some browsers, el.offsetParent may be
	// document.documentElement, so check for that too.

/***/ },
/* 22 */
/***/ function(module, exports) {

	'use strict';
	
	var RE_NUM = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source;
	
	var getComputedStyleX;
	
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
	
	if (typeof window !== 'undefined') {
	  getComputedStyleX = window.getComputedStyle ? _getComputedStyle : _getComputedStyleIE;
	}
	
	// 设置 elem 相对 elem.ownerDocument 的坐标
	function setOffset(elem, offset) {
	  // set position first, in-case top/left are set even on static elem
	  if (css(elem, 'position') === 'static') {
	    elem.style.position = 'relative';
	  }
	  var preset = -9999;
	  if ('left' in offset) {
	    elem.style.left = preset + 'px';
	  }
	  if ('top' in offset) {
	    elem.style.top = preset + 'px';
	  }
	  var old = getOffset(elem);
	  var ret = {};
	  var key;
	  for (key in offset) {
	    ret[key] = preset + offset[key] - old[key];
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

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  guid: __webpack_require__(24),
	  classSet: __webpack_require__(25),
	  joinClasses: __webpack_require__(26),
	  KeyCode: __webpack_require__(27),
	  PureRenderMixin: __webpack_require__(28),
	  shallowEqual: __webpack_require__(29),
	  createChainedFunction: __webpack_require__(30),
	  Dom: {
	    addEventListener: __webpack_require__(31),
	    contains: __webpack_require__(32)
	  },
	  Children: {
	    toArray: __webpack_require__(33),
	    mapSelf: __webpack_require__(34)
	  }
	};


/***/ },
/* 24 */
/***/ function(module, exports) {

	var seed = 0;
	module.exports = function () {
	  return Date.now() + '_' + (seed++);
	};


/***/ },
/* 25 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This file contains an unmodified version of:
	 * https://github.com/facebook/react/blob/v0.12.0/src/vendor/stubs/cx.js
	 *
	 * This source code is licensed under the BSD-style license found here:
	 * https://github.com/facebook/react/blob/v0.12.0/LICENSE
	 * An additional grant of patent rights can be found here:
	 * https://github.com/facebook/react/blob/v0.12.0/PATENTS
	 */
	
	/**
	 * This function is used to mark string literals representing CSS class names
	 * so that they can be transformed statically. This allows for modularization
	 * and minification of CSS class names.
	 *
	 * In static_upstream, this function is actually implemented, but it should
	 * eventually be replaced with something more descriptive, and the transform
	 * that is used in the main stack should be ported for use elsewhere.
	 *
	 * @param string|object className to modularize, or an object of key/values.
	 *                      In the object case, the values are conditions that
	 *                      determine if the className keys should be included.
	 * @param [string ...]  Variable list of classNames in the string case.
	 * @return string       Renderable space-separated CSS className.
	 */
	function cx(classNames) {
	  if (typeof classNames === 'object') {
	    return Object.keys(classNames).filter(function(className) {
	      return classNames[className];
	    }).join(' ');
	  } else {
	    return Array.prototype.join.call(arguments, ' ');
	  }
	}
	
	module.exports = cx;


/***/ },
/* 26 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This file contains an unmodified version of:
	 * https://github.com/facebook/react/blob/v0.12.0/src/utils/joinClasses.js
	 *
	 * This source code is licensed under the BSD-style license found here:
	 * https://github.com/facebook/react/blob/v0.12.0/LICENSE
	 * An additional grant of patent rights can be found here:
	 * https://github.com/facebook/react/blob/v0.12.0/PATENTS
	 */
	
	"use strict";
	
	/**
	 * Combines multiple className strings into one.
	 * http://jsperf.com/joinclasses-args-vs-array
	 *
	 * @param {...?string} classes
	 * @return {string}
	 */
	
	function joinClasses(className /*, ... */ ) {
	  if (!className) {
	    className = '';
	  }
	  var nextClass;
	  var argLength = arguments.length;
	  if (argLength > 1) {
	    for (var ii = 1; ii < argLength; ii++) {
	      nextClass = arguments[ii];
	      if (nextClass) {
	        className = (className ? className + ' ' : '') + nextClass;
	      }
	    }
	  }
	  return className;
	}
	
	module.exports = joinClasses;


/***/ },
/* 27 */
/***/ function(module, exports) {

	/**
	 * @ignore
	 * some key-codes definition and utils from closure-library
	 * @author yiminghe@gmail.com
	 */
	
	var KeyCode = {
	  /**
	   * MAC_ENTER
	   */
	  MAC_ENTER: 3,
	  /**
	   * BACKSPACE
	   */
	  BACKSPACE: 8,
	  /**
	   * TAB
	   */
	  TAB: 9,
	  /**
	   * NUMLOCK on FF/Safari Mac
	   */
	  NUM_CENTER: 12, // NUMLOCK on FF/Safari Mac
	  /**
	   * ENTER
	   */
	  ENTER: 13,
	  /**
	   * SHIFT
	   */
	  SHIFT: 16,
	  /**
	   * CTRL
	   */
	  CTRL: 17,
	  /**
	   * ALT
	   */
	  ALT: 18,
	  /**
	   * PAUSE
	   */
	  PAUSE: 19,
	  /**
	   * CAPS_LOCK
	   */
	  CAPS_LOCK: 20,
	  /**
	   * ESC
	   */
	  ESC: 27,
	  /**
	   * SPACE
	   */
	  SPACE: 32,
	  /**
	   * PAGE_UP
	   */
	  PAGE_UP: 33, // also NUM_NORTH_EAST
	  /**
	   * PAGE_DOWN
	   */
	  PAGE_DOWN: 34, // also NUM_SOUTH_EAST
	  /**
	   * END
	   */
	  END: 35, // also NUM_SOUTH_WEST
	  /**
	   * HOME
	   */
	  HOME: 36, // also NUM_NORTH_WEST
	  /**
	   * LEFT
	   */
	  LEFT: 37, // also NUM_WEST
	  /**
	   * UP
	   */
	  UP: 38, // also NUM_NORTH
	  /**
	   * RIGHT
	   */
	  RIGHT: 39, // also NUM_EAST
	  /**
	   * DOWN
	   */
	  DOWN: 40, // also NUM_SOUTH
	  /**
	   * PRINT_SCREEN
	   */
	  PRINT_SCREEN: 44,
	  /**
	   * INSERT
	   */
	  INSERT: 45, // also NUM_INSERT
	  /**
	   * DELETE
	   */
	  DELETE: 46, // also NUM_DELETE
	  /**
	   * ZERO
	   */
	  ZERO: 48,
	  /**
	   * ONE
	   */
	  ONE: 49,
	  /**
	   * TWO
	   */
	  TWO: 50,
	  /**
	   * THREE
	   */
	  THREE: 51,
	  /**
	   * FOUR
	   */
	  FOUR: 52,
	  /**
	   * FIVE
	   */
	  FIVE: 53,
	  /**
	   * SIX
	   */
	  SIX: 54,
	  /**
	   * SEVEN
	   */
	  SEVEN: 55,
	  /**
	   * EIGHT
	   */
	  EIGHT: 56,
	  /**
	   * NINE
	   */
	  NINE: 57,
	  /**
	   * QUESTION_MARK
	   */
	  QUESTION_MARK: 63, // needs localization
	  /**
	   * A
	   */
	  A: 65,
	  /**
	   * B
	   */
	  B: 66,
	  /**
	   * C
	   */
	  C: 67,
	  /**
	   * D
	   */
	  D: 68,
	  /**
	   * E
	   */
	  E: 69,
	  /**
	   * F
	   */
	  F: 70,
	  /**
	   * G
	   */
	  G: 71,
	  /**
	   * H
	   */
	  H: 72,
	  /**
	   * I
	   */
	  I: 73,
	  /**
	   * J
	   */
	  J: 74,
	  /**
	   * K
	   */
	  K: 75,
	  /**
	   * L
	   */
	  L: 76,
	  /**
	   * M
	   */
	  M: 77,
	  /**
	   * N
	   */
	  N: 78,
	  /**
	   * O
	   */
	  O: 79,
	  /**
	   * P
	   */
	  P: 80,
	  /**
	   * Q
	   */
	  Q: 81,
	  /**
	   * R
	   */
	  R: 82,
	  /**
	   * S
	   */
	  S: 83,
	  /**
	   * T
	   */
	  T: 84,
	  /**
	   * U
	   */
	  U: 85,
	  /**
	   * V
	   */
	  V: 86,
	  /**
	   * W
	   */
	  W: 87,
	  /**
	   * X
	   */
	  X: 88,
	  /**
	   * Y
	   */
	  Y: 89,
	  /**
	   * Z
	   */
	  Z: 90,
	  /**
	   * META
	   */
	  META: 91, // WIN_KEY_LEFT
	  /**
	   * WIN_KEY_RIGHT
	   */
	  WIN_KEY_RIGHT: 92,
	  /**
	   * CONTEXT_MENU
	   */
	  CONTEXT_MENU: 93,
	  /**
	   * NUM_ZERO
	   */
	  NUM_ZERO: 96,
	  /**
	   * NUM_ONE
	   */
	  NUM_ONE: 97,
	  /**
	   * NUM_TWO
	   */
	  NUM_TWO: 98,
	  /**
	   * NUM_THREE
	   */
	  NUM_THREE: 99,
	  /**
	   * NUM_FOUR
	   */
	  NUM_FOUR: 100,
	  /**
	   * NUM_FIVE
	   */
	  NUM_FIVE: 101,
	  /**
	   * NUM_SIX
	   */
	  NUM_SIX: 102,
	  /**
	   * NUM_SEVEN
	   */
	  NUM_SEVEN: 103,
	  /**
	   * NUM_EIGHT
	   */
	  NUM_EIGHT: 104,
	  /**
	   * NUM_NINE
	   */
	  NUM_NINE: 105,
	  /**
	   * NUM_MULTIPLY
	   */
	  NUM_MULTIPLY: 106,
	  /**
	   * NUM_PLUS
	   */
	  NUM_PLUS: 107,
	  /**
	   * NUM_MINUS
	   */
	  NUM_MINUS: 109,
	  /**
	   * NUM_PERIOD
	   */
	  NUM_PERIOD: 110,
	  /**
	   * NUM_DIVISION
	   */
	  NUM_DIVISION: 111,
	  /**
	   * F1
	   */
	  F1: 112,
	  /**
	   * F2
	   */
	  F2: 113,
	  /**
	   * F3
	   */
	  F3: 114,
	  /**
	   * F4
	   */
	  F4: 115,
	  /**
	   * F5
	   */
	  F5: 116,
	  /**
	   * F6
	   */
	  F6: 117,
	  /**
	   * F7
	   */
	  F7: 118,
	  /**
	   * F8
	   */
	  F8: 119,
	  /**
	   * F9
	   */
	  F9: 120,
	  /**
	   * F10
	   */
	  F10: 121,
	  /**
	   * F11
	   */
	  F11: 122,
	  /**
	   * F12
	   */
	  F12: 123,
	  /**
	   * NUMLOCK
	   */
	  NUMLOCK: 144,
	  /**
	   * SEMICOLON
	   */
	  SEMICOLON: 186, // needs localization
	  /**
	   * DASH
	   */
	  DASH: 189, // needs localization
	  /**
	   * EQUALS
	   */
	  EQUALS: 187, // needs localization
	  /**
	   * COMMA
	   */
	  COMMA: 188, // needs localization
	  /**
	   * PERIOD
	   */
	  PERIOD: 190, // needs localization
	  /**
	   * SLASH
	   */
	  SLASH: 191, // needs localization
	  /**
	   * APOSTROPHE
	   */
	  APOSTROPHE: 192, // needs localization
	  /**
	   * SINGLE_QUOTE
	   */
	  SINGLE_QUOTE: 222, // needs localization
	  /**
	   * OPEN_SQUARE_BRACKET
	   */
	  OPEN_SQUARE_BRACKET: 219, // needs localization
	  /**
	   * BACKSLASH
	   */
	  BACKSLASH: 220, // needs localization
	  /**
	   * CLOSE_SQUARE_BRACKET
	   */
	  CLOSE_SQUARE_BRACKET: 221, // needs localization
	  /**
	   * WIN_KEY
	   */
	  WIN_KEY: 224,
	  /**
	   * MAC_FF_META
	   */
	  MAC_FF_META: 224, // Firefox (Gecko) fires this for the meta key instead of 91
	  /**
	   * WIN_IME
	   */
	  WIN_IME: 229
	};
	
	/*
	 whether text and modified key is entered at the same time.
	 */
	KeyCode.isTextModifyingKeyEvent = function (e) {
	  var keyCode = e.keyCode;
	  if (e.altKey && !e.ctrlKey || e.metaKey ||
	      // Function keys don't generate text
	    keyCode >= KeyCode.F1 && keyCode <= KeyCode.F12) {
	    return false;
	  }
	
	  // The following keys are quite harmless, even in combination with
	  // CTRL, ALT or SHIFT.
	  switch (keyCode) {
	    case KeyCode.ALT:
	    case KeyCode.CAPS_LOCK:
	    case KeyCode.CONTEXT_MENU:
	    case KeyCode.CTRL:
	    case KeyCode.DOWN:
	    case KeyCode.END:
	    case KeyCode.ESC:
	    case KeyCode.HOME:
	    case KeyCode.INSERT:
	    case KeyCode.LEFT:
	    case KeyCode.MAC_FF_META:
	    case KeyCode.META:
	    case KeyCode.NUMLOCK:
	    case KeyCode.NUM_CENTER:
	    case KeyCode.PAGE_DOWN:
	    case KeyCode.PAGE_UP:
	    case KeyCode.PAUSE:
	    case KeyCode.PRINT_SCREEN:
	    case KeyCode.RIGHT:
	    case KeyCode.SHIFT:
	    case KeyCode.UP:
	    case KeyCode.WIN_KEY:
	    case KeyCode.WIN_KEY_RIGHT:
	      return false;
	    default:
	      return true;
	  }
	};
	
	/*
	 whether character is entered.
	 */
	KeyCode.isCharacterKey = function (keyCode) {
	  if (keyCode >= KeyCode.ZERO &&
	    keyCode <= KeyCode.NINE) {
	    return true;
	  }
	
	  if (keyCode >= KeyCode.NUM_ZERO &&
	    keyCode <= KeyCode.NUM_MULTIPLY) {
	    return true;
	  }
	
	  if (keyCode >= KeyCode.A &&
	    keyCode <= KeyCode.Z) {
	    return true;
	  }
	
	  // Safari sends zero key code for non-latin characters.
	  if (window.navigation.userAgent.indexOf('WebKit') !== -1 && keyCode === 0) {
	    return true;
	  }
	
	  switch (keyCode) {
	    case KeyCode.SPACE:
	    case KeyCode.QUESTION_MARK:
	    case KeyCode.NUM_PLUS:
	    case KeyCode.NUM_MINUS:
	    case KeyCode.NUM_PERIOD:
	    case KeyCode.NUM_DIVISION:
	    case KeyCode.SEMICOLON:
	    case KeyCode.DASH:
	    case KeyCode.EQUALS:
	    case KeyCode.COMMA:
	    case KeyCode.PERIOD:
	    case KeyCode.SLASH:
	    case KeyCode.APOSTROPHE:
	    case KeyCode.SINGLE_QUOTE:
	    case KeyCode.OPEN_SQUARE_BRACKET:
	    case KeyCode.BACKSLASH:
	    case KeyCode.CLOSE_SQUARE_BRACKET:
	      return true;
	    default:
	      return false;
	  }
	};
	
	module.exports = KeyCode;


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	* @providesModule ReactComponentWithPureRenderMixin
	*/
	
	"use strict";
	
	var shallowEqual = __webpack_require__(29);
	
	/**
	 * If your React component's render function is "pure", e.g. it will render the
	 * same result given the same props and state, provide this Mixin for a
	 * considerable performance boost.
	 *
	 * Most React components have pure render functions.
	 *
	 * Example:
	 *
	 *   var ReactComponentWithPureRenderMixin =
	 *     require('ReactComponentWithPureRenderMixin');
	 *   React.createClass({
	 *     mixins: [ReactComponentWithPureRenderMixin],
	 *
	 *     render: function() {
	 *       return <div className={this.props.className}>foo</div>;
	 *     }
	 *   });
	 *
	 * Note: This only checks shallow equality for props and state. If these contain
	 * complex data structures this mixin may have false-negatives for deeper
	 * differences. Only mixin to components which have simple props and state, or
	 * use `forceUpdate()` when you know deep data structures have changed.
	 */
	var ReactComponentWithPureRenderMixin = {
	  shouldComponentUpdate: function(nextProps, nextState) {
	    return !shallowEqual(this.props, nextProps) ||
	           !shallowEqual(this.state, nextState);
	  }
	};
	
	module.exports = ReactComponentWithPureRenderMixin;


/***/ },
/* 29 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule shallowEqual
	 */
	
	"use strict";
	
	/**
	 * Performs equality by iterating through keys on an object and returning
	 * false when any key has values which are not strictly equal between
	 * objA and objB. Returns true when the values of all keys are strictly equal.
	 *
	 * @return {boolean}
	 */
	function shallowEqual(objA, objB) {
	  if (objA === objB) {
	    return true;
	  }
	  var key;
	  // Test for A's keys different from B.
	  for (key in objA) {
	    if (objA.hasOwnProperty(key) &&
	        (!objB.hasOwnProperty(key) || objA[key] !== objB[key])) {
	      return false;
	    }
	  }
	  // Test for B's keys missing from A.
	  for (key in objB) {
	    if (objB.hasOwnProperty(key) && !objA.hasOwnProperty(key)) {
	      return false;
	    }
	  }
	  return true;
	}
	
	module.exports = shallowEqual;


/***/ },
/* 30 */
/***/ function(module, exports) {

	/**
	 * Safe chained function
	 *
	 * Will only create a new function if needed,
	 * otherwise will pass back existing functions or null.
	 *
	 * @returns {function|null}
	 */
	function createChainedFunction() {
	  var args = arguments;
	
	  return function chainedFunction() {
	    for (var i = 0; i < args.length; i++) {
	      if (args[i] && args[i].apply) {
	        args[i].apply(this, arguments);
	      }
	    }
	  };
	}
	
	module.exports = createChainedFunction;


/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = function (target, eventType, callback) {
	  if (target.addEventListener) {
	    target.addEventListener(eventType, callback, false);
	    return {
	      remove: function () {
	        target.removeEventListener(eventType, callback, false);
	      }
	    };
	  } else if (target.attachEvent) {
	    target.attachEvent('on' + eventType, callback);
	    return {
	      remove: function () {
	        target.detachEvent('on' + eventType, callback);
	      }
	    };
	  }
	};


/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = function (root, node) {
	  while (node) {
	    if (node === root) {
	      return true;
	    }
	    node = node.parentNode;
	  }
	
	  return false;
	};


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(15);
	
	module.exports = function (children) {
	  var ret = [];
	  React.Children.forEach(children, function (c) {
	    ret.push(c);
	  });
	  return ret;
	};


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(15);
	
	function mirror(o) {
	  return o;
	}
	
	module.exports = function (children) {
	  // return ReactFragment
	  return React.Children.map(children, mirror);
	};


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	// export this package's api
	'use strict';
	
	module.exports = __webpack_require__(36);

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var _react = __webpack_require__(15);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ChildrenUtils = __webpack_require__(37);
	
	var _ChildrenUtils2 = _interopRequireDefault(_ChildrenUtils);
	
	var _AnimateChild = __webpack_require__(38);
	
	var _AnimateChild2 = _interopRequireDefault(_AnimateChild);
	
	var defaultKey = 'rc_animate_' + Date.now();
	
	function getChildrenFromProps(props) {
	  var children = props.children;
	  if (_react2['default'].isValidElement(children)) {
	    if (!children.key) {
	      return _react2['default'].cloneElement(children, {
	        key: defaultKey
	      });
	    }
	  }
	  return children;
	}
	
	var Animate = _react2['default'].createClass({
	  displayName: 'Animate',
	
	  protoTypes: {
	    component: _react2['default'].PropTypes.any,
	    animation: _react2['default'].PropTypes.object,
	    transitionName: _react2['default'].PropTypes.string,
	    transitionEnter: _react2['default'].PropTypes.bool,
	    transitionLeave: _react2['default'].PropTypes.bool,
	    onEnd: _react2['default'].PropTypes.func,
	    showProp: _react2['default'].PropTypes.bool,
	    animateMount: _react2['default'].PropTypes.bool
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      animation: {},
	      component: 'span',
	      transitionEnter: true,
	      transitionLeave: true,
	      enter: true,
	      animateMount: false,
	      onEnd: function onEnd() {}
	    };
	  },
	
	  getInitialState: function getInitialState() {
	    this.currentlyAnimatingKeys = {};
	    this.keysToEnter = [];
	    this.keysToLeave = [];
	    return {
	      children: (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(this.props))
	    };
	  },
	
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    var _this = this;
	
	    var nextChildren = (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(nextProps));
	    var props = this.props;
	    var showProp = props.showProp;
	    var exclusive = props.exclusive;
	    var currentlyAnimatingKeys = this.currentlyAnimatingKeys;
	    // last props children if exclusive
	    // exclusive needs immediate response
	    var currentChildren = this.state.children;
	    var newChildren = _ChildrenUtils2['default'].mergeChildren(currentChildren, nextChildren);
	
	    if (showProp && !exclusive) {
	      newChildren = newChildren.map(function (c) {
	        if (!c.props[showProp] && (0, _ChildrenUtils.isShownInChildren)(currentChildren, c, showProp)) {
	          c = _react2['default'].cloneElement(c, _defineProperty({}, showProp, true));
	        }
	        return c;
	      });
	    }
	
	    this.setState({
	      children: newChildren
	    });
	
	    // exclusive needs immediate response
	    if (exclusive) {
	      Object.keys(currentlyAnimatingKeys).forEach(function (key) {
	        _this.stop(key);
	      });
	      currentChildren = (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(props));
	    }
	
	    nextChildren.forEach(function (c) {
	      var key = c.key;
	      if (currentlyAnimatingKeys[key]) {
	        return;
	      }
	      var hasPrev = (0, _ChildrenUtils.inChildren)(currentChildren, c);
	      if (showProp) {
	        if (hasPrev) {
	          var showInNow = (0, _ChildrenUtils.isShownInChildren)(currentChildren, c, showProp);
	          var showInNext = c.props[showProp];
	          if (!showInNow && showInNext) {
	            _this.keysToEnter.push(key);
	          }
	        }
	      } else if (!hasPrev) {
	        _this.keysToEnter.push(key);
	      }
	    });
	
	    currentChildren.forEach(function (c) {
	      var key = c.key;
	      if (currentlyAnimatingKeys[key]) {
	        return;
	      }
	      var hasNext = (0, _ChildrenUtils.inChildren)(nextChildren, c);
	      if (showProp) {
	        if (hasNext) {
	          var showInNext = (0, _ChildrenUtils.isShownInChildren)(nextChildren, c, showProp);
	          var showInNow = c.props[showProp];
	          if (!showInNext && showInNow) {
	            _this.keysToLeave.push(key);
	          }
	        }
	      } else if (!hasNext) {
	        _this.keysToLeave.push(key);
	      }
	    });
	  },
	
	  performEnter: function performEnter(key) {
	    // may already remove by exclusive
	    if (this.refs[key]) {
	      this.currentlyAnimatingKeys[key] = true;
	      this.refs[key].componentWillEnter(this._handleDoneEntering.bind(this, key));
	    }
	  },
	
	  _handleDoneEntering: function _handleDoneEntering(key) {
	    delete this.currentlyAnimatingKeys[key];
	    var currentChildren = (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(this.props));
	    if (!this.isValidChildByKey(currentChildren, key)) {
	      // exclusive will not need this
	      this.performLeave(key);
	    } else {
	      this.props.onEnd(key, true);
	      if (this.isMounted() && !(0, _ChildrenUtils.isSameChildren)(this.state.children, currentChildren)) {
	        this.setState({
	          children: currentChildren
	        });
	      }
	    }
	  },
	
	  performLeave: function performLeave(key) {
	    // may already remove by exclusive
	    if (this.refs[key]) {
	      this.currentlyAnimatingKeys[key] = true;
	      this.refs[key].componentWillLeave(this._handleDoneLeaving.bind(this, key));
	    }
	  },
	
	  isValidChildByKey: function isValidChildByKey(currentChildren, key) {
	    var showProp = this.props.showProp;
	    if (showProp) {
	      return (0, _ChildrenUtils.isShownInChildrenByKey)(currentChildren, key, showProp);
	    } else {
	      return (0, _ChildrenUtils.inChildrenByKey)(currentChildren, key);
	    }
	  },
	
	  _handleDoneLeaving: function _handleDoneLeaving(key) {
	    delete this.currentlyAnimatingKeys[key];
	    var currentChildren = (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(this.props));
	    // in case state change is too fast
	    if (this.isValidChildByKey(currentChildren, key)) {
	      this.performEnter(key);
	    } else {
	      this.props.onEnd(key, false);
	      if (this.isMounted() && !(0, _ChildrenUtils.isSameChildren)(this.state.children, currentChildren)) {
	        this.setState({
	          children: currentChildren
	        });
	      }
	    }
	  },
	
	  stop: function stop(key) {
	    delete this.currentlyAnimatingKeys[key];
	    var component = this.refs[key];
	    if (component) {
	      component.stop();
	    }
	  },
	
	  componentDidMount: function componentDidMount() {
	    if (this.props.animateMount) {
	      this.state.children.map(function (c) {
	        return c.key;
	      }).forEach(this.performEnter);
	    }
	  },
	
	  componentDidUpdate: function componentDidUpdate() {
	    var keysToEnter = this.keysToEnter;
	    this.keysToEnter = [];
	    keysToEnter.forEach(this.performEnter);
	    var keysToLeave = this.keysToLeave;
	    this.keysToLeave = [];
	    keysToLeave.forEach(this.performLeave);
	  },
	
	  render: function render() {
	    var props = this.props;
	    var children = this.state.children.map(function (child) {
	      if (!child.key) {
	        throw new Error('must set key for <rc-animate> children');
	      }
	      return _react2['default'].createElement(
	        _AnimateChild2['default'],
	        {
	          key: child.key,
	          ref: child.key,
	          animation: props.animation,
	          transitionName: props.transitionName,
	          transitionEnter: props.transitionEnter,
	          transitionLeave: props.transitionLeave },
	        child
	      );
	    });
	    var Component = props.component;
	    if (Component) {
	      return _react2['default'].createElement(
	        Component,
	        this.props,
	        children
	      );
	    } else {
	      return children[0] || null;
	    }
	  }
	});
	
	exports['default'] = Animate;
	module.exports = exports['default'];

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(15);
	
	var _react2 = _interopRequireDefault(_react);
	
	function inChildren(children, child) {
	  var found = 0;
	  children.forEach(function (c) {
	    if (found) {
	      return;
	    }
	    found = c.key === child.key;
	  });
	  return found;
	}
	
	exports['default'] = {
	  inChildren: inChildren,
	
	  toArrayChildren: function toArrayChildren(children) {
	    var ret = [];
	    _react2['default'].Children.forEach(children, function (c) {
	      ret.push(c);
	    });
	    return ret;
	  },
	
	  isShownInChildren: function isShownInChildren(children, child, showProp) {
	    var found = 0;
	    children.forEach(function (c) {
	      if (found) {
	        return;
	      }
	      found = c.key === child.key && c.props[showProp];
	    });
	    return found;
	  },
	
	  inChildrenByKey: function inChildrenByKey(children, key) {
	    var found = 0;
	    if (children) {
	      children.forEach(function (c) {
	        if (found) {
	          return;
	        }
	        found = c.key === key;
	      });
	    }
	    return found;
	  },
	
	  isShownInChildrenByKey: function isShownInChildrenByKey(children, key, showProp) {
	    var found = 0;
	    if (children) {
	      children.forEach(function (c) {
	        if (found) {
	          return;
	        }
	        found = c.key === key && c.props[showProp];
	      });
	    }
	    return found;
	  },
	
	  isSameChildren: function isSameChildren(c1, c2) {
	    var same = c1.length === c2.length;
	    if (same) {
	      c1.forEach(function (c, i) {
	        if (c !== c2[i]) {
	          same = false;
	        }
	      });
	    }
	    return same;
	  },
	
	  mergeChildren: function mergeChildren(prev, next) {
	    var ret = [];
	
	    // For each key of `next`, the list of keys to insert before that key in
	    // the combined list
	    var nextChildrenPending = {};
	    var pendingChildren = [];
	    prev.forEach(function (c) {
	      if (inChildren(next, c)) {
	        if (pendingChildren.length) {
	          nextChildrenPending[c.key] = pendingChildren;
	          pendingChildren = [];
	        }
	      } else {
	        pendingChildren.push(c);
	      }
	    });
	
	    next.forEach(function (c) {
	      if (nextChildrenPending.hasOwnProperty(c.key)) {
	        ret = ret.concat(nextChildrenPending[c.key]);
	      }
	      ret.push(c);
	    });
	
	    ret = ret.concat(pendingChildren);
	
	    return ret;
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(15);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _cssAnimation = __webpack_require__(39);
	
	var _cssAnimation2 = _interopRequireDefault(_cssAnimation);
	
	var transitionMap = {
	  enter: 'transitionEnter',
	  leave: 'transitionLeave'
	};
	
	var AnimateChild = _react2['default'].createClass({
	  displayName: 'AnimateChild',
	
	  transition: function transition(animationType, finishCallback) {
	    var _this = this;
	
	    var node = _react2['default'].findDOMNode(this);
	    var props = this.props;
	    var transitionName = props.transitionName;
	    this.stop();
	    var end = function end() {
	      _this.stopper = null;
	      finishCallback();
	    };
	    if ((_cssAnimation.isCssAnimationSupported || !props.animation[animationType]) && transitionName && props[transitionMap[animationType]]) {
	      this.stopper = (0, _cssAnimation2['default'])(node, transitionName + '-' + animationType, end);
	    } else {
	      this.stopper = props.animation[animationType](node, end);
	    }
	  },
	
	  stop: function stop() {
	    if (this.stopper) {
	      this.stopper.stop();
	      this.stopper = null;
	    }
	  },
	
	  componentWillUnmount: function componentWillUnmount() {
	    this.stop();
	  },
	
	  componentWillEnter: function componentWillEnter(done) {
	    var props = this.props;
	    if (props.transitionEnter && props.transitionName || props.animation.enter) {
	      this.transition('enter', done);
	    } else {
	      done();
	    }
	  },
	
	  componentWillLeave: function componentWillLeave(done) {
	    var props = this.props;
	    if (props.transitionLeave && props.transitionName || props.animation.leave) {
	      this.transition('leave', done);
	    } else {
	      done();
	    }
	  },
	
	  render: function render() {
	    return this.props.children;
	  }
	});
	
	exports['default'] = AnimateChild;
	module.exports = exports['default'];

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Event = __webpack_require__(40);
	var Css = __webpack_require__(41);
	var isCssAnimationSupported = Event.endEvents.length !== 0;
	
	function getDuration(node, name) {
	  var style = window.getComputedStyle(node);
	  var prefixes = ['-webkit-', '-moz-', '-o-', 'ms-', ''];
	  var ret = '';
	  for (var i = 0; i < prefixes.length; i++) {
	    ret = style.getPropertyValue(prefixes[i] + name);
	    if (ret) {
	      break;
	    }
	  }
	  return ret;
	}
	
	function fixBrowserByTimeout(node) {
	  if (isCssAnimationSupported) {
	    var transitionDuration = parseFloat(getDuration(node, 'transition-duration')) || 0;
	    var animationDuration = parseFloat(getDuration(node, 'animation-duration')) || 0;
	    var time = Math.max(transitionDuration, animationDuration);
	    // sometimes, browser bug
	    node.rcEndAnimTimeout = setTimeout(function () {
	      node.rcEndAnimTimeout = null;
	      if (node.rcEndListener) {
	        node.rcEndListener();
	      }
	    }, time * 1000 + 200);
	  }
	}
	
	function clearBrowserBugTimeout(node) {
	  if (node.rcEndAnimTimeout) {
	    clearTimeout(node.rcEndAnimTimeout);
	    node.rcEndAnimTimeout = null;
	  }
	}
	
	var cssAnimation = function cssAnimation(node, transitionName, callback) {
	  var className = transitionName;
	  var activeClassName = className + '-active';
	
	  if (node.rcEndListener) {
	    node.rcEndListener();
	  }
	
	  node.rcEndListener = function (e) {
	    if (e && e.target !== node) {
	      return;
	    }
	
	    if (node.rcAnimTimeout) {
	      clearTimeout(node.rcAnimTimeout);
	      node.rcAnimTimeout = null;
	    }
	
	    clearBrowserBugTimeout(node);
	
	    Css.removeClass(node, className);
	    Css.removeClass(node, activeClassName);
	
	    Event.removeEndEventListener(node, node.rcEndListener);
	    node.rcEndListener = null;
	
	    // Usually this optional callback is used for informing an owner of
	    // a leave animation and telling it to remove the child.
	    if (callback) {
	      callback();
	    }
	  };
	
	  Event.addEndEventListener(node, node.rcEndListener);
	
	  Css.addClass(node, className);
	
	  node.rcAnimTimeout = setTimeout(function () {
	    node.rcAnimTimeout = null;
	    Css.addClass(node, activeClassName);
	    fixBrowserByTimeout(node);
	  }, 0);
	
	  return {
	    stop: function stop() {
	      if (node.rcEndListener) {
	        node.rcEndListener();
	      }
	    }
	  };
	};
	
	cssAnimation.style = function (node, style, callback) {
	  if (node.rcEndListener) {
	    node.rcEndListener();
	  }
	
	  node.rcEndListener = function (e) {
	    if (e && e.target !== node) {
	      return;
	    }
	
	    if (node.rcAnimTimeout) {
	      clearTimeout(node.rcAnimTimeout);
	      node.rcAnimTimeout = null;
	    }
	
	    clearBrowserBugTimeout(node);
	
	    Event.removeEndEventListener(node, node.rcEndListener);
	    node.rcEndListener = null;
	
	    // Usually this optional callback is used for informing an owner of
	    // a leave animation and telling it to remove the child.
	    if (callback) {
	      callback();
	    }
	  };
	
	  Event.addEndEventListener(node, node.rcEndListener);
	
	  node.rcAnimTimeout = setTimeout(function () {
	    for (var s in style) {
	      if (style.hasOwnProperty(s)) {
	        node.style[s] = style[s];
	      }
	    }
	    node.rcAnimTimeout = null;
	    fixBrowserByTimeout(node);
	  }, 0);
	};
	
	cssAnimation.setTransition = function (node, p, value) {
	  var property = p;
	  var v = value;
	  if (value === undefined) {
	    v = property;
	    property = '';
	  }
	  property = property || '';
	  ['Webkit', 'Moz', 'O',
	  // ms is special .... !
	  'ms'].forEach(function (prefix) {
	    node.style[prefix + 'Transition' + property] = v;
	  });
	};
	
	cssAnimation.addClass = Css.addClass;
	cssAnimation.removeClass = Css.removeClass;
	cssAnimation.isCssAnimationSupported = isCssAnimationSupported;
	
	module.exports = cssAnimation;

/***/ },
/* 40 */
/***/ function(module, exports) {

	'use strict';
	
	var EVENT_NAME_MAP = {
	  transitionend: {
	    transition: 'transitionend',
	    WebkitTransition: 'webkitTransitionEnd',
	    MozTransition: 'mozTransitionEnd',
	    OTransition: 'oTransitionEnd',
	    msTransition: 'MSTransitionEnd'
	  },
	
	  animationend: {
	    animation: 'animationend',
	    WebkitAnimation: 'webkitAnimationEnd',
	    MozAnimation: 'mozAnimationEnd',
	    OAnimation: 'oAnimationEnd',
	    msAnimation: 'MSAnimationEnd'
	  }
	};
	
	var endEvents = [];
	
	function detectEvents() {
	  var testEl = document.createElement('div');
	  var style = testEl.style;
	
	  if (!('AnimationEvent' in window)) {
	    delete EVENT_NAME_MAP.animationend.animation;
	  }
	
	  if (!('TransitionEvent' in window)) {
	    delete EVENT_NAME_MAP.transitionend.transition;
	  }
	
	  for (var baseEventName in EVENT_NAME_MAP) {
	    if (EVENT_NAME_MAP.hasOwnProperty(baseEventName)) {
	      var baseEvents = EVENT_NAME_MAP[baseEventName];
	      for (var styleName in baseEvents) {
	        if (styleName in style) {
	          endEvents.push(baseEvents[styleName]);
	          break;
	        }
	      }
	    }
	  }
	}
	
	if (typeof window !== 'undefined') {
	  detectEvents();
	}
	
	function addEventListener(node, eventName, eventListener) {
	  node.addEventListener(eventName, eventListener, false);
	}
	
	function removeEventListener(node, eventName, eventListener) {
	  node.removeEventListener(eventName, eventListener, false);
	}
	
	var TransitionEvents = {
	  addEndEventListener: function addEndEventListener(node, eventListener) {
	    if (endEvents.length === 0) {
	      window.setTimeout(eventListener, 0);
	      return;
	    }
	    endEvents.forEach(function (endEvent) {
	      addEventListener(node, endEvent, eventListener);
	    });
	  },
	
	  endEvents: endEvents,
	
	  removeEndEventListener: function removeEndEventListener(node, eventListener) {
	    if (endEvents.length === 0) {
	      return;
	    }
	    endEvents.forEach(function (endEvent) {
	      removeEventListener(node, endEvent, eventListener);
	    });
	  }
	};
	
	module.exports = TransitionEvents;

/***/ },
/* 41 */
/***/ function(module, exports) {

	'use strict';
	
	var SPACE = ' ';
	var RE_CLASS = /[\n\t\r]/g;
	
	function norm(elemClass) {
	  return (SPACE + elemClass + SPACE).replace(RE_CLASS, SPACE);
	}
	
	module.exports = {
	  addClass: function addClass(elem, className) {
	    elem.className += ' ' + className;
	  },
	
	  removeClass: function removeClass(elem, n) {
	    var elemClass = elem.className.trim();
	    var className = norm(elemClass);
	    var needle = n.trim();
	    needle = SPACE + needle + SPACE;
	    // 一个 cls 有可能多次出现：'link link2 link link3 link'
	    while (className.indexOf(needle) >= 0) {
	      className = className.replace(needle, SPACE);
	    }
	    elem.className = className.trim();
	  }
	};

/***/ },
/* 42 */
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
	
	var _react = __webpack_require__(15);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _colr = __webpack_require__(43);
	
	var _colr2 = _interopRequireDefault(_colr);
	
	var _Board = __webpack_require__(45);
	
	var _Board2 = _interopRequireDefault(_Board);
	
	var _Preview = __webpack_require__(46);
	
	var _Preview2 = _interopRequireDefault(_Preview);
	
	var _Ribbon = __webpack_require__(47);
	
	var _Ribbon2 = _interopRequireDefault(_Ribbon);
	
	var _Alpha = __webpack_require__(49);
	
	var _Alpha2 = _interopRequireDefault(_Alpha);
	
	var _Params = __webpack_require__(50);
	
	var _Params2 = _interopRequireDefault(_Params);
	
	var _utilsValidationColor = __webpack_require__(51);
	
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
	      alpha: props.alph || props.defaultAlpha
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
	  prefixCls: _react2['default'].PropTypes.string,
	  color: _utilsValidationColor2['default'],
	  alpha: _react2['default'].PropTypes.number,
	  style: _react2['default'].PropTypes.object,
	  onChange: _react2['default'].PropTypes.func,
	  onFocus: _react2['default'].PropTypes.func,
	  onBlur: _react2['default'].PropTypes.func,
	  mode: _react2['default'].PropTypes.string
	};
	
	Panel.defaultProps = {
	  prefixCls: 'react-colorpicker-panel',
	  defaultColor: '#ff0000',
	  defaultAlpha: 100,
	  style: {},
	  onChange: noop,
	  onFocus: noop,
	  onBlur: noop
	};
	module.exports = exports['default'];

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	
	/*
	 * DEPENDENCIES
	 */
	
	var convert = __webpack_require__(44);
	
	
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
/* 44 */
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
/* 45 */
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
	
	var _colr = __webpack_require__(43);
	
	var _colr2 = _interopRequireDefault(_colr);
	
	var _react = __webpack_require__(15);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _rcUtil = __webpack_require__(23);
	
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
	    key: 'getPrefixCls',
	    value: function getPrefixCls() {
	      return this.props.rootPrefixCls + '-board';
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
	
	    /**
	     * 移动光标位置到
	     * @param  {object} pos X Y 全局坐标点
	     * @return {undefined}
	     */
	  }, {
	    key: 'pointMoveTo',
	    value: function pointMoveTo(pos) {
	      var rect = _react2['default'].findDOMNode(this).getBoundingClientRect();
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
/* 46 */
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
	
	var _react = __webpack_require__(15);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _colr = __webpack_require__(43);
	
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
/* 47 */
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
	
	var _react = __webpack_require__(15);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _rcUtil = __webpack_require__(23);
	
	var _rcUtil2 = _interopRequireDefault(_rcUtil);
	
	var _objectAssign = __webpack_require__(48);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
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
	    key: 'getPrefixCls',
	    value: function getPrefixCls() {
	      return this.props.rootPrefixCls + '-ribbon';
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
	      // 新的对象, 避免引用
	      var hsv = (0, _objectAssign2['default'])({}, this.props.hsv, {
	        h: hue
	      });
	      this.props.onChange(hsv);
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
/* 48 */
/***/ function(module, exports) {

	'use strict';
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;
	
	function ToObject(val) {
		if (val == null) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}
	
		return Object(val);
	}
	
	function ownEnumerableKeys(obj) {
		var keys = Object.getOwnPropertyNames(obj);
	
		if (Object.getOwnPropertySymbols) {
			keys = keys.concat(Object.getOwnPropertySymbols(obj));
		}
	
		return keys.filter(function (key) {
			return propIsEnumerable.call(obj, key);
		});
	}
	
	module.exports = Object.assign || function (target, source) {
		var from;
		var keys;
		var to = ToObject(target);
	
		for (var s = 1; s < arguments.length; s++) {
			from = arguments[s];
			keys = ownEnumerableKeys(Object(from));
	
			for (var i = 0; i < keys.length; i++) {
				to[keys[i]] = from[keys[i]];
			}
		}
	
		return to;
	};


/***/ },
/* 49 */
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
	
	var _react = __webpack_require__(15);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _colr = __webpack_require__(43);
	
	var _colr2 = _interopRequireDefault(_colr);
	
	var _rcUtil = __webpack_require__(23);
	
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
	  }, {
	    key: 'pointMoveTo',
	    value: function pointMoveTo(coords) {
	      var rect = _react2['default'].findDOMNode(this).getBoundingClientRect();
	      var width = rect.width;
	      var left = coords.x - rect.left;
	
	      left = Math.max(0, left);
	      left = Math.min(left, width);
	
	      var alpha = Math.floor(left / width * 100);
	
	      this.props.onChange(alpha);
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
/* 50 */
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
	
	var _react = __webpack_require__(15);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _colr = __webpack_require__(43);
	
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
/* 51 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function validationColor(props, propName, componentName) {
	  if (props[propName] && !/^#[0-9a-fA-F]{3,6}$/.test(props[propName])) {
	    return new Error(componentName + '.props.' + propName + ' Validation failed!');
	  }
	};

/***/ }
/******/ ]);
//# sourceMappingURL=common.js.map