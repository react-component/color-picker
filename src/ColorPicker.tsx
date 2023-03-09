import type { FC } from 'react';
import React from 'react';
import TriggerPanel, { TriggerPanelProps } from './TriggerPanel';
import { ColorPickerPrefixCls } from './util';
export interface ColorPickerProps extends Omit<TriggerPanelProps, 'prefixCls'> {
  prefixCls?: string;
}

const ColorPicker: FC<ColorPickerProps> = props => {
  const { prefixCls = ColorPickerPrefixCls } = props;

  return (
    <div className={`${prefixCls}`}>
      <TriggerPanel {...props} />
    </div>
  );
};

export default ColorPicker;
