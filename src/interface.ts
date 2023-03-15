import type { HSVA } from '@ctrl/tinycolor';
import type { Color } from './color';

export type ColorFormat = 'rgb' | 'hex' | 'hsb';

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

export interface BaseColorPickerProps {
  color: Color;
  prefixCls?: string;
  onChange: (color: Color) => void;
}
