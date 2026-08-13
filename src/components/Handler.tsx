import { omit } from '@rc-component/util';
import { clsx } from 'clsx';
import React from 'react';

type HandlerSize = 'default' | 'small';

/** Keyboard keys (handled natively by `<input type="range">`) that mutate the value. */
const VALUE_KEYS = [
  'ArrowLeft',
  'ArrowRight',
  'ArrowUp',
  'ArrowDown',
  'Home',
  'End',
  'PageUp',
  'PageDown',
];

// The range input is a keyboard / screen-reader proxy only — the visible thumb
// is the wrapping <div>. It must stay focusable and in the a11y tree, so it is
// hidden with `opacity` (not `display`/`visibility`). These styles are inlined
// rather than left to the stylesheet so consumers that don't ship our CSS
// (e.g. antd's own styling) still get a hidden input out of the box.
const RANGE_INPUT_STYLE: React.CSSProperties = {
  position: 'absolute',
  inset: 0,
  width: '100%',
  height: '100%',
  margin: 0,
  padding: 0,
  opacity: 0,
  pointerEvents: 'none',
};

interface HandlerAxis extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'size' | 'value' | 'onChange'
> {
  value: number;
  onChange: (value: number) => void;
  onChangeComplete: (value: number) => void;
}

export interface HandlerProps {
  size?: HandlerSize;
  color?: string;
  prefixCls?: string;
  disabled?: boolean;
  x: HandlerAxis;
  y?: HandlerAxis;
}

type ValueRef = React.RefObject<number>;
type ChangedRef = React.RefObject<boolean>;

const Handler: React.FC<HandlerProps> = ({
  size = 'default',
  color,
  prefixCls,
  disabled,
  x,
  y,
}) => {
  const is2D = !!y;

  // Per-axis interaction state. Each input owns the value it is adjusting so a
  // controlled parent re-rendering with a stale value mid-interaction cannot
  // reset it. The `y` refs are inert for 1-D sliders.
  const xValueRef = React.useRef(x.value);
  const xPrevRef = React.useRef(x.value);
  const xChangedRef = React.useRef(false);
  const xInputRef = React.useRef<HTMLInputElement>(null);

  const yValueRef = React.useRef(y?.value ?? 0);
  const yPrevRef = React.useRef(y?.value ?? 0);
  const yChangedRef = React.useRef(false);
  const yInputRef = React.useRef<HTMLInputElement>(null);

  // Roving tab index: the 2-D picker is a single tab stop whose focus moves
  // between the two axis inputs as the user switches direction, so it reads as
  // one control while each axis stays independently operable by AT.
  const [activeAxis, setActiveAxis] = React.useState<'x' | 'y'>('x');

  // Preserve the in-progress value across re-renders; only resync when the
  // controlled prop *genuinely* changes, so a stale echo of the pre-interaction
  // value cannot clobber what the user is currently adjusting.
  if (x.value !== xPrevRef.current) {
    xPrevRef.current = x.value;
    xValueRef.current = x.value;
  }
  if (y && y.value !== yPrevRef.current) {
    yPrevRef.current = y.value;
    yValueRef.current = y.value;
  }

  const stepAxis = (
    axis: HandlerAxis,
    valueRef: ValueRef,
    changedRef: ChangedRef,
    direction: 1 | -1,
  ) => {
    const stepSize = Number(axis.step ?? 1) || 1;
    const min = Number(axis.min ?? 0);
    const max = Number(axis.max ?? 100);
    const current = valueRef.current;
    const next = Math.min(max, Math.max(min, current + direction * stepSize));
    // Clamped against a bound — nothing changed, so stay silent like a native
    // range instead of emitting a redundant onChange.
    if (next === current) {
      return;
    }
    valueRef.current = next;
    changedRef.current = true;
    axis.onChange(next);
  };

  // Move DOM focus (and the roving tab stop) onto the axis being adjusted so
  // the screen reader tracks and announces the value that actually changed.
  const focusAxis = (axis: 'x' | 'y') => {
    setActiveAxis(axis);
    const input = axis === 'y' ? yInputRef.current : xInputRef.current;
    if (input && document.activeElement !== input) {
      input.focus();
    }
  };

  // Left/Right always drives the x axis, Up/Down the y axis (or the single x
  // axis on a 1-D slider). preventDefault stops the browser from also moving
  // the focused input's native value.
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    switch (event.key) {
      case 'ArrowRight':
        focusAxis('x');
        stepAxis(x, xValueRef, xChangedRef, 1);
        break;
      case 'ArrowLeft':
        focusAxis('x');
        stepAxis(x, xValueRef, xChangedRef, -1);
        break;
      case 'ArrowUp':
        if (y) {
          focusAxis('y');
          stepAxis(y, yValueRef, yChangedRef, 1);
        } else {
          focusAxis('x');
          stepAxis(x, xValueRef, xChangedRef, 1);
        }
        break;
      case 'ArrowDown':
        if (y) {
          focusAxis('y');
          stepAxis(y, yValueRef, yChangedRef, -1);
        } else {
          focusAxis('x');
          stepAxis(x, xValueRef, xChangedRef, -1);
        }
        break;
      default:
        return;
    }
    event.preventDefault();
  };

  // Each input completes its own axis. Because focus follows the adjusted axis,
  // key up fires on the input whose value just changed.
  const completeAxis =
    (axis: HandlerAxis, valueRef: ValueRef, changedRef: ChangedRef) =>
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (!VALUE_KEYS.includes(event.key) || !changedRef.current) {
        return;
      }
      changedRef.current = false;
      axis.onChangeComplete(valueRef.current);
    };

  // Native value changes (Home/End/PageUp/PageDown and AT set-value / increment
  // actions) feed the same interaction value for the input's own axis.
  const changeAxis =
    (axis: HandlerAxis, valueRef: ValueRef, changedRef: ChangedRef) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const next = Number(event.target.value);
      valueRef.current = next;
      changedRef.current = true;
      axis.onChange(next);
    };

  return (
    <div
      className={clsx(`${prefixCls}-handler`, {
        [`${prefixCls}-handler-sm`]: size === 'small',
      })}
      style={{ position: 'relative', backgroundColor: color }}
    >
      <input
        ref={xInputRef}
        {...omit(x, ['onChange', 'onChangeComplete'])}
        type="range"
        step={1}
        tabIndex={is2D ? (activeAxis === 'x' ? 0 : -1) : undefined}
        className={`${prefixCls}-handler-range`}
        style={RANGE_INPUT_STYLE}
        disabled={disabled}
        onChange={changeAxis(x, xValueRef, xChangedRef)}
        onKeyDown={handleKeyDown}
        onKeyUp={completeAxis(x, xValueRef, xChangedRef)}
        onFocus={is2D ? () => setActiveAxis('x') : undefined}
      />
      {y && (
        <input
          ref={yInputRef}
          {...omit(y, ['onChange', 'onChangeComplete'])}
          type="range"
          step={1}
          aria-orientation="vertical"
          tabIndex={activeAxis === 'y' ? 0 : -1}
          className={`${prefixCls}-handler-range`}
          style={RANGE_INPUT_STYLE}
          disabled={disabled}
          onChange={changeAxis(y, yValueRef, yChangedRef)}
          onKeyDown={handleKeyDown}
          onKeyUp={completeAxis(y, yValueRef, yChangedRef)}
          onFocus={() => setActiveAxis('y')}
        />
      )}
    </div>
  );
};

export default Handler;
