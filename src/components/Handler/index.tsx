import { omit, useMobile } from '@rc-component/util';
import { clsx } from 'clsx';
import React from 'react';

import Input from './Input';

// =========================== Constants ===========================
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

// ============================= Types =============================
type HandlerSize = 'default' | 'small';

interface HandlerAxis extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'size' | 'step' | 'value' | 'onChange' | 'onKeyDown' | 'onKeyUp' | 'onFocus'
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

// ============================= Hooks =============================
// A null value means this axis has not changed in the current interaction.
const useValEntity = () => {
  const valueRef = React.useRef<number | null>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);
  return [valueRef, inputRef] as const;
};

// =================================================================
// ==                           Handler                           ==
// =================================================================
const Handler: React.FC<HandlerProps> = ({
  size = 'default',
  color,
  prefixCls,
  disabled,
  x,
  y,
}) => {
  // ============================ State =============================
  // Keep pending values until completion; controlled props may lag behind.
  const [xValueRef, xInputRef] = useValEntity();
  const [yValueRef, yInputRef] = useValEntity();

  const [keyPressing, setKeyPressing] = React.useState(false);

  // Only the active axis is in the tab order; x is the initial axis.
  const [activeAxis, setActiveAxis] = React.useState<'x' | 'y' | null>(null);

  const exposeBothAxes = useMobile();

  // ========================= Axis Helpers =========================
  const stepAxis = (axisName: 'x' | 'y', direction: 1 | -1) => {
    const axis = axisName === 'x' ? x : y;
    const valueRef = axisName === 'x' ? xValueRef : yValueRef;
    const min = Number(axis.min ?? 0);
    const max = Number(axis.max ?? 100);
    const current = valueRef.current ?? axis.value;

    const next = Math.min(max, Math.max(min, Math.round(current) + direction));

    if (next === current) {
      return;
    }
    valueRef.current = next;
    axis.onChange(next);
  };

  // Clear both candidates before notifying consumers to avoid duplicate completion.
  const completeInteraction = () => {
    const xValue = xValueRef.current;
    const yValue = yValueRef.current;
    xValueRef.current = null;
    yValueRef.current = null;

    if (xValue !== null) {
      x.onChangeComplete(xValue);
    } else if (yValue !== null) {
      y.onChangeComplete(yValue);
    }
  };

  // ============================ Focus =============================
  React.useEffect(() => {
    if (activeAxis) {
      const input = activeAxis === 'y' ? yInputRef.current : xInputRef.current;
      input?.focus();
    }
  }, [activeAxis, xInputRef, yInputRef]);

  const onBlur = (event: React.FocusEvent<HTMLDivElement>) => {
    if (event.currentTarget.contains(event.relatedTarget as Node | null)) {
      return;
    }
    setKeyPressing(false);

    // Blur can interrupt a key press before keyup.
    completeInteraction();
  };

  // ======================= Keyboard Events ========================
  // Horizontal keys adjust x; vertical keys adjust y, or x for a single-axis slider.
  const onInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (!VALUE_KEYS.includes(event.key)) {
      return;
    }

    setKeyPressing(true);

    switch (event.key) {
      case 'ArrowRight':
        setActiveAxis('x');
        stepAxis('x', 1);
        break;
      case 'ArrowLeft':
        setActiveAxis('x');
        stepAxis('x', -1);
        break;
      case 'ArrowUp':
        if (y) {
          setActiveAxis('y');
          stepAxis('y', 1);
        } else {
          setActiveAxis('x');
          stepAxis('x', 1);
        }
        break;
      case 'ArrowDown':
        if (y) {
          setActiveAxis('y');
          stepAxis('y', -1);
        } else {
          setActiveAxis('x');
          stepAxis('x', -1);
        }
        break;
      default:
        // Native range behavior handles Home/End/PageUp/PageDown.
        return;
    }
    event.preventDefault();
  };

  const onInputKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (!VALUE_KEYS.includes(event.key)) {
      return;
    }
    setKeyPressing(false);
    completeInteraction();
  };

  // ========================= Input Events =========================
  const onInputChange = (
    axis: 'x' | 'y',
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const axisEntity = axis === 'x' ? x : y;
    const next = Number(event.target.value);

    if (keyPressing) {
      const valueRef = axis === 'x' ? xValueRef : yValueRef;
      valueRef.current = next;
      axisEntity.onChange(next);
      return;
    }

    // Assistive technology changes have no keyup, so complete them immediately.
    axisEntity.onChange(next);
    axisEntity.onChangeComplete(next);
  };

  // ======================== Accessibility =========================
  // Touch screen readers need both axes exposed without keyboard navigation.
  // Desktop keyboard interaction reveals both axes while a value key is held.
  const xActive = !activeAxis || activeAxis === 'x';
  const yActive = activeAxis === 'y';
  const revealBothAxes = exposeBothAxes || keyPressing;

  // ============================ Render ============================
  const sharedInputProps = {
    prefixCls,
    disabled,
    onKeyDown: onInputKeyDown,
    onKeyUp: onInputKeyUp,
  };

  return (
    <div
      className={clsx(`${prefixCls}-handler`, {
        [`${prefixCls}-handler-sm`]: size === 'small',
      })}
      style={{ position: 'relative', backgroundColor: color }}
      onBlur={onBlur}
    >
      <Input
        ref={xInputRef}
        axisType="x"
        {...omit(x, ['onChange', 'onChangeComplete'])}
        {...sharedInputProps}
        aria-orientation="horizontal"
        tabIndex={xActive ? 0 : -1}
        aria-hidden={!xActive && !revealBothAxes}
        onChange={onInputChange}
        onFocus={setActiveAxis}
      />
      {y && (
        <Input
          ref={yInputRef}
          axisType="y"
          {...omit(y, ['onChange', 'onChangeComplete'])}
          {...sharedInputProps}
          aria-orientation="vertical"
          tabIndex={yActive ? 0 : -1}
          aria-hidden={!yActive && !revealBothAxes}
          onChange={onInputChange}
          onFocus={setActiveAxis}
        />
      )}
    </div>
  );
};

export default Handler;
