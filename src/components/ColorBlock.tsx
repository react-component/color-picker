import classNames from 'classnames';
import type { FC } from 'react';
import React from 'react';
import type { Color } from '../color';

export type ColorBlockProps = {
  color: Color;
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
};

const ColorBlock: FC<ColorBlockProps> = ({
  color,
  prefixCls,
  className,
  style,
}) => {
  const colorBlockCls = `${prefixCls}-color-block`;
  return (
    <div className={classNames(colorBlockCls, className)} style={style}>
      <div
        className={`${colorBlockCls}-inner`}
        style={{
          background: color.toRgbString(),
        }}
      />
    </div>
  );
};

export default ColorBlock;
