import React, { Component } from 'react';
import Page1 from './content/Page1';
import Page2 from './content/Page2';
import {Route, Switch, HashRouter} from 'react-router-dom';

class Body extends Component {
  render() {
    return (
      <div>
       
        
        <HashRouter>
        <Switch>
          <Route path="/" render={() => (
            <Page1 {...this.props} />
            )}  exact/>

          <Route path="/page/2" render={() => (
            <Page2 updateFormState={this.props.updateFormState} formValues={this.props.formValues} />
          )}/>
        </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default Body;
