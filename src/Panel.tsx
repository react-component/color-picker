import cn from 'classnames'
import React, {
  Dispatch,
  FC,
  FocusEventHandler,
  SetStateAction,
  useEffect,
  useRef,
  useState
} from 'react'
import Color from './helpers/color'
import Alpha from './Alpha'
import Board from './Board'
import Params from './Params'
import Preview from './Preview'
import Ribbon from './Ribbon'
import { Value } from './types'
import { useControlledState } from '@react-stately/utils'
import prefixCls from './prefixCls'
import TinyColor from 'tinycolor2'

export interface PanelProps {
  value?: Value
  onChange?: Dispatch<SetStateAction<Value>>
  defaultValue?: Value
  enableAlpha: boolean
  className?: string
  prefixCls?: string
}

const Panel: FC<PanelProps> = props => {
  const {
    value: propsValue,
    defaultValue,
    className,
    onChange,
    enableAlpha
  } = props
  const prefixCls = props.prefixCls as string

  const [
    value,
    setValue
  ] = useControlledState<Value>(propsValue as Value, defaultValue as Value, onChange as any)

  const ref = useRef<HTMLDivElement>(null)
  const [focusingOnInput, setFocusingOnInput] = useState(false)

  useEffect(() => {
    if (value.open) {
      setTimeout(() => {
        ref.current?.focus()
      }, 1)
    }
  }, [])

  // Some weird react set state stuff causes an error when clicking at rainbow rect
  // after focusing on input
  // So we need to delay it
  const blurTimer = useRef<number>()
  const handleBlur = (): void => {
    // Clear original blur timer
    clearTimeout(blurTimer.current)
    if (focusingOnInput) {
      blurTimer.current = setTimeout(() => {
        setFocusingOnInput(false)
      }, 100 /* 100 I don't know why but og code had 100 */) as unknown as number
    } else {
      setValue(value => ({ ...value, open: false }))
    }
  }
  const handleFocus: FocusEventHandler<HTMLDivElement> = () => {
    // Don't focus while blurring
    if (blurTimer.current !== undefined) {
      clearTimeout(blurTimer.current)
    } else {
      setFocusingOnInput(true)
    }
  }

  const handleChange: Dispatch<Color> = color => {
    setValue(value => ({
      ...value,
      color: new TinyColor(color.hex).setAlpha(value.color.getAlpha())
    }))
  }

  const handleAlphaChange: Dispatch<number> = alpha => {
    setValue(value => ({ ...value, color: new TinyColor(value.color).setAlpha(alpha / 100) }))
  }

  const color = new Color(value.color)
  const alpha = value.color.getAlpha()

  return (
    <div
      ref={ref}
      className={cn(prefixCls, className)}
      onBlur={handleBlur}
      onFocus={handleFocus}
      tabIndex={0}
    >
      <div className={`${prefixCls}-inner`}>
        <Board
          rootPrefixCls={prefixCls}
          color={color}
          onChange={handleChange}
        />
        <div className={cn(`${prefixCls}-wrap`, enableAlpha && `${prefixCls}-wrap-has-alpha`)}>
          <div className={`${prefixCls}-wrap-ribbon`}>
            <Ribbon rootPrefixCls={prefixCls} color={color} onChange={handleChange} />
          </div>
          {enableAlpha &&
            <div className={`${prefixCls}-wrap-alpha`}>
              <Alpha
                rootPrefixCls={prefixCls}
                alpha={alpha * 100}
                color={color}
                onChange={handleAlphaChange}
              />
            </div>}
          <div className={`${prefixCls}-wrap-preview`}>
            <Preview
              rootPrefixCls={prefixCls}
              alpha={alpha * 100}
              color={color}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={`${prefixCls}-wrap`} style={{ height: 40, marginTop: 6 }}>
          <Params
            prefixCls={`${prefixCls}-params`}
            value={value}
            onChange={setValue}
            enableAlpha={enableAlpha}
          />
        </div>
      </div>
    </div>
  )
}

Panel.defaultProps = {
  prefixCls: `${prefixCls}-panel`
}

export default Panel
