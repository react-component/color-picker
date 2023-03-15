import type { ColorInput, HSVA, Numberify } from '@ctrl/tinycolor';
import { TinyColor } from '@ctrl/tinycolor';

export class Color {
  /** Original Color object */
  private metaColor: TinyColor;

  private originToHsvString: () => string;

  private originToHsv: () => Numberify<HSVA>;

  constructor(color?: ColorInput) {
    this.metaColor = new TinyColor(color);
    this.originToHsvString = this.metaColor.toHsvString.bind(this.metaColor);
    this.originToHsv = this.metaColor.toHsv.bind(this.metaColor);
  }
  /**
   * Returns the object as a HSVA object.
   */
  toHsv() {
    const hsv = this.originToHsv();
    const originalInput =
      typeof this.metaColor.originalInput === 'string'
        ? { h: 0, s: 0, v: 0, a: 0 }
        : (this.metaColor.originalInput as HSVA);
    const hue = Math.round(Number(originalInput.h));
    return hsv.h === 0
      ? {
          ...hsv,
          h: hue,
        }
      : hsv;
  }

  /**
   * Returns the hsva values interpolated into a string with the following format:
   * "hsva(xxx, xxx, xxx, xx)".
   */
  toHsvString() {
    const hsv = this.originToHsv();
    const originalInput =
      typeof this.metaColor.originalInput === 'string'
        ? { h: 0, s: 0, v: 0, a: 0 }
        : (this.metaColor.originalInput as HSVA);

    const saturation = Math.round(Number(originalInput.s || 0) * 100);
    const lightness = Math.round(Number(originalInput.v || 0) * 100);
    const hue = Math.round(Number(originalInput.h || 0));
    const alpha = Number(originalInput.a);
    const hsvString = `hsv(${hue}, ${saturation}%, ${lightness}%)`;
    const hsvaString = `hsva(${hue}, ${saturation}%, ${lightness}%, ${alpha.toFixed(
      alpha === 0 ? 0 : 2,
    )})`;

    if (hsv.v === 0 || hsv.s === 0) {
      return hsv.a === 1 ? hsvString : hsvaString;
    }
    return this.originToHsvString();
  }

  /**
   * Returns the hex value of the color -with a # prefixed.
   * @param allow3Char will shorten hex value to 3 char if possible
   */
  toHexString(...args) {
    return this.metaColor.toHexString(...args);
  }

  /**
   * Returns the hex 8 value of the color -with a # prefixed.
   * @param allow4Char will shorten hex value to 4 char if possible
   */
  toHex8String(...args) {
    return this.metaColor.toHex8String(...args);
  }

  /**
   * Returns the RGBA values interpolated into a string with the following format:
   * "RGBA(xxx, xxx, xxx, xx)".
   */
  toRgbString() {
    return this.metaColor.toRgbString();
  }

  /**
   * Sets the alpha value on the current color.
   *
   * @param alpha - The new alpha value. The accepted range is 0-1.
   */
  setAlpha(...args) {
    return this.metaColor.setAlpha(...args);
  }
}
