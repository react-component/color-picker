import Trigger from '@rc-component/trigger';
import type { FC } from 'react';
import React from 'react';
import type { ColorPickerProps } from './ColorPicker';
import Panel from './Panel';

const TriggerPanel: FC<
  Pick<
    ColorPickerProps,
    'open' | 'trigger' | 'placement' | 'onOpenChange' | 'children'
  >
> = props => {
  const {
    open = false,
    trigger = 'hover',
    placement = 'bottomLeft',
    children,
    onOpenChange,
  } = props;
  return (
    <Trigger
      action={trigger}
      popupVisible={open}
      popup={<Panel {...props} />}
      popupPlacement={placement}
      onPopupVisibleChange={onOpenChange}
    >
      {children}
    </Trigger>
  );
};

export default TriggerPanel;
