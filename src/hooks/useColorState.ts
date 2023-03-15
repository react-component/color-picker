import { useState } from 'react';
import type { Color } from '../color';
import { generateColor } from '../util';

function hasValue(value) {
  return value !== undefined;
}

const useColorState = <T, V = T>(
  defaultStateValue: T,
  option?: {
    defaultValue?: V;
    value?: V;
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
