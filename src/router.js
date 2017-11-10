import React from 'react';
import Login from './components/wizard/Login';
import Basics from './components/wizard/Basics';
import ContactInfo from './components/wizard/ContactInfo';
import ThankYou from './components/wizard/ThankYou';
import Stats from './components/Stats';
import Career from './components/wizard/Career';
import LifeStyle from './components/wizard/LifeStyle';
import Pictures from './components/wizard/Pictures';



import { HashRouter , Route } from 'react-router-dom';

export default (
    <HashRouter>
      <div>  
        <Route component={ Login } path= '/' exact />
        <Route component={ Basics } path= '/page/1/' exact />
        <Route component={ Pictures }  path='/page/2' exact />
        <Route component={ LifeStyle }  path='/page/3' exact />
        <Route component={ Career }  path='/page/4' exact />
        <Route component={ ContactInfo }  path='/page/5' exact />
        <Route component={ ThankYou }  path='/finished' exact />
        <Route component={ Stats }  path='/stats' exact />
      </div>
  </HashRouter>
)