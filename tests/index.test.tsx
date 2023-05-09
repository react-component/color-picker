import { act, createEvent, fireEvent, render } from '@testing-library/react';
import { spyElementPrototypes } from 'rc-util/lib/test/domHook';
import React, { useState } from 'react';
import ColorPicker from '../src';
import { defaultColor } from '../src/util';

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
  const mouseDown: any = createEvent.mouseDown(
    container.getElementsByClassName(element)[0],
  );
  mouseDown.pageX = start;
  mouseDown.pageY = start;
  fireEvent(container.getElementsByClassName(element)[0], mouseDown);

  // Drag
  const mouseMove: any = createEvent.mouseMove(document);
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
    const { container } = render(
      <ColorPicker open defaultValue={defaultColor}>
        <div>Color Picker</div>
      </ColorPicker>,
    );
    expect(container).toMatchSnapshot();
    expect(container.querySelector('.rc-color-picker-panel')).toBeTruthy();
  });

  it('Should trigger work', () => {
    const { container: clickContainer } = render(
      <ColorPicker trigger="click">
        <div className="trigger">Color Picker</div>
      </ColorPicker>,
    );
    // click
    expect(clickContainer.querySelector('.rc-color-picker-panel')).toBeFalsy();
    fireEvent.click(clickContainer.querySelector('.trigger'));
    expect(clickContainer.querySelector('.rc-color-picker-panel')).toBeTruthy();
    fireEvent.click(clickContainer.querySelector('.trigger'));
    expect(document.body.querySelector('.rc-color-picker-hidden')).toBeTruthy();

    const { container: hoverContainer } = render(
      <ColorPicker trigger="hover">
        <div className="trigger">Color Picker</div>
      </ColorPicker>,
    );

    // hover
    expect(hoverContainer.querySelector('.rc-color-picker-panel')).toBeFalsy();
    fireEvent.mouseEnter(hoverContainer.querySelector('.trigger'));
    expect(hoverContainer.querySelector('.rc-color-picker-panel')).toBeTruthy();
    fireEvent.mouseLeave(hoverContainer.querySelector('.trigger'));
    expect(document.body.querySelector('.rc-color-picker-hidden')).toBeTruthy();
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
        <ColorPicker open value={value} onChange={value => setValue(value)}>
          <>
            <div className="pick-color">{value.toHsbString()}</div>
            <div>{value.toHexString()}</div>
            <div>{value.toHex8String()}</div>
          </>
        </ColorPicker>
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
        <ColorPicker open onChange={value => setValue(value)}>
          <>
            <div className="pick-color">{value.toHsbString()}</div>
            <div>{value.toHexString()}</div>
            <div>{value.toHex8String()}</div>
          </>
        </ColorPicker>
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
        <ColorPicker open value={value} onChange={value => setValue(value)}>
          <div className="pick-color">{value.toHsbString()}</div>
        </ColorPicker>
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
        open
        panelRender={panel => <div className="custom-panel">{panel}</div>}
      >
        <div>Color Picker</div>
      </ColorPicker>,
    );
    expect(container.querySelector('.custom-panel')).toBeTruthy();
    expect(container).toMatchSnapshot();
  });

  it('Should prefixCls work', () => {
    const { container } = render(
      <ColorPicker open prefixCls="test-prefixCls">
        <div>Color Picker</div>
      </ColorPicker>,
    );
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
        <ColorPicker open value={value} onChange={value => setValue(value)}>
          <div className="pick-color">{value.toHsbString()}</div>
        </ColorPicker>
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
    const App = () => (
      <ColorPicker open value={'hsb(215, 91%, 100%)'}>
        <div>Color Picker</div>
      </ColorPicker>
    );
    const { container } = render(<App />);
    expect(
      container.querySelector('.rc-color-picker-handler').getAttribute('style'),
    ).toEqual('background-color: rgb(23, 120, 255);');
  });

  it('Should rgb string work', () => {
    const App = () => (
      <ColorPicker open value={'rgb(23, 120, 255)'}>
        <div>Color Picker</div>
      </ColorPicker>
    );
    const { container } = render(<App />);
    expect(
      container.querySelector('.rc-color-picker-handler').getAttribute('style'),
    ).toEqual('background-color: rgb(23, 120, 255);');
  });

  it('Should hex string work', () => {
    const App = () => (
      <ColorPicker open value={'#1778ff'}>
        <div>Color Picker</div>
      </ColorPicker>
    );
    const { container } = render(<App />);
    expect(
      container.querySelector('.rc-color-picker-handler').getAttribute('style'),
    ).toEqual('background-color: rgb(23, 120, 255);');
  });

  it('Should hsb obj work', () => {
    const App = () => (
      <ColorPicker open value={{ h: 215, s: 0.91, b: 1 }}>
        <div>Color Picker</div>
      </ColorPicker>
    );
    const { container } = render(<App />);
    expect(
      container.querySelector('.rc-color-picker-handler').getAttribute('style'),
    ).toEqual('background-color: rgb(23, 120, 255);');
  });

  it('Should rgb obj work', () => {
    const App = () => (
      <ColorPicker open value={{ r: 23, g: 120, b: 255 }}>
        <div>Color Picker</div>
      </ColorPicker>
    );
    const { container } = render(<App />);
    expect(
      container.querySelector('.rc-color-picker-handler').getAttribute('style'),
    ).toEqual('background-color: rgb(23, 120, 255);');
  });

  it('Should disabled work', () => {
    const App = () => (
      <ColorPicker disabled>
        <div className="trigger">Color Picker</div>
      </ColorPicker>
    );
    const { container } = render(<App />);

    // click
    fireEvent.click(container.querySelector('.trigger'));
    expect(container.querySelector('.rc-color-picker-panel')).toBeFalsy();
  });

  it('Should component open work', async () => {
    const handleOpenChange = vi.fn();
    const App = () => {
      const [open, setOpen] = useState(false);
      return (
        <ColorPicker open={open} onOpenChange={handleOpenChange}>
          <div className="trigger" onClick={() => setOpen(!open)}>
            Color Picker
          </div>
        </ColorPicker>
      );
    };
    const { container } = render(<App />);

    fireEvent.click(container.querySelector('.trigger'));
    await waitFakeTimer();
    expect(container.querySelector('.rc-color-picker-panel')).toBeTruthy();
    expect(handleOpenChange).toHaveBeenCalledWith(true, false);

    fireEvent.click(container.querySelector('.trigger'));
    await waitFakeTimer();
    expect(document.body.querySelector('.rc-color-picker-hidden')).toBeTruthy();
    expect(handleOpenChange).toHaveBeenLastCalledWith(false, true);
  });

  it('Should styles work', async () => {
    const App = () => (
      <ColorPicker
        styles={{
          popup: {
            width: 500,
          },
        }}
        open
      >
        <div className="trigger">Color Picker</div>
      </ColorPicker>
    );
    const { container } = render(<App />);
    expect(
      container.querySelector('.rc-color-picker').getAttribute('style'),
    ).toEqual(
      'left: -1000vw; top: -1000vh; box-sizing: border-box; width: 500px;',
    );
  });

  it('Should fix open misuse work', async () => {
    spyElementPrototypes(HTMLElement, {
      getBoundingClientRect: () => ({
        x: 0,
        y: 100,
        width: 100,
        height: 100,
      }),
    });
    const App = () => (
      <ColorPicker
        styles={{
          popup: {
            width: 500,
          },
        }}
      >
        <div className="trigger">Color Picker</div>
      </ColorPicker>
    );
    const { container } = render(<App />);
    fireEvent.click(container.querySelector('.trigger'));
    await waitFakeTimer();
    expect(container.querySelector('.rc-color-picker-panel')).toBeTruthy();
    doMouseMove(container, 0, 9999);
    doTouchMove(container, 0, 9999);
    expect(document.body.querySelector('.rc-color-picker-hidden')).toBeFalsy();

    fireEvent.click(container.querySelector('.trigger'));
    await waitFakeTimer();
    fireEvent.click(document);
    await waitFakeTimer();
    expect(document.body.querySelector('.rc-color-picker-hidden')).toBeTruthy();
  });
});
