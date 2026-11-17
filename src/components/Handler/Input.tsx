import React from 'react';

// Opacity keeps inputs focusable and exposed to assistive technology.
// Inline styles also cover consumers that do not load our stylesheet.
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

type AxisType = 'x' | 'y';

interface InputProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'onChange' | 'onFocus'
> {
  prefixCls?: string;
  axisType: AxisType;
  onChange: (
    axisType: AxisType,
    event: React.ChangeEvent<HTMLInputElement>,
  ) => void;
  onFocus: (
    axisType: AxisType,
    event: React.FocusEvent<HTMLInputElement>,
  ) => void;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ prefixCls, onChange, axisType, onFocus, ...props }, ref) => (
    <input
      {...props}
      ref={ref}
      type="range"
      min={props.min ?? 0}
      max={props.max ?? 100}
      step={1}
      className={`${prefixCls}-handler-range`}
      style={RANGE_INPUT_STYLE}
      onChange={event => onChange(axisType, event)}
      onFocus={event => onFocus(axisType, event)}
    />
  ),
);

export default Input;
