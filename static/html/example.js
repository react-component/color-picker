'use es6';

import React from 'react';
import ReactDOM from 'react-dom';
import ReactColorPicker from 'react-colors-picker/ColorPicker';

class Example extends React.Component {

  renderSimple() {
    return (
      <ReactColorPicker color="#006699" />
    );
  }

  renderFullFeatured() {
    return (
      <ReactColorPicker color="#006699" hexOnly={false} includeAlpha={true} />
    );
  }

  render() {
    return (
      <div>
        <h1>React Color Picker</h1>
        <h3>Simple</h3>
        {this.renderSimple()}
        <h3>Full Featured</h3>
        {this.renderFullFeatured()}
      </div>
    )
  }
}

ReactDOM.render(<Example />, document.getElementById('example'));
