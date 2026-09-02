<div align="center">
  <h1>@rc-component/color-picker</h1>
  <p><sub><a href="https://ant.design"><img alt="Ant Design" height="14" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" style="vertical-align: -0.125em;" /></a> Ant Design 生态的一部分。</sub></p>
  <p>🎨 紧凑的 React 颜色选择面板。</p>

  <p>
    <a href="https://npmjs.org/package/@rc-component/color-picker"><img alt="NPM version" src="https://img.shields.io/npm/v/@rc-component/color-picker.svg?style=flat-square"></a>
    <a href="https://npmjs.org/package/@rc-component/color-picker"><img alt="npm downloads" src="https://img.shields.io/npm/dm/@rc-component/color-picker.svg?style=flat-square"></a>
    <a href="https://github.com/react-component/color-picker/actions/workflows/main.yml"><img alt="build status" src="https://github.com/react-component/color-picker/actions/workflows/main.yml/badge.svg"></a>
    <a href="https://app.codecov.io/gh/react-component/color-picker"><img alt="Codecov" src="https://img.shields.io/codecov/c/github/react-component/color-picker/master.svg?style=flat-square"></a>
    <a href="https://bundlephobia.com/package/@rc-component/color-picker"><img alt="bundle size" src="https://img.shields.io/bundlephobia/minzip/@rc-component/color-picker?style=flat-square"></a>
    <a href="https://github.com/umijs/dumi"><img alt="dumi" src="https://img.shields.io/badge/docs%20by-dumi-blue?style=flat-square"></a>
  </p>
</div>

<p align="center"><a href="./README.md">English</a> | 简体中文</p>

## 特性

- 支持受控和非受控颜色值。
- 支持字符串、数字、RGB、RGBA、HSB、HSBA 和 `Color` 输入。
- 提供带有更改和拖动完成回调的色调和 alpha 控件。
- 暴露 `Color` 辅助方法，用于 hex、RGB 和 HSB 转换。
- 提供可用键盘操作、带屏幕阅读器标签的控件，文案可覆盖。

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

运行本地 dumi 站点：

```bash
npm install
npm start
```

然后打开 `http://localhost:8000`。

## API

### ColorPicker

| 参数             | 说明                     | 类型                                                                         | 默认值            |
| ---------------- | ------------------------ | ---------------------------------------------------------------------------- | ----------------- |
| defaultValue     | 默认颜色值               | `ColorGenInput`                                                              | -                 |
| disabled         | 颜色选择器是否禁用       | boolean                                                                      | false             |
| disabledAlpha    | 是否隐藏 alpha 滑块      | boolean                                                                      | false             |
| locale           | 选择器与滑块的无障碍标签 | [`Locale`](#locale)                                                          | -                 |
| panelRender      | 自定义面板渲染器         | `(panel: React.ReactElement) => React.ReactElement`                          | -                 |
| prefixCls        | 组件 className 前缀      | string                                                                       | `rc-color-picker` |
| value            | 当前颜色值               | `ColorGenInput`                                                              | -                 |
| onChange         | 颜色变化时的回调         | `(color: Color, info?: { type?: 'hue' \| 'alpha'; value?: number }) => void` | -                 |
| onChangeComplete | 拖动操作完成时的回调     | `(color: Color, info?: { type?: 'hue' \| 'alpha'; value?: number }) => void` | -                 |

### Locale

覆盖控件向辅助技术暴露的无障碍名称。所有字段均为可选，未传入时回退到默认值，因此只需覆盖需要翻译的字段。

| 参数              | 说明                                      | 类型   | 默认值         |
| ----------------- | ----------------------------------------- | ------ | -------------- |
| alpha             | alpha 滑块的 `aria-label`                 | string | `Alpha`        |
| brightness        | 明度轴 `aria-valuetext` 中的通道名称      | string | `Brightness`   |
| hue               | 色相滑块的 `aria-label`                   | string | `Hue`          |
| picker            | 饱和度轴与明度轴的 `aria-label`           | string | `Color picker` |
| pickerDescription | 饱和度轴与明度轴的 `aria-roledescription` | string | `2D slider`    |
| saturation        | 饱和度轴 `aria-valuetext` 中的通道名称    | string | `Saturation`   |

```tsx | pure
<ColorPicker
  locale={{
    picker: '颜色选择器',
    pickerDescription: '二维滑块',
    hue: '色相',
    alpha: '透明度',
    saturation: '饱和度',
    brightness: '明度',
  }}
/>
```

二维选择区域为每个轴渲染一个 range 输入框。两者共享 `picker` 名称与 `pickerDescription` 角色描述，并各自通过 `aria-valuetext` 播报自身通道（如 `Saturation: 91%`、`Brightness: 100%`），因此 `saturation` 与 `brightness` 是通道名称而非完整标签。

### Color

| Method      | 说明                  | 类型                                                   |
| ----------- | --------------------- | ------------------------------------------------------ |
| toHexString | 转换为 hex 颜色字符串 | `() => string`                                         |
| toHsb       | 转换为 HSB 对象       | `() => { h: number; s: number; b: number; a: number }` |
| toHsbString | 转换为 HSB 颜色字符串 | `() => string`                                         |
| toRgb       | 转换为 RGB 对象       | `() => { r: number; g: number; b: number; a: number }` |
| toRgbString | 转换为 RGB 颜色字符串 | `() => string`                                         |

### ColorBlock

独立的色块组件，用于构建自定义触发器与面板。

```tsx | pure
import { ColorBlock } from '@rc-component/color-picker';

<ColorBlock
  color="#1677ff"
  prefixCls="rc-color-picker"
  title="当前颜色"
  onClick={handleClick}
/>;
```

| 参数      | 说明                   | 类型                                   | 默认值 |
| --------- | ---------------------- | -------------------------------------- | ------ |
| color     | 用于填充色块的颜色     | string                                 | -      |
| prefixCls | 组件 className 前缀    | string                                 | -      |
| className | 最外层元素的 className | string                                 | -      |
| style     | 最外层元素的样式       | `React.CSSProperties`                  | -      |
| ...rest   | 透传到最外层 `div`     | `React.HTMLAttributes<HTMLDivElement>` | -      |

`ColorBlockProps` 继承 `React.HTMLAttributes<HTMLDivElement>`，因此任意标准 div 属性或事件处理器（`onClick`、`title`、`role`、`tabIndex`、`data-*`、`aria-*`）都会透传到最外层元素。类型上还存在 `innerClassName` 与 `innerStyle`，但它们是 antd 语义化结构的内部实现，请视为私有。

传入 `onClick` 时，色块还会变成可通过键盘操作的按钮：自动带上 `role="button"`、`tabIndex={0}`、默认取 `color` 的 `aria-label`，并且 `Enter` / `Space` 与鼠标点击等效。你自行传入的 `role`、`tabIndex` 或 `aria-label` 仍会覆盖这些默认值；你的 `onKeyDown` 会与内置的键盘激活组合执行，而不会将其替换——若要阻止激活，可在其中调用 `event.preventDefault()`，与原生按钮的行为一致。未传 `onClick` 时，色块保持为普通的、不可聚焦且无无障碍名称的 `div`。

## 本地开发

```bash
npm install
npm start
```

dumi 站点默认运行在 `http://localhost:8000`。

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

@rc-component/color-picker 基于 [MIT](./LICENSE) 许可证发布。
