'use es6';

import React from 'react';
import ReactDOM from 'react-dom';

class Example extends React.Component {

  render() {
    return <span>HI</span>
  }
}

ReactDOM.render(<Example />, document.getElementById('example'));
