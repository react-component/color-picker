import type { FC } from 'react';
import React, { useMemo } from 'react';
import type { Color } from '../color';
import type { HsbaColorType } from '../interface';
import { generateColor } from '../util';

const Gradient: FC<{
  colors: (Color | string)[];
  direction?: string;
  children?: React.ReactElement;
  type?: HsbaColorType;
  prefixCls?: string;
}> = ({ colors, children, direction = 'to right', type, prefixCls }) => {
  const gradientColors = useMemo(
    () =>
      colors
        .map((color, idx) => {
          const result = generateColor(color);
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
        background: `linear-gradient(${direction}, ${gradientColors})`,
      }}
    >
      {children}
    </div>
  );
};

export default Gradient;
