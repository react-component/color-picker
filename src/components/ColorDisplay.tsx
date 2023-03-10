import { useContext } from '@rc-component/context';
import React, { FC, useMemo } from 'react';
import { Color } from 'src/interface';
import ColorPickerContext from '../context';
import Gradient from './Gradient';

const ColorDisplay: FC<{
  slotRender?: () => React.ReactElement;
  color: Color;
}> = ({ slotRender, color }) => {
  const prefixCls = useContext(ColorPickerContext, 'prefixCls');

  const formatRgbColor = useMemo(() => color.toRgbString(), [color]);

  return (
    <div className={`${prefixCls}-display`}>
      <div className={`${prefixCls}-display-block`}>
        <Gradient
          colors={[formatRgbColor, formatRgbColor]}
          direction="to right"
        />
      </div>
      {typeof slotRender === 'function' ? (
        <div className={`${prefixCls}-display-slot`}>{slotRender()}</div>
      ) : null}
    </div>
  );
};

export default ColorDisplay;
