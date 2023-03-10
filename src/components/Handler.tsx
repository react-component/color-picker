import { useContext } from '@rc-component/context';
import classNames from 'classnames';
import React, { FC } from 'react';
import ColorPickerContext from '../context';

type HandlerSize = 'default' | 'small';

const Handler: FC<{
  size?: HandlerSize;
  color?: string;
}> = ({ size = 'default', color }) => {
  const prefixCls = useContext(ColorPickerContext, 'prefixCls');
  return (
    <div
      className={classNames(`${prefixCls}-handler`, {
        [`${prefixCls}-handler-sm`]: size === 'small',
      })}
      style={{
        backgroundColor: color,
      }}
    ></div>
  );
};

export default Handler;
