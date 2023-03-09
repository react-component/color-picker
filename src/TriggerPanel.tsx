import Trigger from '@rc-component/trigger';
import React, { FC } from 'react';
import placements from './components/placements';
import { TriggerPlacement } from './interface';
import Panel, { PanelProps } from './Panel';

export interface TriggerPanelProps extends PanelProps {
  open?: boolean;
  trigger?: 'click' | 'hover';
  children: React.ReactElement;
  disabled?: boolean;
  onOpenChange?: (open: boolean) => void;
  /** Popup placement */
  placement?: TriggerPlacement;
}

const TriggerPanel: FC<TriggerPanelProps> = props => {
  const {
    open,
    trigger = 'hover',
    children,
    onOpenChange,
    placement = 'bottomLeft',
  } = props;

  return (
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
  );
};

export default TriggerPanel;
