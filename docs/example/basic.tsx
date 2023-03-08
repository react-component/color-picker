import ColorPicker from '@rc-component/color-picker';
import React, { useState } from 'react';
import '../../assets/index.less';
import { Color } from '../../src/interface';
import { defaultColor } from '../../src/util';

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
