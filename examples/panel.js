import 'rc-color-picker/assets/index.less';
import React from 'react';
import ReactDOM from 'react-dom';
import { Panel as ColorPickerPanel } from 'rc-color-picker';

function onChange(obj) {
  console.log(obj);
}

ReactDOM.render(
  <div style={{ backgroundColor: '#ddd', padding: 20 }}>
    <ColorPickerPanel enableAlpha={false} color={'#FF0000'} onChange={onChange} mode="HSL" />
    <hr />
    <ColorPickerPanel color={'#646464'} onChange={onChange} mode="HSB" />
  </div>,
  document.getElementById('__react-content')
);
