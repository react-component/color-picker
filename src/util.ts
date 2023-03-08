import { TinyColor } from '@ctrl/tinycolor';
import type {
  Color,
  ColorFormat,
  Hsv,
  HsvaColorType,
  TransformOffset,
} from './interface';

export const ColorPickerPrefixCls = 'rc-color';

export const generateColor = (color: Color | string | Hsv) => {
  if (color instanceof TinyColor) {
    return color;
  }
  return new TinyColor(color);
};

export const defaultColor = generateColor('#1677ff');

export const getFormatColor = (color: Color | string, format: ColorFormat) => {
  switch (format) {
    case 'hex':
      return generateColor(color).toHexString();
    case 'hsb':
      return generateColor(color).toHslString();
    case 'rgb':
      return generateColor(color).toRgbString();
    default:
      return generateColor(color).toHexString();
  }
};

export const calculateColor = (props: {
  offset: TransformOffset;
  containerRef: React.RefObject<HTMLDivElement>;
  targetRef: React.RefObject<HTMLDivElement>;
  color: Color;
  type?: HsvaColorType;
  hue?: number;
}): Color => {
  const { offset, targetRef, containerRef, color, type, hue } = props;
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
      case 'Hue':
        return generateColor({
          ...hsv,
          h: hueOffset <= 0 ? 0 : hueOffset,
        });
      case 'Alpha':
        return generateColor({
          ...hsv,
          a: alphaOffset <= 0 ? 0 : alphaOffset,
        });
      default:
        break;
    }
  }

  return generateColor({
    ...hsv,
    h: hue || hsv.h,
    s: saturation < 0 ? 0 : saturation,
    v: bright > 1 ? 1 : bright,
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
      case 'Hue':
        return {
          x: (hsv.h / 360) * width,
          y: -centerOffset / 3,
        };
      case 'Alpha':
        return {
          x: (hsv.a / 1) * width - centerOffset,
          y: -centerOffset / 3,
        };
      default:
        break;
    }
  }
  return {
    x: hsv.s * width - centerOffset,
    y: (1 - hsv.v) * height - centerOffset,
  };
};
