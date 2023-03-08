import { useContext } from '@rc-component/context';
import type { FC } from 'react';
import React, { useMemo, useRef } from 'react';
import ColorPickerContext from '../context';
import useColorDrag from '../hooks/useColorDrag';
import Square from '../shape/Square';
import { calculateColor, calculateOffset, getFormatColor } from '../util';
import Gradient from './Gradient';
import Point from './Point';
import Transform from './Transform';

const Picker: FC = () => {
  const pickerRef = useRef();
  const transformRef = useRef();
  const { color, prefixCls, hue, handleChange } = useContext(
    ColorPickerContext,
    ['color', 'prefixCls', 'hue', 'handleChange'],
  );
  const [offest, dragStart] = useColorDrag({
    color,
    containerRef: pickerRef,
    targetRef: transformRef,
    calculate: containerRef =>
      calculateOffset(containerRef, transformRef, color),
    onDragChange: offsetValue =>
      handleChange(
        calculateColor({
          offset: offsetValue,
          targetRef: transformRef,
          containerRef: pickerRef,
          color,
          hue,
        }),
      ),
  });

  const formatColor = useMemo(() => `hsl(${hue},100%, 50%)`, [hue]);

  return (
    <div
      ref={pickerRef}
      className={`${prefixCls}-picker`}
      onMouseDown={dragStart}
    >
      <Square>
        <>
          <Transform offset={offest} ref={transformRef}>
            <Point color={getFormatColor(color, 'rgb')} />
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
        </>
      </Square>
    </div>
  );
};

export default Picker;
