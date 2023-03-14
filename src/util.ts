import type { ColorInput, Numberify } from '@ctrl/tinycolor';
import { TinyColor } from '@ctrl/tinycolor';
import type { Color, Hsva, HsvaColorType, TransformOffset } from './interface';

export const ColorPickerPrefixCls = 'rc-color';

const improveColor = (color: TinyColor) => {
  const toHsvString = color.toHsvString.bind(color);
  const toHsv = color.toHsv.bind(color);

  color.toHsvString = () => {
    const hsv = color.toHsv();
    const originalInput =
      typeof color.originalInput === 'string'
        ? { h: 0, s: 0, v: 0, a: 0 }
        : (color.originalInput as Hsva);

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
    return toHsvString();
  };

  color.toHsv = (): Numberify<Hsva> => {
    const hsv = toHsv();
    const originalInput =
      typeof color.originalInput === 'string'
        ? { h: 0, s: 0, v: 0, a: 0 }
        : (color.originalInput as Hsva);
    const hue = Math.round(Number(originalInput.h));
    return hsv.h === 0
      ? {
          ...hsv,
          h: hue,
        }
      : hsv;
  };
  return color;
};

export const generateColor = (color: Color | string | Hsva): Color => {
  if (color instanceof TinyColor) {
    return color;
  }
  const tinyColor = new TinyColor(color as ColorInput);
  return improveColor(tinyColor);
};

export const defaultColor = generateColor('#1677ff');

export const calculateColor = (props: {
  offset: TransformOffset;
  containerRef: React.RefObject<HTMLDivElement>;
  targetRef: React.RefObject<HTMLDivElement>;
  color: Color;
  type?: HsvaColorType;
}): Color => {
  const { offset, targetRef, containerRef, color, type } = props;
  const { width, height } = containerRef.current.getBoundingClientRect();
  const { width: targetWidth } = targetRef.current.getBoundingClientRect();
  const centerOffset = targetWidth / 2;
  const saturation = (offset.x + centerOffset) / width;
  const bright = 1 - (offset.y + centerOffset) / height;
  const hsv = color.toHsv();
  const alphaOffset = saturation;
  const hueOffset = ((offset.x + centerOffset) / width) * 360;

  if (type) {
    switch (type) {
      case 'hue':
        return generateColor({
          ...hsv,
          h: hueOffset <= 0 ? 0 : hueOffset,
        });
      case 'alpha':
        return generateColor({
          ...hsv,
          a: alphaOffset <= 0 ? 0 : alphaOffset,
        });
    }
  }
  return generateColor({
    ...hsv,
    h: hsv.h,
    s: saturation <= 0 ? 0 : saturation,
    v: bright >= 1 ? 1 : bright,
  });
};

export const calculateOffset = (
  containerRef: React.RefObject<HTMLDivElement>,
  targetRef: React.RefObject<HTMLDivElement>,
  color: Color,
  type?: HsvaColorType,
): TransformOffset => {
  const { width, height } = containerRef.current.getBoundingClientRect();
  const { width: targetWidth } = targetRef.current.getBoundingClientRect();
  const centerOffset = targetWidth / 2;
  const hsv = color.toHsv();
  if (type) {
    switch (type) {
      case 'hue':
        return {
          x: (hsv.h / 360) * width,
          y: -centerOffset / 3,
        };
      case 'alpha':
        return {
          x: (hsv.a / 1) * width - centerOffset,
          y: -centerOffset / 3,
        };
    }
  }
  return {
    x: hsv.s * width - centerOffset,
    y: (1 - hsv.v) * height - centerOffset,
  };
};
