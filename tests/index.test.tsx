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

    it('Should expose default aria-labels on the handles', () => {
      render(<ColorPicker defaultValue={defaultColor} />);

      expect(screen.getByLabelText('Color picker')).toBeTruthy();
      expect(screen.getByLabelText('Hue')).toBeTruthy();
      expect(screen.getByLabelText('Alpha')).toBeTruthy();
    });

    it('Should describe saturation & brightness via aria-valuetext by default', () => {
      render(<ColorPicker defaultValue={defaultColor} />);

      expect(screen.getByLabelText('Color picker')).toHaveAttribute(
        'aria-valuetext',
        'Saturation 91%, Brightness 100%',
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

      expect(screen.getByLabelText('Sélecteur')).toBeTruthy();
      expect(screen.getByLabelText('Teinte')).toBeTruthy();
      expect(screen.getByLabelText('Transparence')).toBeTruthy();
      expect(screen.getByLabelText('Sélecteur')).toHaveAttribute(
        'aria-valuetext',
        'Sat 91%, Lum 100%',
      );
    });

    it('Should change brightness with the Down arrow on the picker handle', () => {
      const onChangeComplete = vi.fn();
      render(<Controlled onChangeComplete={onChangeComplete} />);

      const picker = screen.getByLabelText('Color picker');
      fireEvent.keyDown(picker, { key: 'ArrowDown' });
      fireEvent.keyUp(picker, { key: 'ArrowDown' });

      // brightness starts at 100% and steps down to 99%
      expect(document.querySelector('.pick-color').innerHTML).toBe(
        'hsb(215, 91%, 99%)',
      );
      expect(onChangeComplete).toHaveBeenCalled();
    });

    it('Should clamp brightness at 100% when pressing the Up arrow', () => {
      render(<Controlled />);

      const picker = screen.getByLabelText('Color picker');
      fireEvent.keyDown(picker, { key: 'ArrowUp' });

      expect(document.querySelector('.pick-color').innerHTML).toBe(
        'hsb(215, 91%, 100%)',
      );
    });

    it('Should increase saturation on the picker (Arrow Right)', () => {
      const onChangeComplete = vi.fn();
      render(<Controlled onChangeComplete={onChangeComplete} />);

      const picker = screen.getByLabelText('Color picker');
      fireEvent.change(picker, { target: { value: '92' } });
      fireEvent.keyUp(picker, { key: 'ArrowRight' });

      // saturation starts at 91% and steps up to 92%
      expect(document.querySelector('.pick-color').innerHTML).toBe(
        'hsb(215, 92%, 100%)',
      );
      expect(onChangeComplete).toHaveBeenCalled();
    });

    it('Should decrease saturation on the picker (Arrow Left)', () => {
      const onChangeComplete = vi.fn();
      render(<Controlled onChangeComplete={onChangeComplete} />);

      const picker = screen.getByLabelText('Color picker');
      fireEvent.change(picker, { target: { value: '90' } });
      fireEvent.keyUp(picker, { key: 'ArrowLeft' });

      // saturation starts at 91% and steps down to 90%
      expect(document.querySelector('.pick-color').innerHTML).toBe(
        'hsb(215, 90%, 100%)',
      );
      expect(onChangeComplete).toHaveBeenCalled();
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
      render(<Controlled />);

      const alpha = screen.getByLabelText('Alpha');
      fireEvent.change(alpha, { target: { value: '50' } });

      expect(document.querySelector('.pick-color').innerHTML).toBe(
        'hsba(215, 91%, 100%, 0.50)',
      );
    });
  });
});
