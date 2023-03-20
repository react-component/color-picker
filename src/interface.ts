import type { HSVA, TinyColor } from '@ctrl/tinycolor';

export type Color = TinyColor;

export type TriggerPlacement =
  | 'top'
  | 'topLeft'
  | 'topRight'
  | 'bottom'
  | 'bottomLeft'
  | 'bottomRight';

export type Hsva = HSVA;

export type HsvaColorType = 'hue' | 'alpha';

export type TransformOffset = {
  x: number;
  y: number;
};

export type TriggerType = 'click' | 'hover';

export interface BaseColorPickerProps {
  color?: Color;
  prefixCls?: string;
  onChange?: (color: Color) => void;
}
