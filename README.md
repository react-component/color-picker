# react-colors-picker
---

colors picker ui component for react

[![npm version](http://img.shields.io/npm/v/react-colors-picker.svg)](https://www.npmjs.org/package/react-colors-picker) [![npm download](http://img.shields.io/npm/dm/react-colors-picker.svg)](https://www.npmjs.org/package/react-colors-picker) [![npm engines](http://img.shields.io/node/v/react-colors-picker.svg)](https://www.npmjs.org/package/react-colors-picker) [![build status](http://img.shields.io/travis/noyobo/react-colors-picker.svg)](https://travis-ci.org/noyobo/react-colors-picker) [![Coverage Status](https://img.shields.io/coveralls/noyobo/react-colors-picker.svg)](https://coveralls.io/r/noyobo/react-colors-picker) [![npm dependencise](https://david-dm.org/noyobo/react-colors-picker.svg)](https://david-dm.org/noyobo/react-colors-picker)

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

online example: [http://noyobo.github.io/react-colors-picker/](http://noyobo.github.io/react-colors-picker/)

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
open| Boolean | false | control Picker visible
align| [left/right] | right | Picker positon base for trigger
onChange| Function | noop | when select color

### ColorPicker.Picker.props

name|type|default|description
---|---|---|---
defaultColor|String|#ff0000|color board default background color
style | Object | {} | root node CSS style
onChange|Function| | when select color trigger
onFocus|Function| | when picker focus trigger
onBlur|Function| | when picker loose focus

## License

react-colors-picker is released under the MIT license.
