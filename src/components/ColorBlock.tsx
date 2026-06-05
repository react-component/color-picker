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
  return (
    <div {...props} className={clsx(colorBlockCls, className)}>
      <div
        className={clsx(`${colorBlockCls}-inner`, innerClassName)}
        style={{ background: color, ...innerStyle }}
      />
    </div>
  );
};

export default ColorBlock;
