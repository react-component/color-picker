import { createContext } from '@rc-component/context';
import type { Color, ColorFormat, HsvaColorType } from './interface';

export interface ColorPickerCtxProps {
  color: Color;
  colorFormat: ColorFormat;
  prefixCls: string;
  hue: number;
  handleChange: (color: Color, type?: HsvaColorType) => void;
  handleFormatChange: (format: ColorFormat) => void;
}

const ColorPickerContext = createContext<ColorPickerCtxProps>();

export const { Provider: ColorPickerProvider } = ColorPickerContext;

export default ColorPickerContext;
