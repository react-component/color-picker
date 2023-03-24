import type { FC } from 'react';
import React from 'react';
import type { Color } from '../color';

const ColorDisplay: FC<{
  color: Color;
  prefixCls?: string;
}> = ({ color, prefixCls }) => {
  const displayPrefixCls = `${prefixCls}-display`;
  return (
    <div className={displayPrefixCls}>
      <div className={`${displayPrefixCls}-container`}>
        <div className={`${displayPrefixCls}-block`}></div>
        <div
          className={`${displayPrefixCls}-layer`}
          style={{
            background: color.toRgbString(),
          }}
        ></div>
      </div>
    </div>
  );
};

export default ColorDisplay;
