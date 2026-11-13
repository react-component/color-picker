import type { FC } from 'react';
import React, { useRef } from 'react';
import type { Color } from '../color';
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
  const pickerRef = useRef<HTMLDivElement>(null);
  const transformRef = useRef<HTMLDivElement>(null);
  // Candidate color for the keyboard/drag interaction in flight, or null between
  // interactions so the controlled prop remains the source of truth.
  const colorRef = useRef<Color | null>(null);

  // The in-flight candidate while interacting, otherwise the controlled prop.
  const getLatestColor = () => colorRef.current ?? color;

  // Report the latest value, then hand authority back to the controlled prop so
  // the next interaction starts from what the parent committed.
  const completeColor = () => {
    const latest = getLatestColor();
    colorRef.current = null;
    onChangeComplete?.(latest);
  };

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
    onDragChangeComplete: completeColor,
    disabledDrag: disabled,
  });
  // ===================== Keyboard (2-D handler) =====================
  const hsb = color.toHsb();

  // Build a new color from the *latest* one, so presses batched before the
  // parent re-renders still chain off each other.
  const changeColor = (channel: 's' | 'b', percent: number) => {
    const next = generateColor({
      ...getLatestColor().toHsb(),
      [channel]: percent / 100,
    });
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
              'aria-valuetext': `${locale.saturation}: ${Math.round(hsb.s * 100)}%`,
              min: 0,
              max: 100,
              value: Math.round(hsb.s * 100),
              onChange: percent => changeColor('s', percent),
              onChangeComplete: completeColor,
            }}
            y={{
              'aria-label': locale.picker,
              'aria-roledescription': locale.pickerDescription,
              'aria-valuetext': `${locale.brightness}: ${Math.round(hsb.b * 100)}%`,
              min: 0,
              max: 100,
              value: Math.round(hsb.b * 100),
              onChange: percent => changeColor('b', percent),
              onChangeComplete: completeColor,
            }}
          />
        </Transform>
        <div
          className={`${prefixCls}-saturation`}
          style={{
            backgroundColor: `hsl(${hsb.h},100%, 50%)`,
            backgroundImage:
              'linear-gradient(0deg, #000, transparent),linear-gradient(90deg, #fff, hsla(0, 0%, 100%, 0))',
          }}
        />
      </Palette>
    </div>
  );
};

export default Picker;
