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

interface HandlerAxis
  extends Omit<
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
  // The browser ignores Up/Down on a horizontal range, so the vertical axis is
  // handled here: clamp to its own [min, max] and emit through its callbacks.
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (!y || !isVerticalKey(event.key)) {
      return;
    }
    event.preventDefault();
    const step = Number(y.step ?? 1) || 1;
    const min = Number(y.min ?? 0);
    const max = Number(y.max ?? 100);
    const delta = event.key === 'ArrowUp' ? step : -step;
    y.onChange(Math.min(max, Math.max(min, y.value + delta)));
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
        onKeyDown={y ? handleKeyDown : undefined}
        onKeyUp={event => {
          if (!VALUE_KEYS.includes(event.key)) {
            return;
          }
          if (y && isVerticalKey(event.key)) {
            y.onChangeComplete(y.value);
          } else {
            x.onChangeComplete(Number(event.currentTarget.value));
          }
        }}
      />
    </div>
  );
};

export default Handler;
