import { omit } from '@rc-component/util';
import { clsx } from 'clsx';
import React from 'react';

type HandlerSize = 'default' | 'small';

/** Tolerance for treating a value as sitting on the step grid despite float drift. */
const STEP_EPSILON = 1e-9;

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
  'size' | 'value' | 'onChange' | 'onKeyDown' | 'onKeyUp' | 'onFocus'
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

  // Per-axis interaction state. `valueRef` is the value the axis is being
  // adjusted to, and is authoritative only while `changedRef` marks an
  // interaction as in flight. Between interactions the controlled prop is the
  // source of truth, so neither ref is ever synced during render: a parent that
  // rejects a change simply gets the next press restarted from the value it
  // committed, the way a native range snaps back, and nothing is written from a
  // render that concurrent React may abandon. The `y` refs are inert for 1-D
  // sliders.
  const xValueRef = React.useRef(x.value);
  const xChangedRef = React.useRef(false);
  const xInputRef = React.useRef<HTMLInputElement>(null);

  const yValueRef = React.useRef(y?.value ?? 0);
  const yChangedRef = React.useRef(false);
  const yInputRef = React.useRef<HTMLInputElement>(null);

  // Whether a value key is currently held on this control. Tells the first
  // press of a new interaction (restart from the prop) apart from a key repeat
  // or a second axis within the same one (chain off `valueRef`).
  const keyHeldRef = React.useRef(false);

  // Roving tab index: the 2-D picker is a single tab stop whose focus moves
  // between the two axis inputs as the user switches direction, so it reads as
  // one control while each axis stays independently operable by AT. `null`
  // until the control is first used, when the x axis holds the tab stop.
  const [activeAxis, setActiveAxis] = React.useState<'x' | 'y' | null>(null);
  // Whether the keyboard has moved a value since focus entered the control.
  // Reveals both axes for the duration of the interaction — see the a11y-tree
  // note below.
  const [valueChangedViaKey, setValueChangedViaKey] = React.useState(false);

  const stepAxis = (
    axis: HandlerAxis,
    valueRef: ValueRef,
    changedRef: ChangedRef,
    direction: 1 | -1,
  ) => {
    const stepSize = Number(axis.step ?? 1) || 1;
    const min = Number(axis.min ?? 0);
    const max = Number(axis.max ?? 100);
    const current = changedRef.current ? valueRef.current : axis.value;

    // A native range only allows values on the `min + n * step` grid. Per the
    // stepUp()/stepDown() algorithm, a value off that grid — a color channel
    // that doesn't land on a whole percent — snaps to the neighbouring grid
    // value in the direction of travel, and that snap *is* the step; only an
    // already-aligned value advances by a full step.
    const steps = (current - min) / stepSize;
    const nearest = Math.round(steps);
    const nextSteps =
      Math.abs(steps - nearest) < STEP_EPSILON
        ? nearest + direction
        : direction > 0
          ? Math.ceil(steps)
          : Math.floor(steps);
    const next = Math.min(max, Math.max(min, min + nextSteps * stepSize));

    // Clamped against a bound — nothing changed, so stay silent like a native
    // range instead of emitting a redundant onChange.
    if (next === current) {
      return;
    }
    valueRef.current = next;
    changedRef.current = true;
    setValueChangedViaKey(true);
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
    if (!VALUE_KEYS.includes(event.key)) {
      return;
    }

    // A press with no key already held opens a fresh interaction: drop the
    // previous one's in-flight values so stepping restarts from what the parent
    // actually committed.
    if (!keyHeldRef.current) {
      xChangedRef.current = false;
      yChangedRef.current = false;
    }
    keyHeldRef.current = true;

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
        // Home/End/PageUp/PageDown: let the native range move the value and
        // pick it up from the resulting change event.
        return;
    }
    event.preventDefault();
  };

  const getAxisState = (axis: 'x' | 'y') =>
    axis === 'y'
      ? { axis: y, valueRef: yValueRef, changedRef: yChangedRef }
      : { axis: x, valueRef: xValueRef, changedRef: xChangedRef };

  // Both axes form a single 2-D interaction, so it completes once and both are
  // dropped together — clearing only the axis that reported would leave the
  // other pending for a later key up or blur to complete the same interaction a
  // second time, off a color already handed back to the parent. Conversely, the
  // axis the event fired on may not be the one that moved (a press clamped at a
  // bound after the other axis changed), so a pending axis still completes even
  // when it isn't the preferred one. Closing the interaction hands authority
  // back to the controlled prop, so the next press starts from what the parent
  // committed.
  const completeInteraction = (preferred: 'x' | 'y') => {
    const first = getAxisState(preferred);
    const second = getAxisState(preferred === 'y' ? 'x' : 'y');
    const pending =
      first.axis && first.changedRef.current
        ? first
        : second.axis && second.changedRef.current
          ? second
          : null;

    keyHeldRef.current = false;
    xChangedRef.current = false;
    yChangedRef.current = false;

    pending?.axis.onChangeComplete(pending.valueRef.current);
  };

  // Key up on either input closes the shared interaction. Because focus follows
  // the adjusted axis, it fires on the input the user was last driving.
  const completeAxis =
    (axis: 'x' | 'y') => (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (!VALUE_KEYS.includes(event.key)) {
        return;
      }
      completeInteraction(axis);
    };

  // Native value changes for the input's own axis, from two distinct sources.
  const changeAxis =
    (axis: HandlerAxis, valueRef: ValueRef, changedRef: ChangedRef) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const next = Number(event.target.value);

      if (keyHeldRef.current) {
        // Part of a keyboard interaction: Home/End/PageUp/PageDown are left to
        // the native range, so their value arrives here and key up commits it.
        valueRef.current = next;
        changedRef.current = true;
        setValueChangedViaKey(true);
        axis.onChange(next);
        return;
      }

      // An AT set-value / increment action fires `change` with no key press
      // around it, so no key up will follow to commit it. It is a whole
      // interaction on its own: report and complete it here, leaving nothing
      // in flight for an unrelated later key up to pick up.
      changedRef.current = false;
      axis.onChange(next);
      axis.onChangeComplete(next);
    };

  // Focus leaving the control altogether — as opposed to moving between its two
  // axes — ends the keyboard interaction.
  const handleBlur = (event: React.FocusEvent<HTMLDivElement>) => {
    if (event.currentTarget.contains(event.relatedTarget as Node | null)) {
      return;
    }
    setValueChangedViaKey(false);

    // Focus can leave mid-press — a click elsewhere, or AT moving on — so no key
    // up will follow to close the interaction. Commit it here instead: otherwise
    // the parent never hears the interaction ended, and the value stays live for
    // the next press to chain off, drifting away from what the parent committed.
    completeInteraction(activeAxis ?? 'x');
  };

  // A screen reader listing the form controls should find one "2D slider", not
  // two identically named ones, so the axis without focus is hidden from the
  // accessibility tree. While the keyboard is driving the value both axes are
  // revealed, so the roving focus never lands on a hidden input and AT can read
  // either channel. Mirrors react-aria's useColorArea, which likewise gives
  // both axes the same name and separates them by aria-valuetext.
  const xActive = !activeAxis || activeAxis === 'x';
  const yActive = activeAxis === 'y';

  return (
    <div
      className={clsx(`${prefixCls}-handler`, {
        [`${prefixCls}-handler-sm`]: size === 'small',
      })}
      style={{ position: 'relative', backgroundColor: color }}
      onBlur={handleBlur}
    >
      <input
        ref={xInputRef}
        {...omit(x, ['onChange', 'onChangeComplete'])}
        type="range"
        step={x.step ?? 1}
        tabIndex={xActive ? undefined : -1}
        aria-hidden={xActive || valueChangedViaKey ? undefined : 'true'}
        className={`${prefixCls}-handler-range`}
        style={RANGE_INPUT_STYLE}
        disabled={disabled}
        onChange={changeAxis(x, xValueRef, xChangedRef)}
        onKeyDown={handleKeyDown}
        onKeyUp={completeAxis('x')}
        onFocus={is2D ? () => setActiveAxis('x') : undefined}
      />
      {y && (
        <input
          ref={yInputRef}
          {...omit(y, ['onChange', 'onChangeComplete'])}
          type="range"
          step={y.step ?? 1}
          aria-orientation="vertical"
          tabIndex={yActive ? undefined : -1}
          aria-hidden={yActive || valueChangedViaKey ? undefined : 'true'}
          className={`${prefixCls}-handler-range`}
          style={RANGE_INPUT_STYLE}
          disabled={disabled}
          onChange={changeAxis(y, yValueRef, yChangedRef)}
          onKeyDown={handleKeyDown}
          onKeyUp={completeAxis('y')}
          onFocus={() => setActiveAxis('y')}
        />
      )}
    </div>
  );
};

export default Handler;
