import classNames from 'classnames';
import type { FC } from 'react';
import React, { useRef } from 'react';
import useColorDrag from '../hooks/useColorDrag';
import type { baseProps, HsvaColorType } from '../interface';
import { calculateColor, calculateOffset, ColorPickerPrefixCls } from '../util';
import Palette from './Palette';

import Gradient from './Gradient';
import Handler from './Handler';
import Transform from './Transform';

interface SliderProps extends baseProps {
  gradientColors: string[];
  direction?: string;
  type?: HsvaColorType;
  value?: string;
}

const Slider: FC<SliderProps> = ({
  gradientColors = [],
  direction = 'to right',
  type = 'hue',
  color,
  value,
  onChange,
  prefixCls = ColorPickerPrefixCls,
}) => {
  const sliderRef = useRef();
  const transformRef = useRef();
  const [offest, dragStartHandle] = useColorDrag({
    color,
    targetRef: transformRef,
    containerRef: sliderRef,
    calculate: containerRef =>
      calculateOffset(containerRef, transformRef, color, type),
    onDragChange: offsetValue => {
      onChange(
        calculateColor({
          offset: offsetValue,
          targetRef: transformRef,
          containerRef: sliderRef,
          color,
          type,
        }),
      );
    },
    direction: 'x',
  });

  return (
    <div
      ref={sliderRef}
      className={classNames(
        `${prefixCls}-slider`,
        `${prefixCls}-slider-${type}`,
      )}
      onMouseDown={dragStartHandle}
    >
      <Palette prefixCls={prefixCls}>
        <Transform offset={offest} ref={transformRef}>
          <Handler size="small" color={value} prefixCls={prefixCls} />
        </Transform>
        <Gradient
          colors={gradientColors}
          direction={direction}
          type={type}
          prefixCls={prefixCls}
        />
      </Palette>
    </div>
  );
};

export default Slider;
