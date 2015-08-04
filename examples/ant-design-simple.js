'use strict';

require('react-colors-picker/assets/bootstrap.less');
const React = require('react');
const ColorPicker = require('react-colors-picker');

function changeHandler (colors) {
  console.log(colors);
}

React.render(
  <div style={{margin:'20px 20px 20px', textAlign: 'center'}}>
    <ColorPicker
      animation="slide-up"
      defaultColor={'#36c'}
      onChange={changeHandler}
      trigger={<span className='react-colorpicker-trigger'></span>}
    />
  </div>,
  document.getElementById('__react-content')
);
