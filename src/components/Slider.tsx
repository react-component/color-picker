import type { FC } from 'react';
import React, { useRef } from 'react';
import useColorDrag from '../hooks/useColorDrag';
import type {
  BaseColorPickerProps,
  HsbaColorType,
  TransformOffset,
} from '../interface';
import Palette from './Palette';

import classNames from 'classnames';
import { useEvent } from 'rc-util';
import type { Color } from '../color';
import { calculateColor, calculateOffset } from '../util';
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

interface SliderProps extends BaseColorPickerProps {
  gradientColors: string[];
  direction?: string;
  type?: HsbaColorType;
  value?: string;
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
    return type === 'hue' ? c.getHue() : c.getAlpha();
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
    calculate: containerRef =>
      calculateOffset(containerRef, transformRef, color, type),
    onDragChange,
    onDragChangeComplete() {
      onChangeComplete(getValue(colorRef.current));
    },
    direction: 'x',
    disabledDrag: disabled,
  });

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
        <Transform offset={offset} ref={transformRef}>
          <Handler
            size="small"
            color={color.toHexString()}
            prefixCls={prefixCls}
          />
        </Transform>
        <Gradient colors={gradientList} type={type} prefixCls={prefixCls} />
      </Palette>
    </div>
  );
};

// const Slider: FC<SliderProps> = ({
//   gradientColors,
//   direction,
//   type = 'hue',
//   color,
//   value,
//   onChange,
//   onChangeComplete,
//   disabled,
//   prefixCls,
// }) => {
//   const sliderRef = useRef();
//   const transformRef = useRef();
//   const colorRef = useRef(color);

//   const onDragChange = useEvent((offsetValue: TransformOffset) => {
//     const calcColor = calculateColor({
//       offset: offsetValue,
//       targetRef: transformRef,
//       containerRef: sliderRef,
//       color,
//       type,
//     });
//     colorRef.current = calcColor;
//     onChange(calcColor);
//   });

//   const [offset, dragStartHandle] = useColorDrag({
//     color,
//     targetRef: transformRef,
//     containerRef: sliderRef,
//     calculate: containerRef =>
//       calculateOffset(containerRef, transformRef, color, type),
//     onDragChange,
//     onDragChangeComplete() {
//       onChangeComplete?.(colorRef.current, type);
//     },
//     direction: 'x',
//     disabledDrag: disabled,
//   });

//   return (
//     <div
//       ref={sliderRef}
//       className={classNames(
//         `${prefixCls}-slider`,
//         `${prefixCls}-slider-${type}`,
//       )}
//       onMouseDown={dragStartHandle}
//       onTouchStart={dragStartHandle}
//     >
//       <Palette prefixCls={prefixCls}>
//         <Transform offset={offset} ref={transformRef}>
//           <Handler size="small" color={value} prefixCls={prefixCls} />
//         </Transform>
//         <Gradient
//           colors={gradientColors}
//           direction={direction}
//           type={type}
//           prefixCls={prefixCls}
//         />
//       </Palette>
//     </div>
//   );
// };

export default Slider;
