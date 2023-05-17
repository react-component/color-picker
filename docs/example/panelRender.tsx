import type { Color } from '@rc-component/color-picker';
import ColorPicker from '@rc-component/color-picker';
import React, { useMemo, useState } from 'react';
import '../../assets/index.less';

export const toHexFormat = (value?: string) =>
  value?.replace(/[^0-9a-fA-F#]/g, '').slice(0, 9) || '';

export default () => {
  const [value, setValue] = useState<Color | string>('#163cff');
  const color = useMemo(
    () =>
      typeof value === 'string'
        ? value
        : value.getAlpha() < 1
        ? value.toHex8String()
        : value.toHexString(),
    [value],
  );

  return (
    <div style={{ width: 240 }}>
      <ColorPicker
        value={value}
        onChange={setValue}
        panelRender={panel => (
          <>
            {panel}
            <input
              value={color}
              onChange={e => {
                const originValue = e.target.value;
                setValue(toHexFormat(originValue));
              }}
            />
          </>
        )}
      />
    </div>
  );
};
