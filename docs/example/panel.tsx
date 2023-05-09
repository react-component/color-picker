import { Color, ColorPickerPanel } from '@rc-component/color-picker';
import React, { useState } from 'react';
import '../../assets/index.less';

export default () => {
  const [value, setValue] = useState(new Color('#163cff'));

  return (
    <div style={{ width: 240 }}>
      <div>{value.toHsbString()}</div>
      <ColorPickerPanel color={value} onChange={setValue} />
    </div>
  );
};
