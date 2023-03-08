import { useContext } from '@rc-component/context';
import type { FC } from 'react';
import React from 'react';
import ColorPickerContext from '../context';

const Square: FC<{
  children?: React.ReactElement;
  style?: React.CSSProperties;
}> = ({ children, style }) => {
  const prefixCls = useContext(ColorPickerContext, 'prefixCls');
  return (
    <div
      className={`${prefixCls}-shape-square`}
      style={{
        position: 'relative',
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default Square;
