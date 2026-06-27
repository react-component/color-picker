<div align="center">
  <h1>@rc-component/color-picker</h1>
  <p><sub><img alt="Ant Design" height="14" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" style="vertical-align: -0.125em;" /> Ant Design 生态的一部分。</sub></p>
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

- 支持受控和非受控颜色值。
- 支持字符串、数字、RGB、RGBA、HSB、HSBA 和 `Color` 输入。
- 提供带有更改和拖动完成回调的色调和 alpha 控件。
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
| defaultValue     | 默认颜色值                     | `ColorGenInput`                                                              | -                 |
| disabled         | 颜色选择器是否禁用    | boolean                                                                      | false             |
| disabledAlpha    | 是否隐藏alpha滑块        | boolean                                                                      | false             |
| panelRender      | 自定义面板渲染器                   | `(panel: React.ReactElement) => React.ReactElement`                          | -                 |
| prefixCls        | 组件className前缀             | string                                                                       | `rc-color-picker` |
| 价值            | 当前颜色值                     | `ColorGenInput`                                                              | -                 |
| onChange         | 颜色变化时的回调             | `(color: Color, info?: { type?: 'hue' \| 'alpha'; value?: number }) => void` | -                 |
| onChangeComplete | 拖动操作完成时的回调 | `(color: Color, info?: { type?: 'hue' \| 'alpha'; value?: number }) => void` | -                 |

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

包构建完成后，发布流程由 `@rc-component/np` 通过 `rc-np` 命令处理。

## 许可证

@rc-component/color-picker 基于 [MIT](./LICENSE.md) 许可证发布。
