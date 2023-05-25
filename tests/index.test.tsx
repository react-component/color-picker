/* eslint-disable @typescript-eslint/no-loop-func */
import { act, createEvent, fireEvent, render } from '@testing-library/react';
import { spyElementPrototypes } from 'rc-util/lib/test/domHook';
import React, { useState } from 'react';
import ColorPicker from '../src';
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
  container,
  start,
  end,
  element = 'rc-color-picker-handler',
) {
  const touchStart: any = createEvent.touchStart(
    container.getElementsByClassName(element)[0],
    {
      touches: [{}],
    },
  );
  touchStart.touches[0].pageX = start;
  fireEvent(container.getElementsByClassName(element)[0], touchStart);

  // Drag
  const touchMove: any = createEvent.touchMove(document, {
    touches: [{}],
  });
  touchMove.touches[0].pageX = end;
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
    spyElementPrototypes(HTMLElement, {
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
  });

  it('Should pick color work by mouse', () => {
    spyElementPrototypes(HTMLElement, {
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
          <div>{value.toHex8String()}</div>
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
      'hsb(360, 100%, 0%)',
    );

    doMouseMove(
      container.querySelector('.rc-color-picker-slider-alpha'),
      9999,
      0,
    );
    expect(container.querySelector('.pick-color').innerHTML).toBe(
      'hsba(360, 100%, 0%, 0)',
    );
  });

  it('Should no control pick color work', () => {
    spyElementPrototypes(HTMLElement, {
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
          <div>{value.toHex8String()}</div>
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
      'hsb(360, 100%, 0%)',
    );

    doMouseMove(
      container.querySelector('.rc-color-picker-slider-alpha'),
      9999,
      0,
    );
    expect(container.querySelector('.pick-color').innerHTML).toBe(
      'hsba(360, 100%, 0%, 0)',
    );
  });

  it('Should pick color work by touch', () => {
    spyElementPrototypes(HTMLElement, {
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
      'hsb(360, 100%, 0%)',
    );

    doTouchMove(
      container.querySelector('.rc-color-picker-slider-alpha'),
      9999,
      0,
    );
    expect(container.querySelector('.pick-color').innerHTML).toBe(
      'hsba(360, 100%, 0%, 0)',
    );
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
    spyElementPrototypes(HTMLElement, {
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
  });

  it('Should hsb string work', () => {
    const App = () => <ColorPicker value={'hsb(215, 91%, 100%)'} />;
    const { container } = render(<App />);
    expect(
      container.querySelector('.rc-color-picker-handler').getAttribute('style'),
    ).toEqual('background-color: rgb(23, 120, 255);');
  });

  it('Should rgb string work', () => {
    const App = () => <ColorPicker value={'rgb(23, 120, 255)'} />;
    const { container } = render(<App />);
    expect(
      container.querySelector('.rc-color-picker-handler').getAttribute('style'),
    ).toEqual('background-color: rgb(23, 120, 255);');
  });

  it('Should hex string work', () => {
    const App = () => <ColorPicker value="#1778ff" />;
    const { container } = render(<App />);
    expect(
      container.querySelector('.rc-color-picker-handler').getAttribute('style'),
    ).toEqual('background-color: rgb(23, 120, 255);');
  });

  it('Should hsb obj work', () => {
    const App = () => <ColorPicker value={{ h: 215, s: 0.91, b: 1 }} />;
    const { container } = render(<App />);
    expect(
      container.querySelector('.rc-color-picker-handler').getAttribute('style'),
    ).toEqual('background-color: rgb(23, 120, 255);');
  });

  it('Should rgb obj work', () => {
    const App = () => <ColorPicker value={{ r: 23, g: 120, b: 255 }} />;
    const { container } = render(<App />);
    expect(
      container.querySelector('.rc-color-picker-handler').getAttribute('style'),
    ).toEqual('background-color: rgb(23, 120, 255);');
  });

  it('Should disabled work', () => {
    spyElementPrototypes(HTMLElement, {
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
  });

  it('Should disabled alpha work', () => {
    spyElementPrototypes(HTMLElement, {
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
    expect(handleChange).toHaveBeenLastCalledWith('hue');
  });
});
