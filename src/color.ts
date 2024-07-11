import type { ColorInput, HSV } from '@ant-design/fast-color';
import { FastColor } from '@ant-design/fast-color';
import type { ColorGenInput, HSB, LinearColorGenInput } from './interface';

export const getRoundNumber = (value: number) => Math.round(Number(value || 0));

const convertHsb2Hsv = (color: ColorGenInput): ColorInput => {
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
  /** When multiple color, save inside */
  private colors: {
    ptg: number;
    color: FastColor;
  }[] = null;

  constructor(color: ColorGenInput | LinearColorGenInput) {
    // By default, always fill the single color
    const isLinear = Array.isArray(color);
    const singleColor = isLinear ? color[0].color : color;
    super(convertHsb2Hsv(singleColor));

    // Fill in the `colors`.
    if (isLinear) {
      this.colors = Array.from(color)
        .sort((a, b) => a.position - b.position)
        .map(info => ({
          ptg: info.position,
          color: new FastColor(convertHsb2Hsv(info.color)),
        }));
    } else if (color instanceof Color && color.isMultipleColor()) {
      // Clone colors
      this.colors = color.colors.map(({ ptg, color: c }) => ({
        ptg,
        color: c.clone(),
      }));
    }
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

  toColors(): {
    color: Color;
    position: number;
  }[] {
    if (!this.colors) {
      return [
        {
          color: this,
          position: 0,
        },
      ];
    }

    return this.colors.map(({ ptg, color }) => ({
      color: new Color(color),
      position: ptg,
    }));
  }

  isMultipleColor() {
    return !!this.colors;
  }
}
