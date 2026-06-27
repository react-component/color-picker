<div align="center">
  <h1>@rc-component/color-picker</h1>
  <p><sub>Ant Design 生态的一部分。</sub></p>
  <img alt="Ant Design" height="32" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
  <p>🎨 紧凑的 React 颜色选择面板。</p>
</div>

<p align="center"><a href="./README.md">English</a> | 简体中文</p>


<div align="center">

[![NPM version][npm-image]][npm-url]
[![npm download][download-image]][download-url]
[![build status][github-actions-image]][github-actions-url]
[![Codecov][codecov-image]][codecov-url]
[![bundle size][bundlephobia-image]][bundlephobia-url]
[![dumi][dumi-image]][dumi-url]

</div>

[npm-image]: https://img.shields.io/npm/v/@rc-component/color-picker.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@rc-component/color-picker
[github-actions-image]: https://github.com/react-component/color-picker/actions/workflows/main.yml/badge.svg
[github-actions-url]: https://github.com/react-component/color-picker/actions/workflows/main.yml
[codecov-image]: https://img.shields.io/codecov/c/github/react-component/color-picker/master.svg?style=flat-square
[codecov-url]: https://codecov.io/gh/react-component/color-picker/branch/master
[download-image]: https://img.shields.io/npm/dm/@rc-component/color-picker.svg?style=flat-square
[download-url]: https://npmjs.org/package/@rc-component/color-picker
[bundlephobia-image]: https://img.shields.io/bundlephobia/minzip/%40rc-component%2Fcolor-picker?style=flat-square
[bundlephobia-url]: https://bundlephobia.com/package/@rc-component/color-picker
[dumi-image]: https://img.shields.io/badge/docs%20by-dumi-blue?style=flat-square
[dumi-url]: https://github.com/umijs/dumi

## 特性

- 支持 controlled and uncontrolled color values.
- 支持字符串、数字、RGB、RGBA、HSB、HSBA 和 `Color` 输入。
- 提供 hue and alpha controls with change and drag-complete callbacks.
- 暴露 `Color` helpers for hex, RGB, and HSB conversions.

## 安装

```bash
npm install @rc-component/color-picker
```

## 使用

```tsx | pure
import ColorPicker from '@rc-component/color-picker';
import '@rc-component/color-picker/assets/index.css';

export default function App() {
  return (
    <ColorPicker
      defaultValue="#1677ff"
      onChange={(color, info) => {
        console.log(color.toHexString(), info?.type);
      }}
    />
  );
}
```

## 示例

```bash
npm install
npm start
```

然后打开 `http://localhost:8000`。

## API

### ColorPicker

| 参数 | 说明 | 类型 | 默认值 |
| ---------------- | --------------------------------------- | ---------------------------------------------------------------------------- | ----------------- |
| defaultValue     | Default color value                     | `ColorGenInput`                                                              | -                 |
| disabled         | Whether the color picker is disabled    | boolean                                                                      | false             |
| disabledAlpha    | Whether to hide the alpha slider        | boolean                                                                      | false             |
| panelRender      | Custom panel renderer                   | `(panel: React.ReactElement) => React.ReactElement`                          | -                 |
| prefixCls        | Component class name prefix             | string                                                                       | `rc-color-picker` |
| value            | Current color value                     | `ColorGenInput`                                                              | -                 |
| onChange         | Callback when color changes             | `(color: Color, info?: { type?: 'hue' \| 'alpha'; value?: number }) => void` | -                 |
| onChangeComplete | Callback when a drag operation finishes | `(color: Color, info?: { type?: 'hue' \| 'alpha'; value?: number }) => void` | -                 |

### Color

| Method      | 说明                 | 类型                                                   |
| ----------- | --------------------------- | ------------------------------------------------------ |
| toHexString | Convert to hex color string | `() => string`                                         |
| toHsb       | Convert to HSB object       | `() => { h: number; s: number; b: number; a: number }` |
| toHsbString | Convert to HSB color string | `() => string`                                         |
| toRgb       | Convert to RGB object       | `() => { r: number; g: number; b: number; a: number }` |
| toRgbString | Convert to RGB color string | `() => string`                                         |

## 本地开发

```bash
npm install
npm start
```

```bash
npm test
npm run tsc
npm run lint
npm run compile
npm run build
```

## 发布

```bash
npm run prepublishOnly
```

The release flow is handled by `@rc-component/np` through the `rc-np` command after the package build.

## 许可证

@rc-component/color-picker is released under the [MIT](./LICENSE.md) license.
