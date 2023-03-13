import type { FC } from 'react';
import React from 'react';
import { ColorPickerPrefixCls } from '../util';

const Palette: FC<{
  children?: React.ReactNode;
  style?: React.CSSProperties;
  prefixCls?: string;
}> = ({ children, style, prefixCls = ColorPickerPrefixCls }) => {
  return (
    <div
      className={`${prefixCls}-palette`}
      style={{
        position: 'relative',
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default Palette;
