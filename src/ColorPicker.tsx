import type { CSSProperties } from 'react';
import React, { forwardRef, useMemo } from 'react';
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
  /** Disabled alpha selection */
  disabledAlpha?: boolean;
}

export default forwardRef<HTMLDivElement, ColorPickerProps>((props, ref) => {
  const {
    value,
    defaultValue,
    prefixCls = ColorPickerPrefixCls,
    onChange,
    onChangeComplete,
    className,
    style,
    panelRender,
    disabledAlpha = false,
    disabled = false,
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
  const mergeCls = classNames(`${prefixCls}-panel`, className, {
    [`${prefixCls}-panel-disabled`]: disabled,
  });
  const basicProps = {
    prefixCls,
    onChangeComplete,
    disabled,
  };

  const handleChange: BaseColorPickerProps['onChange'] = (data, type) => {
    if (!value) {
      setColorValue(data);
    }
    onChange?.(data, type);
  };

  const defaultPanel = (
    <>
      <Picker color={colorValue} onChange={handleChange} {...basicProps} />
      <div className={`${prefixCls}-slider-container`}>
        <div
          className={classNames(`${prefixCls}-slider-group`, {
            [`${prefixCls}-slider-group-disabled-alpha`]: disabledAlpha,
          })}
        >
          <Slider
            gradientColors={hueColor}
            color={colorValue}
            value={`hsl(${colorValue.toHsb().h},100%, 50%)`}
            onChange={color => handleChange(color, 'hue')}
            {...basicProps}
          />
          {!disabledAlpha && (
            <Slider
              type="alpha"
              gradientColors={['rgba(255, 0, 4, 0) 0%', alphaColor]}
              color={colorValue}
              value={colorValue.toRgbString()}
              onChange={color => handleChange(color, 'alpha')}
              {...basicProps}
            />
          )}
        </div>
        <ColorBlock color={colorValue.toRgbString()} prefixCls={prefixCls} />
      </div>
    </>
  );

  return (
    <div className={mergeCls} style={style} ref={ref}>
      {typeof panelRender === 'function'
        ? panelRender(defaultPanel)
        : defaultPanel}
    </div>
  );
});
