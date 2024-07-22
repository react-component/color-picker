import { useMergedState } from 'rc-util';
import { useMemo } from 'react';
import type { Color } from '../color';
import type { ColorGenInput } from '../interface';
import { generateColor } from '../util';

type ColorValue = ColorGenInput | undefined;

const useColorState = (
  defaultValue: ColorValue,
  value?: ColorValue,
): [Color, React.Dispatch<React.SetStateAction<Color>>] => {
  const [mergedValue, setValue] = useMergedState(defaultValue, { value });

  const color = useMemo(() => generateColor(mergedValue), [mergedValue]);

  return [color, setValue];
};

export default useColorState;
