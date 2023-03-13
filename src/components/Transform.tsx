import React, { forwardRef } from 'react';
import type { TransformOffset } from '../interface';

const Transform = forwardRef<
  HTMLDivElement,
  {
    offset?: TransformOffset;
    children?: React.ReactNode;
  }
>((props, ref) => {
  const { children, offset = { x: 0, y: 0 } } = props;
  return (
    <div
      ref={ref}
      style={{
        position: 'absolute',
        left: `${offset.x}px`,
        top: `${offset.y}px`,
        zIndex: 1,
      }}
    >
      {children}
    </div>
  );
});

export default Transform;
