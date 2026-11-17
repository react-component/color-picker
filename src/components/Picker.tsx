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
  // ============================ State =============================
  const pickerRef = useRef<HTMLDivElement>(null);
  const transformRef = useRef<HTMLDivElement>(null);
  // Pending color during an interaction; null restores the controlled value.
  const colorRef = useRef<Color | null>(null);

  // ============================ Color =============================
  const getLatestColor = () => colorRef.current ?? color;

  const completeColor = () => {
    const latest = getLatestColor();
    colorRef.current = null;
    onChangeComplete?.(latest);
  };

  // ============================= Drag =============================
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
  // =========================== Keyboard ===========================
  const hsb = color.toHsb();

  // Preserve both axes when key presses precede the parent's next render.
  const changeColor = (channel: 's' | 'b', percent: number) => {
    const next = generateColor({
      ...getLatestColor().toHsb(),
      [channel]: percent / 100,
    });
    colorRef.current = next;
    onChange(next);
  };

  // ============================ Render ============================
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
              value: Math.round(hsb.s * 100),
              onChange: percent => changeColor('s', percent),
              onChangeComplete: completeColor,
            }}
            y={{
              'aria-label': locale.picker,
              'aria-roledescription': locale.pickerDescription,
              'aria-valuetext': `${locale.brightness}: ${Math.round(hsb.b * 100)}%`,
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
