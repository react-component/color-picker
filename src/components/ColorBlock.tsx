import { clsx } from 'clsx';
import React from 'react';

export type ColorBlockProps = {
  color: string;
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  /** Internal usage. Only used in antd ColorPicker semantic structure only */
  innerClassName?: string;
  /** Internal usage. Only used in antd ColorPicker semantic structure only */
  innerStyle?: React.CSSProperties;
  'aria-label'?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};

const ColorBlock: React.FC<ColorBlockProps> = ({
  color,
  prefixCls,
  className,
  style,
  innerClassName,
  innerStyle,
  'aria-label': ariaLabel,
  onClick,
}) => {
  const colorBlockCls = `${prefixCls}-color-block`;
  const onKeyDown: React.KeyboardEventHandler<HTMLDivElement> | undefined =
    onClick
      ? event => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            event.currentTarget.click();
          }
        }
      : undefined;

  return (
    <div
      aria-label={onClick ? (ariaLabel ?? color) : undefined}
      className={clsx(colorBlockCls, className)}
      style={style}
      onClick={onClick}
      onKeyDown={onKeyDown}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      <div
        className={clsx(`${colorBlockCls}-inner`, innerClassName)}
        style={{ background: color, ...innerStyle }}
      />
    </div>
  );
};

export default ColorBlock;
