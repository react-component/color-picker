import ColorPicker, { Color } from '@rc-component/color-picker';
import React, { useState } from 'react';
import '../../assets/index.less';

export default () => {
  const [value, setValue] = useState(new Color('#163cff'));

  return (
    <>
      <ColorPicker color={value} onChange={setValue} />
      <br />
      <div
        style={{
          width: 258,
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
        }}
      >
        <span>
          hex:{' '}
          {value.getAlpha() < 1 ? value.toHex8String() : value.toHexString()}
        </span>
        <span> rgb: {value.toRgbString()}</span>
        <span> hsb: {value.toHsbString()}</span>
      </div>
    </>
  );
};
