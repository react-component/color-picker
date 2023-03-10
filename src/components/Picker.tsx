import { useContext } from '@rc-component/context';
import React, { FC, useMemo, useRef } from 'react';
import { Color } from 'src/interface';
import ColorPickerContext, { ColorPickerCtxProps } from '../context';
import useColorDrag from '../hooks/useColorDrag';
import { calculateColor, calculateOffset, getFormatColor } from '../util';

import Gradient from './Gradient';
import Handler from './Handler';
import Palette from './Palette';
import Transform from './Transform';

export interface PickerProps {
  color: Color;
  onChange: ColorPickerCtxProps['handleChange'];
}

const Picker: FC<PickerProps> = ({ color, onChange }) => {
  const pickerRef = useRef();
  const transformRef = useRef();
  const prefixCls = useContext(ColorPickerContext, 'prefixCls');
  const [offest, dragStartHandle] = useColorDrag({
    color,
    containerRef: pickerRef,
    targetRef: transformRef,
    calculate: containerRef =>
      calculateOffset(containerRef, transformRef, color),
    onDragChange: offsetValue =>
      onChange(
        calculateColor({
          offset: offsetValue,
          targetRef: transformRef,
          containerRef: pickerRef,
          color,
        }),
      ),
  });

  const formatColor = useMemo(
    () => `hsl(${color.toHsv().h},100%, 50%)`,
    [color],
  );

  return (
    <div
      ref={pickerRef}
      className={`${prefixCls}-picker`}
      onMouseDown={dragStartHandle}
    >
      <Palette>
        <Transform offset={offest} ref={transformRef}>
          <Handler color={getFormatColor(color, 'rgb')} />
        </Transform>
        <Gradient colors={[formatColor, formatColor]} direction="to right">
          <Gradient
            colors={['rgb(255, 255, 255)', 'rgba(255, 255, 255, 0)']}
            direction="to right"
          >
            <Gradient
              colors={['rgb(0, 0, 0)', 'rgba(0, 0, 0, 0)']}
              direction="to top"
            />
          </Gradient>
        </Gradient>
      </Palette>
    </div>
  );
};

export default Picker;
