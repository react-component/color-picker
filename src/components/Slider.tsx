import classNames from 'classnames';
import type { FC } from 'react';
import React, { useRef } from 'react';
import useColorDrag from '../hooks/useColorDrag';
import type {
  BaseColorPickerProps,
  HsbaColorType,
  TransformOffset,
} from '../interface';
import { calculateColor, calculateOffset } from '../util';
import Palette from './Palette';

import { useEvent } from 'rc-util';
import Gradient from './Gradient';
import Handler from './Handler';
import Transform from './Transform';

export interface BaseSliderProps {
  prefixCls?: string;
  colors: { percent: number; color: string }[];
  min: number;
  max: number;
  /** Some component need multiple values */
  values: number[];
  editable?: boolean;
}

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
  const colorRef = useRef(color);

  const onDragChange = useEvent((offsetValue: TransformOffset) => {
    const calcColor = calculateColor({
      offset: offsetValue,
      targetRef: transformRef,
      containerRef: sliderRef,
      color,
      type,
    });
    colorRef.current = calcColor;
    onChange(calcColor);
  });

  const [offset, dragStartHandle] = useColorDrag({
    color,
    targetRef: transformRef,
    containerRef: sliderRef,
    calculate: containerRef =>
      calculateOffset(containerRef, transformRef, color, type),
    onDragChange,
    onDragChangeComplete() {
      onChangeComplete?.(colorRef.current, type);
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
