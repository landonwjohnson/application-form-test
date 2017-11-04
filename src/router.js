import React from "react";
import {Switch, Route } from "react-router-dom";

import Page1 from './components/content/Page1'
import Page2 from './components/content/Page2';

export default (
    <Switch>
        <Route component={ Page1 } path="/page/1" exact />
        <Route component={ Page2 } path="/page/2" exact/>
    </Switch>
)
  