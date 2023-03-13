import useMergedState from 'rc-util/lib/hooks/useMergedState';
import type { FC } from 'react';
import React, { useMemo, useState } from 'react';
import { ColorPickerPrefixCls, defaultColor, generateColor } from './util';

import ColorDisplay from './components/ColorDisplay';
import Picker from './components/Picker';
import Slider from './components/Slider';
import { baseProps, Color } from './interface';

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
  const [colorValue, setcolorValue] = useState(generateColor(color) as Color);
  const alphaColor = useMemo(() => {
    const rgb = generateColor(colorValue.toRgbString());
    // alpha color need equal 1 for base color
    rgb.setAlpha(1);
    return rgb.toRgbString();
  }, [colorValue]);

  const handleChange: baseProps['onChange'] = data => {
    setcolorValue(data);
    onChange?.(data);
  };

  const panelElement = useMemo(
    () => (
      <>
        <Picker
          color={colorValue}
          onChange={handleChange}
          prefixCls={prefixCls}
        />
        <div className={`${prefixCls}-slider-container`}>
          <ColorDisplay color={colorValue} prefixCls={prefixCls} />
          <div className={`${prefixCls}-slider-group`}>
            <Slider
              type="hue"
              gradientColors={hueColor}
              prefixCls={prefixCls}
              color={colorValue}
              value={`hsl(${colorValue.toHsv().h},100%, 50%)`}
              onChange={handleChange}
            />
            <Slider
              type="alpha"
              gradientColors={['rgba(255, 0, 4, 0) 0%', alphaColor]}
              prefixCls={prefixCls}
              color={colorValue}
              value={colorValue.toRgbString()}
              onChange={handleChange}
            />
          </div>
        </div>
      </>
    ),
    [alphaColor, colorValue, handleChange],
  );

  return (
    <div className={`${prefixCls}-panel`}>
      {typeof panelRender === 'function'
        ? panelRender(panelElement)
        : panelElement}
    </div>
  );
};

export default Panel;
