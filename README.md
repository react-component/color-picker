# @programmerraj/rc-color-picker

[![License](https://badgen.net/github/license/ChocolateLoverRaj/react-json-input)](https://github.com/ChocolateLoverRaj/react-json-input/blob/main/LICENSE)
[![npm version](https://img.shields.io/npm/v/@programmerraj/rc-color-picker.svg)](https://www.npmjs.org/package/@programmerraj/rc-color-picker) 
[![npm download](https://img.shields.io/npm/dm/@programmerraj/rc-color-picker.svg)](https://www.npmjs.org/package/@programmerraj/rc-color-picker)
[![TS-Standard - Typescript Standard Style Guide](https://badgen.net/badge/code%20style/ts-standard/blue?icon=typescript)](https://github.com/standard/ts-standard)

> Notice: This package is a fork of [`rc-color-picker`](https://github.com/react-component/color-picker). [`rc-color-picker`](https://github.com/react-component/color-picker) has outdated dependencies which are deprecated and have vulnerabilities.

## Development
You can use [Storybook](https://storybook.js.org/) to see local changes.
```bash
npm run storybook
```

## Example

Online example: [http://chocolateloverraj.github.io/color-picker/](http://chocolateloverraj.github.io/color-picker/)

## Features

- Support color modes RGB and HSL
- Slider for hue
- Slider for alpha
- Preview
- Popup
- TypeScript

## Differences from [`rc-color-picker`](https://github.com/react-component/color-picker)
- Up to date dependencies without security vulnerabilities
- TypeScript
- Uses non deprecated React functions
- Maintained
- API for controlling color is different

## Contributing
Please follow ts-standard code style. You can run `npm run lint` to check for any code style errors.

## Possible New Features
- Convenienter API
- New color modes
- More options related to popup

## Install

[![rc-color-picker](https://nodei.co/npm/@programmerraj/rc-color-picker.png)](https://npmjs.org/package/@programmerraj/rc-color-picker)

## Usage

```jsx
import { ColorPicker } from '@chocolateloverraj/rc-color-picker'
import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(<ColorPicker />, container)
```
## API
See the docs at http://chocolateloverraj.github.io/color-picker/
