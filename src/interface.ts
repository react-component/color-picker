import type { HSVA } from '@ctrl/tinycolor';
import { TinyColor } from '@ctrl/tinycolor';
export interface Color
  extends Pick<
    TinyColor,
    | 'toHsv'
    | 'toHsvString'
    | 'toHex'
    | 'toHexString'
    | 'toHex8String'
    | 'toRgb'
    | 'toRgbString'
  > {}

export type ColorFormat = 'rgb' | 'hex' | 'hsb';

export type TriggerPlacement =
  | 'top'
  | 'topLeft'
  | 'topRight'
  | 'bottom'
  | 'bottomLeft'
  | 'bottomRight';

export type Hsva = HSVA;

export type HsvaColorType = 'hue' | 'saturation' | 'lightness' | 'alpha';

export type TransformOffset = {
  x: number;
  y: number;
};

export interface baseProps {
  color: Color;
  prefixCls?: string;
  onChange: (color: Color) => void;
}
