import React from 'react'
import { Story } from '@storybook/react'
import Panel, { PanelProps } from './Panel'
import TinyColor from 'tinycolor2'

export const Customized: Story<PanelProps> = args => <Panel {...args} />
Customized.args = {
  defaultValue: { color: new TinyColor('#345679'), open: false }
}

export default {
  title: 'Panel',
  component: Panel
}
