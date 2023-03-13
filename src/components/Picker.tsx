import React, { FC, useRef } from 'react';
import useColorDrag from '../hooks/useColorDrag';
import { baseProps } from '../interface';
import {
  calculateColor,
  calculateOffset,
  ColorPickerPrefixCls,
  getFormatColor,
} from '../util';

import Gradient from './Gradient';
import Handler from './Handler';
import Palette from './Palette';
import Transform from './Transform';

export interface PickerProps extends baseProps {}

const Picker: FC<PickerProps> = ({
  color,
  onChange,
  prefixCls = ColorPickerPrefixCls,
}) => {
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
    >
      <Palette prefixCls={prefixCls}>
        <Transform offset={offest} ref={transformRef}>
          <Handler color={getFormatColor(color, 'rgb')} prefixCls={prefixCls} />
        </Transform>
        <Gradient
          colors={[`hsl(${color.toHsv().h},100%, 50%)`]}
          prefixCls={prefixCls}
        >
          <Gradient
            prefixCls={prefixCls}
            colors={['rgb(255, 255, 255)', 'rgba(255, 255, 255, 0)']}
            direction="to right"
          >
            <Gradient
              prefixCls={prefixCls}
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
