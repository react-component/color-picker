# react-colors-picker
---

color-picker ui component for react

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![gemnasium deps][gemnasium-image]][gemnasium-url]
[![node version][node-image]][node-url]
[![npm download][download-image]][download-url]
[![Sauce Test Status](https://saucelabs.com/buildstatus/react-colors-picker)](https://saucelabs.com/u/react-colors-picker)

[![Sauce Test Status](https://saucelabs.com/browser-matrix/react-colors-picker.svg)](https://saucelabs.com/u/react-colors-picker)

[npm-image]: http://img.shields.io/npm/v/react-colors-picker.svg?style=flat-square
[npm-url]: http://npmjs.org/package/react-colors-picker
[travis-image]: https://img.shields.io/travis/noyobo/color-picker.svg?style=flat-square
[travis-url]: https://travis-ci.org/noyobo/color-picker
[coveralls-image]: https://img.shields.io/coveralls/noyobo/color-picker.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/noyobo/color-picker?branch=master
[gemnasium-image]: http://img.shields.io/gemnasium/noyobo/color-picker.svg?style=flat-square
[gemnasium-url]: https://gemnasium.com/noyobo/color-picker
[node-image]: https://img.shields.io/badge/node.js-%3E=_0.10-green.svg?style=flat-square
[node-url]: http://nodejs.org/download/
[download-image]: https://img.shields.io/npm/dm/react-colors-picker.svg?style=flat-square
[download-url]: https://npmjs.org/package/react-colors-picker

## Screenshots

<img src=https://cloud.githubusercontent.com/assets/1292082/8275606/8608e8f8-18db-11e5-8d10-703253db2a4f.png width=238 />

## Development

```
npm install
npm start
```

## Example

online example: http://noyobo.github.io/color-picker/

## Feature

* support color mode RGB HSB HSL

## install

[![react-colors-picker](https://nodei.co/npm/react-colors-picker.png)](https://npmjs.org/package/react-colors-picker)

## Usage

```js
var ColorsPicker = require('react-colors-picker');
var React = require('react');
React.render(<ColorsPicker />, container);
```

## API

### ColorPicker

name|type|default|description
---|---|---|---
defaultColor|String|#ff0000|color board default background color
visible| Boolean | false | Picker default is invisible, contrary
align| [left|right] | right | Picker positon base for trigger

### ColorPicker.Picker.props

name|type|default|description
---|---|---|---
defaultColor|String|#ff0000|color board default background color
visible| Boolean | true | root node is visible
style | Object | {} | root node CSS style
onChange|Function| | when select color trigger
onFocus|Function| | when picker visiable trigger
onBlur|Function| | when picker loose focus

## Test Case

http://localhost:8000/tests/runner.html?coverage

## Coverage

http://localhost:8000/node_modules/rc-server/node_modules/node-jscover/lib/front-end/jscoverage.html?w=http://localhost:8000/tests/runner.html?coverage

## License

react-colors-picker is released under the MIT license.
