import { clsx } from 'clsx';
import React from 'react';

type HandlerSize = 'default' | 'small';

const Handler: React.FC<{
  size?: HandlerSize;
  color?: string;
  prefixCls?: string;
}> = ({ size = 'default', color, prefixCls }) => {
  return (
    <div
      className={clsx(`${prefixCls}-handler`, {
        [`${prefixCls}-handler-sm`]: size === 'small',
      })}
      style={{ backgroundColor: color }}
    />
  );
};

export default Handler;
