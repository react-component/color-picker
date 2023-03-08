import { useEffect, useRef, useState } from 'react';
import type { Color, TransformOffset } from '../interface';

type EventHandle = (
  e: React.MouseEvent | React.TouchEvent | MouseEvent | TouchEvent,
) => void;

interface useColorDragProps {
  color?: Color;
  offest?: TransformOffset;
  containerRef: React.RefObject<HTMLDivElement>;
  targetRef: React.RefObject<HTMLDivElement>;
  direction?: 'x' | 'y';
  onDragChange?: (offset: TransformOffset) => void;
  calculate?: (
    containerRef: React.RefObject<HTMLDivElement>,
  ) => TransformOffset;
}

function getPosition(
  e: React.MouseEvent | React.TouchEvent | MouseEvent | TouchEvent,
) {
  const obj = 'touches' in e ? e.touches[0] : e;
  return { pageX: obj.pageX, pageY: obj.pageY };
}

function useColorDrag(
  props: useColorDragProps,
): [TransformOffset, EventHandle] {
  const {
    offest,
    targetRef,
    containerRef,
    direction,
    onDragChange,
    calculate,
  } = props;
  const [offestValue, setOffsetValue] = useState(offest || { x: 0, y: 0 });
  const mouseMoveRef = useRef<(event: MouseEvent) => void>(null);
  const mouseUpRef = useRef<(event: MouseEvent) => void>(null);
  const cache = useRef({
    startDarg: false,
  });

  useEffect(() => {
    if (calculate) {
      setOffsetValue(calculate(containerRef));
    }
  }, []);

  useEffect(() => {
    return () => {
      document.removeEventListener('mousemove', mouseMoveRef.current);
      document.removeEventListener('mouseup', mouseUpRef.current);
      mouseMoveRef.current = null;
      mouseUpRef.current = null;
    };
  }, []);

  const updateOffset: EventHandle = e => {
    const { pageX, pageY } = getPosition(e);
    const {
      x: rectX,
      y: rectY,
      width,
      height,
    } = containerRef.current.getBoundingClientRect();
    const { width: targetWidth } = targetRef.current.getBoundingClientRect();

    const centerOffset = targetWidth / 2;

    const limtX =
      pageX - rectX > width - centerOffset
        ? width - centerOffset
        : pageX - rectX - centerOffset;

    const limtY =
      pageY - rectY > height - centerOffset
        ? height - centerOffset
        : pageY - rectY - centerOffset;

    let offset = {
      x: pageX - rectX <= 0 ? -centerOffset : limtX,
      y: pageY - rectY <= 0 ? -centerOffset : limtY,
    };

    if (direction === 'x') {
      offset = {
        x: pageX - rectX <= 0 ? -centerOffset : limtX,
        y: offestValue.y,
      };
    }

    if (direction === 'y') {
      offset = {
        x: offestValue.y,
        y: pageY - rectY <= 0 ? -centerOffset : limtY,
      };
    }

    setOffsetValue(offset);
    onDragChange?.(offset);
  };

  const dragMove: EventHandle = e => {
    e.preventDefault();
    if (cache.current.startDarg) {
      updateOffset(e);
    }
  };

  const dragStop: EventHandle = e => {
    e.preventDefault();
    cache.current.startDarg = false;
    document.removeEventListener('mousemove', mouseMoveRef.current);
    document.removeEventListener('mouseup', mouseUpRef.current);
    mouseMoveRef.current = null;
    mouseUpRef.current = null;
  };

  const dragStart: EventHandle = e => {
    updateOffset(e);
    cache.current.startDarg = true;
    document.addEventListener('mousemove', dragMove);
    document.addEventListener('mouseup', dragStop);
    mouseMoveRef.current = dragMove;
    mouseUpRef.current = dragStop;
  };

  return [offestValue, dragStart];
}

export default useColorDrag;
