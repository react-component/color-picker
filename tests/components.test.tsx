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
      const { type, min = 0, max = 100, value, prefixCls, onChange } = props;

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

    const innerDiv = container.querySelector('.test-color-block-inner');
    expect(innerDiv).toHaveClass('my-inner-class');
    expect(innerDiv).toHaveStyle({ color: '#903' });
  });

  describe('ColorBlock onClick', () => {
    it('should not be interactive when onClick is not passed', () => {
      const onParentClick = vi.fn();

      const { container } = render(
        <div onClick={onParentClick}>
          <ColorBlock prefixCls="test" color="red" />
        </div>,
      );

      const block = container.querySelector('.test-color-block');
      expect(block.tagName).toBe('DIV');
      expect(block).not.toHaveAttribute('role');
      expect(block).not.toHaveAttribute('tabindex');

      // No keyboard activation without `onClick`
      fireEvent.keyDown(block, { key: 'Enter' });
      fireEvent.keyDown(block, { key: ' ' });
      expect(onParentClick).not.toHaveBeenCalled();
    });

    it('should be a focusable button when onClick is passed', () => {
      const onClick = vi.fn();

      const { container } = render(
        <ColorBlock prefixCls="test" color="red" onClick={onClick} />,
      );

      const block = container.querySelector('.test-color-block');
      expect(block.tagName).toBe('BUTTON');
      expect(block).toHaveAttribute('type', 'button');
      expect((block as HTMLButtonElement).tabIndex).toBe(0);

      fireEvent.click(block);
      expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('should forward custom button styles', () => {
      const { container } = render(
        <ColorBlock
          prefixCls="test"
          color="red"
          onClick={vi.fn()}
          style={{ padding: 4 }}
        />,
      );

      expect(container.querySelector('button')).toHaveStyle({ padding: '4px' });
      expect(container.querySelector('.test-color-block-inner')).toHaveStyle({
        background: 'red',
      });
    });

    it('should not submit a containing form', () => {
      const onClick = vi.fn();
      const onSubmit = vi.fn(event => event.preventDefault());

      const { container } = render(
        <form onSubmit={onSubmit}>
          <ColorBlock prefixCls="test" color="red" onClick={onClick} />
        </form>,
      );

      const block = container.querySelector('.test-color-block');
      fireEvent.click(block);

      expect(onClick).toHaveBeenCalledTimes(1);
      expect(onSubmit).not.toHaveBeenCalled();
    });

    it('should not trigger onClick for other keys', () => {
      const onClick = vi.fn();

      const { container } = render(
        <ColorBlock prefixCls="test" color="red" onClick={onClick} />,
      );

      const block = container.querySelector('.test-color-block');
      fireEvent.keyDown(block, { key: 'Escape' });
      fireEvent.keyDown(block, { key: 'a' });

      expect(onClick).not.toHaveBeenCalled();
    });

    it('should keep customized role and tabIndex', () => {
      const { container } = render(
        <ColorBlock
          prefixCls="test"
          color="red"
          onClick={vi.fn()}
          role="menuitem"
          tabIndex={-1}
        />,
      );

      const block = container.querySelector('.test-color-block');
      expect(block).toHaveAttribute('role', 'menuitem');
      expect(block).toHaveAttribute('tabindex', '-1');
    });

    it('should forward onKeyDown to the native button', () => {
      const onClick = vi.fn();
      const onKeyDown = vi.fn();

      const { container } = render(
        <ColorBlock
          prefixCls="test"
          color="red"
          onClick={onClick}
          onKeyDown={onKeyDown}
        />,
      );

      const block = container.querySelector('.test-color-block');
      fireEvent.keyDown(block, { key: 'Enter' });

      expect(onKeyDown).toHaveBeenCalledTimes(1);
    });

    it('should still forward onKeyDown when onClick is not passed', () => {
      const onKeyDown = vi.fn();

      const { container } = render(
        <ColorBlock prefixCls="test" color="red" onKeyDown={onKeyDown} />,
      );

      fireEvent.keyDown(container.querySelector('.test-color-block'), {
        key: 'Enter',
      });

      expect(onKeyDown).toHaveBeenCalledTimes(1);
    });

    it('should fall back to the color as accessible name', () => {
      const { container } = render(
        <ColorBlock prefixCls="test" color="red" onClick={vi.fn()} />,
      );

      expect(container.querySelector('.test-color-block')).toHaveAccessibleName(
        'red',
      );
    });

    it('should keep the customized aria-label as accessible name', () => {
      const { container } = render(
        <ColorBlock
          prefixCls="test"
          color="red"
          aria-label="Brand red"
          onClick={vi.fn()}
        />,
      );

      expect(container.querySelector('.test-color-block')).toHaveAccessibleName(
        'Brand red',
      );
    });

    it('should not name a block without onClick', () => {
      const { container } = render(<ColorBlock prefixCls="test" color="red" />);

      expect(container.querySelector('.test-color-block')).not.toHaveAttribute(
        'aria-label',
      );
    });
  });
});
