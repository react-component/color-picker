import { useEffect, useRef, useState } from 'react';
import type { Color } from '../color';
import type { TransformOffset } from '../interface';

type EventType =
  | MouseEvent
  | React.MouseEvent<Element, MouseEvent>
  | React.TouchEvent<Element>
  | TouchEvent;

type EventHandle = (e: EventType) => void;

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

function getPosition(e: EventType) {
  const obj = 'touches' in e ? e.touches[0] : e;
  const scrollOffset =
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    window.pageYOffset;
  return { pageX: obj.pageX, pageY: obj.pageY - scrollOffset };
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

  useEffect(() => {
    setOffsetValue(calculate?.(containerRef));
  }, []);

  useEffect(
    () => () => {
      document.removeEventListener('mousemove', mouseMoveRef.current);
      document.removeEventListener('mouseup', mouseUpRef.current);
      document.removeEventListener('touchmove', mouseMoveRef.current);
      document.removeEventListener('touchend', mouseUpRef.current);
      mouseMoveRef.current = null;
      mouseUpRef.current = null;
    },
    [],
  );

  const updateOffset: EventHandle = e => {
    const { pageX, pageY } = getPosition(e);
    const {
      x: rectX,
      y: rectY,
      width,
      height,
    } = containerRef.current.getBoundingClientRect();
    const { width: targetWidth, height: targetHeight } =
      targetRef.current.getBoundingClientRect();

    const centerOffsetX = targetWidth / 2;
    const centerOffsetY = targetHeight / 2;

    const offsetX = Math.max(0, Math.min(pageX - rectX, width)) - centerOffsetX;
    const offsetY =
      Math.max(0, Math.min(pageY - rectY, height)) - centerOffsetY;

    const offset = {
      x: offsetX,
      y: direction === 'x' ? offestValue.y : offsetY,
    };

    setOffsetValue(offset);
    onDragChange?.(offset);
  };

  const onDragMove: EventHandle = e => {
    e.preventDefault();
    updateOffset(e);
  };

  const onDragStop: EventHandle = e => {
    e.preventDefault();
    document.removeEventListener('mousemove', mouseMoveRef.current);
    document.removeEventListener('mouseup', mouseUpRef.current);
    document.removeEventListener('touchmove', mouseMoveRef.current);
    document.removeEventListener('touchend', mouseUpRef.current);
    mouseMoveRef.current = null;
    mouseUpRef.current = null;
  };

  const onDragStart: EventHandle = e => {
    updateOffset(e);
    document.addEventListener('mousemove', onDragMove);
    document.addEventListener('mouseup', onDragStop);
    document.addEventListener('touchmove', onDragMove);
    document.addEventListener('touchend', onDragStop);
    mouseMoveRef.current = onDragMove;
    mouseUpRef.current = onDragStop;
  };

  return [offestValue, onDragStart];
}

export default useColorDrag;
