import type { FC } from 'react';
import React from 'react';

const Palette: FC<{
  children?: React.ReactNode;
  style?: React.CSSProperties;
  prefixCls?: string;
}> = ({ children, style, prefixCls }) => {
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
