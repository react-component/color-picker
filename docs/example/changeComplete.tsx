import ColorPicker, { Color } from '@rc-component/color-picker';
import React, { useState } from 'react';
import '../../assets/index.less';

export default () => {
  const [value, setValue] = useState(new Color('#163cff'));

  return (
    <>
      <div
        style={{
          width: 500,
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
        }}
      >
        <span>{`Only called while change completed: ${value.toRgbString()}`}</span>
      </div>
      <br />
      <ColorPicker onChangeComplete={setValue} />
    </>
  );
};
