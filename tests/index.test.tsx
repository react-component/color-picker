/* eslint-disable @typescript-eslint/no-loop-func */
import { spyElementPrototypes } from '@rc-component/util';
import {
  act,
  createEvent,
  fireEvent,
  render,
  screen,
} from '@testing-library/react';
import React, { useState } from 'react';
import { expect } from 'vitest';
import ColorPicker, { Color } from '../src';
import { defaultColor } from '../src/util';

vi.mock('@rc-component/trigger', async () => {
  return await import('@rc-component/trigger/lib/mock');
});

export async function waitFakeTimer(advanceTime = 1000, times = 20) {
  for (let i = 0; i < times; i += 1) {
    // eslint-disable-next-line no-await-in-loop
    await act(async () => {
      await Promise.resolve();

      if (advanceTime > 0) {
        vi.advanceTimersByTime(advanceTime);
      } else {
        vi.runAllTimers();
      }
    });
  }
}

function doMouseMove(
  container,
  start,
  end,
  element = 'rc-color-picker-handler',
) {
  const mouseDown = createEvent.mouseDown(
    container.getElementsByClassName(element)[0],
    {
      pageX: start,
      pageY: start,
    },
  );
  fireEvent(container.getElementsByClassName(element)[0], mouseDown);

  // Drag
  const mouseMove: any = new Event('mousemove');
  mouseMove.pageX = end;
  mouseMove.pageY = end;

  fireEvent(document, mouseMove);

  const mouseUp = createEvent.mouseUp(document);
  fireEvent(document, mouseUp);
}

function doTouchMove(
  container: HTMLElement,
  start: number,
  end: number,
  element = 'rc-color-picker-handler',
) {
  const touchStart: any = createEvent.touchStart(
    container.getElementsByClassName(element)[0],
    {
      touches: [{}],
    },
  );
  touchStart.touches[0].pageX = start;
  touchStart.touches[0].pageY = 233;
  fireEvent(container.getElementsByClassName(element)[0], touchStart);

  // Drag
  const touchMove: any = createEvent.touchMove(document, {
    touches: [{}],
  });
  touchMove.touches[0].pageX = end;
  touchMove.touches[0].pageY = 233;
  fireEvent(document, touchMove);
}

