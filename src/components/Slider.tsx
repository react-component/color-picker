import type { FC } from 'react';
import React, { useRef } from 'react';
import useColorDrag from '../hooks/useColorDrag';
import type { HsbaColorType, TransformOffset } from '../interface';
import Palette from './Palette';

import { useEvent } from '@rc-component/util';
import classNames from 'classnames';
import { Color } from '../color';
import { calcOffset, calculateColor } from '../util';
import Gradient from './Gradient';
import Handler from './Handler';
import Transform from './Transform';

export interface BaseSliderProps {
  prefixCls: string;
  colors: { percent: number; color: string }[];
  min: number;
  max: number;
  value: number;
  disabled: boolean;
  onChange: (value: number) => void;
  onChangeComplete: (value: number) => void;
  type: HsbaColorType;
  color: Color;
}

const Slider: FC<BaseSliderProps> = props => {
  const {
    prefixCls,
    colors,
    disabled,
    onChange,
    onChangeComplete,
    color,
    type,
  } = props;

  const sliderRef = useRef();
  const transformRef = useRef();
  const colorRef = useRef(color);

  const getValue = (c: Color) => {
    return type === 'hue' ? c.getHue() : c.a * 100;
  };

  const onDragChange = useEvent((offsetValue: TransformOffset) => {
    const calcColor = calculateColor({
      offset: offsetValue,
      targetRef: transformRef,
      containerRef: sliderRef,
      color,
      type,
    });

    colorRef.current = calcColor;
    onChange(getValue(calcColor));
  });

  const [offset, dragStartHandle] = useColorDrag({
    color,
    targetRef: transformRef,
    containerRef: sliderRef,
    calculate: () => calcOffset(color, type),
    onDragChange,
    onDragChangeComplete() {
      onChangeComplete(getValue(colorRef.current));
    },
    direction: 'x',
    disabledDrag: disabled,
  });

  const handleColor = React.useMemo(() => {
    if (type === 'hue') {
      const hsb = color.toHsb();
      hsb.s = 1;
      hsb.b = 1;
      hsb.a = 1;

      const lightColor = new Color(hsb);
      return lightColor;
    }

    return color;
  }, [color, type]);

  // ========================= Gradient =========================
  const gradientList = React.useMemo(
    () => colors.map(info => `${info.color} ${info.percent}%`),
    [colors],
  );

  // ========================== Render ==========================
  return (
    <div
      ref={sliderRef}
      className={classNames(
        `${prefixCls}-slider`,
        `${prefixCls}-slider-${type}`,
      )}
      onMouseDown={dragStartHandle}
      onTouchStart={dragStartHandle}
    >
      <Palette prefixCls={prefixCls}>
        <Transform x={offset.x} y={offset.y} ref={transformRef}>
          <Handler
            size="small"
            color={handleColor.toHexString()}
            prefixCls={prefixCls}
          />
        </Transform>
        <Gradient colors={gradientList} type={type} prefixCls={prefixCls} />
      </Palette>
    </div>
  );
};

export default Slider;
