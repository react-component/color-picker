'use strict';

require('react-colors-picker/assets/index.css');
const React = require('react');
const ColorPicker = require('react-colors-picker');

function changeHandler (colors) {
  console.log(colors);
}

React.render(
  <div style={{margin:20, textAlign: 'center'}}>
    <h1>拾色器</h1>
    <ColorPicker defaultColor={'#36c'} onChange={changeHandler} />
    <br/>
    <ColorPicker defaultColor={'#fcd'} align="left"/>
  </div>,
  document.getElementById('__react-content')
);
