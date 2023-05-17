import type { CSSProperties } from 'react';
import React, { forwardRef, useCallback, useMemo } from 'react';
import { ColorPickerPrefixCls, defaultColor, generateColor } from './util';

import classNames from 'classnames';
import ColorBlock from './components/ColorBlock';
import Picker from './components/Picker';
import Slider from './components/Slider';
import useColorState from './hooks/useColorState';
import type { BaseColorPickerProps, ColorGenInput } from './interface';

const hueColor = [
  'rgb(255, 0, 0) 0%',
  'rgb(255, 255, 0) 17%',
  'rgb(0, 255, 0) 33%',
  'rgb(0, 255, 255) 50%',
  'rgb(0, 0, 255) 67%',
  'rgb(255, 0, 255) 83%',
  'rgb(255, 0, 0) 100%',
];

export interface ColorPickerProps extends BaseColorPickerProps {
  value?: ColorGenInput;
  defaultValue?: ColorGenInput;
  className?: string;
  style?: CSSProperties;
  /** Get panel element  */
  panelRender?: (panel: React.ReactElement) => React.ReactElement;
}

export default forwardRef<HTMLDivElement, ColorPickerProps>((props, ref) => {
  const {
    value,
    defaultValue,
    prefixCls = ColorPickerPrefixCls,
    onChange,
    className,
    style,
    panelRender,
  } = props;
  const [colorValue, setColorValue] = useColorState(defaultColor, {
    value,
    defaultValue,
  });
  const alphaColor = useMemo(() => {
    const rgb = generateColor(colorValue.toRgbString());
    // alpha color need equal 1 for base color
    rgb.setAlpha(1);
    return rgb.toRgbString();
  }, [colorValue]);
  const mergeCls = classNames(`${prefixCls}-panel`, className);

  const handleChange: BaseColorPickerProps['onChange'] = useCallback(
    data => {
      if (!value) {
        setColorValue(data);
      }
      onChange?.(data);
    },
    [onChange, value, setColorValue],
  );

  const panelElement = useMemo(
    () => (
      <>
        <Picker
          color={colorValue}
          onChange={handleChange}
          prefixCls={prefixCls}
        />
        <div className={`${prefixCls}-slider-container`}>
          <div className={`${prefixCls}-slider-group`}>
            <Slider
              gradientColors={hueColor}
              prefixCls={prefixCls}
              color={colorValue}
              value={`hsl(${colorValue.toHsb().h},100%, 50%)`}
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
          <ColorBlock color={colorValue.toRgbString()} prefixCls={prefixCls} />
        </div>
      </>
    ),
    [prefixCls, alphaColor, colorValue, handleChange],
  );

  return (
    <div className={mergeCls} style={style} ref={ref}>
      {typeof panelRender === 'function'
        ? panelRender(panelElement)
        : panelElement}
    </div>
  );
});
