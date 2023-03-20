import type { FC } from 'react';
import React from 'react';
import type { Color } from '../interface';

const ColorDisplay: FC<{
  color: Color;
  prefixCls?: string;
}> = ({ color, prefixCls }) => {
  return (
    <div className={`${prefixCls}-display`}>
      <div
        className={`${prefixCls}-display-block`}
        style={{
          border: `1px solid ${
            color.getAlpha() === 0 ? 'rgba(0,0,0,0.06)' : color.toRgbString()
          }`,
        }}
      >
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
