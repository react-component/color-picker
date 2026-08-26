<div align="center">
  <h1>@rc-component/color-picker</h1>
  <p><sub><a href="https://ant.design"><img alt="Ant Design" height="14" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" style="vertical-align: -0.125em;" /></a> Part of the Ant Design ecosystem.</sub></p>
  <p>🎨 A compact color picker panel for React.</p>

  <p>
    <a href="https://npmjs.org/package/@rc-component/color-picker"><img alt="NPM version" src="https://img.shields.io/npm/v/@rc-component/color-picker.svg?style=flat-square"></a>
    <a href="https://npmjs.org/package/@rc-component/color-picker"><img alt="npm downloads" src="https://img.shields.io/npm/dm/@rc-component/color-picker.svg?style=flat-square"></a>
    <a href="https://github.com/react-component/color-picker/actions/workflows/main.yml"><img alt="build status" src="https://github.com/react-component/color-picker/actions/workflows/main.yml/badge.svg"></a>
    <a href="https://app.codecov.io/gh/react-component/color-picker"><img alt="Codecov" src="https://img.shields.io/codecov/c/github/react-component/color-picker/master.svg?style=flat-square"></a>
    <a href="https://bundlephobia.com/package/@rc-component/color-picker"><img alt="bundle size" src="https://img.shields.io/bundlephobia/minzip/@rc-component/color-picker?style=flat-square"></a>
    <a href="https://github.com/umijs/dumi"><img alt="dumi" src="https://img.shields.io/badge/docs%20by-dumi-blue?style=flat-square"></a>
  </p>
</div>

<p align="center">English | <a href="./README.zh-CN.md">简体中文</a></p>

## Highlights

- Supports controlled and uncontrolled color values.
- Accepts string, number, RGB, RGBA, HSB, HSBA, and `Color` inputs.
- Provides hue and alpha controls with change and drag-complete callbacks.
- Exposes `Color` helpers for hex, RGB, and HSB conversions.
- Exposes keyboard-operable, screen-reader-labelled controls with overridable strings.

## Install

```bash
npm install @rc-component/color-picker
```

## Usage

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

## Examples

Run the local dumi site:

```bash
npm install
npm start
```

Then open `http://localhost:8000`.

## API

### ColorPicker

| Property         | Description                                  | Type                                                                         | Default           |
| ---------------- | -------------------------------------------- | ---------------------------------------------------------------------------- | ----------------- |
| defaultValue     | Default color value                          | `ColorGenInput`                                                              | -                 |
| disabled         | Whether the color picker is disabled         | boolean                                                                      | false             |
| disabledAlpha    | Whether to hide the alpha slider             | boolean                                                                      | false             |
| locale           | Accessible labels for the picker and sliders | [`Locale`](#locale)                                                          | -                 |
| panelRender      | Custom panel renderer                        | `(panel: React.ReactElement) => React.ReactElement`                          | -                 |
| prefixCls        | Component class name prefix                  | string                                                                       | `rc-color-picker` |
| value            | Current color value                          | `ColorGenInput`                                                              | -                 |
| onChange         | Callback when color changes                  | `(color: Color, info?: { type?: 'hue' \| 'alpha'; value?: number }) => void` | -                 |
| onChangeComplete | Callback when a drag operation finishes      | `(color: Color, info?: { type?: 'hue' \| 'alpha'; value?: number }) => void` | -                 |

### Locale

Overrides the accessible names the controls expose to assistive technology. Every key is optional and falls back to its default, so pass only the strings you need to translate.

| Property          | Description                                                   | Type   | Default        |
| ----------------- | ------------------------------------------------------------- | ------ | -------------- |
| alpha             | `aria-label` of the alpha slider                              | string | `Alpha`        |
| brightness        | Channel name in the brightness axis `aria-valuetext`          | string | `Brightness`   |
| hue               | `aria-label` of the hue slider                                | string | `Hue`          |
| picker            | `aria-label` of both saturation and brightness axes           | string | `Color picker` |
| pickerDescription | `aria-roledescription` of both saturation and brightness axes | string | `2D slider`    |
| saturation        | Channel name in the saturation axis `aria-valuetext`          | string | `Saturation`   |

```tsx | pure
<ColorPicker
  locale={{
    picker: 'Sélecteur de couleur',
    pickerDescription: 'Curseur 2D',
    hue: 'Teinte',
    alpha: 'Transparence',
    saturation: 'Saturation',
    brightness: 'Luminosité',
  }}
/>
```

The 2-D area renders one range input per axis. Both share the `picker` name and the `pickerDescription` role description, while each announces its own channel through `aria-valuetext` — `Saturation: 91%` and `Brightness: 100%` — so `saturation` and `brightness` are channel names rather than whole labels.

### Color

| Method      | Description                 | Type                                                   |
| ----------- | --------------------------- | ------------------------------------------------------ |
| toHexString | Convert to hex color string | `() => string`                                         |
| toHsb       | Convert to HSB object       | `() => { h: number; s: number; b: number; a: number }` |
| toHsbString | Convert to HSB color string | `() => string`                                         |
| toRgb       | Convert to RGB object       | `() => { r: number; g: number; b: number; a: number }` |
| toRgbString | Convert to RGB color string | `() => string`                                         |

### ColorBlock

A standalone swatch, exported for building custom triggers and panels.

```tsx | pure
import { ColorBlock } from '@rc-component/color-picker';

<ColorBlock
  color="#1677ff"
  prefixCls="rc-color-picker"
  title="Current color"
  onClick={handleClick}
/>;
```

| Property  | Description                     | Type                                   | Default |
| --------- | ------------------------------- | -------------------------------------- | ------- |
| color     | Color used to fill the swatch   | string                                 | -       |
| prefixCls | Component class name prefix     | string                                 | -       |
| className | Class name of the outer element | string                                 | -       |
| style     | Style of the outer element      | `React.CSSProperties`                  | -       |
| ...rest   | Forwarded to the outer `div`    | `React.HTMLAttributes<HTMLDivElement>` | -       |

`ColorBlockProps` extends `React.HTMLAttributes<HTMLDivElement>`, so any standard div attribute or event handler — `onClick`, `title`, `role`, `tabIndex`, `data-*`, `aria-*` — reaches the outer element. `innerClassName` and `innerStyle` also exist on the type, but they are internal to antd's semantic structure; treat them as private.

## Development

```bash
npm install
npm start
```

The dumi site runs at `http://localhost:8000` by default.

```bash
npm test
npm run tsc
npm run lint
npm run compile
npm run build
```

## Release

```bash
npm run prepublishOnly
```

The release flow is handled by `@rc-component/np` through the `rc-np` command after the package build.

## License

@rc-component/color-picker is released under the [MIT](./LICENSE) license.
