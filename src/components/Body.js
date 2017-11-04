import React, { Component } from 'react';
import Page1 from './content/Page1';
import Page2 from './content/Page2';
import {Route, Switch, BrowserRouter} from 'react-router-dom';

class Body extends Component {
  render() {
    return (
      <div>
        {/* <Switch>
            <Route component={ Page1 } path="/page/1" exact/>
            <Route component={ Page2 } path="/page/2" exact/>
        </Switch> */}
        <Page1 {...this.props} />
      </div>
    );
  }
}

export default Body;
