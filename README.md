# @rc-component/color-picker

React Color Picker.

[![NPM version][npm-image]][npm-url] [![dumi](https://img.shields.io/badge/docs%20by-dumi-blue?style=flat-square)](https://github.com/umijs/dumi) [![build status][github-actions-image]][github-actions-url] [![Test coverage][codecov-image]][codecov-url] [![Dependencies][david-image]][david-url] [![DevDependencies][david-dev-image]][david-dev-url] [![npm download][download-image]][download-url] [![bundle size][bundlephobia-image]][bundlephobia-url]

[npm-image]: http://img.shields.io/npm/v/@rc-component/color-picker.svg?style=flat-square
[npm-url]: http://npmjs.org/package/@rc-component/color-picker
[github-actions-image]: https://github.com/react-component/table/workflows/CI/badge.svg
[github-actions-url]: https://github.com/react-component/table/actions
[coveralls-image]: https://img.shields.io/coveralls/react-component/table.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/react-component/table?branch=master
[codecov-image]: https://img.shields.io/codecov/c/github/react-component/table/master.svg?style=flat-square
[codecov-url]: https://codecov.io/gh/react-component/table/branch/master
[david-url]: https://david-dm.org/react-component/table
[david-image]: https://david-dm.org/react-component/table/status.svg?style=flat-square
[david-dev-url]: https://david-dm.org/react-component/table?type=dev
[david-dev-image]: https://david-dm.org/react-component/table/dev-status.svg?style=flat-square
[download-image]: https://img.shields.io/npm/dm/@rc-component/color-picker.svg?style=flat-square
[download-url]: https://npmjs.org/package/@rc-component/color-picker
[bundlephobia-url]: https://bundlephobia.com/result?p=@rc-component/color-picker
[bundlephobia-image]: https://badgen.net/bundlephobia/minzip/@rc-component/color-picker

## install

[![@rc-component/color-picker](https://nodei.co/npm/@rc-component/color-picker.png)](https://npmjs.org/package/@rc-component/color-picker)

## Development

```
npm install
npm start
```

## Example

http://localhost:8000

## Usage

```js
import ColorPicker from '@rc-component/color-picker';

export default () => <ColorPicker />;
```

## API

<!-- prettier-ignore -->
| Property | Description | Type | Default |
| :-- | :-- | :-- | :-- |
| value | Value of color | string \| `Color` | - |
| defaultValue | Default value of color | string \| `Color` | - |
| onChange | Callback when `value` is changed | `(value: Color, hex: string) => void` | - |
| children | Trigger of ColorPicker | React.ReactNode | - |
| trigger | ColorPicker trigger mode | `hover` \| `click` | `click` |
| open | Whether to show popup | boolean | - |
| onOpenChange | Callback when `open` is changed | `(open: boolean) => void` | - |
| disabled | Disable ColorPicker | boolean | - |
| placement | Placement of popup | `top` \| `topLeft` \| `topRight` \| `bottom` \| `bottomLeft` \| `bottomRight` | `bottomLeft` |
| arrow | Configuration for popup arrow | `boolean \| { pointAtCenter: boolean }` | `true` | - |

### Color

<!-- prettier-ignore -->
| Property | Description | Type | Default |
| :-- | :-- | :-- | :-- |
| toHexString | Convert to `hex` format color string, like `#ffffff` | `() => string` | - |
| toHsb | Convert to `hsb` object, like `{ h: 0, s: 0, b: 0, a: 0 }`  | `() => ({ h: number, s: number, b: number, a number })` | - |
| toHsbString | Convert to `hsb` format color string, like `hsba(0, 0%, 0%, 0)` | `() => string` | - |
| toRgb | Convert to `rgb` object,  like `{ r: 0, g: 0, b: 0, a: 0 }` | `() => ({ r: number, g: number, b: number, a number })` | - |
| toRgbString | Convert to `rgb` format color string, like `rgba(0, 0, 0, 0)` | `() => string` | - |

## Test Case

```
npm test
or
npm run coverage
```

## License

@rc-component/color-picker is released under the MIT license.
