import type { CSSProperties } from 'react';
import React, { forwardRef, useMemo } from 'react';
import { ColorPickerPrefixCls, defaultColor } from './util';

import classNames from 'classnames';
import { Color } from './color';
import ColorBlock from './components/ColorBlock';
import Picker from './components/Picker';
import useColorState from './hooks/useColorState';
import useComponent, { type Components } from './hooks/useComponent';
import type { BaseColorPickerProps, ColorGenInput } from './interface';

const HUE_COLORS = [
  {
    color: 'rgb(255, 0, 0)',
    percent: 0,
  },
  {
    color: 'rgb(255, 255, 0)',
    percent: 17,
  },
  {
    color: 'rgb(0, 255, 0)',
    percent: 33,
  },
  {
    color: 'rgb(0, 255, 255)',
    percent: 50,
  },
  {
    color: 'rgb(0, 0, 255)',
    percent: 67,
  },
  {
    color: 'rgb(255, 0, 255)',
    percent: 83,
  },
  {
    color: 'rgb(255, 0, 0)',
    percent: 100,
  },
];

export interface ColorPickerProps extends Omit<BaseColorPickerProps, 'color'> {
  value?: ColorGenInput;
  defaultValue?: ColorGenInput;
  className?: string;
  style?: CSSProperties;
  /** Get panel element  */
  panelRender?: (panel: React.ReactElement) => React.ReactElement;
  /** Disabled alpha selection */
  disabledAlpha?: boolean;
  components?: Components;
}

const ColorPicker = forwardRef<HTMLDivElement, ColorPickerProps>(
  (props, ref) => {
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
      components,
    } = props;

    // ========================== Components ==========================
    const [Slider] = useComponent(components);

    // ============================ Color =============================
    const [colorValue, setColorValue] = useColorState(
      defaultValue || defaultColor,
      value,
    );
    const alphaColor = useMemo(
      () => colorValue.setA(1).toRgbString(),
      [colorValue],
    );

    // ============================ Events ============================
    const handleChange: BaseColorPickerProps['onChange'] = (data, type) => {
      if (!value) {
        setColorValue(data);
      }
      onChange?.(data, type);
    };

    // Convert
    const getHueColor = (hue: number) => new Color(colorValue.setHue(hue));

    const getAlphaColor = (alpha: number) =>
      new Color(colorValue.setA(alpha / 100));

    // Slider change
    const onHueChange = (hue: number) => {
      handleChange(getHueColor(hue), 'hue');
    };

    const onAlphaChange = (alpha: number) => {
      handleChange(getAlphaColor(alpha), 'alpha');
    };

    // Complete
    const onHueChangeComplete = (hue: number) => {
      if (onChangeComplete) {
        onChangeComplete(getHueColor(hue));
      }
    };

    const onAlphaChangeComplete = (alpha: number) => {
      if (onChangeComplete) {
        onChangeComplete(getAlphaColor(alpha));
      }
    };

    // ============================ Render ============================
    const mergeCls = classNames(`${prefixCls}-panel`, className, {
      [`${prefixCls}-panel-disabled`]: disabled,
    });

    const sharedSliderProps = {
      prefixCls,
      disabled,
      color: colorValue,
    };

    const defaultPanel = (
      <>
        <Picker
          onChange={handleChange}
          {...sharedSliderProps}
          onChangeComplete={onChangeComplete}
        />
        <div className={`${prefixCls}-slider-container`}>
          <div
            className={classNames(`${prefixCls}-slider-group`, {
              [`${prefixCls}-slider-group-disabled-alpha`]: disabledAlpha,
            })}
          >
            <Slider
              {...sharedSliderProps}
              type="hue"
              colors={HUE_COLORS}
              min={0}
              max={359}
              value={colorValue.getHue()}
              onChange={onHueChange}
              onChangeComplete={onHueChangeComplete}
            />
            {!disabledAlpha && (
              <Slider
                {...sharedSliderProps}
                type="alpha"
                colors={[
                  { percent: 0, color: 'rgba(255, 0, 4, 0)' },
                  { percent: 100, color: alphaColor },
                ]}
                min={0}
                max={100}
                value={colorValue.a * 100}
                onChange={onAlphaChange}
                onChangeComplete={onAlphaChangeComplete}
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
  },
);

if (process.env.NODE_ENV !== 'production') {
  ColorPicker.displayName = 'ColorPicker';
}

export default ColorPicker;
