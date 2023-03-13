import { render } from '@testing-library/react';
import React from 'react';
import ColorPicker from '../src/index';

describe('ColorPicker', () => {
  it('should work', () => {
    const { container } = render(
      <ColorPicker>
        <div>Color Picker</div>
      </ColorPicker>,
    );
    expect(container.querySelector('.rc-color')).toBeTruthy();
  });
});
