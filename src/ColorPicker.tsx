import type { BuildInPlacements, TriggerProps } from '@rc-component/trigger';
import Trigger from '@rc-component/trigger';
import useMergedState from 'rc-util/lib/hooks/useMergedState';
import React, { CSSProperties, FC, useRef } from 'react';
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

  const dragRef = useRef(false);

  return (
    <Trigger
      action={[trigger]}
      popupVisible={openValue}
      popup={
        <Panel
          {...props}
          onDragStart={() => (dragRef.current = true)}
          onDragStop={() => (setTimeout(() => (dragRef.current = false)), 0)}
        />
      }
      popupPlacement={placement}
      onPopupVisibleChange={visible => {
        if (!dragRef.current) {
          setOpenValue(visible);
        }
        if (dragRef.current) {
          dragRef.current = !dragRef.current;
        }
      }}
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
