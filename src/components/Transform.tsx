import React, { forwardRef } from 'react';
import type { TransformOffset } from '../interface';

const Transform = forwardRef<
  HTMLDivElement,
  {
    offset?: TransformOffset;
    children?: React.ReactNode;
  }
>((props, ref) => {
  const { children, offset } = props;
  return (
    <div
      ref={ref}
      style={{
        position: 'absolute',
        left: offset.x,
        top: offset.y,
        zIndex: 1,
      }}
    >
      {children}
    </div>
  );
});

export default Transform;
