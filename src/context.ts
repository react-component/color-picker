import { createContext } from '@rc-component/context';
import type { Color, HsvaColorType } from './interface';

export interface ColorPickerCtxProps {
  color: Color;
  prefixCls: string;
  hue: number;
  handleChange: (color: Color, type?: HsvaColorType) => void;
}

const ColorPickerContext = createContext<ColorPickerCtxProps>();

export const { Provider: ColorPickerProvider } = ColorPickerContext;

export default ColorPickerContext;
