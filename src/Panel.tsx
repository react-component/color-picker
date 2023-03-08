import useMergedState from 'rc-util/lib/hooks/useMergedState';
import type { FC } from 'react';
import React, { useMemo, useState } from 'react';
import { ColorPickerProvider } from './context';
import { ColorPickerPrefixCls, defaultColor, generateColor } from './util';

import type { ColorPickerProps } from './ColorPicker';
import type { ColorPickerCtxProps } from './context';

import DataBar from './components/DataBar';
import Picker from './components/Picker';
import Slider from './components/Slider';

const Panel: FC<
  Omit<ColorPickerProps, 'open' | 'trigger' | 'placement' | 'onOpenChange'>
> = ({
  value,
  defaultValue,
  format = 'hex',
  prefixCls = ColorPickerPrefixCls,
  onChange,
  onFormatChange,
}) => {
  const [color, setColor] = useMergedState(defaultColor, {
    value,
    defaultValue,
  });
  const [colorFormat, setColorFormat] = useState(format);
  const [hue, setHue] = useState(generateColor(color).toHsv().h || 160);
  const formatColor = useMemo(() => {
    const result = generateColor(color);
    return `rgb(${result.r},${result.g},${result.b})`;
  }, [color]);

  const handleChange: ColorPickerCtxProps['handleChange'] = (
    colorValue,
    type,
  ) => {
    const hsv = colorValue.toHsv();
    const originalInput = colorValue.originalInput;
    // Maintain color hue not to 0
    if (type === 'Hue') {
      if (hsv.h !== 0) {
        setHue(hsv.h);
      } else if (typeof colorValue.originalInput !== 'string') {
        // @ts-ignore
        setHue(originalInput.h);
      }
    }

    setColor(colorValue);
    onChange?.(colorValue, colorValue.toHexString());
  };

  const handleFormatChange: ColorPickerCtxProps['handleFormatChange'] =
    formatValue => {
      setColorFormat(formatValue);
      onFormatChange?.(formatValue);
    };

  const contextValue = useMemo<ColorPickerCtxProps>(
    () => ({
      color: generateColor(color),
      colorFormat,
      prefixCls,
      hue,
      handleChange,
      handleFormatChange,
    }),
    [color, colorFormat, prefixCls, hue],
  );

  return (
    <ColorPickerProvider value={contextValue}>
      <div className={`${prefixCls}-panel`}>
        <Picker />
        <Slider
          type="Hue"
          gradientColors={[
            'rgb(255, 0, 0) 0%',
            'rgb(255, 255, 0) 17%',
            'rgb(0, 255, 0) 33%',
            'rgb(0, 255, 255) 50%',
            'rgb(0, 0, 255) 67%',
            'rgb(255, 0, 255) 83%',
            'rgb(255, 0, 0) 100%',
          ]}
        />
        <Slider
          type="Alpha"
          gradientColors={['rgba(255, 0, 4, 0) 0%', formatColor]}
        />
        <DataBar />
      </div>
    </ColorPickerProvider>
  );
};

export default Panel;
