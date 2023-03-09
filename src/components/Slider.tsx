import { useContext } from '@rc-component/context';
import type { FC } from 'react';
import React, { useMemo, useRef } from 'react';
import ColorPickerContext from '../context';
import useColorDrag from '../hooks/useColorDrag';
import type { HsvaColorType } from '../interface';
import Square from '../shape/Square';
import { calculateColor, calculateOffset } from '../util';

import Gradient from './Gradient';
import Point from './Point';
import Transform from './Transform';

const Slider: FC<{
  gradientColors: string[];
  direction?: string;
  type?: HsvaColorType;
}> = ({ gradientColors = [], direction = 'to right', type = 'Hue' }) => {
  const sliderRef = useRef();
  const transformRef = useRef();
  const { color, prefixCls, hue, handleChange } = useContext(
    ColorPickerContext,
    ['color', 'prefixCls', 'hue', 'handleChange'],
  );
  const [offest, dragStart] = useColorDrag({
    color,
    targetRef: transformRef,
    containerRef: sliderRef,
    calculate: containerRef =>
      calculateOffset(containerRef, transformRef, color, type),
    onDragChange: offsetValue => {
      handleChange(
        calculateColor({
          offset: offsetValue,
          targetRef: transformRef,
          containerRef: sliderRef,
          color,
          type,
        }),
        type,
      );
    },
    direction: 'x',
  });

  const generatePointColor = useMemo(() => {
    const { r, g, b, a } = color;
    switch (type) {
      case 'Alpha':
        return `rgba(${r},${g},${b},${a})`;
      case 'Hue':
        return `hsl(${hue},100%, 50%)`;
      default:
        break;
    }
  }, [type, color, hue]);

  return (
    <div
      ref={sliderRef}
      className={`${prefixCls}-slider`}
      onMouseDown={dragStart}
    >
      <Square>
        <Transform offset={offest} ref={transformRef}>
          <Point size="small" color={generatePointColor} />
        </Transform>
        <Gradient colors={gradientColors} direction={direction} type={type} />
      </Square>
    </div>
  );
};

export default Slider;
