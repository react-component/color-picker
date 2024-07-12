import type { ColorInput, HSV } from '@ant-design/fast-color';
import { FastColor } from '@ant-design/fast-color';
import type { ColorGenInput, HSB } from './interface';

export const getRoundNumber = (value: number) => Math.round(Number(value || 0));

const convertHsb2Hsv = (color: ColorGenInput): ColorInput => {
  if (color instanceof FastColor) {
    return color;
  }

  if (color && typeof color === 'object' && 'h' in color && 'b' in color) {
    const { b, ...resets } = color as HSB;
    return {
      ...resets,
      v: b,
    } as HSV;
  }
  if (typeof color === 'string' && /hsb/.test(color)) {
    return color.replace(/hsb/, 'hsv');
  }
  return color as ColorInput;
};

export class Color extends FastColor {
  constructor(color: ColorGenInput) {
    super(convertHsb2Hsv(color));
  }

  toHsbString() {
    const hsb = this.toHsb();
    const saturation = getRoundNumber(hsb.s * 100);
    const lightness = getRoundNumber(hsb.b * 100);
    const hue = getRoundNumber(hsb.h);
    const alpha = hsb.a;
    const hsbString = `hsb(${hue}, ${saturation}%, ${lightness}%)`;
    const hsbaString = `hsba(${hue}, ${saturation}%, ${lightness}%, ${alpha.toFixed(
      alpha === 0 ? 0 : 2,
    )})`;
    return alpha === 1 ? hsbString : hsbaString;
  }

  toHsb() {
    const { v, ...resets } = this.toHsv();
    return {
      ...resets,
      b: v,
      a: this.a,
    };
  }
}
