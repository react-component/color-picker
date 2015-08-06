'use strict';

import 'react-colors-picker/assets/index.less';
import React from 'react';
import {Panel as ColorPickerPanel} from 'react-colors-picker';

function onChange(obj) {
  console.log(obj);
}

React.render(
  <div>
    <ColorPickerPanel defaultColor={'#468890'} onChange={onChange}/>
  </div>,
  document.getElementById('__react-content')
);
