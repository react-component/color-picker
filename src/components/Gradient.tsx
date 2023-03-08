import ColorPickerContext from '@/context';
import type { Color, HsvaColorType } from '@/interface';
import { generateColor } from '@/util';
import { useContext } from '@rc-component/context';
import type { FC } from 'react';
import React, { useMemo } from 'react';

const Gradient: FC<{
  colors: (Color | string)[];
  direction?: string;
  children?: React.ReactElement;
  type?: HsvaColorType;
}> = ({ colors, children, direction = 'to right', type }) => {
  const prefixCls = useContext(ColorPickerContext, 'prefixCls');
  const gradientColors = useMemo(
    () =>
      colors
        .map((color, idx) => {
          const result = generateColor(color);
          if (type === 'Alpha' && idx === colors.length - 1) {
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
