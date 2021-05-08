import React, { CSSProperties, Dispatch, FC, MouseEventHandler } from 'react'
import { useControlledState } from '@react-stately/utils'
import Trigger, { TriggerProps } from 'rc-trigger'
import cn from 'classnames'
import prefixCls from './prefixCls'
import placements from './placements'
import Panel from './Panel'
import TinyColor from 'tinycolor2'
import prevent from '@segment/prevent-default'
import { Value } from './types'

export type Placement = 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight'

export interface ColorPickerProps {
  align?: TriggerProps['popupAlign']
  value?: Value
  defaultValue?: Value
  onChange?: Dispatch<Value>
  className?: string
  enableAlpha?: boolean
  getPopupContainer?: TriggerProps['getPopupContainer']
  popupPlacement?: Placement
  popupStyle?: CSSProperties
  animated?: boolean
}

const ColorPicker: FC<ColorPickerProps> = props => {
  const {
    className,
    value: propsValue,
    defaultValue,
    onChange,
    align,
    popupPlacement,
    getPopupContainer,
    popupStyle,
    animated,
    enableAlpha
  } = props

  const [
    value,
    setValue
  ] = useControlledState(propsValue as Value, defaultValue as Value, onChange as any)

  const handlePopupVisibleChange: TriggerProps['onPopupVisibleChange'] = open => {
    setValue(value => ({ ...value, open }))
  }

  const handleToggle: MouseEventHandler<HTMLDivElement> = () => {
    setValue(value => ({ ...value, open: !value.open }))
  }

  return (
    <div className={cn(className, `${prefixCls}-wrap`, value.open && `${prefixCls}-open`)}>
      <Trigger
        popup={
          <Panel
            value={value}
            enableAlpha={enableAlpha as boolean}
            prefixCls={`${prefixCls}-panel`}
            onChange={setValue}
            className={className}
          />
        }
        popupAlign={align}
        builtinPlacements={placements}
        popupPlacement={popupPlacement}
        action='click'
        destroyPopupOnHide
        getPopupContainer={getPopupContainer}
        popupStyle={popupStyle}
        popupMotion={animated as boolean ? { motionName: `${prefixCls}-slide-up` } : undefined}
        popupVisible={value.open}
        onPopupVisibleChange={handlePopupVisibleChange}
        prefixCls={prefixCls}
      >
        <span
          className={`${prefixCls}-trigger`}
          unselectable='on'
          style={{
            backgroundColor: value.color.toHexString()
          }}
          onClick={handleToggle}
          onMouseDown={prevent}
        />
      </Trigger>
    </div>
  )
}

ColorPicker.defaultProps = {
  defaultValue: { color: new TinyColor('#F00'), open: false },
  enableAlpha: true,
  popupPlacement: 'topLeft',
  animated: false
}

export default ColorPicker
