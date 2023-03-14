import { createEvent, fireEvent, render } from '@testing-library/react';
import { spyElementPrototypes } from 'rc-util/lib/test/domHook';
import React, { useState } from 'react';
import ColorPicker from '../src';
import { defaultColor } from '../src/util';

function doMouseMove(container, start, end, element = 'rc-slider-handle') {
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

describe('ColorPicker', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });
  afterEach(() => {
    jest.useRealTimers();
  });
  it('Should component render correct', () => {
    const { container } = render(
      <ColorPicker open>
        <div>Color Picker</div>
      </ColorPicker>,
    );
    expect(container).toMatchSnapshot();
    expect(container.querySelector('.rc-color-panel')).toBeTruthy();
  });

  it('Should trigger work', () => {
    const { container: clickContainer } = render(
      <ColorPicker trigger="click">
        <div className="trigger">Color Picker</div>
      </ColorPicker>,
    );
    // click
    expect(clickContainer.querySelector('.rc-color-panel')).toBeFalsy();
    fireEvent.click(clickContainer.querySelector('.trigger'));
    expect(clickContainer.querySelector('.rc-color-panel')).toBeTruthy();
    fireEvent.click(clickContainer.querySelector('.trigger'));
    expect(
      document.body.querySelector('.rc-trigger-popup-hidden'),
    ).toBeTruthy();

    const { container: hoverContainer } = render(
      <ColorPicker trigger="hover">
        <div className="trigger">Color Picker</div>
      </ColorPicker>,
    );

    // hover
    expect(hoverContainer.querySelector('.rc-color-panel')).toBeFalsy();
    fireEvent.mouseEnter(hoverContainer.querySelector('.trigger'));
    expect(hoverContainer.querySelector('.rc-color-panel')).toBeTruthy();
    fireEvent.mouseLeave(hoverContainer.querySelector('.trigger'));
    expect(
      document.body.querySelector('.rc-trigger-popup-hidden'),
    ).toBeTruthy();
  });

  it('Should pick color work', () => {
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
          <div className="pick-color">{value.toHsvString()}</div>
        </ColorPicker>
      );
    };
    const { container } = render(<App />);
    expect(container.querySelector('.pick-color').innerHTML).toBe(
      'hsv(215, 91%, 100%)',
    );

    doMouseMove(container, 0, 9999, 'rc-color-handler');
    expect(container.querySelector('.pick-color').innerHTML).toBe(
      'hsv(215, 100%, 0%)',
    );

    doMouseMove(
      container.querySelector('.rc-color-slider-hue'),
      0,
      9999,
      'rc-color-handler',
    );
    expect(container.querySelector('.pick-color').innerHTML).toBe(
      'hsv(360, 0%, 0%)',
    );

    doMouseMove(
      container.querySelector('.rc-color-slider-alpha'),
      9999,
      0,
      'rc-color-handler',
    );
    expect(container.querySelector('.pick-color').innerHTML).toBe(
      'hsva(360, 0%, 0%, 0)',
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
});
