'use strict';

import 'react-colors-picker/assets/index.less';
import React from 'react';
import ColorPicker from 'react-colors-picker';

function changeHandler (colors) {
  console.log(colors);
}

React.render(
  <div style={{margin:'20px 20px 20px', textAlign: 'center'}}>
    <ColorPicker
      defaultColor={'#36c'}
      onChange={changeHandler}
      trigger={<span className='react-colorpicker-trigger'></span>}
    />
    <hr/>
    <ColorPicker
      defaultColor={'#F10'}
      onChange={changeHandler}
      orient={['top', 'right']}
    />
    <p>^_^</p>
    <p>^_^</p>
    <p>^_^</p>
    <p>^_^</p>
    <p>^_^</p>
    <p>^_^</p>
    <p>^_^</p>
    <ColorPicker
      defaultColor={'#0F0'}
      onChange={changeHandler}
      orient={['bottom', 'right']}
    />
  </div>,
  document.getElementById('__react-content')
);
