import type { Color } from '@rc-component/color-picker';
import ColorPicker, { ColorBlock } from '@rc-component/color-picker';
import Trigger from '@rc-component/trigger';
import React, { useMemo, useState } from 'react';
import '../../assets/index.less';
import builtinPlacements from './placements';

export default () => {
  const [value, setValue] = useState<Color | string>('#1677ff');
  const prefixCls = 'rc-color-picker';
  const color = useMemo(
    () => (typeof value === 'string' ? value : value.toRgbString()),
    [value],
  );
  return (
    <Trigger
      action={['click']}
      prefixCls={prefixCls}
      popupPlacement="bottomLeft"
      builtinPlacements={builtinPlacements}
      popup={<ColorPicker value={value} onChange={setValue} />}
    >
      <ColorBlock color={color} prefixCls={prefixCls} />
    </Trigger>
  );
};
