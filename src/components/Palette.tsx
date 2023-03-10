import { useContext } from '@rc-component/context';
import type { FC } from 'react';
import React from 'react';
import ColorPickerContext from '../context';

const Palette: FC<{
  children?: React.ReactNode;
  style?: React.CSSProperties;
}> = ({ children, style }) => {
  const prefixCls = useContext(ColorPickerContext, 'prefixCls');
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
