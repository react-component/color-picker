import type { BuildInPlacements, TriggerProps } from '@rc-component/trigger';
import Trigger from '@rc-component/trigger';
import type { CSSProperties, FC } from 'react';
import React from 'react';
import placements from './components/placements';
import { TriggerPlacement, TriggerType } from './interface';
import type { PanelProps } from './Panel';
import Panel from './Panel';
import { ColorPickerPrefixCls } from './util';
export interface ColorPickerProps extends PanelProps {
  open?: boolean;
  trigger?: TriggerType;
  children: React.ReactElement;
  disabled?: boolean;
  onOpenChange?: (open: boolean) => void;
  /** Popup placement */
  placement?: TriggerPlacement;
  getColorPopupContainer?: (node: HTMLElement) => HTMLElement;
  overlayClassName?: string | undefined;
  overlayStyle?: CSSProperties | undefined;
  builtinPlacements?: BuildInPlacements;
  arrow?: boolean;
  motion?: TriggerProps['popupMotion'];
}

const ColorPicker: FC<ColorPickerProps> = props => {
  const {
    open,
    trigger = 'hover',
    children,
    onOpenChange,
    placement = 'bottomLeft',
    prefixCls = ColorPickerPrefixCls,
    getColorPopupContainer,
    overlayClassName,
    overlayStyle,
    builtinPlacements,
    arrow,
    motion,
  } = props;

  return (
    <Trigger
      action={[trigger]}
      popupVisible={open}
      popup={<Panel {...props} />}
      popupPlacement={placement}
      builtinPlacements={builtinPlacements || placements}
      onPopupVisibleChange={onOpenChange}
      prefixCls={prefixCls}
      getPopupContainer={getColorPopupContainer}
      popupClassName={overlayClassName}
      popupStyle={overlayStyle}
      arrow={arrow}
      popupMotion={motion}
    >
      {children}
    </Trigger>
  );
};

export default ColorPicker;
