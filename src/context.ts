import { createContext } from '@rc-component/context';
import type { Color } from './interface';

export interface ColorPickerCtxProps {
  color: Color;
  prefixCls: string;
  handleChange: (color: Color) => void;
}

const ColorPickerContext = createContext<ColorPickerCtxProps>();

export const { Provider: ColorPickerProvider } = ColorPickerContext;

export default ColorPickerContext;
