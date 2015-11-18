'use strict';

import 'react-colors-picker/assets/index.less';
import React from 'react';
import ReactDOM from 'react-dom';
import ColorPicker from 'react-colors-picker';

function changeHandler (colors) {
  // console.log(colors);
}

ReactDOM.render(
  <div style={{margin:'20px 20px 20px', textAlign: 'center'}}>
    <h4>topLeft</h4>
    <ColorPicker
      color={'#36c'}
      alpha={30}
      onChange={changeHandler}
      placement="topLeft"
      trigger={<span className='react-colorpicker-trigger'></span>}
    />
    <h4>topRight</h4>
    <ColorPicker
      color={'#F10'}
      onChange={changeHandler}
      placement="topRight"
    />
    <p>-</p>
    <p>-</p>
    <p>-</p>
    <p>-</p>
    <p>-</p>
    <p>-</p>
    <p>-</p>
    <p>-</p>
    <p>-</p>
    <p>-</p>
    <p>-</p>
    <p>-</p>
    <p>-</p>
    <h4>bottomLeft</h4>
    <ColorPicker
      color={'#0ad'}
      alpha={50}
      onChange={changeHandler}
      placement="bottomLeft"
    />
    <h4>bottomRight</h4>
    <ColorPicker
      color={'#0F0'}
      onChange={changeHandler}
      placement="bottomRight"
    />
  </div>,
  document.getElementById('__react-content')
);
