import React, { Component } from 'react';
import Page1 from './content/Page1';
import Page2 from './content/Page2';

class Body extends Component {
  render() {
    return (
      <div>
        <Page1 {...this.props} />
      </div>
    );
  }
}

export default Body;
