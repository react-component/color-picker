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

  // ======================= Keyboard Events ========================
  const onKeyDown: React.KeyboardEventHandler<HTMLDivElement> = event => {
    // Let consumers prevent keyboard activation.
    props.onKeyDown?.(event);

    if (event.defaultPrevented) {
      return;
    }

    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      event.currentTarget.click();
    }
  };

  // ============================ Render ============================
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
