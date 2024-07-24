import React, { forwardRef } from 'react';

const Transform = forwardRef<
  HTMLDivElement,
  {
    x: number;
    y: number;
    children: React.ReactNode;
  }
>((props, ref) => {
  const { children, x, y } = props;
  return (
    <div
      ref={ref}
      style={{
        position: 'absolute',
        left: `${x}%`,
        top: `${y}%`,
        zIndex: 1,
        transform: 'translate(-50%, -50%)',
      }}
    >
      {children}
    </div>
  );
});

export default Transform;
