import { ColorBlock } from '@rc-component/color-picker';
import React from 'react';
import '../../assets/index.less';

export default () => {
  const colorPresets = [
    '#F5222D',
    '#FA8C16',
    '#FADB14',
    '#8BBB11',
    '#52C41A',
    '#13A8A8',
    '#1677FF',
    '#2F54EB',
    '#722ED1',
    '#EB2F96',
    '#F5222D4D',
    '#FA8C164D',
    '#FADB144D',
    '#8BBB114D',
    '#52C41A4D',
    '#13A8A84D',
    '#1677FF4D',
    '#2F54EB4D',
    '#722ED14D',
    '#EB2F964D',
  ];
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
      }}
    >
      {colorPresets.map(color => (
        <ColorBlock key={color} color={color} prefixCls="rc-color-picker" />
      ))}
    </div>
  );
};
