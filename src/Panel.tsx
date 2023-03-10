import useMergedState from 'rc-util/lib/hooks/useMergedState';
import type { FC } from 'react';
import React, { useMemo, useState } from 'react';
import type { ColorPickerCtxProps } from './context';
import { ColorPickerProvider } from './context';
import { ColorPickerPrefixCls, defaultColor, generateColor } from './util';

import ColorDisplay from './components/ColorDisplay';
import Picker from './components/Picker';
import Slider from './components/Slider';
import { Color } from './interface';

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
  panelRender?: (penel: React.ReactElement) => React.ReactElement;
}

const Panel: FC<PanelProps> = ({
  value,
  defaultValue,
  prefixCls = ColorPickerPrefixCls,
  onChange,
  panelRender,
}) => {
  const [color] = useMergedState(defaultColor, {
    value,
    defaultValue,
  });
  const [colorValue, setcolorValue] = useState(generateColor(color));
  const alphaColor = useMemo(() => {
    const rgb = generateColor(colorValue.toRgbString());
    // alpha color need equal 1 for base color
    rgb.setAlpha(1);
    return rgb.toRgbString();
  }, [colorValue]);

  const handleChange: ColorPickerCtxProps['handleChange'] = data => {
    setcolorValue(data);
    onChange?.(data);
  };

  const contextValue = useMemo<ColorPickerCtxProps>(
    () => ({
      color: colorValue,
      prefixCls,
      handleChange,
    }),
    [colorValue, prefixCls],
  );

  const panelElement = useMemo(
    () => (
      <>
        <Picker color={colorValue} onChange={handleChange} />
        <ColorDisplay
          color={colorValue}
          slotRender={() => (
            <>
              <Slider
                type="hue"
                gradientColors={hueColor}
                color={colorValue}
                onChange={handleChange}
              />
              <Slider
                type="alpha"
                gradientColors={['rgba(255, 0, 4, 0) 0%', alphaColor]}
                color={colorValue}
                onChange={handleChange}
              />
            </>
          )}
        ></ColorDisplay>
      </>
    ),
    [hueColor, alphaColor, colorValue, handleChange],
  );

  return (
    <ColorPickerProvider value={contextValue}>
      <div className={`${prefixCls}-panel`}>
        {typeof panelRender === 'function'
          ? panelRender(panelElement)
          : panelElement}
      </div>
    </ColorPickerProvider>
  );
};

export default Panel;
