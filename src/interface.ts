import type { TinyColor } from '@ctrl/tinycolor';

export interface Color extends TinyColor {}

export type ColorFormat = 'rgb' | 'hex' | 'hsb';

export type TriggerPlacement =
  | 'top'
  | 'topLeft'
  | 'topRight'
  | 'bottom'
  | 'bottomLeft'
  | 'bottomRight';

export type Hsv = {
  h: number;
  s: number;
  v: number;
  a: number;
};

export type HsvaColorType = 'Hue' | 'Saturation' | 'Lightness' | 'Alpha';

export type TransformOffset = {
  x: number;
  y: number;
};
