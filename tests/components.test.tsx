/* eslint-disable @typescript-eslint/no-loop-func */
import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { expect } from 'vitest';
import ColorPicker, { type BaseSliderProps } from '../src';
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
});
