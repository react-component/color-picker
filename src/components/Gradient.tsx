import type { TinyColor } from '@ctrl/tinycolor';
import type { FC } from 'react';
import React, { useMemo } from 'react';
import type { Color, HsvaColorType } from '../interface';
import { generateColor } from '../util';

const Gradient: FC<{
  colors: (Color | string)[];
  direction?: string;
  children?: React.ReactElement;
  type?: HsvaColorType;
  prefixCls?: string;
}> = ({ colors, children, direction = 'to right', type, prefixCls }) => {
  const gradientColors = useMemo(
    () =>
      colors
        .map((color, idx) => {
          const result = generateColor(color) as TinyColor;
          if (type === 'alpha' && idx === colors.length - 1) {
            result.setAlpha(1);
          }
          return result.toRgbString();
        })
        .join(','),
    [colors, type],
  );

  return (
    <div
      className={`${prefixCls}-gradient`}
      style={{
        position: 'absolute',
        inset: 0,
        background:
          colors.length === 1
            ? gradientColors
            : `linear-gradient(${direction}, ${gradientColors})`,
      }}
    >
      {children}
    </div>
  );
};

export default Gradient;
