'use strict';

require('react-colors-picker/assets/index.css');
const React = require('react');
const Picker = require('react-colors-picker').Picker;

function onChange(obj) {
  console.log(obj);
}

React.render(
  <div>
    <Picker defaultColor={'#468890'} onChange={onChange} />
  </div>,
  document.getElementById('__react-content')
);
