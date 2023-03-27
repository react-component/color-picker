import type { HSVA, Numberify } from '@ctrl/tinycolor';
import { TinyColor } from '@ctrl/tinycolor';
import type { ColorGenInput, HSBA } from './interface';
import { convertHsb2Hsv, getRoundNumber } from './util';
export class Color extends TinyColor {
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

  toHsb(): Numberify<HSBA> {
    let hsv = this.toHsv();
    if (typeof this.originalInput === 'object' && this.originalInput) {
      if (Reflect.has(this.originalInput, 'h')) {
        hsv = this.originalInput as Numberify<HSVA>;
      }
    }

    const { v, ...resets } = hsv;
    return {
      ...resets,
      b: hsv.v,
    };
  }
}
