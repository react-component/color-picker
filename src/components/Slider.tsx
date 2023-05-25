import classNames from 'classnames';
import type { FC } from 'react';
import React, { useRef } from 'react';
import useColorDrag from '../hooks/useColorDrag';
import type { BaseColorPickerProps, HsbaColorType } from '../interface';
import { calculateColor, calculateOffset } from '../util';
import Palette from './Palette';

import Gradient from './Gradient';
import Handler from './Handler';
import Transform from './Transform';

interface SliderProps extends BaseColorPickerProps {
  gradientColors: string[];
  direction?: string;
  type?: HsbaColorType;
  value?: string;
}

const Slider: FC<SliderProps> = ({
  gradientColors,
  direction,
  type = 'hue',
  color,
  value,
  onChange,
  onChangeComplete,
  disabled,
  prefixCls,
}) => {
  const sliderRef = useRef();
  const transformRef = useRef();
  const [offset, dragStartHandle] = useColorDrag({
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
    onDragChangeComplete() {
      onChangeComplete?.(type);
    },
    direction: 'x',
    disabledDrag: disabled,
  });

  return (
    <div
      ref={sliderRef}
      className={classNames(
        `${prefixCls}-slider`,
        `${prefixCls}-slider-${type}`,
      )}
      onMouseDown={dragStartHandle}
      onTouchStart={dragStartHandle}
    >
      <Palette prefixCls={prefixCls}>
        <Transform offset={offset} ref={transformRef}>
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
