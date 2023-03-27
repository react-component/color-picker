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
  getPopupContainer?: (node: HTMLElement) => HTMLElement;
  classNames?: { popup?: string };
  style?: { popup?: CSSProperties };
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
    classNames,
    style,
    prefixCls = ColorPickerPrefixCls,
    builtinPlacements = placements,
    motion,
    ...resetProps
  } = props;

  return (
    <Trigger
      action={[trigger]}
      popupVisible={open}
      popup={<Panel {...props} />}
      popupPlacement={placement}
      onPopupVisibleChange={onOpenChange}
      popupClassName={classNames?.popup}
      popupStyle={style?.popup}
      builtinPlacements={builtinPlacements}
      popupMotion={motion}
      prefixCls={prefixCls}
      {...resetProps}
    >
      {children}
    </Trigger>
  );
};

export default ColorPicker;
