import { clsx } from 'clsx';
import React from 'react';

export type ColorBlockProps = React.HTMLAttributes<
  HTMLDivElement | HTMLButtonElement
> & {
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
  const interactive = !!props.onClick;
  const Tag = interactive ? 'button' : 'div';
  const InnerTag = interactive ? 'span' : 'div';

  // ============================ Render ============================
  return (
    <Tag
      type={interactive ? 'button' : undefined}
      aria-label={interactive ? color : undefined}
      {...props}
      className={clsx(colorBlockCls, className)}
    >
      <InnerTag
        className={clsx(`${colorBlockCls}-inner`, innerClassName)}
        style={{ background: color, ...innerStyle }}
      />
    </Tag>
  );
};

export default ColorBlock;
