import classNames from 'classnames';
import React, { FC } from 'react';
import { ColorPickerPrefixCls } from '../util';

type HandlerSize = 'default' | 'small';

const Handler: FC<{
  size?: HandlerSize;
  color?: string;
  prefixCls?: string;
}> = ({ size = 'default', color, prefixCls = ColorPickerPrefixCls }) => {
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
