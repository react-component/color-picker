import classNames from 'classnames';
import type { FC } from 'react';
import React from 'react';

type HandlerSize = 'default' | 'small';

const Handler: FC<{
  size?: HandlerSize;
  color?: string;
  prefixCls?: string;
}> = ({ size = 'default', color, prefixCls }) => {
  return (
    <div
      className={classNames(`${prefixCls}-handler`, {
        [`${prefixCls}-handler-sm`]: size === 'small',
      })}
      style={{
        backgroundColor: color,
      }}
    />
  );
};

export default Handler;
