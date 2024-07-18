import * as React from 'react';
import type { BaseSliderProps } from '../components/Slider';
import Slider from '../components/Slider';

export interface Components {
  slider?: React.ComponentType<BaseSliderProps>;
}

type RequiredComponents = Required<Components>;

export default function useComponent(
  components?: Components,
): [Slider: RequiredComponents['slider']] {
  return React.useMemo(() => {
    const { slider } = components || {};

    return [slider || Slider];
  }, [components]);
}
