/* eslint-disable @typescript-eslint/no-loop-func */
import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { expect } from 'vitest';
import ColorPicker, { ColorBlock, type BaseSliderProps } from '../src';
import { defaultColor } from '../src/util';

describe('ColorPicker.Components', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });
  afterEach(() => {
    vi.useRealTimers();
  });

  it('Should component render correct', () => {
    const onColorChange = vi.fn();

    const Slider = (props: BaseSliderProps) => {
      const { type, min, max, value, prefixCls, onChange } = props;

      return (
        <div
          className={`${prefixCls}-customize-${type}`}
          onClick={() => {
            onChange(33);
          }}
        >
          {`${min}/${max}/${value}`}
        </div>
      );
    };

    const { container } = render(
      <ColorPicker
        defaultValue={defaultColor}
        components={{
          slider: Slider,
        }}
        onChange={onColorChange}
      />,
    );

    const hueEle = container.querySelector('.rc-color-picker-customize-hue');
    const alphaEle = container.querySelector(
      '.rc-color-picker-customize-alpha',
    );

    expect(hueEle.textContent).toBe('0/359/215');
    expect(alphaEle.textContent).toBe('0/100/100');

    // Change to trigger
    fireEvent.click(hueEle);
    expect(hueEle.textContent).toBe('0/359/33');

    fireEvent.click(alphaEle);
    expect(alphaEle.textContent).toBe('0/100/33');
  });

  it('ColorBlock support innerClassName and innerStyle', () => {
    const { container } = render(
      <ColorBlock
        prefixCls="test"
        color="red"
        innerClassName="my-inner-class"
        innerStyle={{ color: '#903' }}
      />,
    );

    const colorBlock = container.querySelector('.test-color-block');
    const innerDiv = container.querySelector('.test-color-block-inner');
    expect(colorBlock).not.toHaveAttribute('role');
    expect(colorBlock).not.toHaveAttribute('tabindex');
    expect(colorBlock).not.toHaveAttribute('aria-label');
    expect(innerDiv).toHaveClass('my-inner-class');
    expect(innerDiv).toHaveStyle({ color: '#903' });
  });

  it('makes clickable ColorBlock keyboard accessible', () => {
    const onClick = vi.fn();
    const { getByRole } = render(
      <ColorBlock
        prefixCls="test"
        color="#ff0000"
        aria-label="Brand red"
        onClick={onClick}
      />,
    );
    const button = getByRole('button', { name: 'Brand red' });

    fireEvent.keyDown(button, { key: 'Enter' });
    fireEvent.keyDown(button, { key: ' ' });
    fireEvent.keyDown(button, { key: 'Enter', repeat: true });

    expect(onClick).toHaveBeenCalledTimes(2);
  });

  it('uses the color value as the default name for clickable ColorBlock', () => {
    const { getByRole } = render(
      <ColorBlock prefixCls="test" color="#ff0000" onClick={() => {}} />,
    );

    expect(getByRole('button', { name: '#ff0000' })).toBeInTheDocument();
  });
});
