import { useContext } from '@rc-component/context';
import React, { FC, useMemo } from 'react';
import ColorPickerContext from '../context';
import Gradient from './Gradient';

const ColorDisplay: FC<{
  children?: React.ReactNode;
}> = ({ children }) => {
  const { color, prefixCls } = useContext(ColorPickerContext, [
    'prefixCls',
    'color',
  ]);

  const formatRgbColor = useMemo(() => color.toRgbString(), [color]);

  return (
    <div className={`${prefixCls}-display`}>
      <div className={`${prefixCls}-display-block`}>
        <Gradient
          colors={[formatRgbColor, formatRgbColor]}
          direction="to right"
        />
      </div>
      <div className={`${prefixCls}-display-slot`}>{children}</div>
    </div>
  );
};

export default ColorDisplay;
