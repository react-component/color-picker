import cn from 'classnames'
import React, { ChangeEventHandler, Dispatch, FC, InputHTMLAttributes, SetStateAction } from 'react'
import TinyColor from 'tinycolor2'
import getChannelValue from './helpers/getChannelValue'
import ChangeOnBlur from './ChangeOnBlur'
import { Value } from './types'
import setChannelValue from './helpers/setChannelValue'
import modes, { Mode } from './helpers/modes'
import useLoop from './helpers/useLoop'
import round from 'round'

type ModeInputProps = {
  [M in Mode]: Array<InputHTMLAttributes<HTMLInputElement>>
}

const rgbChannelInputProps: InputHTMLAttributes<HTMLInputElement> = {
  min: 0,
  max: 255
}

const ratioInputProps: InputHTMLAttributes<HTMLInputElement> = {
  min: 0,
  max: 1,
  step: 0.01
}

const modeInputProps: ModeInputProps = {
  RGB: [rgbChannelInputProps, rgbChannelInputProps, rgbChannelInputProps],
  HSL: [{
    min: 0,
    max: 360
  }, ratioInputProps, ratioInputProps]
}

interface Props {
  prefixCls: string
  value: Value
  onChange: Dispatch<SetStateAction<Value>>
  enableAlpha: boolean
}

const Params: FC<Props> = props => {
  const { prefixCls, value, onChange, enableAlpha } = props

  const [mode, nextMode] = useLoop<Mode>(modes)

  const handleChange: Dispatch<string> = hex => {
    const color = new TinyColor(hex)
    console.log(hex, color.isValid())
    if (color.isValid()) {
      onChange(value => ({ ...value, color: color }))
    }
  }

  const handleChangeAlpha: ChangeEventHandler<HTMLInputElement> = ({
    target: { valueAsNumber: newAlpha }
  }) => {
    onChange(value => ({ ...value, color: new TinyColor(value.color).setAlpha(newAlpha) }))
  }

  const channels = getChannelValue(value.color, mode)
  const alpha = value.color.getAlpha()

  return (
    <div className={cn(prefixCls, enableAlpha && `${prefixCls}-has-alpha`)}>
      <div className={`${prefixCls}-input`}>
        <ChangeOnBlur
          className={`${prefixCls}-hex`}
          maxLength={6}
          value={value.color.toHex()}
          onChange={handleChange}
        />
        {channels.map((channel, index) => {
          const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
            const newColor = setChannelValue(value.color, mode, index, e.target.valueAsNumber)
            if (newColor.isValid()) onChange(value => ({ ...value, color: newColor }))
          }

          return (
            <input
              {...modeInputProps[mode][index]}
              key={mode[index]}
              type='number'
              value={round(channel, modeInputProps[mode][index].step)}
              onChange={handleChange}
            />
          )
        })}
        {enableAlpha &&
          <input
            key='alpha'
            type='number'
            value={alpha}
            step={0.01}
            onChange={handleChangeAlpha}
          />}
      </div>
      <div className={`${prefixCls}-label`}>
        <label className={`${prefixCls}-label-hex`}>Hex</label>
        {channels.map((channel, index) => (
          <label
            key={mode[index]}
            className={`${prefixCls}-label-number`}
            onClick={nextMode}
          >
            {mode[index]}
          </label>
        ))}
        {enableAlpha && <label className={`${prefixCls}-label-alpha`}>A</label>}
      </div>
    </div>
  )
}

export default Params
