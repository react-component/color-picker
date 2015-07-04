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

## Browser Support

|![IE](https://raw.github.com/alrra/browser-logos/master/internet-explorer/internet-explorer_48x48.png) | ![Chrome](https://raw.github.com/alrra/browser-logos/master/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/firefox/firefox_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/opera/opera_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/safari/safari_48x48.png)|
| --- | --- | --- | --- | --- |
| IE 10+ ✔ | Chrome 31.0+ ✔ | Firefox 31.0+ ✔ | Opera 30.0+ ✔ | Safari 7.0+ ✔ |

## Screenshots

<img src=https://cloud.githubusercontent.com/assets/1292082/8275606/8608e8f8-18db-11e5-8d10-703253db2a4f.png width=238 />

## Development

```
npm install
npm start
```

## Example

online example: http://noyobo.com/react-colors-picker/

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

### ColorPicker.props

name|type|default|description
---|---|---|---
defaultColor|String|#ff0000|color board default background color
visible| Boolean | false | Picker default is invisible, contrary
align| [left/right] | right | Picker positon base for trigger
onChange| Function | noop | when select color

### ColorPicker.Picker.props

name|type|default|description
---|---|---|---
defaultColor|String|#ff0000|color board default background color
visible| Boolean | true | root node is visible
style | Object | {} | root node CSS style
onChange|Function| | when select color trigger
onFocus|Function| | when picker visiable trigger
onBlur|Function| | when picker loose focus

## License

react-colors-picker is released under the MIT license.
