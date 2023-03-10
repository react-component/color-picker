import Trigger from '@rc-component/trigger';
import type { FC } from 'react';
import React from 'react';
import placements from './components/placements';
import { TriggerPlacement } from './interface';
import Panel, { PanelProps } from './Panel';
import { ColorPickerPrefixCls } from './util';
export interface ColorPickerProps extends Omit<PanelProps, 'prefixCls'> {
  open?: boolean;
  trigger?: 'click' | 'hover';
  children: React.ReactElement;
  disabled?: boolean;
  onOpenChange?: (open: boolean) => void;
  /** Popup placement */
  placement?: TriggerPlacement;
  prefixCls?: string;
}

const ColorPicker: FC<ColorPickerProps> = props => {
  const {
    prefixCls = ColorPickerPrefixCls,
    open,
    trigger = 'hover',
    children,
    onOpenChange,
    placement = 'bottomLeft',
  } = props;

  return (
    <div className={`${prefixCls}`}>
      <Trigger
        action={[trigger]}
        popupVisible={open}
        popup={<Panel {...props} />}
        popupPlacement={placement}
        builtinPlacements={placements}
        onPopupVisibleChange={onOpenChange}
      >
        {children}
      </Trigger>
    </div>
  );
};

export default ColorPicker;
