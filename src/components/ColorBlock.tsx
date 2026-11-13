import { clsx } from 'clsx';
import React from 'react';

export type ColorBlockProps = React.HTMLAttributes<HTMLDivElement> & {
  color: string;
  prefixCls?: string;
  /** Internal usage. Only used in antd ColorPicker semantic structure only */
  innerClassName?: string;
  /** Internal usage. Only used in antd ColorPicker semantic structure only */
  innerStyle?: React.CSSProperties;
};

const ColorBlock: React.FC<ColorBlockProps> = ({
  color,
  prefixCls,
  className,
  innerClassName,
  innerStyle,
  ...props
}) => {
  const colorBlockCls = `${prefixCls}-color-block`;

  const onKeyDown: React.KeyboardEventHandler<HTMLDivElement> = event => {
    // Compose instead of replace: a consumer handler still runs, and cancelling the event
    // opts out of activation the same way it does on a native button.
    props.onKeyDown?.(event);

    if (event.defaultPrevented) {
      return;
    }

    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      event.currentTarget.click();
    }
  };

  return (
    <div
      {...(props.onClick
        ? { role: 'button', tabIndex: 0, 'aria-label': color }
        : {})}
      {...props}
      {...(props.onClick ? { onKeyDown } : {})}
      className={clsx(colorBlockCls, className)}
    >
      <div
        className={clsx(`${colorBlockCls}-inner`, innerClassName)}
        style={{ background: color, ...innerStyle }}
      />
    </div>
  );
};

export default ColorBlock;
