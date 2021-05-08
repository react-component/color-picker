import { Instance as TinyColor, ColorFormats } from 'tinycolor2'
import { Mode } from './modes'

const getChannels = (color: TinyColor, mode: Mode): number[] => {
  if (mode === 'RGB') {
    const { r, g, b } = color.toRgb()
    return [r, g, b]
  } else {
    const { h, s, l } = color.getFormat() === 'hsl'
      ? color.getOriginalInput() as ColorFormats.HSL
      : color.toHsl()
    return [h, s, l]
  }
}

export default getChannels
