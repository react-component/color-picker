import { render } from '@testing-library/react';
import React from 'react';
import ColorPicker from '../src';

describe('ColorPicker', () => {
  it('should work', () => {
    const { container } = render(<ColorPicker />);
    expect(container.querySelector('div').innerHTML).toBe('ColorPicker');
  });
});
