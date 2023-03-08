import ColorPickerContext from '@/context';
import { useContext } from '@rc-component/context';
import classNames from 'classnames';
import React, { FC } from 'react';

type pointSize = 'default' | 'small';

const Point: FC<{
  size?: pointSize;
  color?: string;
}> = ({ size = 'default', color }) => {
  const prefixCls = useContext(ColorPickerContext, 'prefixCls');
  return (
    <div
      className={classNames(`${prefixCls}-point`, {
        [`${prefixCls}-point-sm`]: size === 'small',
      })}
      style={{
        backgroundColor: color,
      }}
    ></div>
  );
};

export default Point;
