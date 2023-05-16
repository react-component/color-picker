import type { Color } from '@rc-component/color-picker';
import ColorPicker, { ColorBlock } from '@rc-component/color-picker';
import React, { useMemo, useState } from 'react';
import '../../assets/index.less';

export default () => {
  const [value, setValue] = useState<Color | string>('#1677ff');
  const color = useMemo(
    () => (typeof value === 'string' ? value : value.toRgbString()),
    [value],
  );
  return (
    <ColorPicker value={value} onChange={setValue}>
      <ColorBlock color={color} prefixCls="rc-color-picker" />
    </ColorPicker>
  );
};
