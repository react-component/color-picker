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
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};

const ColorBlock: React.FC<ColorBlockProps> = ({
  color,
  prefixCls,
  className,
  style,
  innerClassName,
  innerStyle,
  onClick,
}) => {
  const colorBlockCls = `${prefixCls}-color-block`;
  return (
    <div
      className={clsx(colorBlockCls, className)}
      style={style}
      onClick={onClick}
    >
      <div
        className={clsx(`${colorBlockCls}-inner`, innerClassName)}
        style={{ background: color, ...innerStyle }}
      />
    </div>
  );
};

export default ColorBlock;
