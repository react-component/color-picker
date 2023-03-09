import useMergedState from 'rc-util/lib/hooks/useMergedState';
import type { FC } from 'react';
import React, { useMemo, useState } from 'react';
import type { ColorPickerCtxProps } from './context';
import { ColorPickerProvider } from './context';
import { ColorPickerPrefixCls, defaultColor, generateColor } from './util';

import DataBar from './components/DataBar';
import Picker from './components/Picker';
import Slider from './components/Slider';
import { Color, Hsv } from './interface';

const hueColor = [
  'rgb(255, 0, 0) 0%',
  'rgb(255, 255, 0) 17%',
  'rgb(0, 255, 0) 33%',
  'rgb(0, 255, 255) 50%',
  'rgb(0, 0, 255) 67%',
  'rgb(255, 0, 255) 83%',
  'rgb(255, 0, 0) 100%',
];

export interface PanelProps {
  value?: string | Color;
  defaultValue?: string | Color;
  prefixCls?: string;
  onChange?: (value: Color) => void;
}

const Panel: FC<PanelProps> = ({
  value,
  defaultValue,
  prefixCls = ColorPickerPrefixCls,
  onChange,
}) => {
  const [color, setColor] = useMergedState(defaultColor, {
    value,
    defaultValue,
  });
  const colorValue = useMemo(() => generateColor(color), [color]);
  const [hue, setHue] = useState(colorValue.toHsv().h || 160);
  const alphaColor = useMemo(() => {
    // Alpha color need equal 1 for base color
    colorValue.setAlpha(1);
    return colorValue.toRgbString();
  }, [colorValue]);

  const handleChange: ColorPickerCtxProps['handleChange'] = (data, type) => {
    const hsv = data.toHsv();
    const originalInput = data.originalInput as Hsv;

    // Maintain color hue not to 0
    if (type === 'Hue') {
      if (hsv.h !== 0) {
        setHue(hsv.h);
      } else if (typeof data.originalInput !== 'string') {
        setHue(originalInput.h);
      }
    }

    setColor(data);
    onChange?.(data);
  };

  const contextValue = useMemo<ColorPickerCtxProps>(
    () => ({
      color: colorValue,
      prefixCls,
      hue,
      handleChange,
    }),
    [colorValue, prefixCls, hue],
  );

  return (
    <ColorPickerProvider value={contextValue}>
      <div className={`${prefixCls}-panel`}>
        <Picker />
        <Slider type="Hue" gradientColors={hueColor} />
        <Slider
          type="Alpha"
          gradientColors={['rgba(255, 0, 4, 0) 0%', alphaColor]}
        />
        <DataBar />
      </div>
    </ColorPickerProvider>
  );
};

export default Panel;
