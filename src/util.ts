import { Color } from './color';
import type { Hsva, HsvaColorType, TransformOffset } from './interface';

export const ColorPickerPrefixCls = 'rc-color';

export const generateColor = (color: Color | string | Hsva): Color => {
  if (color instanceof Color) {
    return color;
  }
  return new Color(color);
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
