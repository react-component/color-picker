import type { FC } from 'react';
import React from 'react';
import type { Color } from '../color';

const ColorDisplay: FC<{
  color: Color;
  prefixCls?: string;
}> = ({ color, prefixCls }) => {
  return (
    <div className={`${prefixCls}-display`}>
      <div className={`${prefixCls}-display-block`}>
        <div
          className={`${prefixCls}-display-layer`}
          style={{
            background: color.toRgbString(),
          }}
        ></div>
      </div>
    </div>
  );
};

export default ColorDisplay;
