import useMergedState from 'rc-util/lib/hooks/useMergedState';
import type { FC } from 'react';
import React, { useMemo, useState } from 'react';
import type { ColorPickerCtxProps } from './context';
import { ColorPickerProvider } from './context';
import { ColorPickerPrefixCls, defaultColor, generateColor } from './util';

import ColorDisplay from './components/ColorDisplay';
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
  /** Get panel element  */
  getPanelEle?: (penel: React.ReactElement) => React.ReactElement;
}

const Panel: FC<PanelProps> = ({
  value,
  defaultValue,
  prefixCls = ColorPickerPrefixCls,
  onChange,
  getPanelEle,
}) => {
  const [color, setColor] = useMergedState(defaultColor, {
    value,
    defaultValue,
  });
  const colorValue = useMemo(() => generateColor(color), [color]);
  const [hue, setHue] = useState(colorValue.toHsv().h || 160);
  const alphaColor = useMemo(() => {
    const rgb = generateColor(colorValue.toRgbString());
    // alpha color need equal 1 for base color
    rgb.setAlpha(1);
    return rgb.toRgbString();
  }, [colorValue]);

  const handleChange: ColorPickerCtxProps['handleChange'] = (data, type) => {
    const hsv = data.toHsv();
    const originalInput = data.originalInput as Hsv;
    // Maintain color hue not to 0
    if (type === 'hue') {
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

  const panelElement = useMemo(
    () => (
      <>
        <Picker />
        <ColorDisplay>
          <Slider type="hue" gradientColors={hueColor} />
          <Slider
            type="alpha"
            gradientColors={['rgba(255, 0, 4, 0) 0%', alphaColor]}
          />
        </ColorDisplay>
      </>
    ),
    [hueColor, alphaColor],
  );

  return (
    <ColorPickerProvider value={contextValue}>
      <div className={`${prefixCls}-panel`}>
        {typeof getPanelEle === 'function'
          ? getPanelEle(panelElement)
          : panelElement}
      </div>
    </ColorPickerProvider>
  );
};

export default Panel;
