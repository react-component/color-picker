import React, { FC, useRef } from 'react';
import useColorDrag from '../hooks/useColorDrag';
import { BaseColorPickerProps } from '../interface';
import { calculateColor, calculateOffset } from '../util';

import Handler from './Handler';
import Palette from './Palette';
import Transform from './Transform';

export interface PickerProps extends BaseColorPickerProps {}

const Picker: FC<PickerProps> = ({ color, onChange, prefixCls }) => {
  const pickerRef = useRef();
  const transformRef = useRef();
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

  return (
    <div
      ref={pickerRef}
      className={`${prefixCls}-picker`}
      onMouseDown={dragStartHandle}
      onTouchStart={dragStartHandle}
    >
      <Palette prefixCls={prefixCls}>
        <Transform offset={offest} ref={transformRef}>
          <Handler color={color.toRgbString()} prefixCls={prefixCls} />
        </Transform>
        <div
          className={`${prefixCls}-saturation`}
          style={{
            backgroundColor: `hsl(${color.toHsb().h},100%, 50%)`,
          }}
        />
      </Palette>
    </div>
  );
};

export default Picker;
