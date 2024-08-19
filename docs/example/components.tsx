import ColorPicker, {
  Color,
  type BaseSliderProps,
} from '@rc-component/color-picker';
import React, { useState } from 'react';
import '../../assets/index.less';

const Slider = ({ min, max }: BaseSliderProps) => {
  return (
    <div>
      <span>{min}</span>
      <span>{max}</span>
    </div>
  );
};

export default () => {
  const [value, setValue] = useState(new Color('#163cff'));

  return (
    <>
      <ColorPicker
        onChange={setValue}
        components={{
          slider: Slider,
        }}
      />
      <br />
      <div
        style={{
          width: 258,
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
        }}
      >
        <span>hex: {value.toHexString()}</span>
        <span>rgb: {value.toRgbString()}</span>
        <span>hsb: {value.toHsbString()}</span>
      </div>
    </>
  );
};
