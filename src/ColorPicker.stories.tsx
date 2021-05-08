import React from 'react'
import { Story } from '@storybook/react'
import ColorPicker, { ColorPickerProps } from './ColorPicker'
import TinyColor from 'tinycolor2'

export const Customized: Story<ColorPickerProps> = args => <ColorPicker {...args} />

export const Animation: Story<ColorPickerProps> = args => (
  <div style={{ margin: '20px 20px 20px', textAlign: 'center' }}>
    <ColorPicker {...args} />
  </div>
)
Animation.args = {
  defaultValue: { color: new TinyColor('#36c'), open: false },
  animated: true
}

export default {
  title: 'ColorPicker',
  component: ColorPicker
}
