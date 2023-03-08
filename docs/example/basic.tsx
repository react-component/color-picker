import ColorPicker from '@/ColorPicker';
import { Color } from '@/interface';
import { defaultColor } from '@/util';
import React, { useState } from 'react';
import '../../assets/index.less';

export default () => {
  const [value, setValue] = useState<Color>(defaultColor);
  return (
    <div>
      <p>hex: {value?.toHexString()}</p>
      <p>rbg: {value?.toRgbString()}</p>
      <div
        style={{
          width: 30,
          height: 30,
          background: value?.toRgbString(),
        }}
      ></div>
      <ColorPicker
        value={value}
        onChange={value => {
          setValue(value);
        }}
      />
    </div>
  );
};
