import { Color } from '../src';

describe('ColorPicker.Color', () => {
  it('Not break of color', () => {
    const oriColor = new Color('#FF0000');
    const nextColor = new Color(oriColor);

    expect(oriColor.toHexString()).toEqual(nextColor.toHexString());
  });
});
