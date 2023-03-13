import React, { FC } from 'react';
import { Color } from '../interface';
import { ColorPickerPrefixCls } from '../util';

const ColorDisplay: FC<{
  color: Color;
  prefixCls?: string;
}> = ({ color, prefixCls = ColorPickerPrefixCls }) => {
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
