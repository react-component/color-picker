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

// A stable string identity for a color, used to tell a genuinely new controlled
// value apart from a stale echo of the same value.
const getColorKey = (color: Color) => {
  const { h, s, b, a } = color.toHsb();
  return `${h},${s},${b},${a}`;
};

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
  // Candidate color for the active keyboard/drag interaction. Consulted on
  // completion so the *latest* value is reported, even across several presses.
  const colorRef = useRef(color);
  // Key of the controlled color seen on the previous render. Used to accept a
  // genuinely new controlled color while ignoring a stale echo of the
  // pre-interaction color that a controlled parent may re-render with before
  // key up (validation, debouncing, an unrelated state update). Overwriting the
  // ref with that stale value would make completion report the old color.
  const prevColorKeyRef = useRef(getColorKey(color));
  const nextColorKey = getColorKey(color);
  if (nextColorKey !== prevColorKeyRef.current) {
    prevColorKeyRef.current = nextColorKey;
    colorRef.current = color;
  }

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

  // Build a new color from the *latest* one (the ref, not the render-time prop)
  const changeColor = (channel: 's' | 'b', percent: number) => {
    const next = generateColor({
      ...colorRef.current.toHsb(),
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
              value: hsb.s * 100,
              onChange: percent => changeColor('s', percent),
              onChangeComplete: () => onChangeComplete?.(colorRef.current),
            }}
            y={{
              'aria-label': locale.picker,
              'aria-roledescription': locale.pickerDescription,
              'aria-valuetext': `${locale.brightness}: ${Math.round(hsb.b * 100)}%`,
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
