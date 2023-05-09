import classNames from 'classnames';
import type { FC } from 'react';
import React from 'react';

export type ColorBlockProps = {
  color: string;
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};

const ColorBlock: FC<ColorBlockProps> = ({
  color,
  prefixCls,
  className,
  style,
  onClick,
}) => {
  const colorBlockCls = `${prefixCls}-color-block`;
  return (
    <div
      className={classNames(colorBlockCls, className)}
      style={style}
      onClick={onClick}
    >
      <div
        className={`${colorBlockCls}-inner`}
        style={{
          background: color,
        }}
      />
    </div>
  );
};

export default ColorBlock;
