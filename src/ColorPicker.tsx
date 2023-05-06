import type { BuildInPlacements, TriggerProps } from '@rc-component/trigger';
import Trigger from '@rc-component/trigger';
import useMergedState from 'rc-util/lib/hooks/useMergedState';
import type { CSSProperties, FC } from 'react';
import React from 'react';
import type { ColorPickerPanelProps } from './ColorPickerPanel';
import ColorPickerPanel from './ColorPickerPanel';
import placements from './components/placements';
import { TriggerPlacement, TriggerType } from './interface';
import { ColorPickerPrefixCls } from './util';
export interface ColorPickerProps extends ColorPickerPanelProps {
  open?: boolean;
  trigger?: TriggerType;
  children: React.ReactElement;
  disabled?: boolean;
  onOpenChange?: (open: boolean) => void;
  /** Popup placement */
  placement?: TriggerPlacement;
  getPopupContainer?: (node: HTMLElement) => HTMLElement;
  classNames?: { popup?: string };
  styles?: { popup?: CSSProperties };
  builtinPlacements?: BuildInPlacements;
  arrow?: boolean;
  motion?: TriggerProps['popupMotion'];
}

const ColorPicker: FC<ColorPickerProps> = props => {
  const {
    open,
    disabled,
    trigger = 'click',
    children,
    onOpenChange,
    placement = 'bottomLeft',
    classNames,
    styles,
    prefixCls = ColorPickerPrefixCls,
    builtinPlacements = placements,
    motion,
    ...resetProps
  } = props;

  const [openValue, setOpenValue] = useMergedState(false, {
    value: open,
    postState: openData => !disabled && openData,
    onChange: onOpenChange,
  });

  return (
    <Trigger
      action={[trigger]}
      popupVisible={openValue}
      popup={<ColorPickerPanel {...props} />}
      popupPlacement={placement}
      onPopupVisibleChange={setOpenValue}
      popupClassName={classNames?.popup}
      popupStyle={styles?.popup}
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
