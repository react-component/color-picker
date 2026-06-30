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

const isVerticalKey = (key: string) => key === 'ArrowUp' || key === 'ArrowDown';

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

const Handler: React.FC<HandlerProps> = ({
  size = 'default',
  color,
  prefixCls,
  disabled,
  x,
  y,
}) => {
  const xValueRef = React.useRef(x.value);
  xValueRef.current = x.value;
  const yValueRef = React.useRef(y?.value);
  yValueRef.current = y?.value;

  const stepAxis = (
    axis: HandlerAxis,
    ref: React.MutableRefObject<number | undefined>,
    direction: 1 | -1,
  ) => {
    const stepSize = Number(axis.step ?? 1) || 1;
    const min = Number(axis.min ?? 0);
    const max = Number(axis.max ?? 100);
    const current = ref.current ?? axis.value;
    const next = Math.min(max, Math.max(min, current + direction * stepSize));
    ref.current = next;
    axis.onChange(next);
  };

  // Left/Right drives the horizontal axis; Up/Down the vertical one (or the
  // horizontal one for 1-D sliders). We handle these instead of the native range
  // so behaviour is deterministic across browsers and safe under rapid presses.
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    switch (event.key) {
      case 'ArrowRight':
        stepAxis(x, xValueRef, 1);
        break;
      case 'ArrowLeft':
        stepAxis(x, xValueRef, -1);
        break;
      case 'ArrowUp':
        if (y) {
          stepAxis(y, yValueRef, 1);
        } else {
          stepAxis(x, xValueRef, 1);
        }
        break;
      case 'ArrowDown':
        if (y) {
          stepAxis(y, yValueRef, -1);
        } else {
          stepAxis(x, xValueRef, -1);
        }
        break;
      default:
        return;
    }
    event.preventDefault();
  };

  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (!VALUE_KEYS.includes(event.key)) {
      return;
    }
    if (y && isVerticalKey(event.key)) {
      y.onChangeComplete(yValueRef.current ?? y.value);
    } else {
      x.onChangeComplete(xValueRef.current ?? x.value);
    }
  };

  return (
    <div
      className={clsx(`${prefixCls}-handler`, {
        [`${prefixCls}-handler-sm`]: size === 'small',
      })}
      style={{ position: 'relative', backgroundColor: color }}
    >
      <input
        step={1}
        {...omit(x, ['onChangeComplete'])}
        type="range"
        className={`${prefixCls}-handler-range`}
        style={RANGE_INPUT_STYLE}
        disabled={disabled}
        onChange={event => x.onChange(Number(event.target.value))}
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
      />
    </div>
  );
};

export default Handler;
