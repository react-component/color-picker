import { useContext } from '@rc-component/context';
import classNames from 'classnames';
import type { FC } from 'react';
import React, { useMemo, useRef } from 'react';
import ColorPickerContext, { ColorPickerCtxProps } from '../context';
import useColorDrag from '../hooks/useColorDrag';
import type { Color, HsvaColorType } from '../interface';
import { calculateColor, calculateOffset } from '../util';
import Palette from './Palette';

import Gradient from './Gradient';
import Handler from './Handler';
import Transform from './Transform';

interface SliderProps {
  gradientColors: string[];
  direction?: string;
  type?: HsvaColorType;
  color: Color;
  onChange: ColorPickerCtxProps['handleChange'];
}

const Slider: FC<SliderProps> = ({
  gradientColors = [],
  direction = 'to right',
  type = 'hue',
  color,
  onChange,
}) => {
  const sliderRef = useRef();
  const transformRef = useRef();
  const prefixCls = useContext(ColorPickerContext, 'prefixCls');
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
        type,
      );
    },
    direction: 'x',
  });

  const generateHandlerColor = useMemo(() => {
    switch (type) {
      case 'alpha':
        return color.toRgbString();
      case 'hue':
        return `hsl(${color.toHsv().h},100%, 50%)`;
      default:
        break;
    }
  }, [type, color]);

  return (
    <div
      ref={sliderRef}
      className={classNames(
        `${prefixCls}-slider`,
        `${prefixCls}-slider-${type}`,
      )}
      onMouseDown={dragStartHandle}
    >
      <Palette>
        <Transform offset={offest} ref={transformRef}>
          <Handler size="small" color={generateHandlerColor} />
        </Transform>
        <Gradient colors={gradientColors} direction={direction} type={type} />
      </Palette>
    </div>
  );
};

export default Slider;
