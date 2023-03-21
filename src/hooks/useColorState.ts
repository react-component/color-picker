import { useState } from 'react';
import type { Color } from '../interface';
import { generateColor } from '../util';

type ColorValue = Color | string | undefined;

function hasValue(value: ColorValue) {
  return value !== undefined;
}

const useColorState = (
  defaultStateValue: ColorValue,
  option: {
    defaultValue?: ColorValue;
    value?: ColorValue;
  },
): [Color, React.Dispatch<React.SetStateAction<Color>>] => {
  const { defaultValue, value } = option;
  const [colorValue, setColorValue] = useState(() => {
    let mergeState;
    if (hasValue(value)) {
      mergeState = value;
    } else if (hasValue(defaultValue)) {
      mergeState = defaultValue;
    } else {
      mergeState = defaultStateValue;
    }
    return generateColor(mergeState);
  });
  return [colorValue, setColorValue];
};

export default useColorState;
