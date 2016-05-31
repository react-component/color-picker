# rc-color-picker
---

React Color Picker

[![npm version](http://img.shields.io/npm/v/rc-color-picker.svg)](https://www.npmjs.org/package/rc-color-picker) 
[![npm download](http://img.shields.io/npm/dm/rc-color-picker.svg)](https://www.npmjs.org/package/rc-color-picker)
[![npm dependency](https://david-dm.org/react-component/color-picker.svg)](https://david-dm.org/react-component/color-picker)

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

online example: [http://react-component.github.io/color-picker/](http://react-component.github.io/color-picker/)

## Feature

* support color mode RGB HSB HSL

## install

[![rc-color-picker](https://nodei.co/npm/rc-color-picker.png)](https://npmjs.org/package/rc-color-picker)

## Usage

```js
var ColorPicker = require('rc-color-picker');
var React = require('react');
var ReactDOM = require('react-dom');
ReactDOM.render(<ColorPicker />, container);
```

## API

### ColorPicker.props

name|type|default|description
---|---|---|---
animation | String    |         | index.css support 'slide-up'
transitionName | String    |         | css class for animation
getCalendarContainer| Function():Element | function(){return document.body;} | dom node where picker to be rendered into
align     | Object: alignConfig of [dom-align](https://github.com/yiminghe/dom-align)| | popup 's align config
alpha     | Number    | 100     | opacity of the color 
defaultAlpha     | Number    | 100     | opacity of the color 
color     | String    | #ff0000 | color board current background color
defaultColor     | String    | #ff0000 | color board current background color
onChange  | Function  | noop    | when select color
onOpen    | Function  | noop    | when color picker popup open
onClose   | Function  | noop    | when color picker popup close
placement | String    | topLeft | one of ['topLeft', 'topRight', 'bottomLeft', 'bottomRight']
mode      | String    |'RGB'    | color mode, support mode 'RGB', 'HSB' or 'HSL'
children   | Node      |`<span className='react-colorpicker-trigger'></span>`|additional trigger appended to picker


### ColorPicker.Panel.props

name|type|default|description
---|---|---|---
alpha    | Number  | 100     | opacity of the color 
defaultAlpha    | Number  | 100     | opacity of the color 
color    | String  | #ff0000 | color board current background color
defaultColor    | String  | #ff0000 | color board current background color
style    | Object  | {}      | root node CSS style
onChange | Function|         | when select color trigger
onFocus  | Function|         | when picker focus trigger
onBlur   | Function|         | when picker loose focus
mode     | String  |'RGB'    | color mode, support mode 'RGB', 'HSB' or 'HSL'

## License

rc-color-picker is released under the MIT license.
