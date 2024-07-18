/* eslint-disable @typescript-eslint/no-loop-func */
import { render } from '@testing-library/react';
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
    const Slider = (props: BaseSliderProps) => {
      const { type, min, max, value, prefixCls } = props;

      return (
        <div className={`${prefixCls}-customize-${type}`}>
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
      />,
    );
    expect(
      container.querySelector('.rc-color-picker-customize-hue')?.textContent,
    ).toBe('0/360/215');
    expect(
      container.querySelector('.rc-color-picker-customize-alpha')?.textContent,
    ).toBe('0/100/100');
  });
});
