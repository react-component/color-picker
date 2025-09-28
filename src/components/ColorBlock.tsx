import { clsx } from 'clsx';
import React from 'react';

export type ColorBlockProps = {
  color: string;
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};

const ColorBlock: React.FC<ColorBlockProps> = ({
  color,
  prefixCls,
  className,
  style,
  onClick,
}) => {
  const colorBlockCls = `${prefixCls}-color-block`;
  return (
    <div
      className={clsx(colorBlockCls, className)}
      style={style}
      onClick={onClick}
    >
      <div className={`${colorBlockCls}-inner`} style={{ background: color }} />
    </div>
  );
};

export default ColorBlock;
