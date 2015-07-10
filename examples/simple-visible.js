'use strict';

require('react-colors-picker/assets/index.css');
const React = require('react');
const ColorPicker = require('react-colors-picker');

React.render(
  <div>
    <ColorPicker defaultColor={'#36c'} visiable={true} />
  </div>,
  document.getElementById('__react-content')
);
