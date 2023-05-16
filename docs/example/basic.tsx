import type { Color } from '@rc-component/color-picker';
import ColorPicker from '@rc-component/color-picker';
import React, { useMemo, useState } from 'react';
import '../../assets/index.less';

export default () => {
  const [value, setValue] = useState<Color | string>('#1677ff');
  const color = useMemo(
    () => (typeof value === 'string' ? value : value.toRgbString()),
    [value],
  );
  return (
    <div>
      <ColorPicker value={value} onChange={setValue}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              width: 30,
              height: 30,
              marginRight: 8,
              background: color,
            }}
          ></div>
          <span>{color}</span>
        </div>
      </ColorPicker>
    </div>
  );
};
