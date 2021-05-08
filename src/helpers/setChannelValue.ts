import TinyColor from 'tinycolor2'
import { Mode } from './modes'

const setChannelValue = (
  color: TinyColor.Instance,
  mode: Mode,
  channelIndex: number,
  value: number
): TinyColor.Instance => {
  if (mode === 'RGB') {
    const rgb = color.toRgb()
    switch (channelIndex) {
      case 0:
        return new TinyColor({ ...rgb, r: value })
      case 1:
        return new TinyColor({ ...rgb, g: value })
      default:
        return new TinyColor({ ...rgb, b: value })
    }
  } else {
    const hsl = color.toHsl()
    switch (channelIndex) {
      case 0:
        return new TinyColor({ ...hsl, h: value })
      case 1:
        return new TinyColor({ ...hsl, s: value })
      default:
        return new TinyColor({ ...hsl, l: value })
    }
  }
}

export default setChannelValue
