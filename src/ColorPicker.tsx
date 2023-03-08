import type { FC } from 'react';
import React, { useMemo } from 'react';
import { Color, ColorFormat } from './interface';
import Panel from './Panel';
import TriggerPanel from './TriggerPanel';
import { ColorPickerPrefixCls } from './util';
export interface ColorPickerProps {
  value?: string | Color;
  defaultValue?: string | Color;
  format?: ColorFormat;
  open?: boolean;
  allowClear?: boolean;
  trigger?: 'click' | 'hover';
  children?: React.ReactElement;
  disabled?: boolean;
  placement?:
    | 'top'
    | 'topLeft'
    | 'topRight'
    | 'bottom'
    | 'bottomLeft'
    | 'bottomRight';
  arrow?: boolean | { pointAtCenter: boolean };
  prefixCls?: string;
  onChange?: (value: Color, hex: string) => void;
  onOpenChange?: (open: boolean) => void;
  onFormatChange?: (format: ColorFormat) => void;
}

const ColorPicker: FC<ColorPickerProps> = props => {
  const { prefixCls = ColorPickerPrefixCls, children } = props;

  const generatePanle = useMemo(
    () => (children ? <TriggerPanel {...props} /> : <Panel {...props} />),
    [children, props],
  );

  return <div className={`${prefixCls}`}>{generatePanle}</div>;
};

export default ColorPicker;