describe('ColorPicker', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });
  afterEach(() => {
    vi.useRealTimers();
  });

  it('Should component render correct', () => {
    const { container } = render(<ColorPicker defaultValue={defaultColor} />);
    expect(container).toMatchSnapshot();
    expect(container.querySelector('.rc-color-picker-panel')).toBeTruthy();
  });

  it('Should component onChange work on no control mode', () => {
    const spyDom = spyElementPrototypes(HTMLElement, {
      getBoundingClientRect: () => ({
        x: 0,
        y: 100,
        width: 100,
        height: 100,
      }),
    });
    const handleChange = vi.fn();
    const { container } = render(<ColorPicker onChange={handleChange} />);
    expect(container).toMatchSnapshot();
    expect(container.querySelector('.rc-color-picker-panel')).toBeTruthy();
    doMouseMove(container, 0, 999);
    expect(handleChange).toBeCalled();

    spyDom.mockRestore();
  });

  it('Should not move position when control locked', () => {
    const spyDom = spyElementPrototypes(HTMLElement, {
      getBoundingClientRect: () => ({
        x: 0,
        y: 100,
        width: 100,
        height: 100,
      }),
    });
    const handleChange = vi.fn();
    const { container } = render(
      <ColorPicker value="#939393" onChange={handleChange} />,
    );

    const offsetHandleEle = container.querySelector('.rc-color-picker-palette')
      .firstChild as HTMLDivElement;
    const { left, top } = offsetHandleEle.style;

    doMouseMove(container, 0, 999);
    expect(handleChange).toHaveBeenCalled();
    expect(offsetHandleEle.style.left).toBe(left);
    expect(offsetHandleEle.style.top).toBe(top);

    spyDom.mockRestore();
  });

  it('Should pick color work by mouse', () => {
    const spyDom = spyElementPrototypes(HTMLElement, {
      getBoundingClientRect: () => ({
        x: 0,
        y: 100,
        width: 100,
        height: 100,
      }),
    });
    const App = () => {
      const [value, setValue] = useState(defaultColor);
      return (
        <>
          <ColorPicker value={value} onChange={setValue} />
          <div className="pick-color">{value.toHsbString()}</div>
          <div>{value.toHexString()}</div>
        </>
      );
    };
    const { container } = render(<App />);
    expect(container.querySelector('.pick-color').innerHTML).toBe(
      'hsb(215, 91%, 100%)',
    );

    doMouseMove(container, 0, 999);
    expect(container.querySelector('.pick-color').innerHTML).toBe(
      'hsb(215, 100%, 0%)',
    );

    doMouseMove(
      container.querySelector('.rc-color-picker-slider-hue'),
      0,
      9999,
    );
    expect(container.querySelector('.pick-color').innerHTML).toBe(
      'hsb(0, 100%, 0%)',
    );

    doMouseMove(
      container.querySelector('.rc-color-picker-slider-alpha'),
      9999,
      0,
    );
    expect(container.querySelector('.pick-color').innerHTML).toBe(
      'hsba(0, 100%, 0%, 0)',
    );

    spyDom.mockRestore();
  });

  it('Should no control pick color work', () => {
    const spyDom = spyElementPrototypes(HTMLElement, {
      getBoundingClientRect: () => ({
        x: 0,
        y: 100,
        width: 100,
        height: 100,
      }),
    });
    const App = () => {
      const [value, setValue] = useState(defaultColor);
      return (
        <>
          <ColorPicker value={value} onChange={setValue} />
          <div className="pick-color">{value.toHsbString()}</div>
          <div>{value.toHexString()}</div>
        </>
      );
    };
    const { container } = render(<App />);
    expect(container.querySelector('.pick-color').innerHTML).toBe(
      'hsb(215, 91%, 100%)',
    );

    doMouseMove(container, 0, 9999);
    expect(container.querySelector('.pick-color').innerHTML).toBe(
      'hsb(215, 100%, 0%)',
    );

    doMouseMove(
      container.querySelector('.rc-color-picker-slider-hue'),
      0,
      9999,
    );
    expect(container.querySelector('.pick-color').innerHTML).toBe(
      'hsb(0, 100%, 0%)',
    );

    doMouseMove(
      container.querySelector('.rc-color-picker-slider-alpha'),
      9999,
      0,
    );
    expect(container.querySelector('.pick-color').innerHTML).toBe(
      'hsba(0, 100%, 0%, 0)',
    );

    spyDom.mockRestore();
  });

  it('Should pick color work by touch', () => {
    const spyDom = spyElementPrototypes(HTMLElement, {
      getBoundingClientRect: () => ({
        x: 0,
        y: 100,
        width: 100,
        height: 100,
      }),
    });
    const App = () => {
      const [value, setValue] = useState(defaultColor);
      return (
        <>
          <div className="pick-color">{value.toHsbString()}</div>
          <ColorPicker value={value} onChange={setValue} />
        </>
      );
    };
    const { container } = render(<App />);
    expect(container.querySelector('.pick-color').innerHTML).toBe(
      'hsb(215, 91%, 100%)',
    );

    doTouchMove(container, 0, 9999);
    expect(container.querySelector('.pick-color').innerHTML).toBe(
      'hsb(215, 100%, 0%)',
    );

    doTouchMove(
      container.querySelector('.rc-color-picker-slider-hue'),
      0,
      9999,
    );
    expect(container.querySelector('.pick-color').innerHTML).toBe(
      'hsb(0, 100%, 0%)',
    );

    doTouchMove(
      container.querySelector('.rc-color-picker-slider-alpha'),
      9999,
      0,
    );
    expect(container.querySelector('.pick-color').innerHTML).toBe(
      'hsba(0, 100%, 0%, 0)',
    );

    spyDom.mockRestore();
  });

  it('Should custom panel work', () => {
    const { container } = render(
      <ColorPicker
        panelRender={panel => <div className="custom-panel">{panel}</div>}
      />,
    );
    expect(container.querySelector('.custom-panel')).toBeTruthy();
    expect(container).toMatchSnapshot();
  });

  it('Should prefixCls work', () => {
    const { container } = render(<ColorPicker prefixCls="test-prefixCls" />);
    expect(container).toMatchSnapshot();
  });

  it('Should drag boundary cases work', () => {
    const spyDom = spyElementPrototypes(HTMLElement, {
      getBoundingClientRect: () => ({
        x: 0,
        y: 100,
        width: 0,
        height: 0,
      }),
    });
    const App = () => {
      const [value, setValue] = useState(defaultColor);
      return (
        <>
          <div className="pick-color">{value.toHsbString()}</div>
          <ColorPicker value={value} onChange={setValue} />
        </>
      );
    };
    const { container } = render(<App />);
    expect(container.querySelector('.pick-color').innerHTML).toBe(
      'hsb(215, 91%, 100%)',
    );
    doMouseMove(container, 0, 9999);
    expect(container.querySelector('.pick-color').innerHTML).toBe(
      'hsb(215, 91%, 100%)',
    );

    spyDom.mockRestore();
  });

  it('Should hsb string work', () => {
    const App = () => <ColorPicker value={'hsb(215, 91%, 100%)'} />;
    const { container } = render(<App />);
    expect(
      (container.querySelector('.rc-color-picker-handler') as HTMLElement).style
        .backgroundColor,
    ).toEqual('rgb(23, 120, 255)');
  });

  it('Should rgb string work', () => {
    const App = () => <ColorPicker value={'rgb(23, 120, 255)'} />;
    const { container } = render(<App />);
    expect(
      (container.querySelector('.rc-color-picker-handler') as HTMLElement).style
        .backgroundColor,
    ).toEqual('rgb(23, 120, 255)');
  });

  it('Should hex string work', () => {
    const App = () => <ColorPicker value="#1778ff" />;
    const { container } = render(<App />);
    expect(
      (container.querySelector('.rc-color-picker-handler') as HTMLElement).style
        .backgroundColor,
    ).toEqual('rgb(23, 120, 255)');
  });

  it('Should hsb obj work', () => {
    const App = () => <ColorPicker value={{ h: 215, s: 0.91, b: 1 }} />;
    const { container } = render(<App />);
    expect(
      (container.querySelector('.rc-color-picker-handler') as HTMLElement).style
        .backgroundColor,
    ).toEqual('rgb(23, 120, 255)');
  });

  it('Should rgb obj work', () => {
    const App = () => <ColorPicker value={{ r: 23, g: 120, b: 255 }} />;
    const { container } = render(<App />);
    expect(
      (container.querySelector('.rc-color-picker-handler') as HTMLElement).style
        .backgroundColor,
    ).toEqual('rgb(23, 120, 255)');
  });

  it('Should disabled work', () => {
    const spyDom = spyElementPrototypes(HTMLElement, {
      getBoundingClientRect: () => ({
        x: 0,
        y: 100,
        width: 0,
        height: 0,
      }),
    });
    const handleChange = vi.fn();
    const App = () => <ColorPicker disabled onChange={handleChange} />;
    const { container } = render(<App />);
    expect(
      container.querySelector('.rc-color-picker-panel-disabled'),
    ).toBeTruthy();
    doMouseMove(container, 0, 9999);
    expect(handleChange).toBeCalledTimes(0);

    spyDom.mockRestore();
  });

  it('Should disabled alpha work', () => {
    const spyDom = spyElementPrototypes(HTMLElement, {
      getBoundingClientRect: () => ({
        x: 0,
        y: 100,
        width: 0,
        height: 0,
      }),
    });
    const App = () => <ColorPicker disabledAlpha />;
    const { container } = render(<App />);
    expect(
      container.querySelector('.rc-color-picker-slider-alpha'),
    ).toBeFalsy();
    expect(container).toMatchSnapshot();

    spyDom.mockRestore();
  });

  it('Should onChangeComplete work', () => {
    const handleChange = vi.fn();
    const App = () => <ColorPicker onChangeComplete={handleChange} />;
    const { container } = render(<App />);
    doMouseMove(container, 0, 9999);
    doMouseMove(
      container.querySelector('.rc-color-picker-slider-alpha'),
      0,
      9999,
    );
    doMouseMove(
      container.querySelector('.rc-color-picker-slider-hue'),
      0,
      9999,
    );
    expect(handleChange).toBeCalledTimes(3);
  });

  it('onDragChange should respect value change', () => {
    const spy = spyElementPrototypes(HTMLElement, {
      getBoundingClientRect: () => ({
        x: 0,
        y: 0,
        width: 100,
        height: 100,
      }),
    });

    let changeInfo: any;
    const onChange = vi.fn();
    const Demo = () => {
      const [value, setValue] = useState(new Color('#163cff'));

      return (
        <>
          <div className="pick-color">{value.toHsbString()}</div>
          <ColorPicker
            onChange={(color, info) => {
              changeInfo = info;

              onChange(color, info);

              let passedColor = color;
              if (info.type !== 'alpha') {
                // bad case, color should be immutable
                passedColor = new Color(color.setA(1));
              }
              setValue(passedColor);
            }}
          />
        </>
      );
    };

    const { container } = render(<Demo />);
    expect(container.querySelector('.pick-color').innerHTML).toBe(
      'hsb(230, 91%, 100%)',
    );

    doMouseMove(
      container.querySelector('.rc-color-picker-slider-alpha'),
      100,
      0,
    );

    expect(container.querySelector('.pick-color').innerHTML).toBe(
      'hsba(215, 91%, 100%, 0)',
    );
    expect(changeInfo).toEqual({ type: 'alpha', value: 0 });

    doMouseMove(container.querySelector('.rc-color-picker-slider-hue'), 0, 50);
    expect(container.querySelector('.pick-color').innerHTML).toBe(
      'hsb(180, 91%, 100%)',
    );
    expect(changeInfo).toEqual({ type: 'hue', value: 180 });

    doMouseMove(
      container.querySelector('.rc-color-picker-slider-hue'),
      50,
      100,
    );
    expect(container.querySelector('.pick-color').innerHTML).toBe(
      'hsb(0, 91%, 100%)',
    );
    expect(changeInfo).toEqual({ type: 'hue', value: 0 });

    spy.mockRestore();
  });

  describe('Accessibility tests', () => {
    const Controlled = (props: Record<string, unknown>) => {
      const [value, setValue] = useState(defaultColor);
      return (
        <>
          <ColorPicker value={value} onChange={setValue} {...props} />
          <div className="pick-color">{value.toHsbString()}</div>
        </>
      );
    };

    // The two picker axes share the control name (aria-label); each input is
    // distinguished by its axis via aria-valuetext (the react-aria ColorArea
    // pattern), so the tests grab them positionally: [saturation, brightness].
    const getSaturation = () => screen.getAllByLabelText('Color picker')[0];
    const getBrightness = () => screen.getAllByLabelText('Color picker')[1];

    it('Should expose default aria-labels on the handles', () => {
      render(<ColorPicker defaultValue={defaultColor} />);

      // Both picker axes share the "Color picker" name; the axis is conveyed
      // through aria-valuetext rather than a distinct label.
      expect(screen.getAllByLabelText('Color picker')).toHaveLength(2);
      expect(screen.getByLabelText('Hue')).toBeTruthy();
      expect(screen.getByLabelText('Alpha')).toBeTruthy();
    });

    it('Should expose saturation and brightness as separate range inputs', () => {
      render(<ColorPicker defaultValue={defaultColor} />);

      // Two separately operable native ranges, each describing its own axis via
      // aria-valuetext and sharing the 2-D slider role description, so AT can
      // adjust each one on its own.
      const [saturation, brightness] = screen.getAllByLabelText('Color picker');
      expect(saturation).toHaveAttribute('aria-valuetext', 'Saturation: 91%');
      expect(saturation).toHaveAttribute('aria-roledescription', '2D slider');
      expect(brightness).toHaveAttribute('aria-valuetext', 'Brightness: 100%');
      expect(brightness).toHaveAttribute('aria-roledescription', '2D slider');
      expect(brightness).toHaveAttribute('aria-orientation', 'vertical');
    });

    it('Should adjust brightness with Up/Down while on the saturation axis', () => {
      render(<Controlled />);

      const saturation = getSaturation();
      const brightness = getBrightness();
      saturation.focus();

      // The two inputs act as one 2-D control: Up/Down drives brightness even
      // while the saturation input is the focused one.
      fireEvent.keyDown(saturation, { key: 'ArrowDown' });

      expect(document.querySelector('.pick-color').innerHTML).toBe(
        'hsb(215, 91%, 99%)',
      );
      // Focus follows the axis that changed.
      expect(brightness).toHaveFocus();
    });

    it('Should keep the 2-D picker a single tab stop (roving tabindex)', () => {
      render(<Controlled />);

      const saturation = getSaturation();
      const brightness = getBrightness();

      // Only one axis is in the tab order at a time.
      expect(saturation).toHaveAttribute('tabindex', '0');
      expect(brightness).toHaveAttribute('tabindex', '-1');

      // Switching direction moves the tab stop onto the adjusted axis.
      fireEvent.keyDown(saturation, { key: 'ArrowDown' });
      expect(brightness).toHaveAttribute('tabindex', '0');
      expect(saturation).toHaveAttribute('tabindex', '-1');
    });

    it('Should describe saturation & brightness via aria-valuetext by default', () => {
      render(<ColorPicker defaultValue={defaultColor} />);

      expect(getSaturation()).toHaveAttribute(
        'aria-valuetext',
        'Saturation: 91%',
      );
      expect(getBrightness()).toHaveAttribute(
        'aria-valuetext',
        'Brightness: 100%',
      );
    });

    it('Should override the aria-labels through the locale prop', () => {
      render(
        <ColorPicker
          defaultValue={defaultColor}
          locale={{
            picker: 'Sélecteur',
            hue: 'Teinte',
            alpha: 'Transparence',
            saturation: 'Sat',
            brightness: 'Lum',
          }}
        />,
      );

      const [saturation, brightness] = screen.getAllByLabelText('Sélecteur');
      expect(screen.getAllByLabelText('Sélecteur')).toHaveLength(2);
      expect(screen.getByLabelText('Teinte')).toBeTruthy();
      expect(screen.getByLabelText('Transparence')).toBeTruthy();
      expect(saturation).toHaveAttribute('aria-valuetext', 'Sat: 91%');
      expect(brightness).toHaveAttribute('aria-valuetext', 'Lum: 100%');
    });

    it('Should change brightness with the Down arrow on the brightness axis', () => {
      const onChangeComplete = vi.fn();
      render(<Controlled onChangeComplete={onChangeComplete} />);

      const brightness = getBrightness();
      fireEvent.keyDown(brightness, { key: 'ArrowDown' });
      fireEvent.keyUp(brightness, { key: 'ArrowDown' });

      // brightness starts at 100% and steps down to 99%
      expect(document.querySelector('.pick-color').innerHTML).toBe(
        'hsb(215, 91%, 99%)',
      );
      expect(onChangeComplete).toHaveBeenCalled();
    });

    it('Should operate brightness through its native range control', () => {
      const onChangeComplete = vi.fn();
      render(<Controlled onChangeComplete={onChangeComplete} />);

      const brightness = getBrightness();
      // Emulate an assistive-technology set-value action on the native range,
      // then complete the interaction on key up.
      fireEvent.change(brightness, { target: { value: '80' } });
      fireEvent.keyUp(brightness, { key: 'ArrowDown' });

      expect(document.querySelector('.pick-color').innerHTML).toBe(
        'hsb(215, 91%, 80%)',
      );
      expect(onChangeComplete).toHaveBeenCalled();
    });

    it('Should not emit changes when the arrow key clamps at a bound', () => {
      const onChange = vi.fn();
      const onChangeComplete = vi.fn();
      render(
        <ColorPicker
          value={defaultColor}
          onChange={onChange}
          onChangeComplete={onChangeComplete}
        />,
      );

      const brightness = getBrightness();
      // brightness is already at 100%, so Up cannot step further.
      fireEvent.keyDown(brightness, { key: 'ArrowUp' });
      fireEvent.keyUp(brightness, { key: 'ArrowUp' });

      // A clamped press must not fire onChange (no value moved) nor complete.
      expect(onChange).not.toHaveBeenCalled();
      expect(onChangeComplete).not.toHaveBeenCalled();
    });

    it('Should increase saturation on the picker (Arrow Right)', () => {
      const onChangeComplete = vi.fn();
      render(<Controlled onChangeComplete={onChangeComplete} />);

      const saturation = getSaturation();
      fireEvent.change(saturation, { target: { value: '92' } });
      fireEvent.keyUp(saturation, { key: 'ArrowRight' });

      // saturation starts at 91% and steps up to 92%
      expect(document.querySelector('.pick-color').innerHTML).toBe(
        'hsb(215, 92%, 100%)',
      );
      expect(onChangeComplete).toHaveBeenCalled();
    });

    it('Should decrease saturation on the picker (Arrow Left)', () => {
      const onChangeComplete = vi.fn();
      render(<Controlled onChangeComplete={onChangeComplete} />);

      const saturation = getSaturation();
      fireEvent.change(saturation, { target: { value: '90' } });
      fireEvent.keyUp(saturation, { key: 'ArrowLeft' });

      // saturation starts at 91% and steps down to 90%
      expect(document.querySelector('.pick-color').innerHTML).toBe(
        'hsb(215, 90%, 100%)',
      );
      expect(onChangeComplete).toHaveBeenCalled();
    });

    // A controlled parent that keeps the color pinned while still re-rendering
    // (validation, debouncing, an unrelated state update) reproduces the race
    // where the stale prop echoes back mid-interaction.
    const StalePinned = ({ onChangeComplete }: Record<string, unknown>) => {
      const [, force] = useState(0);
      return (
        <ColorPicker
          value={defaultColor}
          onChange={() => force(n => n + 1)}
          onChangeComplete={onChangeComplete as (color: Color) => void}
        />
      );
    };

    it('Should complete the picker with the latest value despite a stale re-render', () => {
      const onChangeComplete = vi.fn();
      render(<StalePinned onChangeComplete={onChangeComplete} />);

      const saturation = getSaturation();
      // ArrowRight steps 91% -> 92% and triggers a re-render that echoes the
      // stale 91% prop before key up. Completion must still report 92%.
      fireEvent.keyDown(saturation, { key: 'ArrowRight' });
      fireEvent.keyUp(saturation, { key: 'ArrowRight' });

      const [completedColor] = onChangeComplete.mock.calls.at(-1);
      expect(completedColor.toHsbString()).toBe('hsb(215, 92%, 100%)');
    });

    it('Should complete a slider with the latest value despite a stale re-render', () => {
      const onChangeComplete = vi.fn();
      render(<StalePinned onChangeComplete={onChangeComplete} />);

      const hue = screen.getByLabelText('Hue');
      // ArrowRight steps hue 215 -> 216 while the prop is pinned at 215.
      fireEvent.keyDown(hue, { key: 'ArrowRight' });
      fireEvent.keyUp(hue, { key: 'ArrowRight' });

      const [completedColor] = onChangeComplete.mock.calls.at(-1);
      expect(completedColor.getHue()).toBe(216);
    });

    it('Should step from the latest value on rapid saturation presses', () => {
      render(<Controlled />);

      const saturation = getSaturation();

      // Two Left presses dispatched in the same batch (before the parent
      // re-renders). Reading the stale prop would step 91% -> 90% twice; the
      // latest-value ref keeps them stepping 91% -> 89%.
      act(() => {
        saturation.dispatchEvent(
          new KeyboardEvent('keydown', { key: 'ArrowLeft', bubbles: true }),
        );
        saturation.dispatchEvent(
          new KeyboardEvent('keydown', { key: 'ArrowLeft', bubbles: true }),
        );
      });

      expect(document.querySelector('.pick-color').innerHTML).toBe(
        'hsb(215, 89%, 100%)',
      );
    });

    it('Should step from the latest value on rapid brightness presses', () => {
      render(<Controlled />);

      const brightness = getBrightness();

      // Two Down presses dispatched in the same batch (before the parent
      // re-renders). Reading the stale prop would step 100% -> 99% twice; the
      // latest-value ref keeps them stepping 100% -> 98%.
      act(() => {
        brightness.dispatchEvent(
          new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true }),
        );
        brightness.dispatchEvent(
          new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true }),
        );
      });

      expect(document.querySelector('.pick-color').innerHTML).toBe(
        'hsb(215, 91%, 98%)',
      );
    });

    it('Should step from the latest value on rapid saturation and brightness presses', () => {
      render(<Controlled />);

      const saturation = getSaturation();
      const brightness = getBrightness();

      // One Down (brightness 100% -> 99%) and one Left (saturation 91% -> 90%)
      // dispatched in the same batch. Deriving the second change from the stale
      // prop would revert the first axis; the shared color ref keeps both.
      act(() => {
        brightness.dispatchEvent(
          new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true }),
        );
        saturation.dispatchEvent(
          new KeyboardEvent('keydown', { key: 'ArrowLeft', bubbles: true }),
        );
      });

      expect(document.querySelector('.pick-color').innerHTML).toBe(
        'hsb(215, 90%, 99%)',
      );
    });

    it('Should change hue when the hue slider value changes via keyboard', () => {
      const onChangeComplete = vi.fn();
      render(<Controlled onChangeComplete={onChangeComplete} />);

      const hue = screen.getByLabelText('Hue');
      fireEvent.change(hue, { target: { value: '100' } });
      fireEvent.keyUp(hue, { key: 'ArrowRight' });

      expect(document.querySelector('.pick-color').innerHTML).toBe(
        'hsb(100, 91%, 100%)',
      );
      expect(onChangeComplete).toHaveBeenCalled();
    });

    it('Should change alpha when the alpha slider value changes via keyboard', () => {
      const onChangeComplete = vi.fn();
      render(<Controlled onChangeComplete={onChangeComplete} />);

      const alpha = screen.getByLabelText('Alpha');
      fireEvent.change(alpha, { target: { value: '50' } });
      fireEvent.keyUp(alpha, { key: 'ArrowRight' });

      expect(document.querySelector('.pick-color').innerHTML).toBe(
        'hsba(215, 91%, 100%, 0.50)',
      );
      expect(onChangeComplete).toHaveBeenCalled();
    });

    it('Should ignore keys that do not change the value', () => {
      const onChange = vi.fn();
      const onChangeComplete = vi.fn();
      render(
        <ColorPicker
          defaultValue={defaultColor}
          onChange={onChange}
          onChangeComplete={onChangeComplete}
        />,
      );

      const saturation = getSaturation();
      // A non-value key (e.g. Tab) must neither step (keydown) nor commit (keyup).
      fireEvent.keyDown(saturation, { key: 'Tab' });
      fireEvent.keyUp(saturation, { key: 'Tab' });

      expect(onChange).not.toHaveBeenCalled();
      expect(onChangeComplete).not.toHaveBeenCalled();
    });

    it('Should increase saturation with the Right arrow on the picker', () => {
      render(<Controlled />);

      const saturation = getSaturation();
      fireEvent.keyDown(saturation, { key: 'ArrowRight' });

      // saturation steps 91% -> 92%
      expect(document.querySelector('.pick-color').innerHTML).toBe(
        'hsb(215, 92%, 100%)',
      );
    });

    it('Should step a 1-D slider with the Up/Down arrows', () => {
      render(<Controlled />);

      const hue = screen.getByLabelText('Hue');
      // No vertical axis on a slider, so Up/Down drive its single (hue) axis.
      fireEvent.keyDown(hue, { key: 'ArrowUp' });
      expect(document.querySelector('.pick-color').innerHTML).toBe(
        'hsb(216, 91%, 100%)',
      );

      fireEvent.keyDown(hue, { key: 'ArrowDown' });
      expect(document.querySelector('.pick-color').innerHTML).toBe(
        'hsb(215, 91%, 100%)',
      );
    });
  });
});
