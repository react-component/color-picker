import type { FC } from 'react';
import React, { useRef } from 'react';
import useColorDrag from '../hooks/useColorDrag';
import type { BaseColorPickerProps, TransformOffset } from '../interface';
import { calcOffset, calculateColor, generateColor } from '../util';

import { useEvent } from '@rc-component/util';
import Handler from './Handler';
import Palette from './Palette';
import Transform from './Transform';

export type PickerProps = BaseColorPickerProps;

const Picker: FC<PickerProps> = ({
  color,
  onChange,
  prefixCls,
  onChangeComplete,
  disabled,
  locale,
}) => {
  const pickerRef = useRef();
  const transformRef = useRef();
  const colorRef = useRef(color);

  const onDragChange = useEvent((offsetValue: TransformOffset) => {
    const calcColor = calculateColor({
      offset: offsetValue,
      targetRef: transformRef,
      containerRef: pickerRef,
      color,
    });
    colorRef.current = calcColor;
    onChange(calcColor);
  });

  const [offset, dragStartHandle] = useColorDrag({
    color,
    containerRef: pickerRef,
    targetRef: transformRef,
    calculate: () => calcOffset(color),
    onDragChange,
    onDragChangeComplete: () => onChangeComplete?.(colorRef.current),
    disabledDrag: disabled,
  });

  // ===================== Keyboard (2-D handler) =====================
  const hsb = color.toHsb();

  // Build a new color from the current one with a single HSB channel changed.
  const changeColor = (channel: 's' | 'b', percent: number) => {
    const next = generateColor({ ...hsb, [channel]: percent / 100 });
    colorRef.current = next;
    onChange(next);
  };

  return (
    <div
      ref={pickerRef}
      className={`${prefixCls}-select`}
      onMouseDown={dragStartHandle}
      onTouchStart={dragStartHandle}
    >
      <Palette prefixCls={prefixCls}>
        <Transform x={offset.x} y={offset.y} ref={transformRef}>
          <Handler
            color={color.toRgbString()}
            prefixCls={prefixCls}
            disabled={disabled}
            x={{
              'aria-label': locale.picker,
              'aria-roledescription': locale.pickerDescription,
              'aria-valuetext': `${locale.saturation} ${Math.round(
                hsb.s * 100,
              )}%, ${locale.brightness} ${Math.round(hsb.b * 100)}%`,
              min: 0,
              max: 100,
              value: hsb.s * 100,
              onChange: percent => changeColor('s', percent),
              onChangeComplete: () => onChangeComplete?.(colorRef.current),
            }}
            y={{
              min: 0,
              max: 100,
              value: hsb.b * 100,
              onChange: percent => changeColor('b', percent),
              onChangeComplete: () => onChangeComplete?.(colorRef.current),
            }}
          />
        </Transform>
        <div
          className={`${prefixCls}-saturation`}
          style={{
            backgroundColor: `hsl(${color.toHsb().h},100%, 50%)`,
            backgroundImage:
              'linear-gradient(0deg, #000, transparent),linear-gradient(90deg, #fff, hsla(0, 0%, 100%, 0))',
          }}
        />
      </Palette>
    </div>
  );
};

export default Picker;
