import { render } from '@testing-library/react';
import React from 'react';
import ColorPicker from '../src/ColorPicker';

describe('ColorPicker', () => {
  it('should work', () => {
    const { container } = render(<ColorPicker />);
    expect(container.querySelector('.rc-color')).toBeTruthy();
  });
});
