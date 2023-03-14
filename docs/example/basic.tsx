import ColorPicker from '@rc-component/color-picker';
import React, { useState } from 'react';
import '../../assets/index.less';
import { Color } from '../../src/interface';
import { defaultColor } from '../../src/util';

export default () => {
  const [value, setValue] = useState<Color>(defaultColor);

  return (
    <div>
      <p>
        hex:
        {value?.toHsv().a === 1 ? value?.toHexString() : value?.toHex8String()}
      </p>
      <p>hsv: {value?.toHsvString()}</p>
      <p>rbg: {value?.toRgbString()}</p>
      <ColorPicker trigger="hover">
        <div className="trigger">Color Picker</div>
      </ColorPicker>
      <ColorPicker
        value={value}
        open={true}
        panelRender={panel => {
          return <div>{panel}</div>;
        }}
        onChange={value => {
          setValue(value);
        }}
      >
        <div
          style={{
            width: 30,
            height: 30,
            background: value?.toRgbString(),
          }}
        ></div>
      </ColorPicker>
    </div>
  );
};
